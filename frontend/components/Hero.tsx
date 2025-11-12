'use client'
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function Hero() {
    const [activeTab, setActiveTab] = useState<'macos'|'linux'|'windows'>('macos');
    const [copied, setCopied] = useState(false);
    const [hideTerminal, setHideTerminal] = useState(false);
    const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

    const commands = {
        macos: 'curl -fsSL devbackup.sh | sudo bash',
        linux: 'curl -fsSL devbackup.sh | sudo bash',
        windows: 'iwr -useb devbackup.sh | iex'
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(commands[activeTab]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleCommandCopy = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedCommand(id);
        setTimeout(() => setCopiedCommand(null), 2000);
    };
    
    return (
        <section className="relative bg-black text-white min-h-screen overflow-hidden">
            <div className="absolute inset-0 opacity-30">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                        <radialGradient id="blob1">
                            <stop offset="0%" style={{stopColor:"#4a9eff", stopOpacity:0.5}} />
                            <stop offset="100%" style={{stopColor:"#4a9eff", stopOpacity:0}} />
                        </radialGradient>
                        
                        <radialGradient id="blob2">
                            <stop offset="0%" style={{stopColor:"#b84aff", stopOpacity:0.5}} />
                            <stop offset="100%" style={{stopColor:"#b84aff", stopOpacity:0}} />
                        </radialGradient>
                        
                        <radialGradient id="blob3">
                            <stop offset="0%" style={{stopColor:"#ff4a8b", stopOpacity:0.4}} />
                            <stop offset="100%" style={{stopColor:"#ff4a8b", stopOpacity:0}} />
                        </radialGradient>
                        
                        <radialGradient id="blob4">
                            <stop offset="0%" style={{stopColor:"#4affb8", stopOpacity:0.4}} />
                            <stop offset="100%" style={{stopColor:"#4affb8", stopOpacity:0}} />
                        </radialGradient>
                        
                        <filter id="blur">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
                        </filter>
                    </defs>
                    
                    <g filter="url(#blur)">
                        <ellipse cx="20" cy="20" rx="25" ry="30" fill="url(#blob1)" opacity="0.6">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 50 50"
                                to="360 50 50"
                                dur="20s"
                                repeatCount="indefinite" />
                        </ellipse>
                        
                        <ellipse cx="80" cy="25" rx="28" ry="25" fill="url(#blob2)" opacity="0.6">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 50 50"
                                to="-360 50 50"
                                dur="22s"
                                repeatCount="indefinite" />
                        </ellipse>
                        
                        <ellipse cx="75" cy="80" rx="26" ry="28" fill="url(#blob3)" opacity="0.5">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 50 50"
                                to="360 50 50"
                                dur="18s"
                                repeatCount="indefinite" />
                        </ellipse>
                        
                        <ellipse cx="25" cy="75" rx="27" ry="26" fill="url(#blob4)" opacity="0.5">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 50 50"
                                to="-360 50 50"
                                dur="24s"
                                repeatCount="indefinite" />
                        </ellipse>
                    </g>
                </svg>
            </div>

            <div className="container relative z-10 py-20">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="space-y-8 mb-16">
                        <h1 className="text-6xl font-light tracking-tight text-white leading-tight">
                            DevBackup
                        </h1>
                        
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                            A cross-platform development environment backup and restore tool. Backup all your applications, packages, configs, and development tools, then restore everything on a new machine with one command.
                        </p>

                        <div className="relative z-10 w-full flex justify-center mt-10 max-w-4xl mx-auto">
                            <div className="relative bg-white/5 backdrop-blur-xl rounded-lg sm:rounded-2xl p-1 sm:p-1.5 border border-white/10 shadow-xl w-full transition-all duration-500">
                                <div className={`bg-stone-900 backdrop-blur-sm rounded-lg overflow-hidden h-[100px] sm:h-[110px] lg:h-[120px] w-full border border-white/10 shadow-lg ${hideTerminal ? 'opacity-0 h-0 p-0 border-0 shadow-none' : ''} transition-all duration-500`}> 
                                    <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-stone-800/80 backdrop-blur-sm border-b border-white/10">
                                        <div className="flex space-x-1.5">
                                            <div onClick={()=> setHideTerminal(!hideTerminal)}
                                            className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="flex items-center space-x-3 text-xs sm:text-sm">
                                            {(["macos","linux","windows"] as const).map(tab => (
                                                <button 
                                                    key={tab}
                                                    onClick={() => setActiveTab(tab)}
                                                    className={`transition-colors capitalize ${activeTab === tab ? 'text-gray-200' : 'text-neutral-500 hover:text-gray-300'}`}>
                                                    {tab}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between h-[calc(100%-48px)] px-3 sm:px-4 font-mono text-xs sm:text-sm text-neutral-300">
                                        <div className="flex items-center">
                                            <span className="text-green-400">dev</span>
                                            <span className="text-neutral-400">@</span>
                                            <span className="text-blue-400">backup</span>
                                            <span className="text-neutral-400">:</span>
                                            <span className="text-purple-400">~</span>
                                            <span className="text-neutral-400">$</span>
                                            <span className="ml-2">{commands[activeTab]}</span>
                                        </div>
                                        <button
                                            onClick={handleCopy}
                                            className="ml-4 p-1.5 hover:bg-white/10 rounded transition-colors"
                                            title="Copy command"
                                        >
                                            {copied ? (
                                                <Check className="w-4 h-4 text-green-400" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-neutral-400 hover:text-gray-200" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12 text-gray-300">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-light text-gray-100">The Problem</h2>
                            <p className="leading-relaxed">
                                Every developer has faced it: setting up a new machine or migrating to a different OS is a <strong>multi-hour ordeal</strong>. You spend time manually reinstalling Node, Python, Homebrew packages, VS Code extensions, reconstructing your shell configurations, and debugging why nothing works the same way. Traditional approaches are <em>manual, error-prone, and time-consuming</em>.
                            </p>
                            <p className="leading-relaxed">
                                DevBackup solves this by creating a <u>complete snapshot</u> of your development environment that can be restored on any compatible system in <strong>minutes, not hours</strong>.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-light text-gray-100">Complete Environment Capture</h2>
                            <p className="leading-relaxed">
                                DevBackup creates <strong>comprehensive backups</strong> of your entire development ecosystem:
                            </p>
                            
                            <div className="grid md:grid-cols-2 gap-6 pt-2">
                                <div className="space-y-2">
                                    <h3 className="text-lg font-medium text-gray-100">Package Managers</h3>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li>• <strong>Homebrew</strong> (macOS): Formulas, casks, taps</li>
                                        <li>• <strong>APT</strong> (Debian/Ubuntu): All installed packages</li>
                                        <li>• <strong>Pacman</strong> (Arch): Explicit package list</li>
                                        <li>• <strong>Chocolatey</strong> (Windows): All local packages</li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-lg font-medium text-gray-100">Language Ecosystems</h3>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li>• <strong>Node.js</strong>: Version + global npm packages</li>
                                        <li>• <strong>Python</strong>: Version + pip3 packages</li>
                                        <li>• <strong>Rust</strong>: Cargo-installed binaries</li>
                                        <li>• <strong>Ruby</strong>: Gem list with versions</li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-lg font-medium text-gray-100">Development Tools</h3>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li>• <strong>VS Code</strong>: All extensions + settings</li>
                                        <li>• <strong>Cursor</strong>: Extensions + configuration</li>
                                        <li>• <strong>Git</strong>: Global configuration</li>
                                        <li>• <strong>Vim</strong>: .vimrc configuration</li>
                                        <li>• <strong>Tmux</strong>: Session configuration</li>
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="text-lg font-medium text-gray-100">Shell & Security</h3>
                                    <ul className="space-y-1 text-sm text-gray-300">
                                        <li>• <strong>Zsh</strong>: .zshrc with aliases & exports</li>
                                        <li>• <strong>Bash</strong>: .bashrc and .bash_profile</li>
                                        <li>• <strong>SSH</strong>: Config + public keys only</li>
                                        <li>• Shell history and custom scripts</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-light text-gray-100">How It Works</h2>
                            <p className="leading-relaxed">
                                DevBackup is built as a <u>self-contained Bash script</u> that runs on any Unix-like system. The architecture is designed around three core principles: <em>simplicity, security, and portability</em>.
                            </p>
                            
                            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 space-y-4">
                                <div>
                                    <h4 className="text-gray-100 font-medium mb-2">1. Detection Phase</h4>
                                    <p className="text-sm text-gray-300">Automatically identifies your OS (macOS, Linux, WSL, Windows) and scans for installed package managers, language runtimes, and development tools.</p>
                                </div>
                                
                                <div>
                                    <h4 className="text-gray-100 font-medium mb-2">2. Backup Phase</h4>
                                    <p className="text-sm text-gray-300">Creates structured manifests for each ecosystem. Package lists are exported using native tools (brew bundle, pip freeze, npm list). Configuration files are copied with original permissions preserved.</p>
                                </div>
                                
                                <div>
                                    <h4 className="text-gray-100 font-medium mb-2">3. Archive Phase</h4>
                                    <p className="text-sm text-gray-300">All backup data is compressed into a single timestamped .tar.gz file (typically <strong>10-50KB</strong>) stored in your home directory. Metadata includes source OS and tool versions for validation.</p>
                                </div>
                                
                                <div>
                                    <h4 className="text-gray-100 font-medium mb-2">4. Restore Phase</h4>
                                    <p className="text-sm text-gray-300">Extracts the backup, detects the target OS, and intelligently installs packages using the appropriate package manager. Cross-platform migrations are supported with automatic package skipping for unavailable items.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-light text-gray-100">Cross-Platform Intelligence</h2>
                            <p className="leading-relaxed">
                                DevBackup handles <strong>cross-platform migrations</strong> gracefully. When restoring from macOS to Linux (or vice versa), it:
                            </p>
                            <ul className="space-y-2 text-gray-300 pl-4">
                                <li>• Maps equivalent packages between systems when possible</li>
                                <li>• Skips platform-specific applications automatically</li>
                                <li>• Warns you about incompatible packages before installation</li>
                                <li>• Preserves language-level packages that work everywhere (npm, pip, gems)</li>
                                <li>• Restores shell configs with environment-specific adjustments</li>
                            </ul>
                            <p className="leading-relaxed pt-2">
                                For example, a backup from macOS will skip Homebrew on Linux but will successfully restore your npm globals, Python packages, VS Code extensions, and shell configurations.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-light text-gray-100">Security By Design</h2>
                            <p className="leading-relaxed">
                                DevBackup takes <strong>security seriously</strong> and follows the principle of <em>least privilege</em>:
                            </p>
                            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 space-y-3 text-sm">
                                <p className="text-gray-300"><span className="text-green-400">✓</span> Only backs up <u>public SSH keys</u>, never private keys</p>
                                <p className="text-gray-300"><span className="text-green-400">✓</span> Creates timestamped backups of existing configs before overwriting</p>
                                <p className="text-gray-300"><span className="text-green-400">✓</span> Never stores passwords or authentication tokens</p>
                                <p className="text-gray-300"><span className="text-green-400">✓</span> All operations run with explicit user confirmation</p>
                                <p className="text-gray-300"><span className="text-green-400">✓</span> Open-source and auditable - every line of code is visible</p>
                                <p className="text-gray-300"><span className="text-green-400">✓</span> No telemetry, no phone-home, no data collection</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-light text-gray-100">Performance Characteristics</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
                                    <div className="text-3xl font-light text-gray-100 mb-2">~30s</div>
                                    <div className="text-sm text-gray-300">Typical backup time for a full development environment</div>
                                </div>
                                <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
                                    <div className="text-3xl font-light text-gray-100 mb-2">10-50KB</div>
                                    <div className="text-sm text-gray-300">Average backup archive size (just metadata, not binaries)</div>
                                </div>
                                <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
                                    <div className="text-3xl font-light text-gray-100 mb-2">10-30m</div>
                                    <div className="text-sm text-gray-300">Full restore time depending on internet speed</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-light text-gray-100">Real-World Use Cases</h2>
                            <div className="space-y-3">
                                <div className="border-l-2 border-gray-500 pl-4">
                                    <h4 className="text-gray-100 font-medium">Hardware Upgrades</h4>
                                    <p className="text-sm text-gray-300">Upgrading to a new laptop? Backup your old machine, restore on the new one, and be coding within <strong>30 minutes</strong>.</p>
                                </div>
                                <div className="border-l-2 border-gray-600 pl-4">
                                    <h4 className="text-gray-100 font-medium">OS Migrations</h4>
                                    <p className="text-sm text-gray-300">Switching from macOS to Linux or Windows to WSL? DevBackup handles <em>cross-platform migrations</em> intelligently.</p>
                                </div>
                                <div className="border-l-2 border-gray-500 pl-4">
                                    <h4 className="text-gray-100 font-medium">Team Onboarding</h4>
                                    <p className="text-sm text-gray-300">Create a team backup with standardized tools and configs. New developers can be <u>productive on day one</u>.</p>
                                </div>
                                <div className="border-l-2 border-gray-600 pl-4">
                                    <h4 className="text-gray-100 font-medium">Disaster Recovery</h4>
                                    <p className="text-sm text-gray-300">Regular backups mean you're always <strong>one command away</strong> from restoring your entire development environment.</p>
                                </div>
                                <div className="border-l-2 border-gray-500 pl-4">
                                    <h4 className="text-gray-100 font-medium">CI/CD Environments</h4>
                                    <p className="text-sm text-gray-300">Use DevBackup to ensure your CI environment matches your local development setup <em>exactly</em>.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-light text-gray-100">Quick Start Guide</h2>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-gray-100 font-medium mb-3">Installation</h4>
                                    <div className="relative group">
                                        <code className="block bg-gray-900/50 border border-gray-800 px-4 py-3 pr-12 rounded font-mono text-sm text-white">
                                            curl -fsSL devbackup.sh | sudo bash
                                        </code>
                                        <button
                                            onClick={() => handleCommandCopy('curl -fsSL devbackup.sh | sudo bash', 'install')}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/10 rounded transition-colors"
                                            title="Copy command"
                                        >
                                            {copiedCommand === 'install' ? (
                                                <Check className="w-4 h-4 text-green-400" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-neutral-400 hover:text-gray-200" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4 className="text-gray-100 font-medium mb-3">Create a Backup</h4>
                                    <div className="relative group">
                                        <code className="block bg-gray-900/50 border border-gray-800 px-4 py-3 pr-12 rounded font-mono text-sm text-white">
                                            devbackup backup
                                        </code>
                                        <button
                                            onClick={() => handleCommandCopy('devbackup backup', 'backup')}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/10 rounded transition-colors"
                                            title="Copy command"
                                        >
                                            {copiedCommand === 'backup' ? (
                                                <Check className="w-4 h-4 text-green-400" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-neutral-400 hover:text-gray-200" />
                                            )}
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-300 mt-2">Creates ~/DevBackup.tar.gz with your entire environment</p>
                                </div>
                                
                                <div>
                                    <h4 className="text-gray-100 font-medium mb-3">Restore on New Machine</h4>
                                    <div className="relative group">
                                        <code className="block bg-gray-900/50 border border-gray-800 px-4 py-3 pr-12 rounded font-mono text-sm text-white whitespace-pre">
{`curl -fsSL devbackup.sh | sudo bash
devbackup restore`}
                                        </code>
                                        <button
                                            onClick={() => handleCommandCopy('curl -fsSL devbackup.sh | sudo bash\ndevbackup restore', 'restore')}
                                            className="absolute right-3 top-3 p-1.5 hover:bg-white/10 rounded transition-colors"
                                            title="Copy command"
                                        >
                                            {copiedCommand === 'restore' ? (
                                                <Check className="w-4 h-4 text-green-400" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-neutral-400 hover:text-gray-200" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                                
                                <div>
                                    <h4 className="text-gray-100 font-medium mb-3">Verify Backup Contents</h4>
                                    <div className="relative group">
                                        <code className="block bg-gray-900/50 border border-gray-800 px-4 py-3 pr-12 rounded font-mono text-sm text-white">
                                            devbackup verify
                                        </code>
                                        <button
                                            onClick={() => handleCommandCopy('devbackup verify', 'verify')}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/10 rounded transition-colors"
                                            title="Copy command"
                                        >
                                            {copiedCommand === 'verify' ? (
                                                <Check className="w-4 h-4 text-green-400" />
                                            ) : (
                                                <Copy className="w-4 h-4 text-neutral-400 hover:text-gray-200" />
                                            )}
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-300 mt-2">View detailed information about what's in your backup</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-light text-gray-100">Technical Implementation Details</h2>
                            <p className="leading-relaxed">
                                DevBackup is implemented as a <strong>~600 line Bash script</strong> with <u>zero external dependencies</u> beyond standard Unix utilities. This design choice ensures maximum portability and reliability.
                            </p>
                            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 space-y-4 text-sm">
                                <div>
                                    <span className="text-gray-100 font-medium">Language:</span>
                                    <span className="text-gray-300"> Bash 4.0+ (compatible with Bash 3.2 on macOS)</span>
                                </div>
                                <div>
                                    <span className="text-gray-100 font-medium">Dependencies:</span>
                                    <span className="text-gray-300"> tar, gzip, find, grep (all standard Unix utilities)</span>
                                </div>
                                <div>
                                    <span className="text-gray-100 font-medium">Backup Format:</span>
                                    <span className="text-gray-300"> Gzipped tar archive with structured directory hierarchy</span>
                                </div>
                                <div>
                                    <span className="text-gray-100 font-medium">Installation:</span>
                                    <span className="text-gray-300"> Single executable copied to /usr/local/bin</span>
                                </div>
                                <div>
                                    <span className="text-gray-100 font-medium">Permissions:</span>
                                    <span className="text-gray-300"> Requires sudo only for installation and system package operations</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-light text-gray-100">Why DevBackup?</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <h4 className="text-gray-100 font-medium">vs. Manual Setup</h4>
                                    <p className="text-sm text-gray-300">Manual environment setup takes <strong>3-8 hours</strong> and is error-prone. DevBackup does it in <strong>15-30 minutes</strong> with perfect consistency.</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-gray-100 font-medium">vs. Dotfile Managers</h4>
                                    <p className="text-sm text-gray-300">Dotfile managers only handle configs. DevBackup backs up <em>packages, tools, extensions, and configs</em> in one unified workflow.</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-gray-100 font-medium">vs. Docker Containers</h4>
                                    <p className="text-sm text-gray-300">Docker is great for projects but doesn't handle your personal development environment. DevBackup <u>complements Docker</u> perfectly.</p>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-gray-100 font-medium">vs. Configuration Management</h4>
                                    <p className="text-sm text-gray-300">Ansible/Chef are overkill for personal machines. DevBackup is <em>simple, requires no server</em>, and just works.</p>
                                </div>
                            </div>
                        </div>

                                                <div className="pt-8 border-t border-gray-800">
                            <p className="text-sm text-gray-300">
                                <a href="https://github.com/woustachemax/dev-backup" className="text-gray-200 hover:text-white underline">
                                    View on GitHub
                                </a>
                                {" • "}
                                <a href="https://github.com/woustachemax/dev-backup/issues" className="text-gray-200 hover:text-white underline">
                                    Report Issues
                                </a>
                                {" • "}
                                <a href="https://github.com/woustachemax/dev-backup/blob/main/LICENSE" className="text-gray-200 hover:text-white underline">
                                    MIT License
                                </a>
                                {" • "}
                                Created by <a href="https://www.siddharththakkar.xyz/" className="text-gray-200 hover:text-white underline">woustachemax</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

