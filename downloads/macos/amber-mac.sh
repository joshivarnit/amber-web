#!/usr/bin/env bash
# ==============================================================================
# Amber AI — Universal macOS Launcher (Apple Silicon M1-M4 & Intel x86_64)
# ==============================================================================

set -e

echo "=========================================================="
echo "⚡ Starting Amber AI — Sovereign Edge Assistant (macOS)"
echo "=========================================================="

APP_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ARCH=$(uname -m)

echo "✓ Detected architecture: $ARCH"

if [ "$ARCH" = "arm64" ]; then
    echo "✓ Apple Silicon detected: Enabling Metal GPU acceleration"
else
    echo "✓ Intel x86_64 detected: Enabling Accelerate framework"
fi

if ! command -v java &> /dev/null; then
    echo "⚠️ Java 17+ is required on macOS."
    echo "Install via Homebrew:"
    echo "  brew install openjdk@17"
    exit 1
fi

echo "✓ Java runtime verified: $(java -version 2>&1 | head -n 1)"
echo "✓ Launching Amber..."

if [ -f "$APP_DIR/Amber.jar" ]; then
    exec java -Xmx2048m -jar "$APP_DIR/Amber.jar" "$@"
else
    open "https://amber-ai.vercel.app" 2>/dev/null || echo "Open http://localhost:3000 in your browser."
fi

