from flask import Flask, send_file, request, jsonify
import sqlite3
import json
import os

app = Flask(__name__)
DB_FILE = 'app.db'

def init_db():
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS app_state (
            id INTEGER PRIMARY KEY,
            data TEXT
        )
    ''')
    # Insert default row if not exists
    c.execute('SELECT COUNT(*) FROM app_state')
    if c.fetchone()[0] == 0:
        default_state = {
            "tasks": [],
            "achievements": [],
            "habits": [],
            "habitLogs": {},
            "dailyLogs": {}
        }
        c.execute('INSERT INTO app_state (id, data) VALUES (1, ?)', (json.dumps(default_state),))
    conn.commit()
    conn.close()

@app.route('/')
def index():
    return send_file('apex.html')

@app.route('/api/data', methods=['GET'])
def get_data():
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute('SELECT data FROM app_state WHERE id = 1')
    row = c.fetchone()
    conn.close()
    if row:
        return row[0], 200, {'Content-Type': 'application/json'}
    return jsonify({"error": "No data found"}), 404

@app.route('/api/data', methods=['POST'])
def save_data():
    data = request.json
    conn = sqlite3.connect(DB_FILE)
    c = conn.cursor()
    c.execute('UPDATE app_state SET data = ? WHERE id = 1', (json.dumps(data),))
    conn.commit()
    conn.close()
    return jsonify({"status": "success"}), 200

if __name__ == '__main__':
    init_db()
    app.run(debug=True, port=8091)
