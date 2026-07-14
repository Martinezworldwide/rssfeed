#!/bin/bash
# Stop Super RSS Feed development server
cd "$(dirname "$0")"
echo "Stopping Super RSS Feed dev server..."
fuser -k 5173/tcp 2>/dev/null || pkill -f "vite" 2>/dev/null
echo "Server stopped."
