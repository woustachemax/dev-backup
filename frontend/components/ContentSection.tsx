'use client'
export default function ContentSections() {
  return (
    <>
      <section className="space-y-4">
        <h2 className="text-2xl font-light text-gray-100">The Problem</h2>
        <p className="leading-relaxed">
          Every developer has faced it: setting up a new machine or migrating to a different OS is a multi-hour ordeal. You spend time manually reinstalling Node, Python, Homebrew packages, VS Code extensions, reconstructing your shell configurations, and debugging why nothing works the same way. Traditional approaches are manual, error-prone, and time-consuming.
        </p>
        <p className="leading-relaxed">
          DevBackup solves this by creating a <strong>complete snapshot</strong> of your development environment that can be restored on any compatible system in minutes, not hours.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-light text-gray-100">Complete Environment Capture</h2>
        <p className="leading-relaxed">
          DevBackup creates comprehensive backups of your entire development ecosystem:
        </p>

        <div className="grid md:grid-cols-2 gap-6 pt-2">
          <div>
            <h3 className="text-lg font-medium text-gray-100 mb-2">Package Managers</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Homebrew (macOS): Formulas, casks, taps</li>
              <li>• APT (Debian/Ubuntu): All installed packages</li>
              <li>• Pacman (Arch): Explicit package list</li>
              <li>• Chocolatey (Windows): All local packages</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-100 mb-2">Language Ecosystems</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Node.js: Version + global npm packages</li>
              <li>• Python: Version + pip3 packages</li>
              <li>• Rust: Cargo-installed binaries</li>
              <li>• Ruby: Gem list with versions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-100 mb-2">Development Tools</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• VS Code: All extensions + settings</li>
              <li>• Cursor: Extensions + configuration</li>
              <li>• Git: Global configuration</li>
              <li>• Vim: .vimrc configuration</li>
              <li>• Tmux: Session configuration</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-100 mb-2">Shell & Security</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Zsh: .zshrc with aliases & exports</li>
              <li>• Bash: .bashrc and .bash_profile</li>
              <li>• SSH: Config + public keys only</li>
              <li>• Shell history and custom scripts</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-light text-gray-100">How It Works</h2>
        <p className="leading-relaxed">
          DevBackup is built as a <strong>self-contained Bash script</strong> that runs on any Unix-like system. The architecture is designed around three core principles: simplicity, security, and portability.
        </p>

        <div className="space-y-6 pt-4">
          <div>
            <h3 className="text-lg font-medium text-gray-100 mb-2">1. Detection Phase</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Automatically identifies your OS (macOS, Linux, WSL, Windows) and scans for installed package managers, language runtimes, and development tools.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-100 mb-2">2. Backup Phase</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Creates structured manifests for each ecosystem. Package lists are exported using native tools (brew bundle, pip freeze, npm list). Configuration files are copied with original permissions preserved.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-100 mb-2">3. Archive Phase</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              All backup data is compressed into a single timestamped .tar.gz file (typically 10-50KB) stored in your home directory. Metadata includes source OS and tool versions for validation.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-100 mb-2">Interactive Wizard</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              DevBackup includes a beautiful interactive menu system. Simply run `devbackup` to launch the wizard with color-coded interface, step-by-step prompts, and progress indicators.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-100 mb-2">4. Restore Phase</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Extracts the backup, detects the target OS, and intelligently installs packages using the appropriate package manager. Cross-platform migrations are supported with automatic package skipping for unavailable items.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-light text-gray-100">Cross-Platform Intelligence</h2>
        <p className="leading-relaxed">
          DevBackup handles cross-platform migrations gracefully. When restoring from macOS to Linux (or vice versa), it:
        </p>
        <ul className="text-sm text-gray-300 space-y-2 pl-4">
          <li>• Maps equivalent packages between systems when possible</li>
          <li>• Skips platform-specific applications automatically</li>
          <li>• Warns you about incompatible packages before installation</li>
          <li>• Preserves language-level packages that work everywhere (npm, pip, gems)</li>
          <li>• Restores shell configs with environment-specific adjustments</li>
        </ul>
        <p className="leading-relaxed text-sm pt-2">
          For example, a backup from macOS will skip Homebrew on Linux but will successfully restore your npm globals, Python packages, VS Code extensions, and shell configurations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-light text-gray-100">Security By Design</h2>
        <p className="leading-relaxed">
          DevBackup takes security seriously and follows the principle of least privilege:
        </p>
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 space-y-2 text-sm">
          <p><span className="text-green-400">✓</span> Only backs up <strong>public SSH keys</strong>, never private keys</p>
          <p><span className="text-green-400">✓</span> Creates timestamped backups of existing configs before overwriting</p>
          <p><span className="text-green-400">✓</span> Never stores passwords or authentication tokens</p>
          <p><span className="text-green-400">✓</span> All operations run with explicit user confirmation</p>
          <p><span className="text-green-400">✓</span> Open-source and auditable - every line of code is visible</p>
          <p><span className="text-green-400">✓</span> No telemetry, no phone-home, no data collection</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-light text-gray-100">Performance Characteristics</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-light mb-2">~30s</div>
            <div className="text-sm text-gray-300">Typical backup time for a full development environment</div>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-light mb-2">10-50KB</div>
            <div className="text-sm text-gray-300">Average backup archive size (just metadata, not binaries)</div>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-light mb-2">10-30m</div>
            <div className="text-sm text-gray-300">Full restore time depending on internet speed</div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-light text-gray-100">Real-World Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-100 mb-2">Hardware Upgrades</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Upgrading to a new laptop? Backup your old machine, restore on the new one, and be coding within 30 minutes.
            </p>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-100 mb-2">OS Migrations</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Switching from macOS to Linux or Windows to WSL? DevBackup handles cross-platform migrations intelligently.
            </p>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-100 mb-2">Team Onboarding</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Create a team backup with standardized tools and configs. New developers can be <strong>productive on day one</strong>.
            </p>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-100 mb-2">Disaster Recovery</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Regular backups mean you're always one command away from restoring your entire development environment.
            </p>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 md:col-span-2">
            <h3 className="text-lg font-medium text-gray-100 mb-2">CI/CD Environments</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Use DevBackup to ensure your CI environment matches your local development setup exactly.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-light text-gray-100">Technical Implementation Details</h2>
        <p className="leading-relaxed">
          DevBackup is implemented as a ~600 line Bash script with <strong>zero external dependencies</strong> beyond standard Unix utilities. This design choice ensures maximum portability and reliability.
        </p>
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 space-y-3 text-sm">
          <div><strong className="text-gray-100">Language:</strong> <span className="text-gray-300">Bash 4.0+ (compatible with Bash 3.2 on macOS)</span></div>
          <div><strong className="text-gray-100">Dependencies:</strong> <span className="text-gray-300">tar, gzip, find, grep (all standard Unix utilities)</span></div>
          <div><strong className="text-gray-100">Backup Format:</strong> <span className="text-gray-300">Gzipped tar archive with structured directory hierarchy</span></div>
          <div><strong className="text-gray-100">Installation:</strong> <span className="text-gray-300">Single executable copied to /usr/local/bin</span></div>
          <div><strong className="text-gray-100">Permissions:</strong> <span className="text-gray-300">Requires sudo only for installation and system package operations</span></div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-light text-gray-100">Why DevBackup?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-100 mb-2">vs. Manual Setup</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Manual environment setup takes 3-8 hours and is error-prone. DevBackup does it in 15-30 minutes with perfect consistency.
            </p>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-100 mb-2">vs. Dotfile Managers</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Dotfile managers only handle configs. DevBackup backs up packages, tools, extensions, and configs in one unified workflow.
            </p>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-100 mb-2">vs. Docker Containers</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Docker is great for projects but doesn't handle your personal development environment. DevBackup <strong>complements Docker</strong> perfectly.
            </p>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-100 mb-2">vs. Configuration Management</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Ansible/Chef are overkill for personal machines. DevBackup is simple, requires no server, and just works.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}