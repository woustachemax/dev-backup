'use client'
export default function ContentSections() {
  return (
    <>
      <section className="space-y-4">
        <h2 className="text-2xl font-light text-gray-100">The Problem</h2>
        <p className="leading-relaxed">
          Setting up a new machine or switching OS is a <strong>multi-hour ordeal</strong>.
          You reinstall Node, Python, extensions, and debug configuration mismatches.
          Traditional methods are <em>manual, error-prone, and time-consuming</em>.
        </p>
        <p className="leading-relaxed">
          DevBackup solves this with a <u>complete environment snapshot</u>
          restorable on any compatible system in <strong>minutes</strong>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-light text-gray-100">Complete Environment Capture</h2>
        <p className="leading-relaxed">
          Captures your entire development setup across ecosystems:
        </p>

        <div className="grid md:grid-cols-2 gap-6 pt-2">
          <div>
            <h3 className="text-lg font-medium text-gray-100">Package Managers</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Homebrew, APT, Pacman, Chocolatey</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-100">Language Ecosystems</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Node.js, Python, Rust, Ruby</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-100">Development Tools</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• VS Code, Cursor, Git, Vim, Tmux</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-100">Shell & Security</h3>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Zsh, Bash, SSH configs, Shell scripts</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-light text-gray-100">Security By Design</h2>
        <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 space-y-2 text-sm">
          <p><span className="text-green-400">✓</span> Public SSH keys only</p>
          <p><span className="text-green-400">✓</span> Timestamped backups before overwrite</p>
          <p><span className="text-green-400">✓</span> No passwords, tokens, or telemetry</p>
          <p><span className="text-green-400">✓</span> Fully open-source and auditable</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-light text-gray-100">Performance</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
            <div className="text-3xl font-light mb-1">~30s</div>
            <div className="text-sm text-gray-300">Backup time</div>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
            <div className="text-3xl font-light mb-1">10–50KB</div>
            <div className="text-sm text-gray-300">Archive size</div>
          </div>
          <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
            <div className="text-3xl font-light mb-1">10–30m</div>
            <div className="text-sm text-gray-300">Restore duration</div>
          </div>
        </div>
      </section>
    </>
  );
}
