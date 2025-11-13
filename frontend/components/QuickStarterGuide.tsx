import { Copy, Check } from 'lucide-react';

interface QuickStartGuideProps {
  copiedCommand: string | null;
  onCommandCopy: (text: string, id: string) => void;
}

export default function QuickStartGuide({ copiedCommand, onCommandCopy }: QuickStartGuideProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-light text-gray-100">Quick Start Guide</h2>
      <div className="space-y-6">
        <div>
          <h4 className="text-gray-100 font-medium mb-3">Installation</h4>
          <div className="relative group">
            <code className="block bg-gray-900/50 border border-gray-800 px-4 py-3 pr-12 rounded font-mono text-sm text-white">
              curl -fsSL https://raw.githubusercontent.com/woustachemax/dev-backup/main/install.sh | sudo bash
            </code>
            <button
              onClick={() =>
                onCommandCopy(
                  'curl -fsSL https://raw.githubusercontent.com/woustachemax/dev-backup/main/install.sh | sudo bash',
                  'install'
                )
              }
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
          <p className="text-sm text-gray-300 mt-2">
            Installs devbackup to /usr/local/bin and makes it globally available
          </p>
        </div>

        <div>
          <h4 className="text-gray-100 font-medium mb-3">Create a Backup</h4>
          <div className="relative group">
            <code className="block bg-gray-900/50 border border-gray-800 px-4 py-3 pr-12 rounded font-mono text-sm text-white">
              devbackup backup
            </code>
            <button
              onClick={() => onCommandCopy('devbackup backup', 'backup')}
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
          <p className="text-sm text-gray-300 mt-2">
            Creates ~/DevBackup.tar.gz with your entire environment
          </p>
        </div>

        <div>
          <h4 className="text-gray-100 font-medium mb-3">Restore on New Machine</h4>
          <div className="relative group">
            <code className="block bg-gray-900/50 border border-gray-800 px-4 py-3 pr-12 rounded font-mono text-sm text-white whitespace-pre">
              {`curl -fsSL devbackup.sh | sudo bash
devbackup restore`}
            </code>
            <button
              onClick={() =>
                onCommandCopy('curl -fsSL devbackup.sh | sudo bash\ndevbackup restore', 'restore')
              }
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
          <div className="relative group mb-2">
            <code className="block bg-gray-900/50 border border-gray-800 px-4 py-3 pr-12 rounded font-mono text-sm text-white">
              devbackup verify
            </code>
            <button
              onClick={() => onCommandCopy('devbackup verify', 'verify')}
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
          <p className="text-sm text-gray-300 mt-2">
            View detailed information about what's in your backup
          </p>
        </div>

        <div>
          <h4 className="text-gray-100 font-medium mb-3 mt-3">Uninstall DevBackup</h4>
          <div className="relative group">
            <code className="block bg-gray-900/50 border border-gray-800 px-4 py-3 pr-12 rounded font-mono text-sm text-white">
              curl -fsSL https://raw.githubusercontent.com/woustachemax/dev-backup/main/uninstall.sh |
              sudo bash
            </code>
            <button
              onClick={() =>
                onCommandCopy(
                  'curl -fsSL https://raw.githubusercontent.com/woustachemax/dev-backup/main/uninstall.sh | sudo bash',
                  'uninstall'
                )
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 hover:bg-white/10 rounded transition-colors"
            >
              {copiedCommand === 'uninstall' ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-neutral-400 hover:text-gray-200" />
              )}
            </button>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            Your backups are preserved at ~/DevBackup.tar.gz
          </p>
        </div>
      </div>
    </div>
  );
}
