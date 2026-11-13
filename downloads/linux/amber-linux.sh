#!/usr/bin/env bash
# ==============================================================================
# Amber AI — Universal Linux Standalone Launcher (Ubuntu, Debian, Fedora, Arch)
# ==============================================================================

set -e

echo "=========================================================="
echo "⚡ Starting Amber AI — Sovereign Edge Assistant (Linux)"
echo "=========================================================="

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
export AMBER_HOME="$APP_DIR"

# Check if Java 17+ is installed
if ! command -v java &> /dev/null; then
    echo "⚠️ Java 17+ was not found on your system."
    echo "Please install OpenJDK 17 or higher:"
    echo "  Ubuntu/Debian: sudo apt update && sudo apt install openjdk-17-jre"
    echo "  Fedora:        sudo dnf install java-17-openjdk"
    echo "  Arch Linux:    sudo pacman -S jre17-openjdk"
    exit 1
fi

JAVA_VER=$(java -version 2>&1 | head -n 1 | awk -F '"' '{print $2}' | cut -d'.' -f1)
if [ "$JAVA_VER" -lt 17 ]; then
    echo "⚠️ Java version must be 17 or newer (found version $JAVA_VER)."
    exit 1
fi

echo "✓ Java runtime verified: $(java -version 2>&1 | head -n 1)"
echo "✓ Initializing Amber with local Edge Model Gallery..."

# Launch Amber Desktop
if [ -f "$APP_DIR/Amber.jar" ]; then
    exec java -Xmx2048m -jar "$APP_DIR/Amber.jar" "$@"
else
    echo "Starting Amber Universal Web/Local App..."
    xdg-open "https://amber-ai.vercel.app" 2>/dev/null || sensible-browser "https://amber-ai.vercel.app" 2>/dev/null || echo "Open http://localhost:3000 in your browser."
fi

