'use client'
export default function Footer() {
  return (
    <footer className="mt-20 text-sm text-gray-500 border-t border-gray-800 pt-8 pb-12">
      <p>© {new Date().getFullYear()} DevBackup. All rights reserved.</p>
      <p className="mt-1">Open source on <a href="https://github.com/woustachemax/dev-backup" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a></p>
    </footer>
  );
}
