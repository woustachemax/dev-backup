import { Copy, Check } from 'lucide-react';

interface TerminalWindowProps {
  activeTab: 'macos' | 'linux' | 'windows';
  setActiveTab: (tab: 'macos' | 'linux' | 'windows') => void;
  hideTerminal: boolean;
  setHideTerminal: (value: boolean) => void;
  commands: Record<'macos' | 'linux' | 'windows', string>;
  onCopy: () => void;
  copied: boolean;
}

export default function TerminalWindow({
  activeTab,
  setActiveTab,
  hideTerminal,
  setHideTerminal,
  commands,
  onCopy,
  copied,
}: TerminalWindowProps) {
  return (
    <div className="relative z-10 w-full flex justify-center mt-10 max-w-4xl mx-auto">
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="relative bg-white/5 backdrop-blur-xl rounded-lg sm:rounded-2xl p-1 sm:p-1.5 border border-white/10 shadow-xl w-full transition-all duration-500">
        <div
          className={`bg-stone-900 backdrop-blur-sm rounded-lg overflow-hidden h-[120px] sm:h-[130px] lg:h-[140px] w-full border border-white/10 shadow-lg ${
            hideTerminal ? 'opacity-0 h-0 p-0 border-0 shadow-none' : ''
          } transition-all duration-500`}
        >
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-stone-800/80 backdrop-blur-sm border-b border-white/10">
            <div className="flex space-x-1.5">
              <div
                onClick={() => setHideTerminal(!hideTerminal)}
                className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
              ></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center space-x-3 text-xs sm:text-sm">
              {['macos', 'linux', 'windows'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as 'macos' | 'linux' | 'windows')}
                  className={`transition-colors capitalize ${
                    activeTab === tab ? 'text-gray-200' : 'text-neutral-500 hover:text-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between h-[calc(100%-48px)] px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm text-neutral-300">
            <div className="flex items-center min-w-0 flex-1 overflow-x-auto scrollbar-hide">
              <span className="text-green-400 shrink-0">dev</span>
              <span className="text-neutral-400 shrink-0">@</span>
              <span className="text-blue-400 shrink-0">backup</span>
              <span className="text-neutral-400 shrink-0">:</span>
              <span className="text-purple-400 shrink-0">~</span>
              <span className="text-neutral-400 shrink-0">$</span>
              <span className="ml-2 whitespace-nowrap">{commands[activeTab]}</span>
            </div>
            <button
              onClick={onCopy}
              className="ml-4 p-1.5 hover:bg-white/10 rounded transition-colors shrink-0"
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
  );
}
