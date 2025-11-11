#!/bin/bash

set -e

VERSION="1.0.0"
INSTALL_DIR="/usr/local/bin"
SCRIPT_NAME="devbackup"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${CYAN}"
echo "╔══════════════════════════════════════════════════════════╗"
echo "║                                                          ║"
echo "║              DEVBACKUP INSTALLER v$VERSION                  ║"
echo "║                                                          ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo -e "${NC}"
echo ""

detect_os() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        echo "macos"
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        echo "linux"
    elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
        echo "windows"
    else
        echo "unknown"
    fi
}

OS=$(detect_os)

echo -e "${CYAN}Detected OS:${NC} $OS"
echo ""

if [[ "$OS" == "linux" ]] || [[ "$OS" == "macos" ]]; then
    if [ "$EUID" -ne 0 ]; then 
        echo -e "${YELLOW}This installer needs sudo access to install to $INSTALL_DIR${NC}"
        echo -e "Please run: ${GREEN}sudo ./install.sh${NC}"
        exit 1
    fi
fi

if [ -f "script/bin/devbackup" ]; then
    SOURCE_SCRIPT="script/bin/devbackup"
elif [ -f "bin/devbackup" ]; then
    SOURCE_SCRIPT="bin/devbackup"
elif [ -f "devbackup" ]; then
    SOURCE_SCRIPT="devbackup"
else
    echo -e "${RED}✗ Could not find devbackup script${NC}"
    echo "Please run this installer from the dev-backup directory"
    exit 1
fi

echo -e "${GREEN}✓${NC} Found script: $SOURCE_SCRIPT"

if [ ! -d "$INSTALL_DIR" ]; then
    echo -e "${YELLOW}Creating $INSTALL_DIR...${NC}"
    mkdir -p "$INSTALL_DIR"
fi

echo -e "${CYAN}Installing devbackup to $INSTALL_DIR...${NC}"
cp "$SOURCE_SCRIPT" "$INSTALL_DIR/$SCRIPT_NAME"
chmod +x "$INSTALL_DIR/$SCRIPT_NAME"

if command -v devbackup &> /dev/null; then
    INSTALLED_VERSION=$(devbackup help 2>&1 | grep -o "v[0-9.]*" | head -1 || echo "v$VERSION")
    echo ""
    echo -e "${GREEN}╔══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║              ✓ INSTALLATION COMPLETE!                   ║${NC}"
    echo -e "${GREEN}╚══════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${CYAN}DevBackup $INSTALLED_VERSION is now installed!${NC}"
    echo ""
    echo -e "${YELLOW}Quick Start:${NC}"
    echo "  devbackup           - Open interactive menu"
    echo "  devbackup backup    - Create backup now"
    echo "  devbackup restore   - Restore from backup"
    echo "  devbackup verify    - View backup details"
    echo ""
else
    echo -e "${RED}✗ Installation failed${NC}"
    echo "devbackup command not found in PATH"
    exit 1
fi