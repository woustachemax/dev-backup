# DevBackup

Cross-platform development environment backup and restore tool. Backup all your applications, packages, configs, and development tools, then restore everything on a new machine with one command.

## What Gets Backed Up

### Package Managers
- Homebrew (macOS)
- APT (Debian/Ubuntu)
- Pacman (Arch)
- Chocolatey (Windows)

### Development Tools
- Node.js and npm global packages
- Python and pip packages
- Rust/Cargo packages
- Ruby gems

### IDEs & Extensions
- VS Code extensions
- Cursor extensions

### Configuration Files
- Shell configs (.zshrc, .bashrc, .bash_profile, .profile)
- Git config
- Vim config
- Tmux config
- SSH config and public keys (private keys never backed up)

## Installation

```bash
curl -fsSL https://raw.githubusercontent.com/woustachemax/dev-backup/main/script/install.sh | sudo bash
```

Verify installation:
```bash
devbackup
```

## Usage

### Interactive Mode
```bash
devbackup
```

### Command Mode

Create backup:
```bash
devbackup backup
```

Restore from backup:
```bash
devbackup restore
```

View backup details:
```bash
devbackup verify
```

Get help:
```bash
devbackup help
```

## Workflow

### On Your Old Computer

```bash
devbackup backup
```

Creates `~/DevBackup.tar.gz`

### Transfer to New Computer

Copy `DevBackup.tar.gz` to your new computer's home directory via USB, cloud storage, or scp.

### On Your New Computer

```bash
curl -fsSL https://raw.githubusercontent.com/woustachemax/dev-backup/main/script/install.sh | sudo bash
devbackup restore
```

Wait 10-30 minutes while packages install, then restart your terminal.

## Cross-Platform Support

DevBackup works across macOS, Linux (Ubuntu, Debian, Arch), WSL, and Windows (Git Bash/Cygwin).

Cross-platform restores are supported with intelligent package skipping for unavailable packages.

## What's NOT Backed Up

- Private SSH keys
- API keys or secrets
- Browser data
- Personal files/documents
- Application caches

## Uninstall

```bash
cd dev-backup/script
sudo ./uninstall.sh
```

Or manually:
```bash
sudo rm /usr/local/bin/devbackup
```

Your backups remain at `~/DevBackup.tar.gz`

## Troubleshooting

### Command not found
Ensure `/usr/local/bin` is in your PATH:
```bash
export PATH="/usr/local/bin:$PATH"
```

### Restore takes too long
Installing hundreds of packages takes 10-30 minutes depending on internet speed. This is normal.

### Some packages fail to install
Cross-platform restores may skip packages unavailable on the target OS. This is expected.

## Repository Structure

```
dev-backup/
├── script/
│   ├── bin/devbackup
│   ├── install.sh
│   ├── uninstall.sh
│   └── package.json
├── frontend/
└── package.json
```

## Roadmap

- Web dashboard with cloud backup
- Account system for backup management
- Premium features (auto-sync, unlimited backups)

## Contributing

Issues and pull requests welcome at https://github.com/woustachemax/dev-backup

## Author

[@woustachemax](https://siddharththakkar.xyz)