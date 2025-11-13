'use client'
import { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import TerminalWindow from './TerminalWindow';
import HeroHeader from './HeroHeader';
import ContentSections from './ContentSection';
import Footer from './Footer';
import QuickStartGuide from './QuickStarterGuide';

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'macos'|'linux'|'windows'>('macos');
  const [copied, setCopied] = useState(false);
  const [hideTerminal, setHideTerminal] = useState(false);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const commands = {
    macos: 'curl -fsSL https://raw.githubusercontent.com/woustachemax/dev-backup/main/install.sh | sudo bash',
    linux: 'curl -fsSL https://raw.githubusercontent.com/woustachemax/dev-backup/main/install.sh | sudo bash',
    windows: 'iwr -useb https://raw.githubusercontent.com/woustachemax/dev-backup/main/install.ps1 | iex'
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
      <AnimatedBackground />
      
      <div className="container relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8 mb-16">
            <HeroHeader />
            
            <TerminalWindow
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              hideTerminal={hideTerminal}
              setHideTerminal={setHideTerminal}
              commands={commands}
              onCopy={handleCopy}
              copied={copied}
            />
          </div>

          <div className="space-y-12 text-gray-300">
            <ContentSections />
            <QuickStartGuide 
              copiedCommand={copiedCommand}
              onCommandCopy={handleCommandCopy}
            />
            <Footer />
          </div>
        </div>
      </div>
    </section>
  );
}