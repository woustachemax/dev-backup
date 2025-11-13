#!/bin/bash

set -e

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
echo "║              DEVBACKUP UNINSTALLER                       ║"
echo "║                                                          ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo -e "${NC}"
echo ""

if [ "$EUID" -ne 0 ]; then 
    echo -e "${YELLOW}This uninstaller needs sudo access${NC}"
    echo "Please run: ${GREEN}sudo ./uninstall.sh${NC}"
    exit 1
fi

if [ ! -f "$INSTALL_DIR/$SCRIPT_NAME" ]; then
    echo -e "${YELLOW}DevBackup is not installed at $INSTALL_DIR/$SCRIPT_NAME${NC}"
    exit 0
fi

echo -e "${CYAN}Removing DevBackup...${NC}"
rm -f "$INSTALL_DIR/$SCRIPT_NAME"

if ! command -v devbackup &> /dev/null; then
    echo ""
    echo -e "${GREEN}✓ DevBackup has been uninstalled${NC}"
    echo ""
    echo -e "${YELLOW}Note:${NC} Your backups at ~/DevBackup.tar.gz are still safe"
else
    echo -e "${RED}✗ Uninstallation failed${NC}"
    exit 1
fi