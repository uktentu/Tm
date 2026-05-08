#!/bin/bash
# deploy.sh - Production deployment script using nohup

echo "🚀 Starting Deployment..."

# 1. Setup Virtual Environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "📦 Creating virtual environment..."
    python3 -m venv venv
fi

# 2. Activate and Install Dependencies
source venv/bin/activate
echo "📥 Installing requirements..."
pip install -r requirements.txt

# 3. Kill any existing instances
echo "🛑 Stopping existing server instances..."
pkill -f "gunicorn.*app:app" || true

# 4. Start the server with nohup
echo "⚡ Starting Gunicorn with nohup..."
# Runs on port 8000 by default. Change to 80 or 8091 if needed.
nohup gunicorn -w 4 -b 0.0.0.0:8000 app:app > server.log 2>&1 &

echo "✅ Deployment successful!"
echo "📡 Server is running in the background."
echo "📝 Logs are being written to server.log"
