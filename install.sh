#!/bin/bash

set -e

VERSION="1.0.0"
INSTALL_DIR="/usr/local/bin"
SCRIPT_NAME="devbackup"
REPO_URL="https://raw.githubusercontent.com/woustachemax/dev-backup/main"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${CYAN}"
echo "╔══════════════════════════════════════════════════════════╗"
echo "║                                                          ║"
echo "║              DEVBACKUP INSTALLER v$VERSION               ║"
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
        echo -e "Please run: ${GREEN}curl -fsSL https://raw.githubusercontent.com/woustachemax/dev-backup/main/install.sh | sudo bash${NC}"
        exit 1
    fi
fi

if [ -f "script/bin/devbackup" ]; then
    SOURCE_SCRIPT="script/bin/devbackup"
    echo -e "${GREEN}✓${NC} Found local script: $SOURCE_SCRIPT"
elif [ -f "bin/devbackup" ]; then
    SOURCE_SCRIPT="bin/devbackup"
    echo -e "${GREEN}✓${NC} Found local script: $SOURCE_SCRIPT"
elif [ -f "devbackup" ]; then
    SOURCE_SCRIPT="devbackup"
    echo -e "${GREEN}✓${NC} Found local script: $SOURCE_SCRIPT"
else
    echo -e "${CYAN}Downloading devbackup from GitHub...${NC}"
    TEMP_SCRIPT="/tmp/devbackup-$$.sh"
    
    if command -v curl &> /dev/null; then
        curl -fsSL "$REPO_URL/script/bin/devbackup" -o "$TEMP_SCRIPT" || {
            echo -e "${RED}✗ Failed to download devbackup script${NC}"
            exit 1
        }
    elif command -v wget &> /dev/null; then
        wget -q "$REPO_URL/script/bin/devbackup" -O "$TEMP_SCRIPT" || {
            echo -e "${RED}✗ Failed to download devbackup script${NC}"
            exit 1
        }
    else
        echo -e "${RED}✗ Neither curl nor wget found. Please install one of them.${NC}"
        exit 1
    fi
    
    SOURCE_SCRIPT="$TEMP_SCRIPT"
    echo -e "${GREEN}✓${NC} Downloaded devbackup script"
fi

if [ ! -d "$INSTALL_DIR" ]; then
    echo -e "${YELLOW}Creating $INSTALL_DIR...${NC}"
    mkdir -p "$INSTALL_DIR"
fi

echo -e "${CYAN}Installing devbackup to $INSTALL_DIR...${NC}"
cp "$SOURCE_SCRIPT" "$INSTALL_DIR/$SCRIPT_NAME"
chmod +x "$INSTALL_DIR/$SCRIPT_NAME"

if [[ "$SOURCE_SCRIPT" == /tmp/* ]]; then
    rm -f "$SOURCE_SCRIPT"
fi

if command -v devbackup &> /dev/null; then
    echo ""
    echo -e "${GREEN}╔══════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║              ✓ INSTALLATION COMPLETE!                   ║${NC}"
    echo -e "${GREEN}╚══════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${CYAN}DevBackup v$VERSION is now installed!${NC}"
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