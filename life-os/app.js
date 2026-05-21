/* ════════════════════════════════════════════════
   BEYOND STANDARD — Life OS
   PWA · Firebase Live Sync · Sage Cat · Push Notifications
   ════════════════════════════════════════════════ */

/* ── QUOTES ── */
const QUOTES=[
  {q:"The pain you feel today is the strength you feel tomorrow.",a:"Arnold Schwarzenegger"},
  {q:"Discipline is the bridge between goals and accomplishment.",a:"Jim Rohn"},
  {q:"Don't wish it were easier. Wish you were better.",a:"Jim Rohn"},
  {q:"The body achieves what the mind believes.",a:"Napoleon Hill"},
  {q:"Success is the sum of small efforts, repeated day in and day out.",a:"Robert Collier"},
  {q:"Train insane or remain the same.",a:"Anonymous"},
  {q:"It never gets easier. You just get stronger.",a:"Anonymous"},
  {q:"Push harder than yesterday if you want a different tomorrow.",a:"Anonymous"},
  {q:"Champions keep playing until they get it right.",a:"Billie Jean King"},
  {q:"Strength doesn't come from what you can do. It comes from overcoming what you thought you couldn't.",a:"Rikki Rogers"},
  {q:"When you feel like quitting, think about why you started.",a:"Anonymous"},
  {q:"Wake up with determination. Go to bed with satisfaction.",a:"Anonymous"},
  {q:"Your body can stand almost anything. It is your mind you have to convince.",a:"Anonymous"},
  {q:"Motivation gets you started. Habit keeps you going.",a:"Jim Ryun"},
  {q:"You don't always get what you wish for. You get what you work for.",a:"Anonymous"},
  {q:"Be stronger than your excuses.",a:"Anonymous"},
  {q:"Today I will do what others won't so tomorrow I can do what others can't.",a:"Jerry Rice"},
  {q:"The only bad workout is the one that didn't happen.",a:"Anonymous"},
  {q:"Do it now. Sometimes later becomes never.",a:"Anonymous"},
  {q:"Great things never come from comfort zones.",a:"Anonymous"},
  {q:"If you are tired of starting over, stop giving up.",a:"Anonymous"},
  {q:"The clock is ticking. Are you becoming the person you want to be?",a:"Greg Plitt"},
  {q:"A year from now you will wish you had started today.",a:"Karen Lamb"},
  {q:"Every champion was once a contender who refused to give up.",a:"Rocky Balboa"},
  {q:"Hard work beats talent when talent does not work hard.",a:"Tim Notke"},
  {q:"Focus on progress, not perfection.",a:"Anonymous"},
  {q:"Your future self is watching you right now through your memories.",a:"Aubrey de Grey"},
  {q:"The difference between who you are and who you want to be is what you do.",a:"Anonymous"},
];

/* ── SECTIONS ── */
const SECS=[
  {id:'today',lbl:'Today'},
  {id:'schedule',lbl:'Schedule'},
  {id:'training',lbl:'Training'},
  {id:'nutrition',lbl:'Nutrition'},
  {id:'style',lbl:'Style'},
  {id:'bookmarks',lbl:'Bookmarks'},
  {id:'progress',lbl:'Progress'},
  {id:'analytics',lbl:'Analytics'},
];

/* ── SCHEDULE PROFILES ── */
const PROFILE={
  A:{name:'Profile A — Badminton 7–9 AM',blocks:[
    {t:'05:50',n:'Wake Up',tag:'self',d:'500 ml water immediately. 2 min mobility. No phone first 10 minutes.',a:'Alarm 05:50'},
    {t:'06:00',n:'Pre-Badminton Fuel',tag:'eat',d:'1 banana + 5 soaked dates + 1 scoop whey in 250 ml water.',a:'Alarm 06:00'},
    {t:'06:30',n:'Leave for Court',tag:'self',d:'Bag packed the night before — towel, water, racquet, shuttles.',a:'Alarm 06:25'},
    {t:'07:00',n:'Badminton Session',tag:'train',d:'2 hours of play. Cardio and agility. Not your primary workout.',a:'Alarm 06:55'},
    {t:'09:15',n:'Shower',tag:'self',d:'Cold 30-second finish. Accelerates recovery and sharpens focus.',a:'—'},
    {t:'09:45',n:'Breakfast — Big One',tag:'eat',d:'4 eggs + 80 g oats + banana + peanut butter + creatine 5 g. ~750 kcal.',a:'Alarm 09:45'},
    {t:'10:30',n:'Work Block 1',tag:'work',d:'Hardest task first. Phone away. This is your deepest focus window.',a:'Alarm 10:30'},
    {t:'13:30',n:'Lunch',tag:'eat',d:'200 g rice + dal + 150 g chicken or paneer + salad + curd. ~750 kcal.',a:'Alarm 13:30'},
    {t:'14:15',n:'Work Block 2',tag:'work',d:'Meetings, collaborative tasks, lighter work.',a:'—'},
    {t:'16:30',n:'Snack',tag:'eat',d:'Greek yogurt 200 g + mixed nuts 20 g + apple.',a:'Alarm 16:30'},
    {t:'18:00',n:'Wrap Work',tag:'work',d:"Hard cutoff. Write tomorrow's top 3 tasks before closing the laptop.",a:'Alarm 18:00'},
    {t:'18:30',n:'Pre-Workout',tag:'eat',d:'1 scoop whey in 250 ml water. 25 min before lifting.',a:'Alarm 18:30'},
    {t:'19:00',n:'Gym — Weight Training',tag:'train',d:"60–75 min. Today's split. This is where Toji is built.",a:'Alarm 18:55'},
    {t:'20:30',n:'Post-Workout',tag:'eat',d:'1 scoop whey + banana. Consistent > perfectly timed.',a:'Alarm 20:30'},
    {t:'21:00',n:'Dinner',tag:'eat',d:'2 rotis + 150 g chicken, fish, or paneer + sabzi + dal. ~600 kcal.',a:'Alarm 21:00'},
    {t:'21:45',n:'Skincare + Journal',tag:'self',d:'Cleanser → niacinamide → moisturizer. Write 3 lines: win, fail, tomorrow.',a:'Alarm 21:45'},
    {t:'22:30',n:'Wind Down',tag:'rest',d:'No screens. Read 10 pages. Phone on airplane mode.',a:'Alarm 22:30'},
    {t:'23:00',n:'Sleep',tag:'rest',d:'7–8 hours is when muscle is built. Non-negotiable.',a:'Alarm 22:55'},
  ]},
  B:{name:'Profile B — Badminton 8–10 AM',blocks:[
    {t:'06:50',n:'Wake Up',tag:'self',d:'500 ml water. 2 min mobility. No phone first 10 minutes.',a:'Alarm 06:50'},
    {t:'07:00',n:'Pre-Badminton Fuel',tag:'eat',d:'1 banana + 5 soaked dates + 1 scoop whey in 250 ml water.',a:'Alarm 07:00'},
    {t:'07:30',n:'Leave for Court',tag:'self',d:'Bag packed the night before.',a:'Alarm 07:25'},
    {t:'08:00',n:'Badminton Session',tag:'train',d:'2 hours. Cardio and agility component.',a:'Alarm 07:55'},
    {t:'10:15',n:'Shower',tag:'self',d:'Cold finish.',a:'—'},
    {t:'10:45',n:'Breakfast — Big One',tag:'eat',d:'4 eggs + 80 g oats + banana + peanut butter + creatine 5 g. ~750 kcal.',a:'Alarm 10:45'},
    {t:'11:15',n:'Work Block 1',tag:'work',d:'Flex schedule allows a late start. Inform your team.',a:'Alarm 11:15'},
    {t:'13:45',n:'Lunch',tag:'eat',d:'200 g rice + dal + 150 g protein + salad + curd.',a:'Alarm 13:45'},
    {t:'14:30',n:'Work Block 2',tag:'work',d:'Meetings and collaborative tasks.',a:'—'},
    {t:'16:30',n:'Snack',tag:'eat',d:'Greek yogurt + nuts + apple.',a:'Alarm 16:30'},
    {t:'18:30',n:'Wrap Work',tag:'work',d:"Cutoff. Tomorrow's top 3 tasks written.",a:'Alarm 18:30'},
    {t:'19:00',n:'Pre-Workout',tag:'eat',d:'1 scoop whey in 250 ml water.',a:'Alarm 19:00'},
    {t:'19:30',n:'Gym — Weight Training',tag:'train',d:"60–75 min. Today's split.",a:'Alarm 19:25'},
    {t:'21:00',n:'Post-Workout',tag:'eat',d:'1 scoop whey + banana.',a:'Alarm 21:00'},
    {t:'21:30',n:'Dinner',tag:'eat',d:'2 rotis + protein + sabzi + dal.',a:'Alarm 21:30'},
    {t:'22:15',n:'Skincare + Journal',tag:'self',d:'3-line journal. Skincare.',a:'Alarm 22:15'},
    {t:'22:45',n:'Wind Down',tag:'rest',d:'No screens. Read.',a:'Alarm 22:45'},
    {t:'23:15',n:'Sleep',tag:'rest',d:'Aim for 7+ hours.',a:'Alarm 23:10'},
  ]}
};

const DEF_CHECKS=[
  {id:'water',l:'Drank 3.5 L water',e:'💧'},
  {id:'protein',l:'Hit 140 g protein',e:'🥩'},
  {id:'creatine',l:'Took creatine 5 g',e:'⚡'},
  {id:'badminton',l:'Badminton done',e:'🏸'},
  {id:'gym',l:'Gym session done',e:'🏋️'},
  {id:'skincare',l:'AM + PM skincare',e:'✨'},
  {id:'journal',l:'3-line journal',e:'✍️'},
  {id:'sleep',l:'In bed by 23:00',e:'🌙'},
  {id:'noPhone',l:'No phone first 10 min after waking',e:'📵'},
  {id:'noScreen',l:'No screens 30 min before sleep',e:'📴'},
];

const SPLIT=[
  {day:'Monday',split:'Push',focus:'Chest · Shoulders · Triceps',exs:[
    {n:'Barbell Bench Press',s:'4 × 6-8',c:'Drive feet into floor. Squeeze chest at top. 3-second eccentric to lower sternum.'},
    {n:'Incline Dumbbell Press',s:'3 × 8-10',c:'Pinky-up grip slightly. Stop 1 inch from lockout. Keeps tension on upper chest.'},
    {n:'Overhead Press',s:'4 × 6-8',c:'Glutes tight, abs braced. Bar over heels at lockout. Best lift for the Toji silhouette.'},
    {n:'Lateral Raises',s:'4 × 12-15',c:'Lead with elbows, not hands. Imagine pouring water from a jug. Slow 3-second negative.'},
    {n:'Cable Chest Flys',s:'3 × 12',c:'Slight bend in elbows throughout. Full 1-second squeeze at peak contraction.'},
    {n:'Tricep Rope Pushdown',s:'3 × 10-12',c:'Elbows pinned. Flare rope apart at the bottom.'},
    {n:'Overhead Tricep Ext',s:'3 × 10-12',c:'Stretch the long head. Deep elbow flexion overhead. This is where tricep size lives.'},
  ]},
  {day:'Tuesday',split:'Pull',focus:'Back · Biceps · Rear Delts',exs:[
    {n:'Pull-Ups (weighted)',s:'4 × 6-8',c:'Drive elbows down and back. Lead with chest not chin.'},
    {n:'Barbell Row',s:'4 × 6-8',c:'Hinge at hips, flat back, pull to lower chest. Squeeze shoulder blades hard.'},
    {n:'Lat Pulldown (wide)',s:'3 × 10-12',c:'Drive elbows toward hip pockets — not just pulling the bar down.'},
    {n:'Seated Cable Row',s:'3 × 10-12',c:'Lean back slightly. Pull to belly button. 3-second controlled negative.'},
    {n:'Face Pulls',s:'3 × 15',c:'External rotation at end. Fixes posture, builds rear delts, makes you look broader.'},
    {n:'Barbell Curls',s:'3 × 8-10',c:'Elbows glued to ribs. No swinging. Last two reps should be a genuine fight.'},
    {n:'Hammer Curls',s:'3 × 10-12',c:'Targets brachialis and forearms. The Toji signature look.'},
  ]},
  {day:'Wednesday',split:'Legs',focus:'Quads · Hamstrings · Glutes · Core',exs:[
    {n:'Barbell Back Squat',s:'4 × 6-8',c:'Knees track over toes. Below parallel if mobility allows. Drive the floor away.'},
    {n:'Romanian Deadlift',s:'4 × 8',c:'Soft knee bend. Push hips back. Feel the hamstring stretch. Bar close to legs.'},
    {n:'Leg Press',s:'3 × 10-12',c:'Feet shoulder-width. Do not lock knees at top. 3-second slow negative.'},
    {n:'Walking Lunges',s:'3 × 12 each',c:'Step long, drop back knee toward floor. Glutes light up when done correctly.'},
    {n:'Standing Calf Raises',s:'4 × 15',c:'Full stretch at bottom, full contraction at top. 1-second pause at each end.'},
    {n:'Hanging Leg Raises',s:'4 × 10-15',c:'Posterior pelvic tilt — roll hips up. Do not just swing the legs.'},
    {n:'Cable Crunches',s:'3 × 15',c:'Crunch ribcage toward pelvis. If bending at hips only, you are doing it wrong.'},
  ]},
  {day:'Thursday',split:'Push II',focus:'Shoulder-Dominant',exs:[
    {n:'Seated DB Shoulder Press',s:'4 × 8-10',c:'Dumbbells path slightly inward at top. Do not bash them together.'},
    {n:'Cable Lateral (single)',s:'4 × 12-15',c:'Slight forward lean. Constant cable tension throughout the full range.'},
    {n:'Incline Barbell (light)',s:'3 × 10-12',c:'Top-half ROM focus. Really tax the upper chest fibers.'},
    {n:'Arnold Press',s:'3 × 10',c:'Rotate from neutral grip at bottom to overhand at top. Hits all three delt heads.'},
    {n:'Dumbbell Front Raise',s:'3 × 12',c:'Alternate arms. Stop at shoulder height. No momentum.'},
    {n:'Skull Crushers',s:'3 × 10-12',c:'Lower to forehead or just behind it. Elbows pointing up. Zero flare.'},
    {n:'Bench Dips',s:'3 × max',c:'Tricep focus. Elbows back throughout.'},
  ]},
  {day:'Friday',split:'Pull II',focus:'Back Width · Forearms',exs:[
    {n:'Deadlift',s:'4 × 5',c:'Bar over mid-foot. Shoulders over bar. Push the floor away. The most masculine lift.'},
    {n:'Chest-Supported Row',s:'4 × 8-10',c:'Zero momentum. Pull elbows back as far as possible. Squeeze hard at peak.'},
    {n:'Wide-Grip Lat Pulldown',s:'3 × 10',c:'Targets the V-taper. Lean back slightly. Pull to upper chest.'},
    {n:'Single-Arm DB Row',s:'3 × 10 each',c:'Pull from the elbow, not the hand. Full stretch at the bottom.'},
    {n:'Reverse Pec Deck',s:'3 × 12-15',c:'Rear delts — broadens your frame from behind. Most people skip these.'},
    {n:'Wrist Curls',s:'3 × 15',c:'Toji has insane forearms. Heavy wrist curls weekly without exception.'},
    {n:'Reverse Wrist Curls',s:'3 × 15',c:'5 minutes per week changes forearm appearance dramatically.'},
  ]},
  {day:'Saturday',split:'Functional',focus:'Forearms · Grip · Core',exs:[
    {n:"Farmer's Walks (heavy)",s:'4 × 40 m',c:'Heaviest dumbbells you can hold. Shoulders packed, chest up.'},
    {n:'Weighted Dead Hang',s:'4 × max',c:'Hang from a bar with added weight. Builds insane grip strength.'},
    {n:'Pull-Up Variations',s:'4 × 6-8',c:'Mix wide-grip, neutral-grip, and chin-ups across sets.'},
    {n:'Ab Wheel Rollout',s:'4 × 8-12',c:'Slow on the extension. Do not arch the lower back.'},
    {n:'Hanging Windshield Wipers',s:'3 × 8 each',c:'Obliques and rotational stability. Master leg raises first.'},
    {n:'Grip Trainer',s:'3 × max',c:'Direct grip work. Forearms pop when trained directly.'},
  ]},
  {day:'Sunday',split:'Recovery',focus:'Rest · Mobility · Plan the Week',exs:[
    {n:'Long Walk',s:'45–60 min',c:'Outdoors. Zone 1 cardio. Active recovery.'},
    {n:'Full-Body Mobility',s:'15–20 min',c:'Hip openers, shoulder dislocates, T-spine rotations, deep squats.'},
    {n:'Foam Rolling',s:'10 min',c:'Quads, IT band, lats, upper back. Hurts good.'},
    {n:'Plan the Week Ahead',s:'20 min',c:'Workouts, meal prep, and work priorities written down.'},
  ]},
];

const MEALS=[
  {t:'06:00',n:'Pre-Badminton',k:355,items:[
    {l:'Banana',q:'1 medium',m:[1,27,0,105]},
    {l:'Soaked dates',q:'5 pcs',m:[1,33,0,110]},
    {l:'Whey protein shake',q:'1 scoop + 250 ml water',m:[25,5,2,140]},
  ]},
  {t:'09:45',n:'Breakfast — Big One',k:770,items:[
    {l:'Whole eggs scrambled',q:'4 eggs',m:[24,2,20,280]},
    {l:'Oats cooked in milk',q:'80 g oats',m:[10,50,5,290]},
    {l:'Peanut butter',q:'1 tbsp',m:[4,3,8,95]},
    {l:'Banana',q:'1 medium',m:[1,27,0,105]},
    {l:'Creatine monohydrate',q:'5 g with water',m:[0,0,0,0]},
  ]},
  {t:'13:30',n:'Lunch',k:750,items:[
    {l:'Cooked rice',q:'200 g',m:[5,45,0,200]},
    {l:'Dal (any variety)',q:'1 cup',m:[8,22,2,140]},
    {l:'Chicken or paneer',q:'150 g',m:[35,0,6,195]},
    {l:'Salad',q:'1 bowl',m:[2,10,0,50]},
    {l:'Curd',q:'1 cup',m:[5,6,4,80]},
  ]},
  {t:'16:30',n:'Snack',k:375,items:[
    {l:'Greek yogurt',q:'200 g',m:[18,7,2,120]},
    {l:'Mixed nuts',q:'20 g',m:[4,5,14,160]},
    {l:'Apple',q:'1 medium',m:[0,25,0,95]},
  ]},
  {t:'18:30',n:'Pre-Workout',k:235,items:[
    {l:'Whey protein shake',q:'1 scoop + 250 ml water',m:[25,5,2,140]},
    {l:'Apple',q:'1 medium',m:[0,25,0,95]},
  ]},
  {t:'20:30',n:'Post-Workout',k:245,items:[
    {l:'Whey protein shake',q:'1 scoop + 250 ml water',m:[25,5,2,140]},
    {l:'Banana',q:'1 medium',m:[1,27,0,105]},
  ]},
  {t:'21:00',n:'Dinner',k:590,items:[
    {l:'Roti or chapati',q:'2 pcs',m:[6,32,2,175]},
    {l:'Chicken, fish, or paneer',q:'150 g',m:[35,0,6,195]},
    {l:'Sabzi (cooked veg)',q:'1 cup',m:[2,12,2,75]},
    {l:'Dal',q:'1/2 cup',m:[8,22,2,140]},
  ]},
];

const MACRO_DEFAULTS={P:140,C:370,F:75,K:2700};
function getMacroTargets(){return ls('macro_targets',MACRO_DEFAULTS);}

/* ── STORAGE ── */
const ls=(k,fb=null)=>{try{const v=localStorage.getItem(k);return v?JSON.parse(v):fb;}catch{return fb;}};
const lsSet=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v));fbWrite(k,v);}catch{}};
const lsRm=k=>{try{localStorage.removeItem(k);}catch{}};
const today=new Date().toISOString().slice(0,10);

/* Keys that we sync (everything app-data, NOT auth/device-local) */
const SYNC_KEY_PREFIXES=['daily:','water:','wt:','focus:','pr:','outfit:','journal:','session:','measurements:','schedule:','habit_meta:','habit_last:','habit_paused:','goal:','sleep:','steps:','gratitude:','review:','eating_window:'];
const SYNC_KEYS_EXACT=['custom_checks','bookmarks','profile','custom_meals','macro_targets','custom_prs','custom_dashboard','habit_categories','water_goal','meal_templates'];
const LOCAL_ONLY=['last_synced','splash:','pwa_dismissed','fb_config','fb_uid','fb_email','photo:','pwa_installed','pwa_dismissed_auth'];

function collectSyncData(){
  const out={};
  for(let i=0;i<localStorage.length;i++){
    const k=localStorage.key(i);
    if(!k)continue;
    if(LOCAL_ONLY.some(p=>k.startsWith(p)))continue;
    if(SYNC_KEY_PREFIXES.some(p=>k.startsWith(p))||SYNC_KEYS_EXACT.includes(k)){
      try{out[k]=JSON.parse(localStorage.getItem(k));}catch{out[k]=localStorage.getItem(k);}
    }
  }
  return out;
}
function applySyncData(data){
  if(!data||typeof data!=='object')return;
  Object.entries(data).forEach(([k,v])=>{
    if(LOCAL_ONLY.some(p=>k.startsWith(p)))return;
    try{localStorage.setItem(k,JSON.stringify(v));}catch{}
  });
}

/* ════════════════════════════════════════════════
   FIREBASE REALTIME DATABASE SYNC
   ════════════════════════════════════════════════ */
const FB_DEFAULT_CONFIG={
  apiKey:"AIzaSyByV3RCixtXCjgBxJis920jXOdyruOOv90",
  authDomain:"life-os-f7f30.firebaseapp.com",
  databaseURL:"https://life-os-f7f30-default-rtdb.firebaseio.com",
  projectId:"life-os-f7f30",
  storageBucket:"life-os-f7f30.firebasestorage.app",
  messagingSenderId:"41897135537",
  appId:"1:41897135537:web:eb8103ddc91c7b65cdc190",
  measurementId:"G-Y6CEJDGH7K"
};
let fbApp=null,fbDb=null,fbAuth=null,fbUser=null,fbListenerOff=null;
const FB_PATH=uid=>'users/'+uid+'/sync';

function initFirebase(config){
  if(fbApp)return;
  try{
    fbApp=firebase.initializeApp(config);
    fbAuth=firebase.auth();
    fbDb=firebase.database();
    fbDb.ref('.info/connected').on('value',s=>setSyncStatus(s.val()?'ok':''));
    fbAuth.onAuthStateChanged(user=>{
      if(user){
        fbUser=user;
        localStorage.setItem('fb_uid',user.uid);
        localStorage.setItem('fb_email',user.email);
        fbAttachListener();
        updateUserUI();
        setSyncStatus('ok');
      }else{
        fbUser=null;
        setSyncStatus('');
        updateUserUI();
      }
    });
  }catch(e){console.warn('Firebase init failed:',e);}
}

function fbWrite(k,v){
  if(!fbDb||!fbUser)return;
  if(LOCAL_ONLY.some(p=>k.startsWith(p)))return;
  if(!SYNC_KEY_PREFIXES.some(p=>k.startsWith(p))&&!SYNC_KEYS_EXACT.includes(k))return;
  const fk=k.replace(/[.#$\[\]]/g,'_');
  fbDb.ref(FB_PATH(fbUser.uid)+'/'+fk).set(v);
}

function fbAttachListener(){
  const ref=fbDb.ref(FB_PATH(fbUser.uid));
  if(fbListenerOff)fbListenerOff();
  const cb=ref.on('value',snap=>{
    const d=snap.val();
    if(d)applySyncData(d);
    localStorage.setItem('last_synced',new Date().toISOString());
    setSyncStatus('ok');
    rerenderAll();
  });
  fbListenerOff=()=>ref.off('value',cb);
}

async function handleGoogleSignIn(){
  const msg=document.getElementById('authMsg');
  if(!fbAuth){
    if(!localStorage.getItem('fb_config')){msg.textContent='Paste your Firebase config first.';msg.className='auth-msg err';document.getElementById('fbConfigArea').style.display='block';return;}
    return;
  }
  msg.textContent='Opening Google sign-in…';msg.className='auth-msg';
  try{
    const provider=new firebase.auth.GoogleAuthProvider();
    await fbAuth.signInWithPopup(provider);
    setTimeout(()=>{document.getElementById('authModal').classList.remove('show');toast('Welcome!');},600);
  }catch(e){
    msg.textContent='✗ '+(e.code==='auth/popup-blocked'?'Popup blocked — allow popups and retry.':e.message);
    msg.className='auth-msg err';
  }
}

async function handleFbSignIn(email,pass,create=false){
  const msg=document.getElementById('authMsg');
  msg.textContent='Signing in…';msg.className='auth-msg';
  try{
    if(create)await fbAuth.createUserWithEmailAndPassword(email,pass);
    else await fbAuth.signInWithEmailAndPassword(email,pass);
    setTimeout(()=>{
      document.getElementById('authModal').classList.remove('show');
      toast('Syncing your data…');
    },600);
  }catch(e){
    msg.textContent='✗ '+e.message;
    msg.className='auth-msg err';
  }
}

async function handleFbSignOut(){
  if(fbListenerOff)fbListenerOff();
  if(fbAuth)await fbAuth.signOut();
  fbUser=null;
  localStorage.removeItem('fb_uid');
  localStorage.removeItem('fb_email');
  updateUserUI();
  toast('Signed out.');
}

function handleFbConfig(configStr){
  const msg=document.getElementById('authMsg');
  try{
    const config=JSON.parse(configStr);
    if(!config.apiKey||!config.databaseURL)throw new Error('Missing apiKey or databaseURL');
    localStorage.setItem('fb_config',JSON.stringify(config));
    initFirebase(config);
    document.getElementById('fbConfigArea').style.display='none';
    document.getElementById('fbSignInArea').style.display='block';
    msg.textContent='✓ Firebase connected. Sign in below.';
    msg.className='auth-msg ok';
  }catch(e){
    msg.textContent='✗ Invalid config: '+e.message;
    msg.className='auth-msg err';
  }
}

/* ── STATE ── */
let bmSearchQuery = '';
let bmCatFilter = 'all';
let curSec=0,transitioning=false;
let curP=ls('profile','A');
let analyticsRange=30;
let activeDayIdx=Math.max(0,new Date().getDay()-1);
let pendingSchedBlockIdx=-1;
let rtSec=90,rtCur=90,rtRun=false,rtInt=null;
let calMonth=new Date().getMonth(),calYear=new Date().getFullYear();
let deferredPrompt=null;
let notifyTimers=[];
let pendingSessionDayIdx=0;

/* ════════════════════════════════════════════════
   SPLASH
   ════════════════════════════════════════════════ */
(function(){
  const d=new Date();
  const doy=Math.floor((d-(new Date(d.getFullYear(),0,0)))/86400000);
  const q=QUOTES[doy%QUOTES.length];
  document.getElementById('spq').textContent=q.q;
  document.getElementById('spa').textContent='— '+q.a;
  let cnt=5;
  const circ=138.2;
  document.getElementById('spCnt').textContent=cnt;
  const arc=document.getElementById('spArc');
  const int=setInterval(()=>{
    cnt--;
    document.getElementById('spCnt').textContent=cnt;
    arc.setAttribute('stroke-dashoffset',(circ*(cnt/5)).toFixed(2));
    if(cnt<=0){clearInterval(int);hideSplash();}
  },1000);
  function hideSplash(){
    const s=document.getElementById('splash');
    s.classList.add('gone');
    setTimeout(()=>s.remove(),800);
  }
  document.getElementById('splash').addEventListener('click',()=>{clearInterval(int);hideSplash();});
})();

/* ════════════════════════════════════════════════
   PWA: SERVICE WORKER + INSTALL PROMPT
   ════════════════════════════════════════════════ */
if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('./sw.js')
      .then(reg=>console.log('SW registered:',reg.scope))
      .catch(err=>console.warn('SW registration failed:',err));
  });
}

function isStandalone(){
  return window.matchMedia('(display-mode: standalone)').matches
    || window.matchMedia('(display-mode: minimal-ui)').matches
    || window.navigator.standalone === true;
}

function isIOS(){
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}

function canShowInstall(){
  if(isStandalone())return false;
  if(ls('pwa_installed',false))return false;
  if(ls('pwa_dismissed',false))return false;
  return !!deferredPrompt;
}

function refreshInstallUI(){
  const bar=document.getElementById('installBar');
  const sBtn=document.getElementById('installAppBtn');
  if(canShowInstall()){
    if(bar)bar.classList.add('show');
    if(sBtn)sBtn.style.display='block';
  }else{
    if(bar)bar.classList.remove('show');
    if(sBtn)sBtn.style.display='none';
  }
}

window.addEventListener('beforeinstallprompt',e=>{
  e.preventDefault();
  deferredPrompt=e;
  refreshInstallUI();
});

window.addEventListener('appinstalled',()=>{
  lsSet('pwa_installed',true);
  deferredPrompt=null;
  refreshInstallUI();
  toast('✅ Life OS installed!');
});

// Detect display-mode changes (some browsers fire this when entering installed PWA)
try{
  const mm=window.matchMedia('(display-mode: standalone)');
  (mm.addEventListener||mm.addListener).call(mm,'change',()=>{
    if(isStandalone()){lsSet('pwa_installed',true);refreshInstallUI();}
  });
}catch{}

async function triggerInstall(){
  if(deferredPrompt){
    try{
      deferredPrompt.prompt();
      const r=await deferredPrompt.userChoice;
      if(r.outcome==='accepted')toast('Installing…');
      deferredPrompt=null;
      refreshInstallUI();
    }catch(e){
      toast('Install prompt failed.');
    }
    return;
  }
  if(isStandalone()){toast('Already installed — you are running the PWA.');return;}
  if(isIOS()){toast('iOS: tap Share → "Add to Home Screen"');return;}
  if(/Firefox/i.test(navigator.userAgent)){toast('Firefox: open menu → "Install" or "Add to Home Screen"');return;}
  toast('Install option not offered yet — open this page in Chrome/Edge or use the browser menu.');
}

function setSyncStatus(state){
  const c=document.getElementById('syncChip');const t=document.getElementById('syncTxt');
  if(!c||!t)return;
  c.classList.remove('ok','err','syncing');
  if(state==='syncing'){c.classList.add('syncing');t.textContent='Syncing…';}
  else if(state==='ok'){c.classList.add('ok');t.textContent=relativeTime(localStorage.getItem('last_synced'));}
  else if(state==='err'){c.classList.add('err');t.textContent='Sync error';}
  else{t.textContent='Offline';}
}

function relativeTime(iso){
  if(!iso)return 'Connected';
  const t=new Date(iso).getTime();
  const s=Math.floor((Date.now()-t)/1000);
  if(s<60)return 'Just now';
  if(s<3600)return Math.floor(s/60)+'m ago';
  if(s<86400)return Math.floor(s/3600)+'h ago';
  return Math.floor(s/86400)+'d ago';
}

function updateUserUI(){
  const email=fbUser?fbUser.email:localStorage.getItem('fb_email');
  const spu=document.getElementById('spUser');
  if(email){
    spu.style.display='flex';
    document.getElementById('spUserName').textContent=email;
    document.getElementById('spUserSub').textContent='Signed in via Firebase';
    const av=document.getElementById('spUserAv');
    if(av){av.style.display='none';}
  }else{
    spu.style.display='none';
  }
  setSyncStatus(fbUser?'ok':'');
  const ls_t=document.getElementById('lastSyncTxt');
  if(ls_t)ls_t.textContent=email?('Last: '+relativeTime(localStorage.getItem('last_synced'))):'Not connected';
  const fbSyncToggle=document.getElementById('fbSyncToggle');
  if(fbSyncToggle)fbSyncToggle.classList.toggle('on',!!fbUser);
}

/* ════════════════════════════════════════════════
   PUSH NOTIFICATIONS
   ════════════════════════════════════════════════ */
async function enableNotifications(){
  if(!('Notification' in window)){toast('Notifications not supported.');return false;}
  if(Notification.permission==='granted')return true;
  const p=await Notification.requestPermission();
  if(p==='granted'){toast('🔔 Notifications enabled');return true;}
  toast('Permission denied.');return false;
}

function clearNotifyTimers(){
  notifyTimers.forEach(t=>clearTimeout(t));
  notifyTimers=[];
}

function scheduleAllNotifications(){
  clearNotifyTimers();
  if(!ls('notify_enabled',false))return;
  if(typeof Notification==='undefined'||Notification.permission!=='granted')return;
  const mins=parseInt(ls('notify_min',5))||5;
  const blocks=PROFILE[curP].blocks;
  const now=new Date();
  blocks.forEach(b=>{
    const [hh,mm]=b.t.split(':').map(Number);
    const target=new Date();target.setHours(hh,mm,0,0);
    const fireAt=target.getTime()-mins*60*1000;
    const delay=fireAt-now.getTime();
    if(delay>0&&delay<24*60*60*1000){
      const tid=setTimeout(()=>{
        showNotif('⏰ '+b.n+' in '+mins+' min',b.d);
      },delay);
      notifyTimers.push(tid);
    }
  });
}

function showNotif(title,body){
  if(!('Notification' in window))return;
  if(Notification.permission!=='granted')return;
  if(navigator.serviceWorker&&navigator.serviceWorker.controller){
    navigator.serviceWorker.ready.then(reg=>{
      reg.showNotification(title,{body,icon:'./icons/icon.svg',badge:'./icons/icon.svg',tag:'life-os',vibrate:[200,100,200]});
    });
  }else{
    new Notification(title,{body,icon:'./icons/icon.svg'});
  }
}

/* ════════════════════════════════════════════════
   NAV / CLOCK
   ════════════════════════════════════════════════ */
function buildNav(){
  const nd=document.getElementById('ndots');
  nd.innerHTML='';
  SECS.forEach((s,i)=>{
    const b=document.createElement('button');
    b.className='ndot'+(i===0?' active':'');
    b.title=s.lbl;
    b.addEventListener('click',()=>goTo(i));
    nd.appendChild(b);
  });
}
function goTo(idx){
  if(transitioning||idx===curSec)return;
  transitioning=true;
  document.getElementById('sec-'+SECS[curSec].id).classList.add('exit');
  const to=document.getElementById('sec-'+SECS[idx].id);
  setTimeout(()=>{
    document.getElementById('sec-'+SECS[curSec].id).classList.remove('active','exit');
    to.classList.add('active');
    curSec=idx;transitioning=false;
    updateNav();
    if(idx===6){renderProgress();setTimeout(animStats,200);}
    if(idx===7)renderAnalytics();
  },280);
}
function updateNav(){
  document.querySelectorAll('.ndot').forEach((d,i)=>d.classList.toggle('active',i===curSec));
  document.getElementById('slbl').textContent=SECS[curSec].lbl;
  if(typeof catReact==='function')catReact('sectionChange');
}
function updateClock(){
  const n=new Date();
  document.getElementById('clock').textContent=`${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}:${String(n.getSeconds()).padStart(2,'0')}`;
  const p=(n.getHours()*3600+n.getMinutes()*60+n.getSeconds())/86400;
  const c=176;
  document.getElementById('arcC').setAttribute('stroke-dashoffset',(c-(c*p)).toFixed(2));
  const pct=Math.round(p*100);
  document.getElementById('arcP').textContent=pct+'%';
  document.getElementById('arcV').textContent=pct+'% elapsed';
}

/* ── CUSTOM CHECKS ── */
function getCustomChecks(){return ls('custom_checks',[]);}
function saveCustomChecks(arr){lsSet('custom_checks',arr);}
function getAllChecks(){
  return [...DEF_CHECKS,...getCustomChecks().map(l=>({id:'c_'+btoa(unescape(encodeURIComponent(l))).replace(/[^a-zA-Z0-9]/g,'').slice(0,12),l,e:'✅',custom:true}))];
}

function getCustomMeals(){return ls('custom_meals',[]);}

/* ── HABIT METADATA: category, XP, cooldown, pause ── */
const HABIT_CATS={
  health:{l:'Health',c:'var(--lime)'},
  mind:{l:'Mind',c:'var(--violet)'},
  body:{l:'Body',c:'var(--teal)'},
  social:{l:'Social',c:'var(--gold)'},
  work:{l:'Work',c:'var(--blue)'},
};
const HABIT_DEFAULTS={
  water:{cat:'health',xp:1,cooldown:0},
  protein:{cat:'health',xp:2,cooldown:0},
  creatine:{cat:'health',xp:1,cooldown:0},
  badminton:{cat:'body',xp:3,cooldown:0},
  gym:{cat:'body',xp:3,cooldown:0},
  skincare:{cat:'health',xp:1,cooldown:0},
  journal:{cat:'mind',xp:2,cooldown:0},
  sleep:{cat:'health',xp:2,cooldown:0},
  noPhone:{cat:'mind',xp:1,cooldown:0},
  noScreen:{cat:'mind',xp:1,cooldown:0},
};
function getHabitMeta(habitId){
  const def=HABIT_DEFAULTS[habitId]||{cat:'health',xp:1,cooldown:0};
  return {...def,...ls('habit_meta:'+habitId,{})};
}
function setHabitMeta(habitId,meta){lsSet('habit_meta:'+habitId,meta);}
function getHabitLast(habitId){return ls('habit_last:'+habitId,null);}
function setHabitLast(habitId,ts){lsSet('habit_last:'+habitId,ts);}
function isHabitPaused(habitId,date){return ls('habit_paused:'+habitId+':'+date,false);}
function setHabitPaused(habitId,date,v){if(v)lsSet('habit_paused:'+habitId+':'+date,true);else lsRm('habit_paused:'+habitId+':'+date);}
function getHabitCooldownRemaining(habitId){
  const meta=getHabitMeta(habitId);
  if(!meta.cooldown||meta.cooldown<=0)return 0;
  const last=getHabitLast(habitId);
  if(!last)return 0;
  const elapsed=(Date.now()-new Date(last).getTime())/3600000;
  return Math.max(0,meta.cooldown-elapsed);
}
function formatCooldown(hours){
  if(hours<=0)return '';
  if(hours>=24){const d=Math.floor(hours/24);const h=Math.round(hours%24);return d>1?d+'d '+h+'h':d+'d '+h+'h';}
  if(hours>=1){const h=Math.floor(hours);const m=Math.round((hours-h)*60);return h+'h '+m+'m';}
  return Math.max(1,Math.ceil(hours*60))+'m';
}
function getDailyXP(date){
  const data=ls('daily:'+date,{});
  let earned=0,total=0;
  getAllChecks().forEach(c=>{
    const meta=getHabitMeta(c.id);
    total+=meta.xp;
    if(data[c.id])earned+=meta.xp;
  });
  return {earned,total};
}

/* ── SLEEP / STEPS / WATER ── */
function yesterdayKey(){const d=new Date();d.setDate(d.getDate()-1);return d.toISOString().slice(0,10);}
function computeSleepHours(bed,wake){
  if(!bed||!wake)return 0;
  const [bh,bm]=bed.split(':').map(Number);
  const [wh,wm]=wake.split(':').map(Number);
  let bedMin=bh*60+bm,wakeMin=wh*60+wm;
  if(wakeMin<bedMin)wakeMin+=1440;
  return +((wakeMin-bedMin)/60).toFixed(1);
}
function getWaterGoal(){return ls('water_goal',3500);}
function renderWaterRing(){
  const ml=ls('water:'+today,0);
  const goal=getWaterGoal();
  const pct=Math.min(100,Math.round(ml/goal*100));
  const mlEl=document.getElementById('waterMl');const gEl=document.getElementById('waterGoal');
  const pEl=document.getElementById('waterRingPct');const rEl=document.getElementById('waterRing');
  if(mlEl)mlEl.textContent=ml;if(gEl)gEl.textContent=goal;
  if(pEl)pEl.textContent=pct+'%';
  if(rEl){const c=2*Math.PI*34;rEl.setAttribute('stroke-dasharray',c.toFixed(1));rEl.setAttribute('stroke-dashoffset',(c*(1-pct/100)).toFixed(1));}
}
function renderSleepInputs(){
  const k=yesterdayKey();
  const s=ls('sleep:'+k,{});
  const bedEl=document.getElementById('sleepBed');
  const wakeEl=document.getElementById('sleepWake');
  const hEl=document.getElementById('sleepHours');
  if(bedEl)bedEl.value=s.bed||'';
  if(wakeEl)wakeEl.value=s.wake||'';
  if(hEl)hEl.textContent=s.hours?s.hours+'h':'—';
  const qEl=document.getElementById('sleepQuality');
  if(qEl&&!qEl.dataset.built){
    qEl.dataset.built='1';
    for(let i=1;i<=5;i++){
      const b=document.createElement('button');
      b.className='edot'+(s.quality===i?' sel':'');
      b.textContent=i;
      b.style.width='22px';b.style.height='22px';b.style.fontSize='10px';
      b.addEventListener('click',()=>{
        const cur=ls('sleep:'+yesterdayKey(),{});cur.quality=i;lsSet('sleep:'+yesterdayKey(),cur);
        qEl.querySelectorAll('.edot').forEach((d,di)=>d.classList.toggle('sel',di+1===i));
        toast('Sleep quality: '+i+'/5');
      });
      qEl.appendChild(b);
    }
  }
}
function renderStepsInputs(){
  const s=ls('steps:'+today,{});
  const sE=document.getElementById('stepsInp');const cE=document.getElementById('cardioInp');const tE=document.getElementById('cardioType');
  if(sE)sE.value=s.steps||'';
  if(cE)cE.value=s.cardio_min||'';
  if(tE)tE.value=s.type||'';
}

/* ── NUTRITION: weekly avg, eating window, meal templates ── */
function getMealTemplates(){return ls('meal_templates',[]);}
function saveMealTemplate(t){const arr=getMealTemplates();arr.push(t);lsSet('meal_templates',arr);}
function delMealTemplate(idx){const arr=getMealTemplates();arr.splice(idx,1);lsSet('meal_templates',arr);}
function recordMealEvent(){
  const ew=ls('eating_window:'+today,{});
  const now=new Date().toISOString();
  if(!ew.first)ew.first=now;
  ew.last=now;
  ew.windowMin=Math.round((new Date(ew.last)-new Date(ew.first))/60000);
  lsSet('eating_window:'+today,ew);
}
function formatMin(min){
  if(min<60)return min+'m';
  const h=Math.floor(min/60),m=min%60;return h+'h '+(m?m+'m':'00m');
}
function getEatingWindowToday(){
  return ls('eating_window:'+today,{first:null,last:null,windowMin:0});
}
function getWeeklyMacroAvg(){
  let P=0,C=0,F=0,K=0,days=0;
  for(let i=0;i<7;i++){
    const d=new Date();d.setDate(d.getDate()-i);
    const dk=d.toISOString().slice(0,10);
    const data=ls('daily:'+dk,{});
    let dayP=0,dayC=0,dayF=0,dayK=0,hasAny=false;
    MEALS.forEach((m,mi)=>m.items.forEach((it,ii)=>{
      if(data[`m${mi}_${ii}`]&&it.m){dayP+=it.m[0];dayC+=it.m[1];dayF+=it.m[2];dayK+=it.m[3];hasAny=true;}
    }));
    // also count custom meals (snapshot from current custom_meals if checked)
    const cms=getCustomMeals();
    cms.forEach((cm,i)=>{if(data['cm_'+i]){dayP+=cm.P||0;dayC+=cm.C||0;dayF+=cm.F||0;dayK+=cm.K||0;hasAny=true;}});
    if(hasAny){P+=dayP;C+=dayC;F+=dayF;K+=dayK;days++;}
  }
  if(!days)return null;
  return {P:Math.round(P/days),C:Math.round(C/days),F:Math.round(F/days),K:Math.round(K/days),days};
}
function getEatingWindowAvg(){
  let total=0,count=0;
  for(let i=0;i<7;i++){
    const d=new Date();d.setDate(d.getDate()-i);
    const ew=ls('eating_window:'+d.toISOString().slice(0,10),null);
    if(ew&&ew.windowMin>0){total+=ew.windowMin;count++;}
  }
  return count?Math.round(total/count):0;
}

/* ── PHOTO PROGRESS ── */
function compressPhoto(file,maxW=600,quality=0.7){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onload=e=>{
      const img=new Image();
      img.onload=()=>{
        const scale=Math.min(1,maxW/img.width);
        const w=Math.round(img.width*scale),h=Math.round(img.height*scale);
        const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;
        canvas.getContext('2d').drawImage(img,0,0,w,h);
        resolve(canvas.toDataURL('image/jpeg',quality));
      };
      img.onerror=reject;img.src=e.target.result;
    };
    reader.onerror=reject;reader.readAsDataURL(file);
  });
}
function listPhotos(){
  const out=[];
  for(let i=0;i<localStorage.length;i++){
    const k=localStorage.key(i);
    if(k&&k.startsWith('photo:')){
      const parts=k.split(':');
      out.push({key:k,date:parts[1],type:parts[2]});
    }
  }
  return out.sort((a,b)=>b.date.localeCompare(a.date)||a.type.localeCompare(b.type));
}
function renderPhotoGrid(){
  const el=document.getElementById('photoGrid');if(!el)return;
  const photos=listPhotos();
  if(!photos.length){el.innerHTML='<div style="grid-column:1/-1;color:var(--t2);font-size:13px;">No photos yet. Add one to start tracking visual progress.</div>';return;}
  el.innerHTML=photos.map(p=>{
    const data=ls(p.key,'');
    return`<div class="photo-item" data-key="${p.key}">
      <img src="${data}" alt="${p.type} ${p.date}" loading="lazy"/>
      <div class="photo-item-meta">${new Date(p.date+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric'})} · ${p.type}</div>
    </div>`;
  }).join('');
  el.querySelectorAll('.photo-item').forEach(item=>{
    item.addEventListener('click',()=>openPhotoModal(item.dataset.key));
  });
}
let pendingPhotoKey=null;
function openPhotoModal(key){
  pendingPhotoKey=key;
  const parts=key.split(':');
  document.getElementById('photoModalImg').src=ls(key,'');
  document.getElementById('photoModalMeta').textContent=new Date(parts[1]+'T12:00:00').toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'})+' · '+parts[2];
  document.getElementById('photoModal').classList.add('show');
}

/* ── PROGRESSIVE OVERLOAD ── */
function getProgressionSuggestion(exName,dayIdx,repRange){
  const sessions=[];
  for(let i=0;i<localStorage.length;i++){
    const k=localStorage.key(i);
    if(k&&k.startsWith('session:')&&k.endsWith(':'+dayIdx)){
      const s=ls(k);if(s&&s.exercises)sessions.push(s);
    }
  }
  sessions.sort((a,b)=>(b.date||'').localeCompare(a.date||''));
  if(sessions.length<2)return null;
  const [last,prev]=sessions;
  const ex1=last.exercises.find(e=>e.name===exName);
  const ex2=prev.exercises.find(e=>e.name===exName);
  if(!ex1||!ex2||!ex1.weight||!ex2.weight||!ex1.reps||!ex2.reps)return null;
  const w1=parseFloat(ex1.weight),w2=parseFloat(ex2.weight);
  if(isNaN(w1)||isNaN(w2)||w1!==w2)return null;
  const m=String(repRange||'').match(/(\d+)\s*[-–]\s*(\d+)/);
  if(!m)return null;
  const top=parseInt(m[2]);
  const r1=parseInt(ex1.reps),r2=parseInt(ex2.reps);
  if(isNaN(r1)||isNaN(r2)||r1<top||r2<top)return null;
  return {weight:w1+2.5,prevWeight:w1};
}

/* ════════════════════════════════════════════════
   DASHBOARD DETAILS MODAL
   ════════════════════════════════════════════════ */
function openDetails(type,arg){
  const modal=document.getElementById('detailsModal');
  const titleEl=document.getElementById('detailsTitle');
  const bodyEl=document.getElementById('detailsBody');
  if(!modal||!titleEl||!bodyEl)return;
  const r=DETAIL_RENDERERS[type];
  if(!r){bodyEl.innerHTML='<div class="dt-empty">No details available.</div>';titleEl.textContent='Details';}
  else{titleEl.textContent=r.title(arg);bodyEl.innerHTML=r.render(arg);}
  modal.classList.add('show');
}
function closeDetails(){document.getElementById('detailsModal')?.classList.remove('show');}

function dtBarRow(label,val,max,color='lime'){
  const pct=max>0?Math.min(100,Math.round((val/max)*100)):0;
  return `<div class="dt-bar-row"><div class="dt-d">${label}</div><div class="dt-bar"><div class="dt-bar-fill ${color}" style="width:${pct}%"></div></div><div class="dt-v">${val}</div></div>`;
}
function dtShortDate(d){return new Date(d+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric'});}

const DETAIL_RENDERERS={
  streak:{
    title:()=>'🔥 Habit Streak',
    render:()=>{
      let curStreak=0,bestStreak=0,run=0,activeDays=0;
      const days=[];
      for(let i=59;i>=0;i--){
        const d=new Date();d.setDate(d.getDate()-i);
        const ds=d.toISOString().slice(0,10);
        const data=ls('daily:'+ds,null);
        const cnt=data?Object.values(data).filter(v=>v).length:0;
        days.push({date:ds,cnt});
        if(cnt>0){run++;activeDays++;if(run>bestStreak)bestStreak=run;}else run=0;
      }
      // current streak from most recent backward
      for(let i=days.length-1;i>=0;i--){if(days[i].cnt>0)curStreak++;else break;}
      const recent=days.slice(-14);
      const max=Math.max(1,...recent.map(d=>d.cnt));
      return `
        <div class="dt-stat-grid">
          <div class="dt-stat"><div class="dt-stat-lbl">Current</div><div class="dt-stat-val" style="color:var(--lime);">${curStreak}d</div><div class="dt-stat-sub">in a row</div></div>
          <div class="dt-stat"><div class="dt-stat-lbl">Best</div><div class="dt-stat-val">${bestStreak}d</div><div class="dt-stat-sub">all time</div></div>
          <div class="dt-stat"><div class="dt-stat-lbl">Active</div><div class="dt-stat-val">${activeDays}</div><div class="dt-stat-sub">of last 60</div></div>
        </div>
        <div class="dt-section">
          <div class="dt-section-hd">Last 14 days — items completed</div>
          ${recent.map(d=>dtBarRow(dtShortDate(d.date),d.cnt,max)).join('')}
        </div>
        <div class="dt-insight">${curStreak>=7?'<strong>'+curStreak+'-day streak.</strong> Don\'t break twice in a row. Show up tomorrow.':curStreak>0?'Streak active. Stack one more day.':'<strong>Streak at zero.</strong> Check one habit right now to start.'}</div>`;
    }
  },
  water:{
    title:()=>'💧 Water Intake',
    render:()=>{
      const days=[];
      let total=0,activeDays=0;
      for(let i=13;i>=0;i--){
        const d=new Date();d.setDate(d.getDate()-i);
        const ml=ls('water:'+d.toISOString().slice(0,10),0);
        days.push({date:d.toISOString().slice(0,10),ml});
        if(ml>0){total+=ml;activeDays++;}
      }
      const goal=getWaterGoal();
      const todayMl=ls('water:'+today,0);
      const avg=activeDays?Math.round(total/activeDays):0;
      const max=Math.max(goal,...days.map(d=>d.ml));
      return `
        <div class="dt-stat-grid">
          <div class="dt-stat"><div class="dt-stat-lbl">Today</div><div class="dt-stat-val" style="color:var(--blue);">${todayMl}<span style="font-size:11px;color:var(--t2);"> ml</span></div><div class="dt-stat-sub">of ${goal} ml goal</div></div>
          <div class="dt-stat"><div class="dt-stat-lbl">7-day Avg</div><div class="dt-stat-val">${avg}<span style="font-size:11px;color:var(--t2);"> ml</span></div><div class="dt-stat-sub">when logged</div></div>
          <div class="dt-stat"><div class="dt-stat-lbl">Goal Hits</div><div class="dt-stat-val">${days.filter(d=>d.ml>=goal).length}</div><div class="dt-stat-sub">of last 14</div></div>
        </div>
        <div class="dt-section">
          <div class="dt-section-hd">Last 14 days</div>
          ${days.map(d=>dtBarRow(dtShortDate(d.date),d.ml||0,max,'blue')).join('')}
        </div>
        <div class="dt-insight">${todayMl>=goal?'<strong>Goal hit today.</strong> Keep going — overshooting is fine.':todayMl>=goal*0.6?'<strong>'+Math.round(todayMl/goal*100)+'% there.</strong> '+(goal-todayMl)+' ml to go.':'Behind today. Sip the next 250 ml right now.'}</div>`;
    }
  },
  sleep:{
    title:()=>'🌙 Sleep History',
    render:()=>{
      const days=[];let totalH=0,count=0,totalQ=0,qCount=0;
      for(let i=13;i>=0;i--){
        const d=new Date();d.setDate(d.getDate()-i-1); // shift by 1 since sleep is keyed yesterday
        const ds=d.toISOString().slice(0,10);
        const s=ls('sleep:'+ds,null);
        days.push({date:ds,s});
        if(s&&s.hours){totalH+=parseFloat(s.hours);count++;}
        if(s&&s.quality){totalQ+=s.quality;qCount++;}
      }
      const avg=count?(totalH/count).toFixed(1):'—';
      const avgQ=qCount?(totalQ/qCount).toFixed(1):'—';
      const maxH=Math.max(9,...days.map(d=>d.s?parseFloat(d.s.hours||0):0));
      return `
        <div class="dt-stat-grid">
          <div class="dt-stat"><div class="dt-stat-lbl">14-Day Avg</div><div class="dt-stat-val" style="color:var(--violet);">${avg}<span style="font-size:11px;color:var(--t2);"> h</span></div><div class="dt-stat-sub">${count} nights logged</div></div>
          <div class="dt-stat"><div class="dt-stat-lbl">Avg Quality</div><div class="dt-stat-val">${avgQ}<span style="font-size:11px;color:var(--t2);"> /5</span></div><div class="dt-stat-sub">subjective</div></div>
          <div class="dt-stat"><div class="dt-stat-lbl">7h+ Nights</div><div class="dt-stat-val">${days.filter(d=>d.s&&parseFloat(d.s.hours||0)>=7).length}</div><div class="dt-stat-sub">of last 14</div></div>
        </div>
        <div class="dt-section">
          <div class="dt-section-hd">Hours per night</div>
          ${days.map(d=>dtBarRow(dtShortDate(d.date),d.s?parseFloat(d.s.hours||0):0,maxH,'violet')).join('')}
        </div>
        <div class="dt-insight">${count===0?'No sleep logged yet. Set bed/wake on Today.':parseFloat(avg)>=7?'<strong>Averaging '+avg+'h.</strong> This is the foundation. Don\'t compromise it.':'<strong>'+avg+'h average is short.</strong> Sleep is the biggest performance lever you control. Aim for 7+.'}</div>`;
    }
  },
  steps:{
    title:()=>'👟 Steps & Cardio',
    render:()=>{
      const days=[];let totalS=0,count=0,totalC=0;
      for(let i=13;i>=0;i--){
        const d=new Date();d.setDate(d.getDate()-i);
        const ds=d.toISOString().slice(0,10);
        const s=ls('steps:'+ds,null);
        days.push({date:ds,s});
        if(s&&s.steps){totalS+=s.steps;count++;}
        if(s&&s.cardio_min)totalC+=s.cardio_min;
      }
      const avg=count?Math.round(totalS/count):0;
      const maxS=Math.max(10000,...days.map(d=>d.s?d.s.steps||0:0));
      return `
        <div class="dt-stat-grid">
          <div class="dt-stat"><div class="dt-stat-lbl">14-Day Avg</div><div class="dt-stat-val" style="color:var(--gold);">${avg.toLocaleString()}</div><div class="dt-stat-sub">steps/day</div></div>
          <div class="dt-stat"><div class="dt-stat-lbl">Cardio</div><div class="dt-stat-val">${totalC}<span style="font-size:11px;color:var(--t2);"> min</span></div><div class="dt-stat-sub">last 14 days</div></div>
          <div class="dt-stat"><div class="dt-stat-lbl">10k+ Days</div><div class="dt-stat-val">${days.filter(d=>d.s&&d.s.steps>=10000).length}</div><div class="dt-stat-sub">of last 14</div></div>
        </div>
        <div class="dt-section">
          <div class="dt-section-hd">Steps per day</div>
          ${days.map(d=>dtBarRow(dtShortDate(d.date),d.s?d.s.steps||0:0,maxS,'gold')).join('')}
        </div>
        <div class="dt-insight">${count===0?'No steps logged yet. Sync from your phone or input manually on Today.':avg>=10000?'<strong>10k+ daily.</strong> Movement is medicine. Keep it.':'<strong>'+avg.toLocaleString()+' avg.</strong> Even 2k more daily compounds over a year. Walk a meeting.'}</div>`;
    }
  },
  xp:{
    title:()=>'⚡ XP — Daily Discipline Score',
    render:()=>{
      const days=[];let total=0,count=0;
      for(let i=13;i>=0;i--){
        const d=new Date();d.setDate(d.getDate()-i);
        const ds=d.toISOString().slice(0,10);
        const data=ls('daily:'+ds,{});
        let earned=0,t=0;
        getAllChecks().forEach(c=>{const m=getHabitMeta(c.id);t+=m.xp;if(data[c.id])earned+=m.xp;});
        days.push({date:ds,earned,total:t});
        if(t>0){total+=earned/t;count++;}
      }
      const todayXp=getDailyXP(today);
      const avgPct=count?Math.round(total/count*100):0;
      return `
        <div class="dt-stat-grid">
          <div class="dt-stat"><div class="dt-stat-lbl">Today</div><div class="dt-stat-val" style="color:var(--lime);">${todayXp.earned}/${todayXp.total}</div><div class="dt-stat-sub">XP earned</div></div>
          <div class="dt-stat"><div class="dt-stat-lbl">14d Avg</div><div class="dt-stat-val">${avgPct}<span style="font-size:11px;color:var(--t2);">%</span></div><div class="dt-stat-sub">of available</div></div>
          <div class="dt-stat"><div class="dt-stat-lbl">Max XP</div><div class="dt-stat-val">${days.filter(d=>d.total>0&&d.earned===d.total).length}</div><div class="dt-stat-sub">perfect days</div></div>
        </div>
        <div class="dt-section">
          <div class="dt-section-hd">XP earned per day</div>
          ${days.map(d=>dtBarRow(dtShortDate(d.date),d.earned,Math.max(1,...days.map(x=>x.total)))).join('')}
        </div>
        <div class="dt-insight">${todayXp.earned===todayXp.total&&todayXp.total>0?'<strong>Full XP today.</strong> Today is a receipt.':'<strong>'+(todayXp.total-todayXp.earned)+' XP available</strong> still on the table. Easy targets first.'}</div>`;
    }
  },
  journal:{
    title:()=>'📝 Journal History',
    render:()=>{
      const entries=[];
      for(let i=0;i<30;i++){
        const d=new Date();d.setDate(d.getDate()-i);
        const ds=d.toISOString().slice(0,10);
        const j=ls('journal:'+ds,null);
        if(j&&(j.win||j.miss||j.focus||j.energy))entries.push({date:ds,...j});
      }
      if(!entries.length)return '<div class="dt-empty">No journal entries yet. Write today\'s win on the Today screen.</div>';
      const streak=computeJournalStreak();
      return `
        <div class="dt-stat-grid">
          <div class="dt-stat"><div class="dt-stat-lbl">Streak</div><div class="dt-stat-val" style="color:var(--lime);">${streak}d</div><div class="dt-stat-sub">consecutive</div></div>
          <div class="dt-stat"><div class="dt-stat-lbl">Entries</div><div class="dt-stat-val">${entries.length}</div><div class="dt-stat-sub">in last 30d</div></div>
        </div>
        <div class="dt-section">
          <div class="dt-section-hd">Recent entries</div>
          ${entries.slice(0,7).map(e=>`<div style="background:var(--s2);border:1px solid var(--bd);border-radius:var(--r);padding:12px 14px;margin-bottom:8px;">
            <div style="font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);margin-bottom:6px;">${dtShortDate(e.date)}${e.energy?' · Energy '+e.energy+'/5':''}</div>
            ${e.win?`<div style="font-size:12px;margin-bottom:4px;"><strong style="color:var(--lime);">Win:</strong> ${e.win.replace(/</g,'&lt;')}</div>`:''}
            ${e.miss?`<div style="font-size:12px;margin-bottom:4px;"><strong style="color:var(--gold);">Miss:</strong> ${e.miss.replace(/</g,'&lt;')}</div>`:''}
            ${e.focus?`<div style="font-size:12px;color:var(--t2);"><strong>Focus:</strong> ${e.focus.replace(/</g,'&lt;')}</div>`:''}
          </div>`).join('')}
        </div>`;
    }
  },
  training:{
    title:()=>'🏋️ Training History',
    render:()=>{
      const sessions=[];
      for(let i=0;i<localStorage.length;i++){
        const k=localStorage.key(i);
        if(k&&k.startsWith('session:')){const s=ls(k);if(s)sessions.push(s);}
      }
      sessions.sort((a,b)=>(b.date||'').localeCompare(a.date||''));
      const recent=sessions.slice(0,10);
      if(!recent.length)return '<div class="dt-empty">No sessions logged yet. Open "Log Today\'s Session" on the Training page.</div>';
      return `
        <div class="dt-stat-grid">
          <div class="dt-stat"><div class="dt-stat-lbl">Total</div><div class="dt-stat-val" style="color:var(--lime);">${sessions.length}</div><div class="dt-stat-sub">sessions logged</div></div>
          <div class="dt-stat"><div class="dt-stat-lbl">This Week</div><div class="dt-stat-val">${sessions.filter(s=>{const d=new Date(s.date);return (Date.now()-d.getTime())/86400000<=7;}).length}</div><div class="dt-stat-sub">recent sessions</div></div>
        </div>
        <div class="dt-section">
          <div class="dt-section-hd">Last 10 sessions</div>
          ${recent.map(s=>{
            const logged=(s.exercises||[]).filter(e=>e.weight||e.reps).length;
            const total=(s.exercises||[]).length;
            return `<div style="background:var(--s2);border:1px solid var(--bd);border-radius:var(--r);padding:10px 14px;margin-bottom:6px;display:flex;justify-content:space-between;align-items:center;">
              <div><div style="font-size:13px;font-weight:700;">${s.split||'Session'}</div><div style="font-size:11px;color:var(--t2);margin-top:2px;">${dtShortDate(s.date)}</div></div>
              <div style="font-size:11px;color:var(--lime);font-weight:700;">${logged}/${total} logged</div>
            </div>`;
          }).join('')}
        </div>`;
    }
  }
};

let pendingHabitEditId=null;
function openHabitEdit(habitId){
  pendingHabitEditId=habitId;
  const habit=getAllChecks().find(c=>c.id===habitId);
  if(!habit)return;
  const meta=getHabitMeta(habitId);
  document.getElementById('habitEditTitle').textContent='Settings — '+habit.l;
  document.getElementById('heCategory').value=meta.cat;
  document.getElementById('heXP').value=meta.xp;
  document.getElementById('heCooldown').value=meta.cooldown||0;
  const lastTs=getHabitLast(habitId);
  document.getElementById('heLastDone').textContent=lastTs?new Date(lastTs).toLocaleString():'Never';
  const cdRem=getHabitCooldownRemaining(habitId);
  document.getElementById('heCdStatus').textContent=cdRem>0?'On cooldown — '+formatCooldown(cdRem)+' remaining':'Available now';
  document.getElementById('heCdStatus').style.color=cdRem>0?'var(--gold)':'var(--lime)';
  document.getElementById('hePauseBtn').textContent=isHabitPaused(habitId,today)?'Resume today':'⏸ Skip today (no streak break)';
  document.getElementById('habitEditModal').classList.add('show');
}

function computeHabitStreak(habitId){
  let streak=0;
  for(let i=0;i<30;i++){
    const d=new Date();d.setDate(d.getDate()-i);
    const ds=d.toISOString().slice(0,10);
    const data=ls('daily:'+ds,{});
    const paused=isHabitPaused(habitId,ds);
    if(!data[habitId]&&!paused)break;
    streak++;
  }
  return streak;
}

function computeJournalStreak(){
  let streak=0;
  for(let i=0;i<365;i++){
    const d=new Date();d.setDate(d.getDate()-i);
    const j=ls('journal:'+d.toISOString().slice(0,10),{});
    if(!j.win&&!j.miss&&!j.focus&&!j.energy)break;
    streak++;
  }
  return streak;
}

const PR_LIFTS_DEFAULT=['Bench Press','Deadlift','Squat','Overhead Press','Barbell Row','Pull-Ups'];
function getAllPRLifts(){return[...PR_LIFTS_DEFAULT,...ls('custom_prs',[])];}
function getLastMeasDate(){
  let latest=null;
  for(let i=0;i<localStorage.length;i++){
    const k=localStorage.key(i);
    if(k&&k.startsWith('measurements:')){const d=k.slice(13);if(!latest||d>latest)latest=d;}
  }
  return latest;
}

function getConsumedMacros(){
  const data=ls('daily:'+today,{});
  let P=0,C=0,F=0,K=0;
  MEALS.forEach((m,mi)=>m.items.forEach((it,ii)=>{
    if(data[`m${mi}_${ii}`]&&it.m){P+=it.m[0];C+=it.m[1];F+=it.m[2];K+=it.m[3];}
  }));
  getCustomMeals().forEach((cm,i)=>{
    if(data['cm_'+i]){
      P+=Number(cm.P)||0;
      C+=Number(cm.C)||0;
      F+=Number(cm.F)||0;
      K+=Number(cm.K)||0;
    }
  });
  return{P,C,F,K};
}

/* ════════════════════════════════════════════════
   RENDER: TODAY
   ════════════════════════════════════════════════ */
function renderToday(){
  const data=ls('daily:'+today,{});
  const allChecks=getAllChecks();
  const cd=allChecks.filter(c=>data[c.id]).length;
  const ct=allChecks.length;
  let md=0,mt=0;
  MEALS.forEach((m,mi)=>m.items.forEach((_,ii)=>{mt++;if(data[`m${mi}_${ii}`])md++;}));
  const totDone=cd+md,totAll=ct+mt;
  const sc=totAll>0?Math.round((totDone/totAll)*100):0;

  document.getElementById('dpScore').textContent=sc+'%';
  document.getElementById('dpBar').style.width=sc+'%';
  document.getElementById('dpChecks').textContent=`${cd}/${ct}`;
  document.getElementById('dpMeals').textContent=`${md}/${mt}`;
  const xp=getDailyXP(today);
  const xpHud=document.getElementById('xpHud');
  if(xpHud){
    xpHud.style.display=xp.total>ct?'flex':'none';
    document.getElementById('xpEarned').textContent=xp.earned;
    document.getElementById('xpTotal').textContent=xp.total;
    document.getElementById('xpFill').style.width=(xp.total?(xp.earned/xp.total*100):0)+'%';
  }

  let streak=0;
  for(let i=0;i<365;i++){
    const d=new Date();d.setDate(d.getDate()-i);
    const k=d.toISOString().slice(0,10);
    const dd=ls('daily:'+k,null);
    if(!dd)break;if(!Object.values(dd).filter(v=>v).length)break;streak++;
  }
  document.getElementById('dpStreak').textContent=streak;
  document.getElementById('xStreak').textContent=streak;
  document.getElementById('xStrkBar').style.width=Math.min(streak*5,100)+'%';
  document.getElementById('cscore').textContent=sc+'%';

  const dayIdx=new Date().getDay();const map=[6,0,1,2,3,4,5];
  const ts=SPLIT[map[dayIdx]];
  document.getElementById('xPhase').textContent=ts.split;
  document.getElementById('xPhaseSub').textContent=ts.focus;
  document.getElementById('thName').textContent=ts.split+' Day';
  document.getElementById('thDay').textContent=ts.day;
  document.getElementById('thFocus').textContent=ts.focus;

  document.getElementById('pills').innerHTML=[
    {l:'Score',v:sc+'%',hi:sc>50},
    {l:'Tasks',v:`${cd}/${ct}`,hi:false},
    {l:'Meals',v:`${md}/${mt}`,hi:false},
    {l:'Phase',v:ts.split,hi:true},
  ].map(p=>`<div class="pill${p.hi?' hi':''}"><span class="pl">${p.l}</span><span class="pv">${p.v}</span></div>`).join('');

  document.getElementById('checks').innerHTML=allChecks.map(c=>{
    const streak=computeHabitStreak(c.id);
    const meta=getHabitMeta(c.id);
    const cdRem=getHabitCooldownRemaining(c.id);
    const isLocked=cdRem>0&&!data[c.id];
    const paused=isHabitPaused(c.id,today);
    const cat=HABIT_CATS[meta.cat]||HABIT_CATS.health;
    return`<label class="ch${data[c.id]?' done':''}${isLocked?' locked':''}${paused?' paused':''}" data-id="${c.id}" style="border-left:3px solid ${cat.c};">
      ${isLocked?'<span class="ch-lock" title="On cooldown">🔒</span>':`<input type="checkbox" ${data[c.id]?'checked':''}${isLocked?' disabled':''}>`}
      <span class="chl">${c.l}${paused?' <span style="color:var(--gold);font-size:10px;">⏸ paused</span>':''}</span>
      <span class="chio">${c.e}</span>
      <span class="ch-xp" title="${meta.xp} XP">${'•'.repeat(meta.xp)}</span>
      ${isLocked?`<span class="ch-cd" data-id="${c.id}" data-cooldown="${meta.cooldown}">${formatCooldown(cdRem)}</span>`:streak>0?`<span class="ch-streak${streak>7?' hot':''}">${streak}d</span>`:''}
      <button class="ch-cfg" data-id="${c.id}" title="Settings">⋯</button>
      ${c.custom?`<button class="ch-del" data-key="${c.l.replace(/"/g,'&quot;')}" title="Remove">×</button>`:''}
    </label>`;}).join('');

  document.getElementById('checks').querySelectorAll('.ch').forEach(el=>{
    const inp=el.querySelector('input[type="checkbox"]');
    if(inp){
      inp.addEventListener('change',e=>{
        const d=ls('daily:'+today,{});d[el.dataset.id]=e.target.checked;lsSet('daily:'+today,d);
        if(e.target.checked){
          setHabitLast(el.dataset.id,new Date().toISOString());
          setHabitPaused(el.dataset.id,today,false);
        }
        el.classList.toggle('done',e.target.checked);
        renderToday();
        if(curSec===3)renderNutrition();
        if(e.target.checked){
          try{navigator.vibrate&&navigator.vibrate(15);}catch{}
          const xp=getHabitMeta(el.dataset.id).xp;
          toast(['Stack the win.','That is a Toji move.','Discipline = freedom.','One more brick laid.','Future you thanks you.'][Math.floor(Math.random()*5)]+(xp>1?` +${xp} XP`:''));
          if(typeof catReact==='function')catReact('habitChecked');
        }
      });
    }
    const cfgBtn=el.querySelector('.ch-cfg');
    if(cfgBtn){cfgBtn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();openHabitEdit(cfgBtn.dataset.id);});}
    const delBtn=el.querySelector('.ch-del');
    if(delBtn){
      delBtn.addEventListener('click',e=>{
        e.preventDefault();e.stopPropagation();
        const custom=getCustomChecks().filter(l=>l!==delBtn.dataset.key);
        saveCustomChecks(custom);renderToday();
      });
    }
  });
  bindCursor();

  const prof=getProfile(curP);const now=new Date();const nm=now.getHours()*60+now.getMinutes();
  let ni=-1;prof.blocks.forEach((b,i)=>{const[hh,mm]=b.t.split(':').map(Number);if(hh*60+mm<=nm)ni=i;});
  document.getElementById('tlblocks').innerHTML=prof.blocks.slice(0,12).map((b,i)=>`
    <div class="tlb ${i<ni?'done':i===ni?'now':''}">
      <div class="tlt">${b.t}</div><div class="tln">${b.n}</div><div class="tlg tt-${b.tag}">${b.tag}</div>
    </div>`).join('');
}

/* ════════════════════════════════════════════════
   RENDER: SCHEDULE
   ════════════════════════════════════════════════ */
function getProfile(p){return ls('schedule:'+p,PROFILE[p]);}

function renderSched(){
  const prof=getProfile(curP);
  document.getElementById('ptxt').textContent=prof.name;
  document.getElementById('bgrid').innerHTML=prof.blocks.map((b,i)=>`
    <div class="blk bt-${b.tag}">
      <div class="btm">${b.t}</div><div class="bna">${b.n}</div><div class="bde">${b.d}</div>
      ${b.a!=='—'?`<div class="bal">${b.a}</div>`:''}
      <button class="blk-edit-btn" data-i="${i}" title="Edit block">✎</button>
    </div>`).join('');
  document.querySelectorAll('.blk-edit-btn').forEach(btn=>{
    btn.addEventListener('click',e=>{e.stopPropagation();openSchedModal(+btn.dataset.i);});
  });
}

function openSchedModal(blockIdx){
  pendingSchedBlockIdx=blockIdx;
  const prof=getProfile(curP);
  const isNew=blockIdx===-1;
  document.getElementById('schedModalTitle').textContent=isNew?'New Block':'Edit Block';
  document.getElementById('deleteSchedBlockBtn').style.display=isNew?'none':'';
  const b=isNew?{t:'',n:'',tag:'self',d:'',a:'—'}:prof.blocks[blockIdx];
  document.getElementById('seBkTime').value=b.t||'';
  document.getElementById('seBkName').value=b.n||'';
  document.getElementById('seBkTag').value=b.tag||'self';
  document.getElementById('seBkDesc').value=b.d||'';
  document.getElementById('seBkAlarm').value=b.a||'—';
  document.getElementById('schedMsg').textContent='';
  document.getElementById('schedModal').classList.add('show');
}

/* ════════════════════════════════════════════════
   RENDER: TRAINING
   ════════════════════════════════════════════════ */
function renderTraining(){
  document.getElementById('thExCount').textContent=SPLIT[activeDayIdx].exs.length;
  document.getElementById('dtabs').innerHTML=SPLIT.map((d,i)=>`
    <button class="dtab${i===activeDayIdx?' active':''}" data-i="${i}">${d.day}</button>`).join('');
  document.querySelectorAll('.dtab').forEach(b=>{
    b.addEventListener('click',()=>{
      activeDayIdx=+b.dataset.i;
      document.getElementById('thName').textContent=SPLIT[activeDayIdx].split+' Day';
      document.getElementById('thDay').textContent=SPLIT[activeDayIdx].day;
      document.getElementById('thFocus').textContent=SPLIT[activeDayIdx].focus;
      document.getElementById('thExCount').textContent=SPLIT[activeDayIdx].exs.length;
      renderTraining();
    });
  });
  document.getElementById('daybodies').innerHTML=SPLIT.map((d,i)=>`
    <div class="day-body${i===activeDayIdx?' active':''}" data-i="${i}">
      <div class="dfoc">${d.focus}</div>
      <div class="exgrid">${d.exs.map(e=>`
        <div class="ex">
          <div class="exr"><span class="exn">${e.n}</span><span class="exs">${e.s}</span></div>
          <div class="exc">${e.c}</div>
        </div>`).join('')}
      </div>
    </div>`).join('');
  bindCursor();
  renderSessionHistory();
}

/* ════════════════════════════════════════════════
   SESSION LOGGER
   ════════════════════════════════════════════════ */
function renderSessionHistory(){
  const el=document.getElementById('sessionHistory');if(!el)return;
  const sessions=[];
  for(let i=0;i<localStorage.length;i++){
    const k=localStorage.key(i);
    if(k&&k.startsWith('session:')){const v=ls(k);if(v)sessions.push(v);}
  }
  sessions.sort((a,b)=>b.date.localeCompare(a.date));
  const recent=sessions.slice(0,7);
  if(!recent.length){
    el.innerHTML='<div class="session-empty">No sessions logged yet. Hit the button above after your workout.</div>';
    return;
  }
  el.innerHTML=recent.map(s=>`
    <div class="session-item">
      <span class="session-item-name">${s.split||'Session'} — ${new Date(s.date+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric'})}</span>
      <span class="session-item-meta">${(s.exercises||[]).filter(e=>e.sets||e.reps||e.weight).length}/${(s.exercises||[]).length} logged</span>
    </div>`).join('');
}

function openSessionModal(dayIdx){
  pendingSessionDayIdx=dayIdx;
  const day=SPLIT[dayIdx];
  document.getElementById('sessionModalTitle').textContent='Log: '+day.split+' Day — '+day.day;
  const msgEl=document.getElementById('sessionMsg');
  msgEl.textContent='';msgEl.className='auth-msg';
  const existing=ls('session:'+today+':'+dayIdx,{});
  const prevExs=existing.exercises||[];
  document.getElementById('sessionFormBody').innerHTML=day.exs.map((e,i)=>{
    const prev=prevExs[i]||{};
    const po=getProgressionSuggestion(e.n,dayIdx,e.s);
    const suggestedWeight=prev.weight||(po?po.weight:'');
    return`<div class="sess-ex-row${po?' has-po':''}">
      <div class="sess-ex-name">${e.n}${po?` <span class="po-suggest" title="Hit top of rep range twice — time to add 2.5kg">+${po.weight-po.prevWeight}kg → ${po.weight}kg</span>`:''}</div>
      <div class="sess-ex-plan">${e.s}</div>
      <div class="sess-ex-fields">
        <div class="sess-field"><label>Sets</label><input type="number" min="0" max="20" data-ex="${i}" data-field="sets" placeholder="—" value="${prev.sets||''}"></div>
        <div class="sess-field"><label>Weight (kg)</label><input type="number" min="0" step="0.5" data-ex="${i}" data-field="weight" placeholder="${po?po.weight:'—'}" value="${suggestedWeight}"></div>
        <div class="sess-field"><label>Reps</label><input type="number" min="0" max="100" data-ex="${i}" data-field="reps" placeholder="—" value="${prev.reps||''}"></div>
        <div class="sess-field"><label>Notes</label><input type="text" data-ex="${i}" data-field="notes" placeholder="e.g. easy" maxlength="30" value="${prev.notes||''}"></div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('sessionModal').classList.add('show');
}

function saveSession(){
  const day=SPLIT[pendingSessionDayIdx];
  const exercises=day.exs.map((e,i)=>{
    const row={name:e.n};
    ['sets','weight','reps','notes'].forEach(f=>{
      const inp=document.querySelector(`[data-ex="${i}"][data-field="${f}"]`);
      if(inp)row[f]=inp.value.trim();
    });
    return row;
  });
  lsSet('session:'+today+':'+pendingSessionDayIdx,{dayIdx:pendingSessionDayIdx,split:day.split,date:today,exercises});
  document.getElementById('sessionModal').classList.remove('show');
  renderSessionHistory();
  if(curSec===6)renderProgress();
  toast('Session saved!');
  if(typeof catReact==='function')catReact('sessionLogged');
}

/* ════════════════════════════════════════════════
   RENDER: NUTRITION
   ════════════════════════════════════════════════ */
function renderNutrition(){
  const data=ls('daily:'+today,{});
  const mac=getConsumedMacros();
  const tgt=getMacroTargets();
  document.getElementById('mTotalKcal').textContent=mac.K;
  const mTKEl=document.getElementById('mTargetKcal');
  if(mTKEl)mTKEl.textContent=tgt.K;
  const ringDefs=[
    {key:'K',name:'Calories',val:mac.K,tgt:tgt.K,unit:'kcal',c:'#82a4ff'},
    {key:'P',name:'Protein',val:mac.P,tgt:tgt.P,unit:'g',c:'#f06fb6'},
    {key:'C',name:'Carbs',val:mac.C,tgt:tgt.C,unit:'g',c:'#ffb547'},
    {key:'F',name:'Fats',val:mac.F,tgt:tgt.F,unit:'g',c:'#4aeacc'},
  ];
  const circ=Math.PI*2*28;
  document.getElementById('mrings').innerHTML=ringDefs.map(r=>{
    const pct=Math.min(r.val/r.tgt,1);
    const offset=circ-(circ*pct);
    return`<div class="mrc">
      <svg width="64" height="64" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="none" stroke="rgba(255,255,255,.05)" stroke-width="5"/>
        <circle cx="32" cy="32" r="28" fill="none" stroke="${r.c}" stroke-width="5" stroke-linecap="round"
          stroke-dasharray="${circ.toFixed(1)}" stroke-dashoffset="${offset.toFixed(2)}"
          transform="rotate(-90 32 32)" style="transition:stroke-dashoffset 1s var(--eo);filter:drop-shadow(0 0 4px ${r.c}88)"/>
      </svg>
      <div class="mn">${r.name}</div>
      <div class="mv" style="color:${r.c}">${r.val}${r.unit==='g'?'g':''}</div>
      <div class="mt2">of ${r.tgt}${r.unit==='g'?'g':' kcal'}</div>
      <div class="mpct">${Math.round(pct*100)}%</div>
    </div>`;
  }).join('');
  const barDefs=[
    {name:'Protein',val:mac.P,tgt:tgt.P,unit:'g',cls:'pbar-lime'},
    {name:'Carbohydrates',val:mac.C,tgt:tgt.C,unit:'g',cls:'pbar-gold'},
    {name:'Fats',val:mac.F,tgt:tgt.F,unit:'g',cls:'pbar-teal'},
    {name:'Calories',val:mac.K,tgt:tgt.K,unit:' kcal',cls:'pbar-blue'},
  ];
  document.getElementById('mbars').innerHTML=barDefs.map(b=>{
    const pct=Math.min(Math.round((b.val/b.tgt)*100),100);
    return`<div class="mbrow">
      <div class="mbrow-top"><span class="mbrow-name">${b.name}</span><span class="mbrow-val">${b.val}${b.unit} / ${b.tgt}${b.unit}</span></div>
      <div class="pbar ${b.cls}"><div class="pbar-fill" style="width:${pct}%"></div></div>
    </div>`;
  }).join('');
  const glasses=ls('water:'+today,0);
  document.getElementById('glassCount').textContent=glasses;
  document.getElementById('glasses').innerHTML=Array.from({length:7},(_,i)=>`
    <div class="glass${i<glasses?' filled':''}" data-g="${i}">💧</div>`).join('');
  document.querySelectorAll('.glass').forEach(el=>{
    el.addEventListener('click',()=>{
      const g=+el.dataset.g+1;
      const newVal=ls('water:'+today,0)===g?g-1:g;
      lsSet('water:'+today,newVal);
      if(newVal>=7){const d=ls('daily:'+today,{});d['water']=true;lsSet('daily:'+today,d);renderToday();}
      renderNutrition();toast(newVal>=7?'Hydration goal hit! 💧':'Glass logged.');
    });
  });
  document.getElementById('meals').innerHTML=MEALS.map((m,mi)=>`
    <div class="meal">
      <div class="mhd">
        <div class="mtn"><span class="mt">${m.t}</span><span class="mn2">${m.n}</span></div>
        <span class="mkcal">~${m.k} kcal</span>
      </div>
      <div class="mitems">${m.items.map((it,ii)=>`
        <label class="mi" data-key="m${mi}_${ii}">
          <input type="checkbox" ${data[`m${mi}_${ii}`]?'checked':''}><span class="mit">${it.l}</span><span class="miq">${it.q}</span>
        </label>`).join('')}
      </div>
    </div>`).join('');
  document.getElementById('meals').querySelectorAll('.mi').forEach(el=>{
    el.addEventListener('change',e=>{
      const d=ls('daily:'+today,{});d[el.dataset.key]=e.target.checked;lsSet('daily:'+today,d);
      if(e.target.checked)recordMealEvent();
      renderNutrition();renderToday();
      if(e.target.checked)toast('Logged!');
    });
  });
  const customMeals=getCustomMeals();
  if(customMeals.length){
    document.getElementById('meals').innerHTML+=customMeals.map((cm,i)=>`
      <div class="meal custom-meal">
        <div class="mhd">
          <div class="mtn"><span class="mt">${cm.time||'—'}</span><span class="mn2">${cm.name}</span></div>
          <span class="mkcal">~${cm.K||0} kcal <button class="cm-del" data-i="${i}" title="Remove meal">×</button></span>
        </div>
        <div class="mitems">
          <label class="mi" data-key="cm_${i}">
            <input type="checkbox" ${data['cm_'+i]?'checked':''}><span class="mit">P:${cm.P||0}g · C:${cm.C||0}g · F:${cm.F||0}g</span>
          </label>
        </div>
      </div>`).join('');
    document.getElementById('meals').querySelectorAll('.custom-meal .mi').forEach(el=>{
      el.querySelector('input').addEventListener('change',e=>{
        const d=ls('daily:'+today,{});d[el.dataset.key]=e.target.checked;lsSet('daily:'+today,d);
        if(e.target.checked)recordMealEvent();
        renderNutrition();renderToday();
      });
    });
    document.getElementById('meals').querySelectorAll('.cm-del').forEach(btn=>{
      btn.addEventListener('click',e=>{
        e.stopPropagation();
        const idx=+btn.dataset.i;
        const arr=getCustomMeals();arr.splice(idx,1);lsSet('custom_meals',arr);
        renderNutrition();toast('Custom meal removed.');
      });
    });
  }
  renderNutritionStats();
  renderMealTemplates();
  bindCursor();
}

function renderNutritionStats(){
  const ew=getEatingWindowToday();
  const ewAvg=getEatingWindowAvg();
  const wk=getWeeklyMacroAvg();
  const tgt=getMacroTargets();
  const el=document.getElementById('nutritionStats');
  if(!el)return;
  const fmt=t=>t?new Date(t).toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',hour12:false}):'—';
  const fasted=ew.windowMin>0?1440-ew.windowMin:0;
  el.innerHTML=`
    <div class="ns-card">
      <div class="ns-lbl">⏱ Eating Window Today</div>
      <div class="ns-val">${ew.windowMin>0?formatMin(ew.windowMin):'—'}</div>
      <div class="ns-sub">${fmt(ew.first)} → ${fmt(ew.last)}${ewAvg>0?' · 7d avg '+formatMin(ewAvg):''}</div>
    </div>
    <div class="ns-card">
      <div class="ns-lbl">⏳ Fasted Today</div>
      <div class="ns-val">${ew.windowMin>0?formatMin(fasted):'—'}</div>
      <div class="ns-sub">${ew.windowMin>0&&fasted>=14*60?'14h+ fast 🔥':ew.windowMin>0&&fasted>=12*60?'12h+ fast':'Track first meal'}</div>
    </div>
    <div class="ns-card">
      <div class="ns-lbl">📊 7-Day Macro Avg</div>
      ${wk?`<div class="ns-macros">
        <div class="ns-mrow"><span>Protein</span><strong style="color:#f06fb6;">${wk.P}g</strong><span class="ns-tgt">/${tgt.P}g</span></div>
        <div class="ns-mrow"><span>Carbs</span><strong style="color:#ffb547;">${wk.C}g</strong><span class="ns-tgt">/${tgt.C}g</span></div>
        <div class="ns-mrow"><span>Fats</span><strong style="color:#4aeacc;">${wk.F}g</strong><span class="ns-tgt">/${tgt.F}g</span></div>
        <div class="ns-mrow"><span>Calories</span><strong style="color:#82a4ff;">${wk.K}</strong><span class="ns-tgt">/${tgt.K}</span></div>
      </div><div class="ns-sub">${wk.days} day${wk.days>1?'s':''} logged</div>`:'<div class="ns-val" style="font-size:14px;color:var(--t2);">Log some meals to see your weekly trend</div>'}
    </div>`;
}

function renderMealTemplates(){
  const el=document.getElementById('mealTemplates');
  if(!el)return;
  const templates=getMealTemplates();
  if(!templates.length){el.innerHTML='';return;}
  el.innerHTML=`<div class="mt-lbl">⚡ Quick-add from templates:</div>
    <div class="mt-chips">${templates.map((t,i)=>`
      <div class="mt-chip" data-i="${i}" title="P:${t.P||0} C:${t.C||0} F:${t.F||0} ${t.K||0}kcal">
        <span>${t.name}</span>
        <span class="mt-chip-meta">${t.K||0}kcal</span>
        <button class="mt-chip-del" data-i="${i}" title="Delete template">×</button>
      </div>`).join('')}</div>`;
  el.querySelectorAll('.mt-chip').forEach(chip=>{
    chip.addEventListener('click',e=>{
      if(e.target.classList.contains('mt-chip-del'))return;
      const t=templates[+chip.dataset.i];
      const meal={name:t.name,time:new Date().toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit',hour12:false}),P:t.P||0,C:t.C||0,F:t.F||0,K:t.K||0};
      const cms=getCustomMeals();cms.push(meal);lsSet('custom_meals',cms);
      const d=ls('daily:'+today,{});d['cm_'+(cms.length-1)]=true;lsSet('daily:'+today,d);
      recordMealEvent();
      renderNutrition();renderToday();toast('Logged: '+t.name);
    });
  });
  el.querySelectorAll('.mt-chip-del').forEach(btn=>{
    btn.addEventListener('click',e=>{
      e.stopPropagation();
      if(!confirm('Delete this meal template?'))return;
      delMealTemplate(+btn.dataset.i);renderMealTemplates();toast('Template removed.');
    });
  });
}

/* ════════════════════════════════════════════════
   RENDER: STYLE + BOOKMARKS
   ════════════════════════════════════════════════ */
function renderOutfitPlanner(){
  const days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const todayDow=new Date().getDay()-1;
  document.getElementById('opGrid').innerHTML=days.map((d,i)=>{
    const k='outfit:'+d;
    const val=ls(k,'');
    const isToday=i===todayDow;
    return`<div class="op-day${isToday?' today':''}">
      <div class="op-dn">${d}</div>
      <input class="op-inp" placeholder="—" value="${(val||'').toString().replace(/"/g,'&quot;')}" data-key="${k}" maxlength="20"/>
    </div>`;
  }).join('');
  document.querySelectorAll('.op-inp').forEach(inp=>{
    inp.addEventListener('change',()=>{lsSet(inp.dataset.key,inp.value);});
  });
}

function renderBm(){
  const bms=ls('bookmarks',[]);const g=document.getElementById('bmgrid');
  const filtered = bms.filter(b => {
    const matchCat = bmCatFilter === 'all' || (b.cat||'other').toLowerCase() === bmCatFilter;
    const q = bmSearchQuery.toLowerCase();
    const matchQ = !q || (b.title||'').toLowerCase().includes(q) || (b.url||'').toLowerCase().includes(q);
    return matchCat && matchQ;
  });
  if(!filtered.length){g.innerHTML='<div class="bempty">No bookmarks yet. Add your first link above.</div>';return;}
  const cmap={fitness:'bf',finance:'bn',work:'bw',personal:'bp',other:'bo'};
  g.innerHTML=filtered.map((m,i)=>`
    <div class="bm" data-url="${m.url.replace(/"/g,'&quot;')}">
      <span class="bcat ${cmap[m.cat]||'bo'}">${m.cat}</span>
      <div class="bt2">${m.title}</div><div class="burl">${m.url}</div>
      <button class="bdel" data-i="${bms.indexOf(m)}">Remove</button>
    </div>`).join('');
  g.querySelectorAll('.bm').forEach(el=>{
    el.addEventListener('click',e=>{if(e.target.closest('.bdel'))return;window.open(el.dataset.url,'_blank','noopener');});
  });
  g.querySelectorAll('.bdel').forEach(b=>{
    b.addEventListener('click',e=>{
      e.stopPropagation();const l=ls('bookmarks',[]);l.splice(+b.dataset.i,1);lsSet('bookmarks',l);renderBm();toast('Removed.');
    });
  });
  bindCursor();
}

/* ════════════════════════════════════════════════
   RENDER: PROGRESS
   ════════════════════════════════════════════════ */
function renderProgress(){
  let streak=0,best=0,cur=0,total=0,active=0,rates=[];
  for(let i=60;i>=0;i--){
    const d=new Date();d.setDate(d.getDate()-i);
    const k=d.toISOString().slice(0,10);
    const data=ls('daily:'+k,null);
    if(!data){cur=0;continue;}
    const cnt=Object.values(data).filter(v=>v).length;
    if(!cnt){cur=0;continue;}
    total+=cnt;active++;rates.push(cnt);cur++;if(cur>best)best=cur;
  }
  for(let i=0;i<365;i++){
    const d=new Date();d.setDate(d.getDate()-i);
    const k=d.toISOString().slice(0,10);
    const data=ls('daily:'+k,null);
    if(!data)break;if(!Object.values(data).filter(v=>v).length)break;streak++;
  }
  const allItems=getAllChecks().length+MEALS.reduce((s,m)=>s+m.items.length,0);
  const avg=active?Math.round((rates.reduce((a,b)=>a+b,0)/active/allItems)*100):0;
  document.getElementById('stkn').textContent=streak;
  document.getElementById('bstk').textContent=best;
  document.getElementById('ttasks').textContent=total;
  document.getElementById('avgr').textContent=avg+'%';
  const jStreak=computeJournalStreak();
  const jsEl=document.getElementById('journalStreak');if(jsEl)jsEl.textContent=jStreak;
  renderRadar();renderBarChart(rates);renderWeightChart();renderPR();renderHeat();renderWeeklySummary(streak,rates,avg,allItems);
  renderMeasurements();renderHabitStreaks();renderPhotoGrid();
}

function renderRadar(){
  const sv=document.getElementById('radarsvg');if(!sv)return;
  const cx=140,cy=130,r=90;
  const labels=['Training','Nutrition','Hydration','Sleep','Skincare','Overall'];
  const keys=['gym','protein','water','sleep','skincare',''];
  const allItemsForDay=()=>getAllChecks().length+MEALS.reduce((s,m)=>s+m.items.length,0);
  const scores=labels.map((_,ki)=>{
    if(ki===5){
      let s=0;
      for(let d=0;d<7;d++){const dd=new Date();dd.setDate(dd.getDate()-d);const data=ls('daily:'+dd.toISOString().slice(0,10),{});const cnt=Object.values(data).filter(v=>v).length;s+=Math.min(cnt/allItemsForDay(),1);}
      return s/7;
    }
    let done=0;
    for(let d=0;d<7;d++){const dd=new Date();dd.setDate(dd.getDate()-d);const data=ls('daily:'+dd.toISOString().slice(0,10),{});if(data[keys[ki]])done++;}
    return done/7;
  });
  const n=labels.length;
  const pts=scores.map((s,i)=>{const a=(i/n)*Math.PI*2-Math.PI/2;const sr=r*Math.max(s,.06);return[cx+sr*Math.cos(a),cy+sr*Math.sin(a)];});
  const outer=labels.map((_,i)=>{const a=(i/n)*Math.PI*2-Math.PI/2;return[cx+r*Math.cos(a),cy+r*Math.sin(a)];});
  const toP=arr=>arr.map(p=>p.join(',')).join(' ');
  let bg='';for(let ring=1;ring<=4;ring++){const rpts=labels.map((_,i)=>{const a=(i/n)*Math.PI*2-Math.PI/2;const rr=r*ring/4;return[cx+rr*Math.cos(a),cy+rr*Math.sin(a)];});bg+=`<polygon points="${toP(rpts)}" fill="none" stroke="rgba(255,255,255,.055)" stroke-width="1"/>`;}
  let axes='';outer.forEach(p=>{axes+=`<line x1="${cx}" y1="${cy}" x2="${p[0]}" y2="${p[1]}" stroke="rgba(255,255,255,.055)" stroke-width="1"/>`;});
  let lbls='';labels.forEach((_,i)=>{const a=(i/n)*Math.PI*2-Math.PI/2;const lx=cx+(r+18)*Math.cos(a);const ly=cy+(r+18)*Math.sin(a);lbls+=`<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" fill="rgba(200,200,200,.55)" font-size="9" font-family="inherit" font-weight="700" letter-spacing="1">${labels[i].toUpperCase()}</text>`;});
  sv.innerHTML=`${bg}${axes}<polygon points="${toP(outer)}" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="1"/><polygon points="${toP(pts)}" fill="rgba(200,255,56,.1)" stroke="#c8ff38" stroke-width="2" style="filter:drop-shadow(0 0 8px rgba(200,255,56,.4))"/>${pts.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="#c8ff38"/>`).join('')}${lbls}`;
}

function renderBarChart(){
  const el=document.getElementById('barchart');if(!el)return;
  const allI=getAllChecks().length+MEALS.reduce((s,m)=>s+m.items.length,0);
  el.innerHTML='';
  for(let i=analyticsRange-1;i>=0;i--){
    const d=new Date();d.setDate(d.getDate()-i);
    const k=d.toISOString().slice(0,10);
    const data=ls('daily:'+k,{});
    const cnt=Object.values(data).filter(v=>v).length;
    const pct=allI>0?Math.round((cnt/allI)*100):0;
    const col=document.createElement('div');col.className='bcol';
    col.innerHTML=`<div class="bbar${i===0?' td':''}" style="height:${Math.max((pct/100)*100,2)}px" title="${d.toLocaleDateString('en-US',{month:'short',day:'numeric'})}: ${pct}%"></div><div class="bdl">${d.getDate()}</div>`;
    el.appendChild(col);
  }
}

function renderWeightChart(){
  const wts=Array.from({length:analyticsRange},(_,i)=>{const d=new Date();d.setDate(d.getDate()-(analyticsRange-1-i));return{d:d.getDate(),v:ls('wt:'+d.toISOString().slice(0,10),null)};});
  const latestWt=wts.slice().reverse().find(w=>w.v!==null);
  const prev=wts.slice(0,-1).reverse().find(w=>w.v!==null);
  document.getElementById('wtval').textContent=latestWt?latestWt.v.toFixed(1)+' kg':'— kg';
  const df=document.getElementById('wtdiff');
  if(latestWt&&prev&&prev.v!==null){const diff=latestWt.v-prev.v;df.textContent=(diff>=0?'+':'')+diff.toFixed(1)+' kg';df.className='wt-df '+(diff>=0?'wtup':'wtdn');}
  const sv=document.getElementById('wtsvg');if(!sv)return;
  const pts=wts.filter(w=>w.v!==null);
  if(pts.length<2){sv.innerHTML=`<text x="120" y="40" text-anchor="middle" fill="rgba(255,255,255,.2)" font-size="11">Log weight daily to see trend</text>`;return;}
  const minV=Math.min(...pts.map(w=>w.v))-.3;const maxV=Math.max(...pts.map(w=>w.v))+.3;
  const W=240,H=80;
  const allWts=wts.map((w,i)=>{const x=10+(i/(wts.length-1))*(W-20);const y=w.v!=null?H-10-(w.v-minV)/(maxV-minV)*(H-20):null;return{x,y,v:w.v};}).filter(p=>p.y!==null);
  const path=allWts.map((p,i)=>`${i===0?'M':'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
  sv.innerHTML=`<defs><linearGradient id="wg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="rgba(200,255,56,.3)"/><stop offset="100%" stop-color="rgba(200,255,56,0)"/></linearGradient></defs><path d="${path} L${allWts[allWts.length-1].x},${H} L${allWts[0].x},${H} Z" fill="url(#wg)"/><path d="${path}" fill="none" stroke="#c8ff38" stroke-width="1.5" stroke-linecap="round"/>${allWts.map(p=>`<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="2.5" fill="#c8ff38"/>`).join('')}`;
}

function renderPR(){
  const el=document.getElementById('prgrid');if(!el)return;
  const customs=ls('custom_prs',[]);
  el.innerHTML=getAllPRLifts().map(l=>`
    <div class="pri"><div class="prl">${l}</div>
      <input class="pr-inp" value="${(ls('pr:'+l,'—')||'—').toString().replace(/"/g,'&quot;')}" placeholder="—" data-lift="${l}">
      <div class="pru" style="display:flex;align-items:center;gap:4px;">kg${customs.includes(l)?`<button class="pr-del" data-lift="${l.replace(/"/g,'&quot;')}" title="Remove">×</button>`:''}</div>
    </div>`).join('');
  el.querySelectorAll('.pr-inp').forEach(inp=>{
    inp.addEventListener('change',()=>{lsSet('pr:'+inp.dataset.lift,inp.value);toast('PR saved!');});
  });
  el.querySelectorAll('.pr-del').forEach(btn=>{
    btn.addEventListener('click',e=>{
      e.stopPropagation();
      const arr=ls('custom_prs',[]).filter(l=>l!==btn.dataset.lift);
      lsSet('custom_prs',arr);renderPR();toast('Lift removed.');
    });
  });
}

function renderHeat(){
  const hg=document.getElementById('hgrid');if(!hg)return;
  hg.innerHTML='';
  for(let i=analyticsRange-1;i>=0;i--){
    const d=new Date();d.setDate(d.getDate()-i);
    const k=d.toISOString().slice(0,10);
    const data=ls('daily:'+k,{});
    const cnt=Object.values(data).filter(v=>v).length;
    let lv=0;if(cnt>=1)lv=1;if(cnt>=5)lv=2;if(cnt>=10)lv=3;if(cnt>=15)lv=4;
    const c=document.createElement('div');c.className='hc';c.dataset.l=lv;
    if(i===0)c.dataset.t='1';c.title=`${d.toLocaleDateString('en-US',{month:'short',day:'numeric'})}: ${cnt} items`;
    hg.appendChild(c);
  }
}

function renderMeasurements(){
  const el=document.getElementById('measGrid');if(!el)return;
  const fields=[{id:'chest',l:'Chest'},{id:'waist',l:'Waist'},{id:'hips',l:'Hips'},{id:'larm',l:'L Arm'},{id:'rarm',l:'R Arm'},{id:'bf',l:'Body Fat'}];
  const latest=getLastMeasDate();
  const prev=ls('measurements:'+latest,{});
  const prevDates=[];
  for(let i=0;i<localStorage.length;i++){const k=localStorage.key(i);if(k&&k.startsWith('measurements:')&&k.slice(13)!==latest)prevDates.push(k.slice(13));}
  prevDates.sort().reverse();
  const prevPrev=prevDates.length?ls('measurements:'+prevDates[0],{}):null;
  if(!latest){el.innerHTML='<div style="color:var(--t2);font-size:13px;grid-column:1/-1;">No measurements logged yet.</div>';return;}
  el.innerHTML=fields.map(f=>{
    const v=prev[f.id];const pp=prevPrev?prevPrev[f.id]:null;
    let delta='';
    if(v&&pp){const d=(v-pp);const sign=d>0?'+':'';delta=`<div class="meas-delta ${d>0?'up':'dn'}">${sign}${d.toFixed(1)}</div>`;}
    return`<div class="meas-item"><div class="meas-lbl">${f.l}</div><div class="meas-val">${v||'—'}</div>${delta}</div>`;
  }).join('');
}

function renderHabitStreaks(){
  const el=document.getElementById('habitStreaksGrid');if(!el)return;
  const habits=getAllChecks();
  if(!habits.length){el.innerHTML='<div style="color:var(--t2);font-size:13px;">Add habits to see streaks.</div>';return;}
  const items=habits.map(h=>({l:h.l,streak:computeHabitStreak(h.id)}))
    .sort((a,b)=>b.streak-a.streak);
  el.innerHTML=items.map(h=>`
    <div class="hs-item">
      <span class="hs-lbl">${h.l}</span>
      <span class="hs-streak${h.streak>7?' hot':''}">${h.streak>0?h.streak+'d':'—'}</span>
    </div>`).join('');
}

function renderAnEnergySpark(){
  const el=document.getElementById('anEnergySpark');if(!el)return;
  const bars=[];
  for(let i=29;i>=0;i--){
    const d=new Date();d.setDate(d.getDate()-i);
    const j=ls('journal:'+d.toISOString().slice(0,10),{});
    bars.push(j.energy||0);
  }
  const colors=['rgba(255,255,255,.1)','rgba(255,180,71,.5)','rgba(255,180,71,.7)','rgba(200,255,56,.5)','rgba(200,255,56,.8)','rgba(200,255,56,1)'];
  el.innerHTML=bars.map(v=>`<div class="an-e-bar" style="height:${Math.max(v*9,3)}px;background:${colors[v]||colors[0]};" title="Energy: ${v||'—'}/5"></div>`).join('');
}

function renderWeeklySummary(streak,rates,avg,allItems){
  const el=document.getElementById('wsum');if(!el)return;
  const w=rates.slice(-7);const days=w.length;
  if(!days){el.textContent='Log your first day to see your weekly summary here.';return;}
  const wTotal=w.reduce((a,b)=>a+b,0);const wPct=Math.round((wTotal/(days*allItems))*100)||0;
  const msgs=[wPct>=80?'Exceptional week.':`${wPct}% completion this week.`,streak>6?`${streak}-day streak on track.`:streak>0?`${streak}-day streak. Keep building.`:'Start a streak today.',wPct>=60?'Above target. Stay consistent.':'More effort needed. Tomorrow is the opportunity.',days>=5?'Showed up most days this week.':'Missing days this week. Show up tomorrow.'];
  el.textContent=msgs.join(' ');
}

function animStats(){
  ['stkn','bstk','ttasks'].forEach(id=>{
    const el=document.getElementById(id);if(!el)return;
    const target=parseInt(el.textContent)||0;if(!target)return;
    let start=null;
    (function step(ts){if(!start)start=ts;const p=Math.min((ts-start)/1200,1);const e=1-Math.pow(1-p,3);el.textContent=Math.round(e*target);if(p<1)requestAnimationFrame(step);})(performance.now()-1);
  });
}

/* ════════════════════════════════════════════════
   RENDER: ANALYTICS
   ════════════════════════════════════════════════ */
function dayCompletion(dateKey){
  const data=ls('daily:'+dateKey,{});
  const cnt=Object.values(data).filter(v=>v).length;
  const total=getAllChecks().length+MEALS.reduce((s,m)=>s+m.items.length,0);
  return total>0?Math.round((cnt/total)*100):0;
}

function renderAnalytics(){
  renderAnTop();renderAnCal();renderAnCat();renderAnSpark();renderAnEnergySpark();renderAnInsights();
}

function renderAnTop(){
  let total=0,active=0;
  const dayPcts=[];const dowMap={};
  for(let i=analyticsRange-1;i>=0;i--){
    const d=new Date();d.setDate(d.getDate()-i);
    const k=d.toISOString().slice(0,10);
    const pct=dayCompletion(k);
    dayPcts.push(pct);
    if(pct>0){total+=pct;active++;}
    const dow=d.getDay();
    if(!dowMap[dow])dowMap[dow]={t:0,n:0};
    if(pct>0){dowMap[dow].t+=pct;dowMap[dow].n++;}
  }
  const avg=active?Math.round(total/active):0;
  document.getElementById('an30').textContent=avg+'%';
  document.getElementById('anActive').textContent=active;
  let bestDow=null,bestAvg=0;
  Object.entries(dowMap).forEach(([d,v])=>{if(v.n>0){const a=v.t/v.n;if(a>bestAvg){bestAvg=a;bestDow=+d;}}});
  const dows=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  if(bestDow!==null){
    document.getElementById('anBestDay').textContent=dows[bestDow];
    document.getElementById('anBestDaySub').textContent=Math.round(bestAvg)+'% avg completion';
  }else{
    document.getElementById('anBestDay').textContent='—';
    document.getElementById('anBestDaySub').textContent='no data yet';
  }
  const habitCounts={};
  for(let i=analyticsRange-1;i>=0;i--){
    const d=new Date();d.setDate(d.getDate()-i);
    const data=ls('daily:'+d.toISOString().slice(0,10),{});
    Object.entries(data).forEach(([k,v])=>{if(v&&!k.startsWith('m'))habitCounts[k]=(habitCounts[k]||0)+1;});
  }
  const allCh=getAllChecks();
  let topId=null,topN=0;
  Object.entries(habitCounts).forEach(([k,n])=>{if(n>topN){topN=n;topId=k;}});
  const topLbl=allCh.find(c=>c.id===topId);
  document.getElementById('anTopHabit').textContent=topLbl?topLbl.l:'—';
}

function renderAnCal(){
  const mthNames=['January','February','March','April','May','June','July','August','September','October','November','December'];
  document.getElementById('anCalMth').textContent=mthNames[calMonth]+' '+calYear;
  const cal=document.getElementById('anCal');
  cal.innerHTML='';
  ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].forEach(d=>{
    const e=document.createElement('div');e.className='dow';e.textContent=d;cal.appendChild(e);
  });
  const first=new Date(calYear,calMonth,1);
  const startDow=first.getDay();
  const daysInMonth=new Date(calYear,calMonth+1,0).getDate();
  for(let i=0;i<startDow;i++){const e=document.createElement('div');e.className='day blank';cal.appendChild(e);}
  const todayStr=today;
  for(let d=1;d<=daysInMonth;d++){
    const dateObj=new Date(calYear,calMonth,d);
    const k=dateObj.toISOString().slice(0,10);
    const pct=dayCompletion(k);
    const e=document.createElement('div');e.className='day';
    if(pct>0)e.classList.add('has');
    if(pct>=80)e.classList.add('l4');
    else if(pct>=60)e.classList.add('l3');
    else if(pct>=40)e.classList.add('l2');
    else if(pct>=20)e.classList.add('l1');
    if(k===todayStr)e.classList.add('td');
    e.innerHTML=`<div>${d}</div>${pct>0?`<div class="pct">${pct}%</div>`:''}`;
    e.title=k+': '+pct+'%';
    cal.appendChild(e);
  }
}

function renderAnCat(){
  const cats=[
    {n:'Training',ids:['gym','badminton'],c:'#f87171'},
    {n:'Nutrition',ids:['protein','creatine'],c:'#ffb547',meals:true},
    {n:'Hydration',ids:['water'],c:'#4aeacc'},
    {n:'Sleep',ids:['sleep','noScreen'],c:'#aa96ff'},
    {n:'Skincare',ids:['skincare'],c:'#82a4ff'},
    {n:'Focus',ids:['journal','noPhone'],c:'#c8ff38'},
  ];
  const html=cats.map(cat=>{
    let done=0,total=0;
    for(let i=6;i>=0;i--){
      const d=new Date();d.setDate(d.getDate()-i);
      const data=ls('daily:'+d.toISOString().slice(0,10),{});
      cat.ids.forEach(id=>{total++;if(data[id])done++;});
      if(cat.meals){
        MEALS.forEach((m,mi)=>m.items.forEach((_,ii)=>{total++;if(data['m'+mi+'_'+ii])done++;}));
      }
    }
    const pct=total>0?Math.round((done/total)*100):0;
    return `<div class="an-cat-item">
      <div class="an-cat-name">${cat.n}</div>
      <div class="an-cat-bar"><div class="an-cat-fill" style="width:${pct}%;background:${cat.c};box-shadow:0 0 6px ${cat.c}55"></div></div>
      <div class="an-cat-val" style="color:${cat.c}">${pct}%</div>
    </div>`;
  }).join('');
  document.getElementById('anCatList').innerHTML=html;
}

function renderAnSpark(){
  const sp=document.getElementById('anSpark');
  sp.innerHTML='';
  let max=1;
  const vals=[];
  for(let i=analyticsRange-1;i>=0;i--){
    const d=new Date();d.setDate(d.getDate()-i);
    const pct=dayCompletion(d.toISOString().slice(0,10));
    vals.push(pct);
    if(pct>max)max=pct;
  }
  vals.forEach((v,i)=>{
    const bar=document.createElement('div');
    bar.className='an-spark-bar';
    bar.style.height=Math.max((v/100)*100,2)+'%';
    if(i===vals.length-1){bar.style.background='var(--lime)';bar.style.boxShadow='0 0 6px var(--lime)';}
    else if(v>=60)bar.style.background='rgba(200,255,56,.5)';
    bar.title=v+'% — '+(i===vals.length-1?'today':((vals.length-1-i)+'d ago'));
    sp.appendChild(bar);
  });
}

function renderAnInsights(){
  const out=[];
  const data30=[];
  for(let i=analyticsRange-1;i>=0;i--){
    const d=new Date();d.setDate(d.getDate()-i);
    data30.push({d,pct:dayCompletion(d.toISOString().slice(0,10))});
  }
  const recent7=data30.slice(-7);
  const prev7=data30.slice(-14,-7);
  const avgR=recent7.reduce((s,x)=>s+x.pct,0)/7;
  const avgP=prev7.reduce((s,x)=>s+x.pct,0)/7;
  if(avgP>0){
    const delta=Math.round(avgR-avgP);
    if(Math.abs(delta)>5){
      out.push(`<li>This week trended <strong>${delta>0?'up '+delta:'down '+Math.abs(delta)}%</strong> vs last week.</li>`);
    }else{
      out.push(`<li>You held steady this week — <strong>${Math.round(avgR)}% completion</strong> across all habits.</li>`);
    }
  }
  const zeros=data30.filter(x=>x.pct===0).length;
  if(zeros>5){out.push(`<li>You had <strong>${zeros} blank days</strong> this month. Log something — anything — to keep momentum.</li>`);}
  const highDays=data30.filter(x=>x.pct>=80).length;
  if(highDays>0){out.push(`<li>You crushed <strong>${highDays} day${highDays>1?'s':''}</strong> at 80%+ this month. That is your bar.</li>`);}
  const weekendDays=data30.filter(x=>x.d.getDay()===0||x.d.getDay()===6);
  const weekdayDays=data30.filter(x=>x.d.getDay()>0&&x.d.getDay()<6);
  const we=weekendDays.length?weekendDays.reduce((s,x)=>s+x.pct,0)/weekendDays.length:0;
  const wd=weekdayDays.length?weekdayDays.reduce((s,x)=>s+x.pct,0)/weekdayDays.length:0;
  if(we&&wd&&Math.abs(we-wd)>10){
    out.push(`<li>You perform <strong>${Math.round(Math.abs(wd-we))}% ${wd>we?'better on weekdays':'better on weekends'}</strong>. Adjust accordingly.</li>`);
  }
  const today_pct=data30[data30.length-1]?data30[data30.length-1].pct:0;
  if(today_pct===0){out.push(`<li>Today is still blank. <strong>Stack one win.</strong></li>`);}
  else if(today_pct<50){out.push(`<li>Today is at <strong>${today_pct}%</strong>. Plenty of time to push it higher.</li>`);}
  else if(today_pct>=80){out.push(`<li>Today is already at <strong>${today_pct}%</strong>. Coast the win.</li>`);}
  if(!out.length)out.push('<li>Log a few days to unlock personalized insights.</li>');
  document.getElementById('anInsights').innerHTML=out.join('');
}

/* ════════════════════════════════════════════════
   EXPORT
   ════════════════════════════════════════════════ */
function dl(name,content,type){
  const blob=new Blob([content],{type});
  const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download=name;
  document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
}

function exportCSV(){
  const days=typeof analyticsRange==='number'?analyticsRange:30;
  const allChecks=getAllChecks();
  const rows=[['Date','Completion %','Items Done','Items Total',...allChecks.map(c=>c.l)]];
  const total=allChecks.length+MEALS.reduce((s,m)=>s+m.items.length,0);
  for(let i=days-1;i>=0;i--){
    const d=new Date();d.setDate(d.getDate()-i);
    const k=d.toISOString().slice(0,10);
    const data=ls('daily:'+k,null);
    if(!data)continue;
    const done=Object.values(data).filter(v=>v).length;
    const cells=allChecks.map(c=>data[c.id]?1:0);
    rows.push([k,Math.round((done/total)*100),done,total,...cells]);
  }
  const csv=rows.map(r=>r.join(',')).join('\n');
  dl(`life-os-${days}-days.csv`,csv,'text/csv');
  toast('CSV downloaded.');
}

function exportJSON(){
  const payload={version:2,exported:new Date().toISOString(),user:fbUser?fbUser.email:null,data:collectSyncData()};
  dl('life-os-backup.json',JSON.stringify(payload,null,2),'application/json');
  toast('JSON downloaded.');
}

async function copySummary(){
  let streak=0;
  for(let i=0;i<365;i++){const d=new Date();d.setDate(d.getDate()-i);const dd=ls('daily:'+d.toISOString().slice(0,10),null);if(!dd)break;if(!Object.values(dd).filter(v=>v).length)break;streak++;}
  const pct=dayCompletion(today);
  const text=`📊 Life OS — ${today}\n━━━━━━━━━━━━━━━━\n🔥 Streak: ${streak} days\n⚡ Today: ${pct}% complete\n💪 Phase: ${SPLIT[Math.max(0,new Date().getDay()-1)].split}\n\nBeyond Standard.`;
  try{await navigator.clipboard.writeText(text);toast('Copied to clipboard!');}
  catch{toast('Copy failed.');}
}

/* ════════════════════════════════════════════════
   REST TIMER
   ════════════════════════════════════════════════ */
function initTimer(){
  document.querySelectorAll('.rt-btn').forEach(b=>{
    b.addEventListener('click',()=>{
      document.querySelectorAll('.rt-btn').forEach(x=>x.classList.remove('sel'));
      b.classList.add('sel');rtSec=+b.dataset.sec;rtCur=rtSec;
      if(rtInt)clearInterval(rtInt);rtRun=false;updateRT();document.getElementById('rtgo').textContent='Start Rest Timer';
    });
  });
  document.getElementById('rtgo').addEventListener('click',()=>{
    if(rtRun){clearInterval(rtInt);rtRun=false;rtCur=rtSec;updateRT();document.getElementById('rtgo').textContent='Start Rest Timer';return;}
    rtRun=true;document.getElementById('rtgo').textContent='Stop';
    rtInt=setInterval(()=>{rtCur--;updateRT();if(rtCur<=0){clearInterval(rtInt);rtRun=false;document.getElementById('rtgo').textContent='Start Rest Timer';toast('Rest done — next set!');showNotif('💪 Rest Done','Next set, now.');}},1000);
  });
}
function updateRT(){
  const d=document.getElementById('rtdisp');if(!d)return;
  d.textContent=`${Math.floor(rtCur/60)}:${String(rtCur%60).padStart(2,'0')}`;
  d.className='rt-disp'+(rtRun?' run':rtCur===0?' dn':'');
}

/* ════════════════════════════════════════════════
   CURSOR + ORB + TOAST + KEYBOARD
   ════════════════════════════════════════════════ */
const dot=document.getElementById('cdot'),ring=document.getElementById('cring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px';});
(function loop(){rx+=(mx-rx)*.12;ry+=(my-ry)*.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(loop);})();
function bindCursor(){
  document.querySelectorAll('button,a,label,.ch,.bm,.dtab,.ndot,.blk,.mi,.pill,.sbig,.glass,.bm-chip,.sc,.te-card,.op-day,.an-stat,.an-ex-btn').forEach(el=>{
    if(!el._cb){
      el.addEventListener('mouseenter',()=>{dot.classList.add('hov');ring.classList.add('hov');});
      el.addEventListener('mouseleave',()=>{dot.classList.remove('hov');ring.classList.remove('hov');});
      el._cb=true;
    }
  });
}

/* ════════════════════════════════════════════════
   SAGE CAT BRAIN
   Multiple poses · contextual quotes · pointing behavior
   ════════════════════════════════════════════════ */
const CAT_QUOTES={
  sage:[
    "The mountain teaches patience. Today's reps build tomorrow's body.",
    "Slow is smooth. Smooth is fast.",
    "Sharpen the axe before you swing it. Plan, then act.",
    "The fox knows many things. The hedgehog one big thing. Choose.",
    "What you tolerate, you teach. Raise the standard.",
    "Discipline is choosing between what you want now and what you want most.",
    "The cave you fear holds the treasure you seek.",
    "Rest is not the opposite of work — it is part of it.",
    "Compound interest works on habits too. Show up.",
    "The body achieves what the mind believes — and the schedule enforces.",
  ],
  motivational:[
    "Future you is watching. Don't disappoint them.",
    "One rep at a time. One meal at a time.",
    "Show up bored. Show up tired. Just show up.",
    "Today is the only day. Tomorrow is fiction.",
    "Stack the win. Then stack another.",
    "Hard work beats talent that doesn't work hard.",
    "Champions are not made in gyms. They are made in choices.",
    "The pain you feel today is the strength you feel tomorrow.",
    "Train insane or remain the same.",
    "Bricks. Just lay one more brick.",
  ],
  funny:[
    "*meow* — hydrate, human.",
    "I napped 14 hours. Be more like me.",
    "I demand tribute. Check water.",
    "9 lives. Still picking excuses. Pick discipline.",
    "Skipped your workout? I would knock things off the table.",
    "Carbs are not the enemy. Skipped workouts are.",
    "You called yourself busy. I see Netflix in your browser history.",
    "If you can scroll, you can plank.",
    "Cats nap to recover. You scroll. Pick one.",
    "*purr* good. Now eat protein.",
  ],
  contextual:{
    today:["Start with water. Always water.","Check one thing. Build momentum.","One non-negotiable, no excuses."],
    schedule:["Alarms set tonight save the morning.","The clock is your accountability.","Time-blocked = decision-made."],
    training:["Mind-muscle. Every rep.","Last 2 reps build muscle.","Form > weight. Always.","Track it or it didn't happen."],
    nutrition:["Protein first. Carbs second.","Slow chew. Full faster.","Hydrate before you eat.","Hit your target before snacks."],
    style:["Plan tomorrow's fit tonight.","Confidence wears a quiet shirt.","Fit > brand. Always."],
    bookmarks:["Out of sight = out of mind. Pin it.","Centralize. Don't scatter."],
    progress:["Streaks compound. Don't break twice.","The data does not lie.","Receipts > feelings."],
    analytics:["Pattern recognition is the real skill.","You optimize what you measure.","Trends > today."],
  }
};

let catState={pose:'walk',busy:false,lastQuoteAt:0};

function setCatPose(pose){
  const cat=document.getElementById('pcat');
  if(!cat)return;
  catState.pose=pose;
  cat.dataset.pose=pose;
  cat.querySelectorAll('.pose').forEach(g=>g.classList.toggle('on',g.dataset.pose===pose));
  const g=document.getElementById('gorb');
  if(!g)return;
  g.classList.remove('walking','celebrate','point-right');
  if(pose==='walk')g.classList.add('walking');
  else if(pose==='point')g.classList.add('point-right');
}

function catSay(text,tag='Sage',duration=4500){
  const g=document.getElementById('gorb');
  const t=document.getElementById('obblText');
  const tg=document.getElementById('obblTag');
  if(!g||!t)return;
  if(tg)tg.textContent=tag;
  t.textContent=text;
  g.classList.add('sb');
  clearTimeout(catSay._t);
  catSay._t=setTimeout(()=>g.classList.remove('sb'),duration);
  catState.lastQuoteAt=Date.now();
}

function pickQuote(){
  const pools=['sage','motivational','funny'];
  const pool=pools[Math.floor(Math.random()*pools.length)];
  const arr=CAT_QUOTES[pool];
  return {text:arr[Math.floor(Math.random()*arr.length)],tag:pool.charAt(0).toUpperCase()+pool.slice(1)};
}

function catContextualHint(){
  const id=SECS[curSec]?.id||'today';
  const arr=CAT_QUOTES.contextual[id]||CAT_QUOTES.contextual.today;
  return {text:arr[Math.floor(Math.random()*arr.length)],tag:id.charAt(0).toUpperCase()+id.slice(1)};
}

// Idle cycle: every 18-35s a random action
function catIdleTick(){
  if(catState.busy)return;
  const r=Math.random();
  if(r<0.45){
    // Talk while walking
    const q=Math.random()<0.4?catContextualHint():pickQuote();
    catSay(q.text,q.tag);
  }else if(r<0.65){
    // Sit + sage quote
    catState.busy=true;setCatPose('sit');
    const q=pickQuote();catSay(q.text,q.tag,5000);
    setTimeout(()=>{setCatPose('walk');catState.busy=false;},5200);
  }else if(r<0.80){
    // Stretch + motivational
    catState.busy=true;setCatPose('stretch');
    catSay(CAT_QUOTES.motivational[Math.floor(Math.random()*CAT_QUOTES.motivational.length)],'Stretch',3500);
    setTimeout(()=>{setCatPose('walk');catState.busy=false;},3700);
  }else if(r<0.92){
    // Quick sleep
    catState.busy=true;setCatPose('sleep');
    catSay('zZz... wake me when you log water.','Nap',3000);
    setTimeout(()=>{setCatPose('walk');catState.busy=false;},3200);
  }else{
    // Point at something on screen
    catPointAtRandom();
  }
}

// Pause walking and point at a notable element in the current section
function catPointAtRandom(){
  const targets={
    today:['#waterRing','#dpBar','#xpHud','#checks .ch:first-child','#journalWin'],
    schedule:['#bgrid .blk:first-child','#addBlockBtn'],
    training:['#logSessionBtn','#sessionHistory','.train-hero'],
    nutrition:['.mrings .mrc:first-child','#nutritionStats .ns-card:first-child','#mealTemplates'],
    style:['.outfit-plan','.sg .sc:first-child'],
    bookmarks:['#bmSearch','#bmgrid'],
    progress:['.stk-hero','#measGrid','#habitStreaksGrid','#photoGrid'],
    analytics:['#anRange','#anEnergySpark','.an-stat:first-child']
  };
  const id=SECS[curSec]?.id||'today';
  const candidates=(targets[id]||targets.today).map(s=>document.querySelector(s)).filter(Boolean);
  if(!candidates.length)return;
  const target=candidates[Math.floor(Math.random()*candidates.length)];
  const rect=target.getBoundingClientRect();
  if(rect.width===0||rect.height===0)return;
  catState.busy=true;
  const g=document.getElementById('gorb');
  g.classList.add('fixed');
  g.classList.remove('walking','reverse');
  // Position cat directly below the target
  const targetCenterX=rect.left+rect.width/2;
  const catX=Math.max(8,Math.min(window.innerWidth-72,targetCenterX-26));
  const catBottom=Math.max(20,window.innerHeight-rect.top+8);
  g.style.left=catX+'px';
  g.style.bottom=catBottom+'px';
  setCatPose('point');
  target.classList.add('cat-highlight');
  const hints=[
    'Look here. This is the metric.',
    'Eyes on this. The truth lives here.',
    'This. This is what matters today.',
    'Notice the pattern. Then act.',
    'Tend this card. Daily.',
    'Small numbers. Big compounding.',
  ];
  catSay(hints[Math.floor(Math.random()*hints.length)],'Pointing',5000);
  setTimeout(()=>{
    target.classList.remove('cat-highlight');
    g.classList.remove('fixed');
    g.style.left='';g.style.bottom='';
    setCatPose('walk');
    catState.busy=false;
  },5500);
}

// Public reactions
function catReact(event){
  if(catState.busy)return;
  const reactions={
    habitChecked:[
      {pose:'celebrate',msg:'Yes! Stack it.',tag:'Pump'},
      {pose:'celebrate',msg:'Brick laid. Next.',tag:'Pump'},
    ],
    waterLogged:[
      {pose:'stretch',msg:'*purrr* good hydration human.',tag:'Approval'},
      {pose:'sit',msg:'Cells thank you.',tag:'Sage'},
    ],
    sessionLogged:[
      {pose:'celebrate',msg:'A receipt for tomorrow.',tag:'Pump'},
    ],
    sectionChange:[
      {pose:'walk',quoteFromContext:true},
    ],
  };
  const pool=reactions[event];
  if(!pool)return;
  const r=pool[Math.floor(Math.random()*pool.length)];
  if(r.quoteFromContext){
    const q=catContextualHint();catSay(q.text,q.tag);return;
  }
  catState.busy=true;
  const prev=catState.pose;
  setCatPose(r.pose);
  catSay(r.msg,r.tag||'Cat',3000);
  setTimeout(()=>{setCatPose(prev==='point'?'walk':prev);catState.busy=false;},3100);
}

setInterval(catIdleTick,28000);
// First quote shortly after page load
setTimeout(()=>{const q=catContextualHint();catSay(q.text,q.tag);},6500);

document.addEventListener('DOMContentLoaded',()=>{
  const g=document.getElementById('gorb');
  if(!g)return;
  setCatPose('walk');
  g.addEventListener('click',()=>{
    if(catState.busy)return;
    catState.busy=true;
    setCatPose('stretch');
    const q=pickQuote();catSay(q.text,q.tag,4000);
    setTimeout(()=>{setCatPose('walk');catState.busy=false;},2400);
  });
});

function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.remove('show'),2400);}

document.addEventListener('keydown',e=>{
  if(e.target.matches('input,select,textarea'))return;
  if(e.key==='ArrowRight'||e.key==='ArrowDown')goTo(Math.min(curSec+1,SECS.length-1));
  if(e.key==='ArrowLeft'||e.key==='ArrowUp')goTo(Math.max(curSec-1,0));
  if(e.key==='Escape'){document.getElementById('settingsPanel').classList.remove('show');}
});

/* ── TOUCH / SWIPE NAVIGATION ── */
(function(){
  let tStartX=0,tStartY=0,tStartT=0,tracking=false;
  const SWIPE_MIN=60, SWIPE_MAX_Y=80, SWIPE_MAX_T=500;
  const secs=document.querySelector('.secs');
  if(!secs)return;
  function isInScrollable(el){
    while(el && el!==secs){
      if(el.classList && (el.classList.contains('tlb-wrap')||el.classList.contains('dtabs')||el.classList.contains('tlb-wrap'))) return true;
      const cs=window.getComputedStyle(el);
      if(cs.overflowX==='auto'||cs.overflowX==='scroll'){
        if(el.scrollWidth>el.clientWidth)return true;
      }
      el=el.parentElement;
    }
    return false;
  }
  secs.addEventListener('touchstart',e=>{
    if(e.touches.length!==1)return;
    if(e.target.closest('input,select,textarea,button'))return;
    if(isInScrollable(e.target))return;
    tStartX=e.touches[0].clientX;tStartY=e.touches[0].clientY;tStartT=Date.now();tracking=true;
  },{passive:true});
  secs.addEventListener('touchend',e=>{
    if(!tracking)return;tracking=false;
    const t=e.changedTouches[0];
    const dx=t.clientX-tStartX, dy=t.clientY-tStartY, dt=Date.now()-tStartT;
    if(dt>SWIPE_MAX_T)return;
    if(Math.abs(dy)>SWIPE_MAX_Y)return;
    if(Math.abs(dx)<SWIPE_MIN)return;
    if(dx<0)goTo(Math.min(curSec+1,SECS.length-1));
    else goTo(Math.max(curSec-1,0));
  },{passive:true});
  secs.addEventListener('touchcancel',()=>{tracking=false;},{passive:true});
})();

/* ════════════════════════════════════════════════
   GLOBAL RE-RENDER
   ════════════════════════════════════════════════ */
function rerenderAll(){
  curP=ls('profile','A');
  document.getElementById('pswitch').dataset.p=curP;
  renderToday();renderSched();renderTraining();renderNutrition();renderOutfitPlanner();renderBm();
  if(curSec===6)renderProgress();
  if(curSec===7)renderAnalytics();
}

/* ════════════════════════════════════════════════
   INIT
   ════════════════════════════════════════════════ */
function init(){
  buildNav();updateNav();
  document.getElementById('cdate').textContent=new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'});
  updateClock();setInterval(updateClock,1000);

  // Profile switch
  const ps=document.getElementById('pswitch');ps.dataset.p=curP;
  ps.addEventListener('click',e=>{
    const b=e.target.closest('[data-p]');if(!b||b===ps)return;
    curP=b.dataset.p;lsSet('profile',curP);ps.dataset.p=curP;
    renderSched();renderToday();scheduleAllNotifications();
    toast('Schedule updated to '+(curP==='A'?'7–9 AM':'8–10 AM')+' badminton');
  });

  document.getElementById('bmSearch')?.addEventListener('input', e => {
    bmSearchQuery = e.target.value;
    renderBm();
  });
  document.getElementById('bmCats')?.addEventListener('click', e => {
    const btn = e.target.closest('.bm-cat-btn');
    if (!btn) return;
    bmCatFilter = btn.dataset.cat;
    document.querySelectorAll('.bm-cat-btn').forEach(b => b.classList.toggle('active', b === btn));
    renderBm();
  });

  // Bookmark add
  document.getElementById('bmadd').addEventListener('click',()=>{
    let url=document.getElementById('bmu').value.trim();
    const title=document.getElementById('bmt').value.trim();
    const cat=document.getElementById('bmc').value;
    if(!title||!url){toast('Title and URL required.');return;}
    if(!/^https?:\/\//.test(url))url='https://'+url;
    const l=ls('bookmarks',[]);l.push({title,url,cat});lsSet('bookmarks',l);
    document.getElementById('bmt').value='';document.getElementById('bmu').value='';
    renderBm();toast('Bookmark saved.');
  });
  document.querySelectorAll('.bm-chip').forEach(b=>{
    b.addEventListener('click',()=>{
      document.getElementById('bmc').value=b.dataset.cat;
      document.getElementById('bmt').focus();
      toast('Category set to '+b.dataset.cat+'. Add the URL.');
    });
  });

  // Custom check add
  document.getElementById('addcheck').addEventListener('click',()=>{
    const val=document.getElementById('newcheck').value.trim();
    if(!val){toast('Enter a habit name.');return;}
    const custom=getCustomChecks();
    if(custom.includes(val)){toast('Already exists.');return;}
    if(custom.length>=15){toast('Maximum 15 custom habits.');return;}
    custom.push(val);saveCustomChecks(custom);
    document.getElementById('newcheck').value='';
    renderToday();toast('Habit added!');
  });
  document.getElementById('newcheck').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('addcheck').click();});

  // Weight log
  document.getElementById('wtsv').addEventListener('click',()=>{
    const v=parseFloat(document.getElementById('wtinp').value);
    if(isNaN(v)||v<30||v>250){toast('Enter a valid weight.');return;}
    lsSet('wt:'+today,v);renderWeightChart();toast('Weight logged: '+v.toFixed(1)+' kg');
  });

  // ── PWA install bar ──
  document.getElementById('installBtn').addEventListener('click',triggerInstall);
  document.getElementById('installDismiss').addEventListener('click',()=>{
    lsSet('pwa_dismissed',true);
    document.getElementById('installBar').classList.remove('show');
  });
  // If running as installed PWA, mark it and ensure bar stays hidden
  if(isStandalone())lsSet('pwa_installed',true);
  refreshInstallUI();

  // ── Auth modal: dual-form (sign-in / sign-up) + horizontal config side ──
  const setAuthMode=mode=>{
    document.querySelectorAll('.auth-mode-tab').forEach(t=>t.classList.toggle('active',t.dataset.mode===mode));
    document.getElementById('signInForm').classList.toggle('active',mode==='signin');
    document.getElementById('signUpForm').classList.toggle('active',mode==='signup');
    document.getElementById('googleBtnLabel').textContent=mode==='signup'?'Sign up with Google':'Continue with Google';
    document.getElementById('authMsg').textContent='';
  };
  document.querySelectorAll('.auth-mode-tab').forEach(tab=>tab.addEventListener('click',()=>setAuthMode(tab.dataset.mode)));

  document.getElementById('siSubmit')?.addEventListener('click',()=>{
    const email=document.getElementById('siEmail').value.trim();
    const pass=document.getElementById('siPass').value;
    if(!email||!pass){document.getElementById('authMsg').textContent='Enter email and password.';document.getElementById('authMsg').className='auth-msg err';return;}
    handleFbSignIn(email,pass,false);
  });
  document.getElementById('siForgot')?.addEventListener('click',async()=>{
    const email=document.getElementById('siEmail').value.trim();
    if(!email){document.getElementById('authMsg').textContent='Enter your email above first.';document.getElementById('authMsg').className='auth-msg err';return;}
    if(!fbAuth){document.getElementById('authMsg').textContent='Firebase not initialized.';document.getElementById('authMsg').className='auth-msg err';return;}
    try{await fbAuth.sendPasswordResetEmail(email);document.getElementById('authMsg').textContent='✓ Reset email sent to '+email;document.getElementById('authMsg').className='auth-msg ok';}
    catch(e){document.getElementById('authMsg').textContent='✗ '+e.message;document.getElementById('authMsg').className='auth-msg err';}
  });

  document.getElementById('suSubmit')?.addEventListener('click',async()=>{
    const name=document.getElementById('suName').value.trim();
    const email=document.getElementById('suEmail').value.trim();
    const pass=document.getElementById('suPass').value;
    const pass2=document.getElementById('suPass2').value;
    const msg=document.getElementById('authMsg');
    if(!email||!pass){msg.textContent='Email and password required.';msg.className='auth-msg err';return;}
    if(pass.length<6){msg.textContent='Password must be at least 6 characters.';msg.className='auth-msg err';return;}
    if(pass!==pass2){msg.textContent='Passwords do not match.';msg.className='auth-msg err';return;}
    msg.textContent='Creating account…';msg.className='auth-msg';
    try{
      const cred=await fbAuth.createUserWithEmailAndPassword(email,pass);
      if(name&&cred.user)await cred.user.updateProfile({displayName:name});
      setTimeout(()=>{document.getElementById('authModal').classList.remove('show');toast('Welcome to Life OS!');},600);
    }catch(e){msg.textContent='✗ '+e.message;msg.className='auth-msg err';}
  });

  document.getElementById('fbAuthSkip')?.addEventListener('click',()=>{
    localStorage.setItem('pwa_dismissed_auth',JSON.stringify(true));
    document.getElementById('authModal').classList.remove('show');
  });
  document.getElementById('fbGoogleBtn')?.addEventListener('click',handleGoogleSignIn);

  // Config side-panel toggle (horizontal expansion)
  const authCard=document.getElementById('authCard');
  const cfgBtn=document.getElementById('fbConfigBtn');
  const cfgBtnLabel=document.getElementById('fbConfigBtnLabel');
  const toggleCfg=open=>{
    const isOpen=open!==undefined?open:!authCard.classList.contains('config-open');
    authCard.classList.toggle('config-open',isOpen);
    cfgBtn.classList.toggle('open',isOpen);
    cfgBtnLabel.textContent=isOpen?'Close config':'Paste Firebase config';
    if(isOpen){
      const stored=localStorage.getItem('fb_config');
      const ta=document.getElementById('fbConfigTextarea');
      if(stored&&!ta.value)ta.value=stored;
      setTimeout(()=>ta.focus(),350);
    }
  };
  cfgBtn?.addEventListener('click',()=>toggleCfg());
  document.getElementById('fbConfigClose')?.addEventListener('click',()=>toggleCfg(false));
  document.getElementById('fbSaveConfigBtn')?.addEventListener('click',()=>{
    handleFbConfig(document.getElementById('fbConfigTextarea').value.trim());
    setTimeout(()=>toggleCfg(false),700);
  });

  // ── Dashboard details modal ──
  document.getElementById('detailsClose')?.addEventListener('click',closeDetails);
  document.getElementById('detailsModal')?.addEventListener('click',e=>{if(e.target===document.getElementById('detailsModal'))closeDetails();});
  // Wire clickable dashboard cards (Today section)
  const wire=(sel,type)=>{
    const el=document.querySelector(sel);
    if(!el)return;
    el.classList.add('dashboard-clickable');
    el.addEventListener('click',ev=>{
      // Don't trigger when clicking interactive children (inputs, buttons)
      if(ev.target.closest('input,button,select,textarea,a,label,.water-add-btn,.water-edit-btn,.edot'))return;
      openDetails(type);
    });
  };
  wire('.day-prog-hero','streak');
  wire('#sec-today .body-stats .bs-card:nth-child(1)','water');
  wire('#sec-today .body-stats .bs-card:nth-child(2)','sleep');
  wire('#sec-today .body-stats .bs-card:nth-child(3)','steps');
  wire('#xpHud','xp');
  wire('#sec-today .today-extra .te-card:nth-child(1)','streak'); // Current Streak
  wire('#sec-today .today-extra .te-card:nth-child(2)','training'); // Today's Training
  wire('#sec-today .today-extra .te-card.journal-card','journal'); // Journal card
  // Sub-stats in the day-prog-hero: split clicks by data-attr is complex, hero -> streak is enough

  // ── Habit edit modal ──
  const habitEditModal=document.getElementById('habitEditModal');
  const closeHabitEdit=()=>habitEditModal.classList.remove('show');
  document.getElementById('habitEditClose')?.addEventListener('click',closeHabitEdit);
  document.getElementById('heCancelBtn')?.addEventListener('click',closeHabitEdit);
  habitEditModal?.addEventListener('click',e=>{if(e.target===habitEditModal)closeHabitEdit();});
  document.getElementById('heSaveBtn')?.addEventListener('click',()=>{
    if(!pendingHabitEditId)return;
    const cat=document.getElementById('heCategory').value;
    const xp=Math.max(1,Math.min(5,parseInt(document.getElementById('heXP').value)||1));
    const cooldown=Math.max(0,parseFloat(document.getElementById('heCooldown').value)||0);
    setHabitMeta(pendingHabitEditId,{cat,xp,cooldown});
    closeHabitEdit();renderToday();toast('Habit settings saved.');
  });
  document.getElementById('hePauseBtn')?.addEventListener('click',()=>{
    if(!pendingHabitEditId)return;
    const cur=isHabitPaused(pendingHabitEditId,today);
    setHabitPaused(pendingHabitEditId,today,!cur);
    closeHabitEdit();renderToday();toast(cur?'Resumed.':'Skipped today — streak protected.');
  });
  document.getElementById('heResetCdBtn')?.addEventListener('click',()=>{
    if(!pendingHabitEditId)return;
    if(!confirm('Reset cooldown? Habit will be available immediately.'))return;
    lsRm('habit_last:'+pendingHabitEditId);
    closeHabitEdit();renderToday();toast('Cooldown reset.');
  });

  // ── Live cooldown tick: update countdowns every minute ──
  setInterval(()=>{
    if(curSec!==0)return;
    document.querySelectorAll('.ch-cd[data-id]').forEach(el=>{
      const rem=getHabitCooldownRemaining(el.dataset.id);
      if(rem<=0){renderToday();return;}
      el.textContent=formatCooldown(rem);
    });
  },60000);
  // ── Header buttons ──
  document.getElementById('syncChip').addEventListener('click',()=>{
    if(!fbUser){document.getElementById('authModal').classList.add('show');return;}
    fbAttachListener();toast('↻ Syncing…');
  });
  document.getElementById('settingsBtn').addEventListener('click',()=>{
    document.getElementById('settingsPanel').classList.add('show');
    updateUserUI();
  });

  // ── Settings panel ──
  document.getElementById('spClose').addEventListener('click',()=>document.getElementById('settingsPanel').classList.remove('show'));
  const fbSyncToggle=document.getElementById('fbSyncToggle');
  if(fbSyncToggle){
    fbSyncToggle.addEventListener('click',()=>{
      if(fbUser){handleFbSignOut();}
      else{document.getElementById('authModal').classList.add('show');}
    });
  }
  const fbSyncNowBtn=document.getElementById('fbSyncNowBtn');
  if(fbSyncNowBtn){
    fbSyncNowBtn.addEventListener('click',()=>{
      if(!fbUser){toast('Not signed in.');return;}
      fbAttachListener();toast('↻ Syncing…');
    });
  }
  const fbConfigSettingsBtn=document.getElementById('fbConfigSettingsBtn');
  if(fbConfigSettingsBtn){
    fbConfigSettingsBtn.addEventListener('click',()=>{
      document.getElementById('authModal').classList.add('show');
    });
  }

  // ── Notifications ──
  const notifyToggle=document.getElementById('notifyToggle');
  notifyToggle.classList.toggle('on',ls('notify_enabled',false));
  notifyToggle.addEventListener('click',async()=>{
    const isOn=ls('notify_enabled',false);
    if(!isOn){
      const ok=await enableNotifications();
      if(ok){lsSet('notify_enabled',true);notifyToggle.classList.add('on');scheduleAllNotifications();}
    }else{
      lsSet('notify_enabled',false);notifyToggle.classList.remove('on');clearNotifyTimers();toast('Reminders disabled.');
    }
  });
  const notifyMin=document.getElementById('notifyMin');
  notifyMin.value=ls('notify_min',5);
  notifyMin.addEventListener('change',()=>{lsSet('notify_min',+notifyMin.value);scheduleAllNotifications();toast('Lead time: '+notifyMin.value+' min');});
  document.getElementById('notifyTest').addEventListener('click',async()=>{
    const ok=await enableNotifications();
    if(ok)showNotif('🔔 Test Notification','This is what reminders will look like.');
  });
  document.getElementById('installAppBtn').addEventListener('click',triggerInstall);
  document.getElementById('exportAllBtn').addEventListener('click',exportJSON);
  document.getElementById('clearLocalBtn').addEventListener('click',()=>{
    if(confirm('Clear ALL local data? This cannot be undone (cloud backup preserved if connected).')){
      const fbCfg=localStorage.getItem('fb_config'),fbUid=localStorage.getItem('fb_uid'),fbEmail=localStorage.getItem('fb_email');
      localStorage.clear();
      if(fbCfg){localStorage.setItem('fb_config',fbCfg);localStorage.setItem('fb_uid',fbUid||'');localStorage.setItem('fb_email',fbEmail||'');}
      toast('Local data cleared.');setTimeout(()=>location.reload(),800);
    }
  });

  // ── Analytics buttons ──
  document.getElementById('anRange')?.addEventListener('click', e => {
    const btn = e.target.closest('.an-range-btn');
    if (!btn) return;
    analyticsRange = parseInt(btn.dataset.days);
    document.querySelectorAll('.an-range-btn').forEach(b => b.classList.toggle('active', b === btn));
    renderAnalytics();
  });
  document.getElementById('anCalPrev').addEventListener('click',()=>{calMonth--;if(calMonth<0){calMonth=11;calYear--;}renderAnCal();});
  document.getElementById('anCalNext').addEventListener('click',()=>{calMonth++;if(calMonth>11){calMonth=0;calYear++;}renderAnCal();});
  document.getElementById('exCSV')?.addEventListener('click',exportCSV);
  document.getElementById('exJSON')?.addEventListener('click',exportJSON);
  document.getElementById('exShare')?.addEventListener('click',copySummary);
  document.getElementById('exBackup')?.addEventListener('click',()=>{
    if(!fbUser){document.getElementById('authModal').classList.add('show');return;}
    fbAttachListener();toast('↻ Force syncing…');
  });

  // Session logger
  const sessModal=document.getElementById('sessionModal');
  const closeSessionModal=()=>sessModal.classList.remove('show');
  document.getElementById('logSessionBtn').addEventListener('click',()=>openSessionModal(activeDayIdx));
  document.getElementById('saveSessionBtn').addEventListener('click',saveSession);
  document.getElementById('cancelSessionBtn').addEventListener('click',closeSessionModal);
  document.getElementById('sessionModalClose').addEventListener('click',closeSessionModal);
  sessModal.addEventListener('click',e=>{if(e.target===sessModal)closeSessionModal();});

  // ── Edit macro targets ──
  const editTargetsBtn=document.getElementById('editTargetsBtn');
  const macroTargetsForm=document.getElementById('macroTargetsForm');
  if(editTargetsBtn&&macroTargetsForm){
    editTargetsBtn.addEventListener('click',()=>{
      const isOpen=macroTargetsForm.classList.toggle('open');
      if(isOpen){
        const t=getMacroTargets();
        document.getElementById('tgtP').value=t.P||'';
        document.getElementById('tgtC').value=t.C||'';
        document.getElementById('tgtF').value=t.F||'';
        document.getElementById('tgtK').value=t.K||'';
      }
    });
  }
  const saveTargetsBtn=document.getElementById('saveTargetsBtn');
  if(saveTargetsBtn){
    saveTargetsBtn.addEventListener('click',()=>{
      const P=parseInt(document.getElementById('tgtP').value)||MACRO_DEFAULTS.P;
      const C=parseInt(document.getElementById('tgtC').value)||MACRO_DEFAULTS.C;
      const F=parseInt(document.getElementById('tgtF').value)||MACRO_DEFAULTS.F;
      const K=parseInt(document.getElementById('tgtK').value)||MACRO_DEFAULTS.K;
      lsSet('macro_targets',{P,C,F,K});
      document.getElementById('macroTargetsForm').classList.remove('open');
      renderNutrition();
      toast('Macro targets updated!');
    });
  }

  // ── Save last custom meal as template ──
  document.getElementById('saveAsTemplateBtn')?.addEventListener('click',()=>{
    const cms=getCustomMeals();
    if(!cms.length){toast('Add a custom meal first to save as template.');return;}
    const last=cms[cms.length-1];
    saveMealTemplate({name:last.name,P:last.P||0,C:last.C||0,F:last.F||0,K:last.K||0});
    renderMealTemplates();toast('Saved "'+last.name+'" as template.');
  });

  // ── Add custom meal ──
  const addCustomMealBtn=document.getElementById('addCustomMealBtn');
  const customMealForm=document.getElementById('customMealForm');
  if(addCustomMealBtn&&customMealForm){
    addCustomMealBtn.addEventListener('click',()=>customMealForm.classList.toggle('open'));
  }
  const saveCustomMealBtn=document.getElementById('saveCustomMealBtn');
  if(saveCustomMealBtn){
    saveCustomMealBtn.addEventListener('click',()=>{
      const name=document.getElementById('cmName').value.trim();
      if(!name){toast('Meal name required.');return;}
      const meal={
        name,
        time:document.getElementById('cmTime').value.trim()||'—',
        P:Number(document.getElementById('cmP').value)||0,
        C:Number(document.getElementById('cmC').value)||0,
        F:Number(document.getElementById('cmF').value)||0,
        K:Number(document.getElementById('cmK').value)||0,
      };
      const arr=getCustomMeals();arr.push(meal);lsSet('custom_meals',arr);
      ['cmName','cmTime','cmP','cmC','cmF','cmK'].forEach(id=>document.getElementById(id).value='');
      document.getElementById('customMealForm').classList.remove('open');
      renderNutrition();
      toast('Custom meal added!');
    });
  }

  // ── Habit Suggestions ──
  document.querySelectorAll('.hs-sg-chip').forEach(chip=>{
    chip.addEventListener('click',()=>{
      const val=chip.dataset.h;
      const custom=getCustomChecks();
      if(custom.includes(val)){toast('Already added.');return;}
      if(custom.length>=15){toast('Maximum 15 custom habits.');return;}
      custom.push(val);saveCustomChecks(custom);
      renderToday();toast('Habit added: '+val);
    });
  });

  // ── Floating Action Button ──
  const fab=document.getElementById('fabMain');
  const fabMenu=document.getElementById('fabMenu');
  const closeFab=()=>{fab.classList.remove('open');fabMenu.classList.remove('show');};
  if(fab){
    fab.addEventListener('click',e=>{
      e.stopPropagation();
      const isOpen=fab.classList.toggle('open');
      fabMenu.classList.toggle('show',isOpen);
    });
    document.addEventListener('click',e=>{if(!fabMenu.contains(e.target)&&e.target!==fab)closeFab();});
    fabMenu.addEventListener('click',e=>{
      const btn=e.target.closest('.fab-act');if(!btn)return;
      const act=btn.dataset.act;
      closeFab();
      if(act==='water'){
        const cur=ls('water:'+today,0);
        lsSet('water:'+today,cur+250);
        renderWaterRing();
        toast('+250 ml water — total '+(cur+250)+' ml today');
      }else if(act==='weight'){
        const v=prompt('Enter today\'s weight (kg):',ls('wt:'+today,'')||'');
        if(v){const n=parseFloat(v);if(!isNaN(n)&&n>=30&&n<=250){lsSet('wt:'+today,n);toast('Weight logged: '+n.toFixed(1)+' kg');if(curSec===6)renderProgress();}else toast('Invalid weight.');}
      }else if(act==='todayChecks'){
        document.querySelectorAll('.ndot')[0]?.click();
        setTimeout(()=>document.getElementById('checks')?.scrollIntoView({behavior:'smooth',block:'center'}),300);
      }else if(act==='logSession'){
        openSessionModal(activeDayIdx);
      }else if(act==='meas'){
        document.querySelectorAll('.ndot')[6]?.click();
        setTimeout(()=>{document.getElementById('measForm')?.classList.add('open');document.getElementById('measGrid')?.scrollIntoView({behavior:'smooth',block:'center'});},300);
      }
    });
  }

  // ── Journal ──
  const jData=ls('journal:'+today,{});
  const jWin=document.getElementById('journalWin');
  const jMiss=document.getElementById('journalMiss');
  if(jWin)jWin.value=jData.win||'';
  if(jMiss)jMiss.value=jData.miss||'';
  const saveJournal=()=>{
    const d=ls('journal:'+today,{});
    if(jWin)d.win=jWin.value;
    if(jMiss)d.miss=jMiss.value;
    const fi2=document.getElementById('focusInp');
    if(fi2)d.focus=fi2.value;
    lsSet('journal:'+today,d);
  };
  if(jWin)jWin.addEventListener('change',saveJournal);
  if(jMiss)jMiss.addEventListener('change',saveJournal);
  const fi=document.getElementById('focusInp');
  if(fi){fi.value=jData.focus||ls('focus:'+today,'')||'';fi.addEventListener('change',()=>{lsSet('focus:'+today,fi.value);saveJournal();});}
  const edots=document.getElementById('energyDots');
  if(edots){
    for(let i=1;i<=5;i++){
      const btn=document.createElement('button');
      btn.className='edot'+(jData.energy===i?' sel':'');
      btn.textContent=i;
      btn.addEventListener('click',()=>{
        const d=ls('journal:'+today,{});d.energy=i;lsSet('journal:'+today,d);
        edots.querySelectorAll('.edot').forEach((b,bi)=>b.classList.toggle('sel',bi+1===i));
        toast('Energy: '+i+'/5');
      });
      edots.appendChild(btn);
    }
  }

  // ── Sleep tracker ──
  renderSleepInputs();
  const saveSleep=()=>{
    const k=yesterdayKey();
    const cur=ls('sleep:'+k,{});
    const bed=document.getElementById('sleepBed')?.value||'';
    const wake=document.getElementById('sleepWake')?.value||'';
    cur.bed=bed;cur.wake=wake;
    cur.hours=computeSleepHours(bed,wake);
    lsSet('sleep:'+k,cur);
    document.getElementById('sleepHours').textContent=cur.hours?cur.hours+'h':'—';
  };
  document.getElementById('sleepBed')?.addEventListener('change',saveSleep);
  document.getElementById('sleepWake')?.addEventListener('change',saveSleep);

  // ── Steps & cardio ──
  renderStepsInputs();
  const saveSteps=()=>{
    const cur=ls('steps:'+today,{});
    cur.steps=parseInt(document.getElementById('stepsInp')?.value)||0;
    cur.cardio_min=parseInt(document.getElementById('cardioInp')?.value)||0;
    cur.type=document.getElementById('cardioType')?.value.trim()||'';
    lsSet('steps:'+today,cur);
  };
  document.getElementById('stepsInp')?.addEventListener('change',saveSteps);
  document.getElementById('cardioInp')?.addEventListener('change',saveSteps);
  document.getElementById('cardioType')?.addEventListener('change',saveSteps);

  // ── Water ring ──
  renderWaterRing();
  document.querySelectorAll('.water-add-btn').forEach(b=>{
    b.addEventListener('click',()=>{
      const add=parseInt(b.dataset.add);
      const cur=ls('water:'+today,0);
      lsSet('water:'+today,cur+add);
      renderWaterRing();
      try{navigator.vibrate&&navigator.vibrate(10);}catch{}
      toast('+'+add+' ml — '+(cur+add)+' ml today');
      if(typeof catReact==='function')catReact('waterLogged');
    });
  });
  document.getElementById('waterGoalBtn')?.addEventListener('click',()=>{
    const v=prompt('Daily water goal (ml):',getWaterGoal());
    if(v){const n=parseInt(v);if(n>=500&&n<=10000){lsSet('water_goal',n);renderWaterRing();toast('Goal set: '+n+' ml');}}
  });

  // ── Photo Progress ──
  document.getElementById('photoAddBtn')?.addEventListener('click',()=>document.getElementById('photoInput').click());
  document.getElementById('photoInput')?.addEventListener('change',async e=>{
    const file=e.target.files[0];if(!file)return;
    const type=document.getElementById('photoType').value;
    toast('Compressing photo…');
    try{
      const data=await compressPhoto(file);
      lsSet('photo:'+today+':'+type,data);
      renderPhotoGrid();
      toast('Photo saved!');
    }catch(err){toast('Photo upload failed.');}
    e.target.value='';
  });
  const closePhotoModal=()=>document.getElementById('photoModal').classList.remove('show');
  document.getElementById('photoModalClose')?.addEventListener('click',closePhotoModal);
  document.getElementById('photoModal')?.addEventListener('click',e=>{if(e.target===document.getElementById('photoModal'))closePhotoModal();});
  document.getElementById('photoDeleteBtn')?.addEventListener('click',()=>{
    if(!pendingPhotoKey)return;
    if(!confirm('Delete this photo?'))return;
    lsRm(pendingPhotoKey);closePhotoModal();renderPhotoGrid();toast('Photo deleted.');
  });

  // ── Body Measurements ──
  document.getElementById('logMeasBtn')?.addEventListener('click',()=>{
    document.getElementById('measForm').classList.toggle('open');
  });
  document.getElementById('saveMeasBtn')?.addEventListener('click',()=>{
    const fields={chest:'mChest',waist:'mWaist',hips:'mHips',larm:'mLArm',rarm:'mRArm',bf:'mBF'};
    const data={};
    Object.entries(fields).forEach(([k,id])=>{
      const v=parseFloat(document.getElementById(id)?.value);
      if(!isNaN(v)&&v>0)data[k]=v;
    });
    if(!Object.keys(data).length){toast('Enter at least one measurement.');return;}
    lsSet('measurements:'+today,data);
    document.getElementById('measForm').classList.remove('open');
    renderMeasurements();
    toast('Measurements saved!');
  });

  // ── Custom PR Lifts ──
  document.getElementById('addPRLiftBtn')?.addEventListener('click',()=>{
    const inp=document.getElementById('newPRLift');
    const name=inp.value.trim();
    if(!name){toast('Enter a lift name.');return;}
    const arr=ls('custom_prs',[]);
    if(arr.includes(name)||PR_LIFTS_DEFAULT.includes(name)){toast('Already exists.');return;}
    arr.push(name);lsSet('custom_prs',arr);
    inp.value='';renderPR();toast('Lift added!');
  });
  document.getElementById('newPRLift')?.addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('addPRLiftBtn')?.click();});

  // ── Schedule Edit ──
  const closeSchedModal=()=>document.getElementById('schedModal').classList.remove('show');
  document.getElementById('schedModalClose')?.addEventListener('click',closeSchedModal);
  document.getElementById('cancelSchedBlockBtn')?.addEventListener('click',closeSchedModal);
  document.getElementById('schedModal')?.addEventListener('click',e=>{if(e.target===document.getElementById('schedModal'))closeSchedModal();});
  document.getElementById('addBlockBtn')?.addEventListener('click',()=>openSchedModal(-1));
  document.getElementById('resetSchedBtn')?.addEventListener('click',()=>{
    if(!confirm('Reset schedule to default? Your custom blocks will be lost.'))return;
    lsRm('schedule:'+curP);renderSched();toast('Schedule reset.');
  });
  document.getElementById('saveSchedBlockBtn')?.addEventListener('click',()=>{
    const t=document.getElementById('seBkTime').value.trim();
    const n=document.getElementById('seBkName').value.trim();
    if(!t||!n){document.getElementById('schedMsg').textContent='Time and name required.';return;}
    if(!/^\d{2}:\d{2}$/.test(t)){document.getElementById('schedMsg').textContent='Use HH:MM format.';return;}
    const block={t,n,tag:document.getElementById('seBkTag').value,d:document.getElementById('seBkDesc').value.trim(),a:document.getElementById('seBkAlarm').value.trim()||'—'};
    const prof=JSON.parse(JSON.stringify(getProfile(curP)));
    if(pendingSchedBlockIdx===-1)prof.blocks.push(block);
    else prof.blocks[pendingSchedBlockIdx]=block;
    prof.blocks.sort((a,b)=>a.t.localeCompare(b.t));
    lsSet('schedule:'+curP,prof);
    closeSchedModal();renderSched();toast('Block saved!');
  });
  document.getElementById('deleteSchedBlockBtn')?.addEventListener('click',()=>{
    if(pendingSchedBlockIdx===-1)return;
    if(!confirm('Delete this block?'))return;
    const prof=JSON.parse(JSON.stringify(getProfile(curP)));
    prof.blocks.splice(pendingSchedBlockIdx,1);
    lsSet('schedule:'+curP,prof);
    closeSchedModal();renderSched();toast('Block deleted.');
  });

  // ── Renders ──
  renderToday();renderSched();renderTraining();renderNutrition();renderOutfitPlanner();renderBm();
  initTimer();setTimeout(bindCursor,300);

  // ── Firebase init: stored config (custom) OR embedded default ──
  const storedFbConfig=localStorage.getItem('fb_config');
  let cfgUsed=null;
  if(storedFbConfig){
    try{cfgUsed=JSON.parse(storedFbConfig);}catch(e){console.warn('Stored Firebase config invalid:',e);}
  }
  if(!cfgUsed)cfgUsed=FB_DEFAULT_CONFIG;
  try{initFirebase(cfgUsed);}catch(e){console.warn('Firebase init failed:',e);}

  // ── First-time: show sign-in if not signed in and never dismissed ──
  if(!localStorage.getItem('fb_uid')&&!ls('pwa_dismissed_auth',false)){
    setTimeout(()=>{document.getElementById('authModal').classList.add('show');},5500);
  }else{
    updateUserUI();
  }

  // ── Schedule notifications ──
  if(ls('notify_enabled',false)&&typeof Notification!=='undefined'&&Notification.permission==='granted'){
    scheduleAllNotifications();
  }
  // Reschedule every hour to catch new day
  setInterval(scheduleAllNotifications,60*60*1000);
}

document.addEventListener('DOMContentLoaded',init);
