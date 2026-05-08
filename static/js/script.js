// ═══════════════════════════════════════════════════════
        // STATE
        // ═══════════════════════════════════════════════════════
        const TODAY = new Date().toISOString().slice(0, 10);
        let S = {
            tasks: [],
            achievements: [],
            habits: [],
            habitLogs: {},
            dailyLogs: {}
        };
        let curView = 'home';
        let blFilter = 'all';
        let achFilter = 'all';

        function save() { 
            fetch('/api/data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(S)
            }).catch(e => console.error('Save failed:', e));
        }

        async function load() {
            try {
                const res = await fetch('/api/data');
                if (res.ok) {
                    S = await res.json();
                }
            } catch (e) {
                console.error('Load failed:', e);
            }
            if (!S.tasks) S.tasks = [];
            if (!S.achievements) S.achievements = [];
            if (!S.habits) S.habits = [];
            if (!S.habitLogs) S.habitLogs = {};
            if (!S.dailyLogs) S.dailyLogs = {};
            if (!S.dailyLogs[TODAY]) {
                S.dailyLogs[TODAY] = {
                    word: '', intentions: '', lockedIn: false,
                    eodSubmitted: false, pomosCompleted: 0,
                    narrative: '', timeSlots: [], eod: null
                };
            }
            if (S.habits.length === 0) {
                S.habits = [
                    { id: uid(), name: 'Badminton', icon: '🏸' },
                    { id: uid(), name: 'DSA Practice', icon: '💻' },
                    { id: uid(), name: 'No mindless scrolling', icon: '📵' },
                    { id: uid(), name: 'Read / Study', icon: '📚' },
                ];
            }
        }

        function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 5); }
        function esc(s) { if (!s) return ''; return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

        // ═══════════════════════════════════════════════════════
        // NAVIGATION
        // ═══════════════════════════════════════════════════════
        const meta = {
            home: { title: 'Good Morning', sub: 'Set the tone for your day' },
            today: { title: "Today's Board", sub: 'Execute with full focus' },
            achievements: { title: 'Achievements', sub: 'Your documented wins — the proof of what you build' },
            worklog: { title: 'Work Log', sub: 'Day-by-day record of what you worked on' },
            backlog: { title: 'Backlog', sub: 'Your task queue — ready when you are' },
            future: { title: 'Future Inbox', sub: 'Capture anything, schedule nothing' },
            eod: { title: 'EOD & Work Log', sub: 'Document, reflect, and close the day right' },
            habits: { title: 'Habits', sub: 'Your daily non-negotiables' },
            history: { title: 'History & Stats', sub: 'The compound effect of consistent work' },
            manager: { title: 'Manager View', sub: 'Your negotiation arsenal — everything you delivered' }
        };

        function go(name) {
            document.querySelectorAll('.view').forEach(v => { v.style.display = 'none'; v.classList.remove('active'); });
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
            const v = document.getElementById('view-' + name);
            if (name === 'home') { v.style.display = 'flex'; v.classList.add('active'); }
            else { v.style.display = 'block'; v.classList.add('active'); }
            document.querySelector(`[data-view="${name}"]`).classList.add('active');
            document.getElementById('tb-title').textContent = meta[name].title;
            document.getElementById('tb-sub').textContent = meta[name].sub;
            curView = name;
            render(name);
        }

        function render(name) {
            if (name === 'home') renderHome();
            if (name === 'today') renderToday();
            if (name === 'achievements') renderAchievements();
            if (name === 'worklog') renderWorkLog();
            if (name === 'backlog') renderBacklog();
            if (name === 'future') renderFuture();
            if (name === 'eod') renderEOD();
            if (name === 'habits') renderHabitsView();
            if (name === 'history') renderHistory();
            if (name === 'manager') initManagerView();
            updateSidebar();
        }

        // ═══════════════════════════════════════════════════════
        // HOME / MORNING
        // ═══════════════════════════════════════════════════════
        function renderHome() {
            // Date
            const d = new Date();
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            document.getElementById('hero-date').textContent =
                `${days[d.getDay()].toUpperCase()}, ${d.getDate()} ${months[d.getMonth()].toUpperCase()} ${d.getFullYear()}`;
            document.getElementById('hero-streak').textContent = getStreak();

            // Last win
            const achs = [...S.achievements].sort((a, b) => b.date > a.date ? 1 : -1);
            const lw = document.getElementById('lw-content');
            if (achs.length) {
                const a = achs[0];
                const ago = daysAgo(a.date);
                lw.innerHTML = `
      <div class="lw-title">${esc(a.title)}</div>
      <div class="lw-meta">${ago} · ${a.category || ''} · ${a.impactLevel || ''} impact</div>`;
            }

            // Restore intention/word
            const log = S.dailyLogs[TODAY];
            document.getElementById('m-word').value = log.word || '';
            document.getElementById('m-intention').value = log.intentions || '';

            // Focus morning list
            renderFocusMorningList();

            // Backlog pull
            renderBacklogPull();

            // Habits
            renderHabitsMorning();
        }

        function renderFocusMorningList() {
            const el = document.getElementById('fm-list');
            const tasks = getTodayFocusTasks().filter(t => t.status !== 'done');
            el.innerHTML = tasks.map(t => `
    <div class="focus-morning-item">
      <div class="fm-dot"></div>
      <div class="fm-title">${esc(t.title)}</div>
      <span class="p-tag ${t.priority}">${t.priority}</span>
      <button class="fm-rm" onclick="removeFromToday('${t.id}')">✕</button>
    </div>`).join('') || '';
        }

        function renderBacklogPull() {
            const bl = S.tasks.filter(t => t.bucket === 'backlog' && t.status !== 'done').slice(0, 6);
            const wrap = document.getElementById('backlog-pull-section');
            if (!bl.length) { wrap.innerHTML = ''; return; }
            wrap.innerHTML = `
    <div class="sep"><div class="sep-line"></div><div class="sep-lbl">or pull from backlog</div><div class="sep-line"></div></div>
    <div class="backlog-pull-list">
      ${bl.map(t => `
        <div class="bp-item">
          <span class="p-tag ${t.priority}" style="flex-shrink:0;">${t.priority}</span>
          <span class="bp-title">${esc(t.title)}</span>
          <button class="bp-add" onclick="pullToToday('${t.id}')">+ Today</button>
        </div>`).join('')}
    </div>`;
        }

        function renderHabitsMorning() {
            const log = S.habitLogs[TODAY] || {};
            document.getElementById('hm-row').innerHTML = S.habits.map(h => `
    <div class="hm-chip ${log[h.id] ? 'done' : ''}" onclick="toggleHabit('${h.id}')">
      <span>${h.icon || '✦'}</span>
      <span>${esc(h.name)}</span>
      <span class="hm-check">${log[h.id] ? '✓' : '○'}</span>
    </div>`).join('');
        }

        function addFocusItem() {
            const input = document.getElementById('fm-input');
            const title = input.value.trim();
            if (!title) return;
            const active = getTodayFocusTasks().filter(t => t.status !== 'done');
            if (active.length >= 5) { toast('Max 5 focus items. Discipline!'); return; }
            S.tasks.push({ id: uid(), title, notes: '', priority: 'P2', cat: '', bucket: 'focus', status: 'pending', date: TODAY, createdAt: new Date().toISOString() });
            save();
            input.value = '';
            renderFocusMorningList();
            updateSidebar();
        }

        document.getElementById('fm-input').addEventListener('keydown', e => { if (e.key === 'Enter') addFocusItem(); });

        function lockInDay() {
            const log = S.dailyLogs[TODAY];
            log.word = document.getElementById('m-word').value.trim().toUpperCase();
            log.intentions = document.getElementById('m-intention').value.trim();
            log.lockedIn = true;
            save();
            toast('Day locked in. Time to execute. ⚡', 'amber');
            go('today');
        }

        // ═══════════════════════════════════════════════════════
        // TODAY BOARD
        // ═══════════════════════════════════════════════════════
        function renderToday() {
            const log = S.dailyLogs[TODAY];
            const all = getTodayFocusTasks();
            const active = all.filter(t => t.status !== 'done');
            const done = all.filter(t => t.status === 'done');
            const pct = all.length ? Math.round(done.length / all.length * 100) : 0;

            // Intention
            const il = document.getElementById('today-intention-line');
            if (log.word) il.textContent = `"${log.word}" — ${log.intentions || ''}`;

            // Active tasks
            const al = document.getElementById('today-active-list');
            if (!active.length) {
                al.innerHTML = `<div class="empty"><div class="empty-icon">${all.length ? '🎉' : '🎯'}</div><p>${all.length ? 'All done! Great execution.' : 'No tasks yet — set up from Morning or add directly.'}</p></div>`;
            } else {
                al.innerHTML = active.map(t => taskHtml(t,
                    `<button class="ic-btn t" title="→ Backlog" onclick="mvToBacklog('${t.id}')">📦</button>`
                )).join('');
            }

            // Done
            const ds = document.getElementById('today-done-section');
            const dc = document.getElementById('done-count');
            if (done.length) {
                ds.style.display = 'block'; dc.textContent = done.length;
                document.getElementById('today-done-list').innerHTML = done.map(t => taskHtml(t)).join('');
            } else { ds.style.display = 'none'; }

            // Stats
            document.getElementById('td-prog').style.width = pct + '%';
            document.getElementById('td-pct').textContent = pct + '%';
            document.getElementById('td-done').textContent = done.length;
            document.getElementById('td-left').textContent = active.length;
            document.getElementById('td-pomos').textContent = log.pomosCompleted || 0;

            // Habits
            const hl = document.getElementById('today-habits');
            const hlog = S.habitLogs[TODAY] || {};
            hl.innerHTML = S.habits.map(h => `
    <div class="hm-chip ${hlog[h.id] ? 'done' : ''}" style="margin-bottom:5px; border-radius:5px;" onclick="toggleHabitToday('${h.id}')">
      <span>${h.icon}</span><span class="fm-title">${esc(h.name)}</span>
      <span class="hm-check">${hlog[h.id] ? '✓' : '○'}</span>
    </div>`).join('');

            updatePomoCount();
        }

        function toggleHabitToday(id) { toggleHabit(id); renderToday(); }
        function toggleDoneList() {
            const list = document.getElementById('today-done-list');
            const arr = document.getElementById('done-arrow');
            const open = list.style.display === 'block';
            list.style.display = open ? 'none' : 'block';
            arr.textContent = open ? '▶' : '▼';
        }

        // ═══════════════════════════════════════════════════════
        // ACHIEVEMENTS
        // ═══════════════════════════════════════════════════════
        function renderAchievements() {
            const grid = document.getElementById('ach-grid');
            const search = (document.getElementById('ach-search')?.value || '').toLowerCase();

            let items = [...S.achievements];
            if (achFilter !== 'all') {
                const impactLevels = ['critical', 'high', 'medium', 'low'];
                if (impactLevels.includes(achFilter)) {
                    items = items.filter(a => a.impactLevel === achFilter);
                } else {
                    items = items.filter(a => a.category === achFilter);
                }
            }
            if (search) {
                items = items.filter(a =>
                    (a.title || '').toLowerCase().includes(search) ||
                    (a.description || '').toLowerCase().includes(search) ||
                    (a.tags || []).some(t => t.toLowerCase().includes(search))
                );
            }
            items.sort((a, b) => b.date > a.date ? 1 : -1);

            if (!items.length) {
                grid.innerHTML = `<div class="empty" style="grid-column:1/-1; padding:60px;"><div class="empty-icon">🏆</div><p>No achievements yet. Start logging your wins!</p></div>`;
                return;
            }
            grid.innerHTML = items.map(a => {
                const lvl = a.impactLevel || 'medium';
                const badges = { critical: 'badge-crit', high: 'badge-high', medium: 'badge-med', low: 'badge-low' };
                const lvlLabel = { critical: 'Critical Impact', high: 'High Impact', medium: 'Medium Impact', low: 'Low Impact' };
                const metricsHtml = (a.metrics || []).length ?
                    `<div class="ach-metrics">${a.metrics.map(m => `<span class="ach-metric">${esc(m.label)}: ${esc(m.value)}</span>`).join('')}</div>` : '';
                const tagsHtml = (a.tags || []).length ?
                    `<div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:6px;">${a.tags.map(t => `<span class="cat-tag">${esc(t)}</span>`).join('')}</div>` : '';
                return `
      <div class="ach-card ${lvl}">
        <div class="ach-actions">
          <button class="ic-btn" onclick="editAch('${a.id}')">✏️</button>
          <button class="ic-btn d" onclick="deleteAch('${a.id}')">🗑️</button>
        </div>
        <div class="ach-top">
          <div class="ach-cat-badge">${esc(a.category || '')}</div>
          <span class="ach-impact-badge ${badges[lvl]}">${lvlLabel[lvl]}</span>
        </div>
        <div class="ach-title">${esc(a.title)}</div>
        ${a.description ? `<div class="ach-desc">${esc(a.description)}</div>` : ''}
        ${a.impact ? `<div class="ach-impact">${esc(a.impact)}</div>` : ''}
        ${metricsHtml}
        ${tagsHtml}
        <div class="ach-date">${formatDate(a.date)} · ${daysAgo(a.date)}</div>
      </div>`;
            }).join('');
        }

        function filterAch(f, el) {
            achFilter = f;
            document.querySelectorAll('#ach-filter-bar .chip').forEach(c => c.classList.remove('active'));
            el.classList.add('active');
            renderAchievements();
        }

        // ═══════════════════════════════════════════════════════
        // WORK LOG
        // ═══════════════════════════════════════════════════════
        function renderWorkLog() {
            const el = document.getElementById('wlog-list');
            const entries = Object.entries(S.dailyLogs)
                .filter(([d, l]) => l.narrative && l.narrative.trim())
                .sort(([a], [b]) => b > a ? 1 : -1);

            if (!entries.length) {
                el.innerHTML = `<div class="empty"><div class="empty-icon">📝</div><p>No work logs yet. Document your day in EOD each evening.</p></div>`;
                return;
            }

            el.innerHTML = entries.map(([date, log]) => {
                const dt = new Date(date + 'T12:00:00');
                const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                const linkedAchs = S.achievements.filter(a => a.date === date);
                const dayTasks = S.tasks.filter(t => t.date === date && t.bucket === 'focus' && t.status === 'done');

                return `
      <div class="wlog-entry">
        <div class="wlog-datecol">
          <div class="wlog-day">${dt.getDate()}</div>
          <div class="wlog-month">${months[dt.getMonth()]} ${dt.getFullYear()}</div>
        </div>
        <div class="wlog-dot"></div>
        <div class="wlog-card">
          ${log.word ? `<div style="font-family:var(--font-h);font-size:16px;color:var(--amber);letter-spacing:3px;margin-bottom:6px;">${esc(log.word)}</div>` : ''}
          <div class="wlog-card-title">Work Log — ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dt.getDay()]}</div>
          <div class="wlog-narrative">${esc(log.narrative)}</div>
          ${dayTasks.length ? `
            <div style="margin-top:10px; display:flex; gap:5px; flex-wrap:wrap;">
              ${dayTasks.map(t => `<span class="cat-tag">✓ ${esc(t.title)}</span>`).join('')}
            </div>` : ''}
          ${linkedAchs.length ? `
            <div class="wlog-linked-achievements">
              ${linkedAchs.map(a => `<span class="wlog-ach-ref">🏆 ${esc(a.title)}</span>`).join('')}
            </div>` : ''}
          ${log.eod ? `
            <div style="margin-top:10px; display:flex; gap:12px; font-family:var(--font-m); font-size:11px; color:var(--muted);">
              <span>Focus: <b style="color:var(--amber)">${log.eod.focus}/10</b></span>
              <span>Energy: <b style="color:var(--teal)">${log.eod.energy}/5</b></span>
              <span>Discipline: <b style="color:var(--purple)">${log.eod.discipline}/10</b></span>
            </div>` : ''}
        </div>
      </div>`;
            }).join('');
        }

        // ═══════════════════════════════════════════════════════
        // EOD
        // ═══════════════════════════════════════════════════════
        function renderEOD() {
            const log = S.dailyLogs[TODAY];
            if (log.eodSubmitted && !log._editing) {
                document.getElementById('eod-done-banner').style.display = 'block';
                document.getElementById('eod-form').style.display = 'none';
                return;
            }
            document.getElementById('eod-done-banner').style.display = 'none';
            document.getElementById('eod-form').style.display = 'block';

            // Restore
            document.getElementById('eod-narrative').value = log.narrative || '';
            if (log.eod) {
                const e = log.eod;
                ['focus', 'energy', 'disc'].forEach(k => {
                    const el = document.getElementById('eod-' + k);
                    const vl = document.getElementById('eod-' + k[0] + 'v');
                    if (e[k] && el) { el.value = e[k]; if (vl) vl.textContent = e[k]; }
                });
                if (e.challenges) document.getElementById('eod-challenges').value = e.challenges;
                if (e.learned) document.getElementById('eod-learned').value = e.learned;
                if (e.improve) document.getElementById('eod-improve').value = e.improve;
            }

            // Tasks review
            const tr = document.getElementById('eod-tasks-review');
            const tasks = getTodayFocusTasks();
            tr.innerHTML = tasks.length ? tasks.map(t => `
    <div class="task-item ${t.status === 'done' ? 'done' : ''}">
      ${taskCheckEl(t)}
      <div class="task-body"><div class="task-title">${esc(t.title)}</div></div>
      <button class="btn btn-ghost btn-xs" onclick="mvToBacklog('${t.id}')">→ Backlog</button>
    </div>`).join('') : `<p style="color:var(--muted);font-size:13px;">No tasks today.</p>`;
        }

        function submitEOD() {
            const log = S.dailyLogs[TODAY];
            log.narrative = document.getElementById('eod-narrative').value;
            log.eod = {
                focus: document.getElementById('eod-focus').value,
                energy: document.getElementById('eod-energy').value,
                discipline: document.getElementById('eod-disc').value,
                challenges: document.getElementById('eod-challenges').value,
                learned: document.getElementById('eod-learned').value,
                improve: document.getElementById('eod-improve').value
            };
            log.eodSubmitted = true;
            log._editing = false;

            const incomplete = getTodayFocusTasks().filter(t => t.status !== 'done');
            if (incomplete.length) {
                if (confirm(`${incomplete.length} tasks are incomplete. Move them to Backlog?`)) {
                    incomplete.forEach(t => { t.bucket = 'backlog'; t.date = null; });
                }
            }
            save();
            toast('Day documented. Great work. 🌙', 'green');
            renderEOD();
            updateSidebar();
        }

        function reopenEOD() {
            S.dailyLogs[TODAY]._editing = true;
            renderEOD();
        }

        function quickLogAch() {
            const val = document.getElementById('eod-quick-ach').value.trim();
            if (!val) return;
            S.achievements.push({
                id: uid(), title: val, description: '', impact: '', impactLevel: 'medium',
                category: 'work', tags: [], date: TODAY, metrics: []
            });
            save();
            document.getElementById('eod-quick-ach').value = '';
            toast('Achievement logged! 🏆 Fill in details in Achievements tab.', 'amber');
            updateSidebar();
        }

        // ═══════════════════════════════════════════════════════
        // BACKLOG & FUTURE
        // ═══════════════════════════════════════════════════════
        function renderBacklog() {
            const el = document.getElementById('bl-list');
            let items = S.tasks.filter(t => t.bucket === 'backlog' && t.status !== 'done');
            if (blFilter !== 'all') items = items.filter(t => t.priority === blFilter);
            el.innerHTML = items.length ? items.map(t => taskHtml(t,
                `<button class="ic-btn g" title="Pull to Today" onclick="pullToToday('${t.id}')">📌</button>
     <button class="ic-btn t" title="Move to Future" onclick="mvToFuture('${t.id}')">🔮</button>`
            )).join('') : `<div class="empty"><div class="empty-icon">📦</div><p>Backlog is clear. Excellent.</p></div>`;
        }

        function filterBL(f, el) {
            blFilter = f;
            document.querySelectorAll('#view-backlog .chip').forEach(c => c.classList.remove('active'));
            el.classList.add('active');
            renderBacklog();
        }

        function renderFuture() {
            const el = document.getElementById('ft-list');
            const items = S.tasks.filter(t => t.bucket === 'future');
            el.innerHTML = items.length ? items.map(t => taskHtml(t,
                `<button class="ic-btn g" onclick="mvToBacklog2('${t.id}')">→ Backlog</button>`
            )).join('') : `<div class="empty"><div class="empty-icon">🔮</div><p>Future inbox empty. Capture anything here — no pressure.</p></div>`;
        }

        // ═══════════════════════════════════════════════════════
        // HABITS
        // ═══════════════════════════════════════════════════════
        function renderHabitsView() {
            const log = S.habitLogs[TODAY] || {};
            document.getElementById('habits-full-list').innerHTML = S.habits.map(h => `
    <div class="hm-chip ${log[h.id] ? 'done' : ''}" style="border-radius:5px; margin-bottom:6px;" onclick="toggleHabit('${h.id}', true)">
      <span style="font-size:18px;">${h.icon || '✦'}</span>
      <span class="fm-title">${esc(h.name)}</span>
      <span style="margin-left:auto; font-family:var(--font-m); font-size:11px; color:var(--amber);">${getHabitStreak(h.id)}d</span>
      <span class="hm-check">${log[h.id] ? '✓' : '○'}</span>
      <button class="ic-btn d" onclick="event.stopPropagation(); deleteHabit('${h.id}')">🗑️</button>
    </div>`).join('') || `<div class="empty"><div class="empty-icon">🔥</div><p>No habits yet.</p></div>`;
            renderHabitHeatmap();
        }

        function toggleHabit(id, rerender) {
            if (!S.habitLogs[TODAY]) S.habitLogs[TODAY] = {};
            S.habitLogs[TODAY][id] = !S.habitLogs[TODAY][id];
            save();
            if (rerender) renderHabitsView();
            renderHabitsMorning();
            if (curView === 'today') renderToday();
        }

        function getHabitStreak(hid) {
            let streak = 0, d = new Date();
            while (streak < 365) {
                const k = d.toISOString().slice(0, 10);
                if ((S.habitLogs[k] || {})[hid]) { streak++; d.setDate(d.getDate() - 1); } else break;
            }
            return streak;
        }

        function renderHabitHeatmap() {
            const el = document.getElementById('habit-heatmap');
            const days = [];
            for (let i = 13; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); days.push(d.toISOString().slice(0, 10)); }
            const dayLbls = days.map(d => { const dt = new Date(d + 'T12:00:00'); return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][dt.getDay()]; });
            let html = `<div style="overflow-x:auto;"><table style="width:100%;border-collapse:collapse;">
    <tr><td style="width:130px;"></td>
    ${dayLbls.map((l, i) => `<td style="text-align:center;font-family:var(--font-m);font-size:9px;color:var(--muted);padding-bottom:6px;">${days[i] === TODAY ? `<b style="color:var(--amber)">${l}</b>` : l}</td>`).join('')}
    </tr>`;
            S.habits.forEach(h => {
                html += `<tr><td style="font-size:12px;padding:3px 0;color:var(--dim);">${h.icon} ${esc(h.name)}</td>
    ${days.map(d => `<td style="text-align:center;padding:2px;">
      <div style="width:18px;height:18px;border-radius:3px;background:${(S.habitLogs[d] || {})[h.id] ? 'var(--teal)' : 'var(--border)'};margin:0 auto;border:${d === TODAY ? '1px solid var(--amber)' : 'none'};"></div>
    </td>`).join('')}</tr>`;
            });
            html += '</table></div>';
            el.innerHTML = html;
        }

        // ═══════════════════════════════════════════════════════
        // HISTORY
        // ═══════════════════════════════════════════════════════
        function renderHistory() {
            // Stats
            const allDone = S.tasks.filter(t => t.status === 'done').length;
            const scores = Object.values(S.dailyLogs).filter(l => l.eod?.focus).map(l => parseInt(l.eod.focus));
            const avgFocus = scores.length ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1) : '—';
            const totalAchs = S.achievements.length;

            document.getElementById('stat-trio').innerHTML = `
    <div class="stat-box"><div class="stat-big">${allDone}</div><div class="stat-tag">Tasks Completed</div></div>
    <div class="stat-box"><div class="stat-big">${avgFocus}</div><div class="stat-tag">Avg Focus Score</div></div>
    <div class="stat-box"><div class="stat-big">${totalAchs}</div><div class="stat-tag">Achievements Logged</div></div>`;

            const dates = Object.keys(S.dailyLogs).sort().reverse();
            const el = document.getElementById('history-list');
            el.innerHTML = dates.length ? dates.map(d => {
                const log = S.dailyLogs[d];
                const dt = new Date(d + 'T12:00:00');
                const tasks = S.tasks.filter(t => t.date === d && t.bucket === 'focus');
                const done = tasks.filter(t => t.status === 'done');
                const achs = S.achievements.filter(a => a.date === d);
                const isToday = d === TODAY;
                return `
      <div class="hday">
        <div class="hday-head" onclick="toggleHDay('${d}')">
          <div style="font-family:var(--font-m);font-size:10px;color:var(--muted);">${['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'][dt.getDay()]}</div>
          <div class="hday-date">${d}${isToday ? ' <span style="color:var(--amber);font-size:10px;">● TODAY</span>' : ''}</div>
          <div class="hday-meta">
            <span style="font-family:var(--font-m);font-size:10px;color:var(--muted);">${done.length}/${tasks.length} tasks</span>
            ${achs.length ? `<span style="font-family:var(--font-m);font-size:10px;color:var(--amber);">🏆 ${achs.length}</span>` : ''}
            ${log.eod?.focus ? `<span style="font-family:var(--font-m);font-size:11px;color:${log.eod.focus >= 8 ? 'var(--green)' : log.eod.focus >= 5 ? 'var(--amber)' : 'var(--red)'};">F:${log.eod.focus}/10</span>` : ''}
            ${log.eodSubmitted ? '<span style="color:var(--green);font-size:11px;">✓</span>' : ''}
          </div>
          <span style="color:var(--muted);font-size:11px;">▼</span>
        </div>
        <div class="hday-body" id="hdb-${d}">
          ${log.intentions ? `<div style="font-family:var(--font-m);font-size:11px;color:var(--amber);margin-bottom:8px;">"${esc(log.intentions)}"</div>` : ''}
          ${tasks.map(t => `<div style="display:flex;align-items:center;gap:8px;padding:4px 0;border-bottom:1px solid var(--border);font-size:12px;">
            <span>${t.status === 'done' ? '✅' : '⬜'}</span>
            <span style="${t.status === 'done' ? 'text-decoration:line-through;color:var(--muted)' : ''}">${esc(t.title)}</span>
          </div>`).join('')}
          ${achs.length ? `<div style="margin-top:10px;">${achs.map(a => `<div style="display:flex;align-items:center;gap:8px;padding:4px 0;font-size:12px;"><span>🏆</span><span style="color:var(--amber);">${esc(a.title)}</span></div>`).join('')}</div>` : ''}
          ${log.narrative ? `<div style="margin-top:10px;font-size:12px;color:var(--dim);line-height:1.6;border-left:2px solid var(--border2);padding-left:10px;">${esc(log.narrative)}</div>` : ''}
        </div>
      </div>`;
            }).join('') : `<div class="empty"><div class="empty-icon">📊</div><p>No history yet. Start your first day!</p></div>`;
        }

        function toggleHDay(d) {
            document.getElementById('hdb-' + d).classList.toggle('open');
        }

        // ═══════════════════════════════════════════════════════
        // MANAGER VIEW
        // ═══════════════════════════════════════════════════════
        function initManagerView() {
            const el = document.getElementById('mv-from');
            if (!el.value) {
                const from = new Date();
                from.setDate(from.getDate() - 30);
                el.value = from.toISOString().slice(0, 10);
            }
            const tel = document.getElementById('mv-to');
            if (!tel.value) tel.value = TODAY;
        }

        function generateManagerView() {
            const from = document.getElementById('mv-from').value;
            const to = document.getElementById('mv-to').value;
            const cat = document.getElementById('mv-cat').value;
            const out = document.getElementById('mv-output');

            let achs = S.achievements.filter(a => a.date >= from && a.date <= to);
            if (cat !== 'all') achs = achs.filter(a => a.category === cat);
            achs.sort((a, b) => {
                const order = { critical: 0, high: 1, medium: 2, low: 3 };
                return order[a.impactLevel || 'low'] - order[b.impactLevel || 'low'];
            });

            if (!achs.length) { out.innerHTML = `<div class="empty"><div class="empty-icon">🔍</div><p>No achievements in this range. Keep building!</p></div>`; return; }

            const groups = { critical: [], high: [], medium: [], low: [] };
            achs.forEach(a => groups[a.impactLevel || 'medium'].push(a));

            let html = '';
            const groupNames = { critical: '🔴 Critical Wins', high: '🟡 High-Impact Contributions', medium: '🟢 Solid Progress', low: 'Other Contributions' };

            for (const [lvl, items] of Object.entries(groups)) {
                if (!items.length) continue;
                html += `<div class="mv-section-title">${groupNames[lvl]}</div>`;
                items.forEach(a => {
                    const metrics = (a.metrics || []).map(m => `${m.label}: ${m.value}`).join(' · ');
                    html += `<div class="mv-bullet">
        <div class="mv-bullet-dot">▸</div>
        <div>
          <div class="mv-bullet-body"><b>${esc(a.title)}</b></div>
          ${a.description ? `<div class="mv-bullet-impact" style="margin-top:2px;">${esc(a.description)}</div>` : ''}
          ${a.impact ? `<div style="color:var(--teal);font-size:12px;margin-top:3px;">Impact: ${esc(a.impact)}</div>` : ''}
          ${metrics ? `<div style="font-family:var(--font-m);font-size:10px;color:var(--amber);margin-top:3px;">${metrics}</div>` : ''}
          <div style="font-family:var(--font-m);font-size:10px;color:var(--muted);margin-top:3px;">${formatDate(a.date)} · ${a.category}</div>
        </div>
      </div>`;
                });
            }

            // Summary numbers
            const daysWorked = new Set(achs.map(a => a.date)).size;
            html = `<div style="display:flex;gap:16px;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid var(--border);">
    <div class="stat-box" style="padding:12px 16px;"><div class="stat-big" style="font-size:28px;">${achs.length}</div><div class="stat-tag">Total Achievements</div></div>
    <div class="stat-box" style="padding:12px 16px;"><div class="stat-big" style="font-size:28px;">${groups.critical.length + groups.high.length}</div><div class="stat-tag">High+ Impact</div></div>
    <div class="stat-box" style="padding:12px 16px;"><div class="stat-big" style="font-size:28px;">${daysWorked}</div><div class="stat-tag">Active Days</div></div>
  </div>` + html;

            out.innerHTML = `<div id="mv-content">${html}</div>`;
        }

        function copyManagerReport() {
            const from = document.getElementById('mv-from').value;
            const to = document.getElementById('mv-to').value;
            const cat = document.getElementById('mv-cat').value;
            let achs = S.achievements.filter(a => a.date >= from && a.date <= to);
            if (cat !== 'all') achs = achs.filter(a => a.category === cat);
            achs.sort((a, b) => { const o = { critical: 0, high: 1, medium: 2, low: 3 }; return o[a.impactLevel || 'low'] - o[b.impactLevel || 'low']; });

            if (!achs.length) { toast('No achievements to copy. Generate report first.'); return; }

            let text = `PROFESSIONAL ACHIEVEMENTS (${from} to ${to})\n${'='.repeat(50)}\n\n`;
            const groups = { critical: [], high: [], medium: [], low: [] };
            achs.forEach(a => groups[a.impactLevel || 'medium'].push(a));
            const names = { critical: 'CRITICAL WINS', high: 'HIGH-IMPACT CONTRIBUTIONS', medium: 'SOLID CONTRIBUTIONS', low: 'OTHER CONTRIBUTIONS' };
            for (const [lvl, items] of Object.entries(groups)) {
                if (!items.length) continue;
                text += `${names[lvl]}\n${'-'.repeat(30)}\n`;
                items.forEach(a => {
                    text += `• ${a.title}\n`;
                    if (a.description) text += `  → ${a.description}\n`;
                    if (a.impact) text += `  Impact: ${a.impact}\n`;
                    if ((a.metrics || []).length) text += `  Metrics: ${a.metrics.map(m => `${m.label}: ${m.value}`).join(', ')}\n`;
                    text += `  (${a.category} · ${formatDate(a.date)})\n\n`;
                });
            }
            navigator.clipboard.writeText(text).then(() => toast('Copied to clipboard! 📋', 'amber')).catch(() => toast('Copy failed — try selecting manually'));
        }

        // ═══════════════════════════════════════════════════════
        // TASK CRUD
        // ═══════════════════════════════════════════════════════
        function taskHtml(t, extraBtns = '') {
            const done = t.status === 'done';
            return `<div class="task-item ${done ? 'done' : ''}" id="tk-${t.id}">
    <div class="task-check ${done ? 'checked' : ''}" onclick="toggleTask('${t.id}')">${done ? '✓' : ''}</div>
    <div class="task-body">
      <div class="task-title">${esc(t.title)}</div>
      ${t.notes ? `<div class="task-notes">${esc(t.notes)}</div>` : ''}
      <div class="task-meta"><span class="p-tag ${t.priority}">${t.priority}</span>${t.cat ? `<span class="cat-tag">${esc(t.cat)}</span>` : ''}</div>
    </div>
    <div class="task-acts">
      ${extraBtns}
      <button class="ic-btn" onclick="editTask('${t.id}')">✏️</button>
      <button class="ic-btn d" onclick="deleteTask('${t.id}')">🗑️</button>
    </div>
  </div>`;
        }

        function taskCheckEl(t) {
            const done = t.status === 'done';
            return `<div class="task-check ${done ? 'checked' : ''}" onclick="toggleTask('${t.id}')">${done ? '✓' : ''}</div>`;
        }

        function openTaskModal(bucket, editId) {
            const titles = { focus: 'Add Focus Task', backlog: 'Add to Backlog', future: 'Capture Future Idea' };
            document.getElementById('task-modal-title').textContent = editId ? 'Edit Task' : titles[bucket] || 'Add Task';
            document.getElementById('tm-bucket').value = bucket;
            document.getElementById('tm-edit-id').value = editId || '';
            if (editId) {
                const t = S.tasks.find(t => t.id === editId);
                if (t) { document.getElementById('tm-title').value = t.title; document.getElementById('tm-notes').value = t.notes || ''; document.getElementById('tm-priority').value = t.priority || 'P2'; document.getElementById('tm-cat').value = t.cat || ''; }
            } else {
                document.getElementById('tm-title').value = '';
                document.getElementById('tm-notes').value = '';
                document.getElementById('tm-priority').value = 'P2';
                document.getElementById('tm-cat').value = '';
            }
            openOverlay('task-modal');
            setTimeout(() => document.getElementById('tm-title').focus(), 80);
        }

        function saveTask() {
            const title = document.getElementById('tm-title').value.trim();
            if (!title) { toast('Enter a task title.'); return; }
            const bucket = document.getElementById('tm-bucket').value;
            const editId = document.getElementById('tm-edit-id').value;
            if (editId) {
                const t = S.tasks.find(t => t.id === editId);
                if (t) { t.title = title; t.notes = document.getElementById('tm-notes').value.trim(); t.priority = document.getElementById('tm-priority').value; t.cat = document.getElementById('tm-cat').value.trim(); }
            } else {
                if (bucket === 'focus' && getTodayFocusTasks().filter(t => t.status !== 'done').length >= 5) { toast('Max 5 focus tasks. Stay disciplined.'); return; }
                S.tasks.push({ id: uid(), title, notes: document.getElementById('tm-notes').value.trim(), priority: document.getElementById('tm-priority').value, cat: document.getElementById('tm-cat').value.trim(), bucket, status: 'pending', date: bucket === 'focus' ? TODAY : null, createdAt: new Date().toISOString() });
            }
            save(); closeOverlay('task-modal'); render(curView); updateSidebar(); toast('Saved ✓', 'green');
        }

        function editTask(id) { const t = S.tasks.find(t => t.id === id); if (t) openTaskModal(t.bucket, id); }

        function deleteTask(id) {
            if (!confirm('Delete this task?')) return;
            S.tasks = S.tasks.filter(t => t.id !== id); save(); render(curView); updateSidebar();
        }

        function toggleTask(id) {
            const t = S.tasks.find(t => t.id === id); if (!t) return;
            t.status = t.status === 'done' ? 'pending' : 'done';
            if (t.status === 'done') { t.completedAt = new Date().toISOString(); }
            save(); render(curView); updateSidebar();
            if (t.status === 'done') toast('Done! 🎉', 'green');
        }

        function getTodayFocusTasks() { return S.tasks.filter(t => t.bucket === 'focus' && t.date === TODAY); }
        function pullToToday(id) {
            if (getTodayFocusTasks().filter(t => t.status !== 'done').length >= 5) { toast('Max 5 focus tasks!'); return; }
            const t = S.tasks.find(t => t.id === id); if (!t) return; t.bucket = 'focus'; t.date = TODAY; save(); render(curView); updateSidebar(); toast('Added to today! 📌', 'amber');
        }
        function removeFromToday(id) { const t = S.tasks.find(t => t.id === id); if (!t) return; t.bucket = 'backlog'; t.date = null; save(); renderHome(); updateSidebar(); }
        function mvToBacklog(id) { const t = S.tasks.find(t => t.id === id); if (!t) return; t.bucket = 'backlog'; t.date = null; save(); render(curView); updateSidebar(); toast('Moved to backlog 📦'); }
        function mvToBacklog2(id) { const t = S.tasks.find(t => t.id === id); if (!t) return; t.bucket = 'backlog'; save(); render(curView); updateSidebar(); }
        function mvToFuture(id) { const t = S.tasks.find(t => t.id === id); if (!t) return; t.bucket = 'future'; t.date = null; save(); render(curView); updateSidebar(); }

        // ═══════════════════════════════════════════════════════
        // ACHIEVEMENTS CRUD
        // ═══════════════════════════════════════════════════════
        function openAchModal(editId) {
            document.getElementById('ach-modal-title').textContent = editId ? 'Edit Achievement' : 'Log Achievement';
            document.getElementById('ach-edit-id').value = editId || '';
            document.getElementById('ach-date').value = TODAY;
            if (editId) {
                const a = S.achievements.find(a => a.id === editId);
                if (a) {
                    document.getElementById('ach-title').value = a.title || '';
                    document.getElementById('ach-desc').value = a.description || '';
                    document.getElementById('ach-impact').value = a.impact || '';
                    document.getElementById('ach-level').value = a.impactLevel || 'high';
                    document.getElementById('ach-cat').value = a.category || 'work';
                    document.getElementById('ach-tags').value = (a.tags || []).join(', ');
                    document.getElementById('ach-date').value = a.date || TODAY;
                    renderMetricFields(a.metrics || []);
                }
            } else {
                ['ach-title', 'ach-desc', 'ach-impact', 'ach-tags'].forEach(id => document.getElementById(id).value = '');
                document.getElementById('ach-level').value = 'high';
                document.getElementById('ach-cat').value = 'work';
                renderMetricFields([]);
            }
            openOverlay('ach-modal');
            setTimeout(() => document.getElementById('ach-title').focus(), 80);
        }

        function renderMetricFields(metrics) {
            const wrap = document.getElementById('ach-metrics-wrap');
            wrap.innerHTML = metrics.map((m, i) => `
    <div style="display:flex;gap:6px;margin-bottom:6px;">
      <input type="text" value="${esc(m.label)}" placeholder="Metric label (e.g. PRs merged)" style="flex:2;" oninput="updateMetric(${i},'label',this.value)">
      <input type="text" value="${esc(m.value)}" placeholder="Value (e.g. 12)" style="flex:1;" oninput="updateMetric(${i},'value',this.value)">
      <button class="ic-btn d" onclick="removeMetric(${i})">✕</button>
    </div>`).join('');
            wrap._metrics = [...metrics];
        }

        let _editMetrics = [];
        function addMetricField() {
            const wrap = document.getElementById('ach-metrics-wrap');
            _editMetrics = getMetrics();
            _editMetrics.push({ label: '', value: '' });
            renderMetricFields(_editMetrics);
        }
        function getMetrics() {
            const wrap = document.getElementById('ach-metrics-wrap');
            return wrap._metrics || [];
        }
        function updateMetric(i, k, v) { const m = getMetrics(); if (m[i]) m[i][k] = v; }
        function removeMetric(i) { const m = getMetrics(); m.splice(i, 1); renderMetricFields(m); }

        function saveAchievement() {
            const title = document.getElementById('ach-title').value.trim();
            if (!title) { toast('Enter an achievement title.'); return; }
            const editId = document.getElementById('ach-edit-id').value;
            const obj = {
                title,
                description: document.getElementById('ach-desc').value.trim(),
                impact: document.getElementById('ach-impact').value.trim(),
                impactLevel: document.getElementById('ach-level').value,
                category: document.getElementById('ach-cat').value,
                tags: document.getElementById('ach-tags').value.split(',').map(t => t.trim()).filter(Boolean),
                date: document.getElementById('ach-date').value || TODAY,
                metrics: getMetrics().filter(m => m.label)
            };
            if (editId) {
                const i = S.achievements.findIndex(a => a.id === editId);
                if (i > -1) S.achievements[i] = { ...S.achievements[i], ...obj };
            } else {
                S.achievements.push({ id: uid(), ...obj });
            }
            save(); closeOverlay('ach-modal');
            if (curView === 'achievements') renderAchievements();
            updateSidebar();
            toast('Achievement logged! 🏆', 'amber');
        }

        function editAch(id) { openAchModal(id); }
        function deleteAch(id) {
            if (!confirm('Delete this achievement?')) return;
            S.achievements = S.achievements.filter(a => a.id !== id);
            save(); renderAchievements(); updateSidebar();
        }

        // ═══════════════════════════════════════════════════════
        // HABITS CRUD
        // ═══════════════════════════════════════════════════════
        function openHabitModal() { document.getElementById('hm-name').value = ''; document.getElementById('hm-icon').value = ''; openOverlay('habit-modal'); setTimeout(() => document.getElementById('hm-name').focus(), 80); }
        function saveHabit() {
            const name = document.getElementById('hm-name').value.trim();
            if (!name) { toast('Enter habit name.'); return; }
            S.habits.push({ id: uid(), name, icon: document.getElementById('hm-icon').value.trim() || '✦' });
            save(); closeOverlay('habit-modal'); renderHabitsView();
        }
        function deleteHabit(id) { if (!confirm('Remove habit?')) return; S.habits = S.habits.filter(h => h.id !== id); save(); renderHabitsView(); }

        // ═══════════════════════════════════════════════════════
        // POMODORO
        // ═══════════════════════════════════════════════════════
        let _pt = null, _psec = 25 * 60, _prun = false, _pphase = 'focus';
        const PDASH = 301.6;

        function fmtTime(s) { return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`; }

        function updatePomoDisplay() {
            const el = document.getElementById('ptimer'); const lbl = document.getElementById('plbl'); const ring = document.getElementById('pring');
            if (!el) return;
            el.textContent = fmtTime(_psec);
            if (lbl) lbl.textContent = _pphase === 'focus' ? 'FOCUS' : 'BREAK';
            const total = _pphase === 'focus' ? 25 * 60 : 5 * 60;
            const offset = PDASH * (1 - _psec / total);
            if (ring) { ring.style.strokeDashoffset = offset; ring.style.stroke = _pphase === 'focus' ? 'var(--amber)' : 'var(--teal)'; }
        }

        function updatePomoCount() {
            const el = document.getElementById('pomo-dots'); if (!el) return;
            const done = S.dailyLogs[TODAY].pomosCompleted || 0;
            el.innerHTML = Array.from({ length: Math.max(4, done) }, (_, i) => `<div class="pomo-dot ${i < done ? 'done' : ''}"></div>`).join('');
        }

        function togglePomo() {
            if (_prun) { clearInterval(_pt); _prun = false; document.getElementById('pbtn').textContent = '▶ Resume'; }
            else { _prun = true; document.getElementById('pbtn').textContent = '⏸ Pause'; _pt = setInterval(() => { _psec--; if (_psec <= 0) { clearInterval(_pt); _prun = false; onPomoEnd(); } updatePomoDisplay(); }, 1000); }
        }
        function resetPomo() { clearInterval(_pt); _prun = false; _pphase = 'focus'; _psec = 25 * 60; const b = document.getElementById('pbtn'); if (b) b.textContent = '▶ Start'; updatePomoDisplay(); }
        function skipPomo() { clearInterval(_pt); _prun = false; _pphase = _pphase === 'focus' ? 'break' : 'focus'; _psec = _pphase === 'focus' ? 25 * 60 : 5 * 60; const b = document.getElementById('pbtn'); if (b) b.textContent = '▶ Start'; updatePomoDisplay(); }
        function onPomoEnd() {
            if (_pphase === 'focus') {
                S.dailyLogs[TODAY].pomosCompleted = (S.dailyLogs[TODAY].pomosCompleted || 0) + 1; save();
                toast('🍅 Pomodoro complete! Take a break.', 'amber');
                _pphase = 'break'; _psec = 5 * 60;
            } else { toast('Break over. Lock back in. ⚡', 'green'); _pphase = 'focus'; _psec = 25 * 60; }
            const b = document.getElementById('pbtn'); if (b) b.textContent = '▶ Start';
            updatePomoDisplay(); updatePomoCount(); renderToday();
        }

        // ═══════════════════════════════════════════════════════
        // SIDEBAR & UTILS
        // ═══════════════════════════════════════════════════════
        function updateSidebar() {
            const today = getTodayFocusTasks();
            const done = today.filter(t => t.status === 'done');
            document.getElementById('nb-today').textContent = today.filter(t => t.status !== 'done').length;
            document.getElementById('nb-ach').textContent = S.achievements.length;
            document.getElementById('nb-backlog').textContent = S.tasks.filter(t => t.bucket === 'backlog' && t.status !== 'done').length;
            document.getElementById('nb-future').textContent = S.tasks.filter(t => t.bucket === 'future').length;
            document.getElementById('sb-streak').textContent = getStreak() + ' days';
            document.getElementById('sb-achs').textContent = S.achievements.length;
            document.getElementById('sb-today').textContent = `${done.length}/${today.length}`;
        }

        function getStreak() {
            let s = 0, d = new Date();
            while (s < 365) { const k = d.toISOString().slice(0, 10); if (S.dailyLogs[k] && S.dailyLogs[k].lockedIn) { s++; d.setDate(d.getDate() - 1); } else break; }
            return s;
        }

        function daysAgo(dateStr) {
            if (!dateStr) return '';
            const diff = Math.round((new Date(TODAY) - new Date(dateStr + 'T12:00:00')) / (86400000));
            if (diff === 0) return 'today';
            if (diff === 1) return 'yesterday';
            return `${diff} days ago`;
        }

        function formatDate(dateStr) {
            if (!dateStr) return '';
            const d = new Date(dateStr + 'T12:00:00');
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
        }

        // MODALS
        function openOverlay(id) { document.getElementById(id).classList.add('open'); }
        function closeOverlay(id) { document.getElementById(id).classList.remove('open'); }
        document.querySelectorAll('.overlay').forEach(o => o.addEventListener('click', e => { if (e.target === o) o.classList.remove('open'); }));

        // TOAST
        let _tTimer;
        function toast(msg, type) {
            const el = document.getElementById('toast');
            el.textContent = msg; el.className = `toast on ${type || ''}`;
            clearTimeout(_tTimer);
            _tTimer = setTimeout(() => { el.classList.remove('on'); }, 2600);
        }

        // KEYBOARD
        document.addEventListener('keydown', e => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            const views = ['home', 'today', 'achievements', 'worklog', 'backlog', 'future', 'eod', 'history', 'manager'];
            const n = parseInt(e.key);
            if (n >= 1 && n <= views.length) go(views[n - 1]);
            if (e.key === ' ' && curView === 'today') { e.preventDefault(); togglePomo(); }
            if (e.key === 'Escape') document.querySelectorAll('.overlay.open').forEach(o => o.classList.remove('open'));
        });

        // ═══════════════════════════════════════════════════════
        // INIT
        // ═══════════════════════════════════════════════════════
        (async function init() {
            await load();
            updatePomoDisplay();
            go('home');
            // If already locked in today, go straight to today
            if (S.dailyLogs[TODAY]?.lockedIn) go('today');
        })();