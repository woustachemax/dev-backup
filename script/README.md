# DevBackup

A cross-platform development environment backup and restore tool. Backup all your applications, packages, configs, and development tools in seconds, then restore everything on a new machine with one command.

## What Gets Backed Up

### Package Managers
- **macOS**: Homebrew (formulas and casks)
- **Linux**: APT packages, Pacman packages
- **Windows**: Chocolatey packages
- **Cross-platform**: npm global packages, pip packages, Ruby gems, Cargo crates

### Development Tools
- Node.js version and global npm packages
- Python version and pip packages
- Rust/Cargo installed packages
- Ruby gems

### IDEs & Extensions
- VS Code extensions
- Cursor extensions

### Configuration Files
- Shell configs (`.zshrc`, `.bashrc`, `.bash_profile`, `.profile`)
- Git config (`.gitconfig`)
- Vim config (`.vimrc`)
- Tmux config (`.tmux.conf`)

### SSH Keys
- SSH config
- Public SSH keys only (private keys are never backed up for security)

## Installation

### Quick Install (Linux/macOS)

```bash
curl -fsSL https://raw.githubusercontent.com/woustachemax/dev-backup/main/script/install.sh | sudo bash
```

### Manual Install

```bash
git clone https://github.com/woustachemax/dev-backup.git
cd dev-backup/script
chmod +x install.sh
sudo ./install.sh
```

### Verify Installation

```bash
devbackup
```

You should see the DevBackup interactive menu.

## Usage

### Interactive Mode

Simply run:
```bash
devbackup
```

This opens an interactive menu where you can:
1. Backup this computer
2. Restore from backup
3. View backup info
4. Verify backup contents
5. Help
6. Exit

### Command Mode

#### Create a Backup
```bash
devbackup backup
```

Creates `~/DevBackup.tar.gz` containing all your development environment data.

#### Restore from Backup
```bash
devbackup restore
```

Restores everything from `~/DevBackup.tar.gz`. Make sure to copy your backup file to your home directory first.

#### Verify Backup Contents
```bash
devbackup verify
```

Shows detailed information about what's inside your backup without extracting it.

#### Get Help
```bash
devbackup help
```

## Cross-Platform Restore

DevBackup supports cross-platform restores with intelligent package mapping:

- **macOS → Linux**: Homebrew packages are skipped, APT equivalents can be installed manually
- **Linux → macOS**: APT packages are skipped, Homebrew equivalents can be installed manually
- **Any → WSL**: Full support for Windows Subsystem for Linux

Shell configs, development tools, and IDE extensions restore seamlessly across all platforms.

## Workflow Example

### On Your Old Computer

```bash
devbackup backup
```

This creates `~/DevBackup.tar.gz`

### Transfer to New Computer

Copy `DevBackup.tar.gz` to your new computer's home directory:
- USB drive
- Cloud storage (Dropbox, Google Drive)
- `scp DevBackup.tar.gz user@newcomputer:~/`

### On Your New Computer

```bash
curl -fsSL https://raw.githubusercontent.com/woustachemax/dev-backup/main/script/install.sh | sudo bash
devbackup restore
```

Wait 10-30 minutes while everything installs, then restart your terminal.

## What's NOT Backed Up

For security and privacy:
- Private SSH keys
- API keys or secrets
- Browser data
- Personal files/documents
- Application data or caches

## Backup File Location

- Backup file: `~/DevBackup.tar.gz`
- Temporary extraction: `~/DevBackup-YYYYMMDD-HHMMSS/`

## Uninstall

```bash
cd dev-backup/script
sudo ./uninstall.sh
```

Or manually:
```bash
sudo rm /usr/local/bin/devbackup
```

Your backups at `~/DevBackup.tar.gz` are not deleted during uninstall.

## Supported Operating Systems

- macOS (10.15+)
- Linux (Ubuntu, Debian, Arch, etc.)
- Windows Subsystem for Linux (WSL)
- Windows (via Git Bash or Cygwin)

## Requirements

- Bash 4.0+
- `tar` command
- `sudo` access (for installation only)

## Troubleshooting

### "devbackup: command not found"
Make sure `/usr/local/bin` is in your PATH:
```bash
echo $PATH | grep /usr/local/bin
```

If not, add to your `~/.bashrc` or `~/.zshrc`:
```bash
export PATH="/usr/local/bin:$PATH"
```

### Restore takes too long
This is normal. Installing hundreds of packages can take 10-30 minutes depending on your internet speed and the number of packages.

### Some packages fail to install
Cross-platform restores may have some packages that don't exist on the target OS. This is expected behavior. DevBackup continues installing what it can.

### Permission denied errors
Make sure you have sudo access and run the installer with `sudo ./install.sh`

## Development

This is a monorepo containing:
- `script/` - CLI tool (this README)
- `frontend/` - Landing page (separate README coming soon)

### Project Structure
```
dev-backup/
├── script/
│   ├── bin/
│   │   └── devbackup       
│   ├── install.sh
│   ├── uninstall.sh       
│   └── package.json
├── frontend/
└── package.json
```

## Roadmap

- [ ] Desktop app (Electron wrapper)
- [ ] Web interface for backup management
- [ ] Mobile companion app
- [ ] Cloud backup sync
- [ ] Encrypted backups
- [ ] Scheduled automatic backups

## Contributing

Contributions welcome! Please open an issue or PR.

## Author

[@woustachemax](https://siddharththakkar.xyz)

## Support

- GitHub Issues: https://github.com/woustachemax/dev-backup/issues
- Documentation: https://github.com/woustachemax/dev-backup

---

**Note**: Always review your backup contents before restoring on a new machine. Use `devbackup verify` to see what will be restored.