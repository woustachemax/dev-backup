import { Terminal, TypingAnimation } from "@/components/ui/terminal";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
export default function Hero() { 
    return (
        <section className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="w-[800px] h-[800px]">
                    <defs>
                        <radialGradient id="blob1" cx="50%" cy="50%">
                            <stop offset="0%" style={{stopColor:"#00f5ff", stopOpacity:0.8}} />
                            <stop offset="100%" style={{stopColor:"#00f5ff", stopOpacity:0}} />
                        </radialGradient>
                        
                        <radialGradient id="blob2" cx="50%" cy="50%">
                            <stop offset="0%" style={{stopColor:"#7b61ff", stopOpacity:0.8}} />
                            <stop offset="100%" style={{stopColor:"#7b61ff", stopOpacity:0}} />
                        </radialGradient>
                        
                        <radialGradient id="blob3" cx="50%" cy="50%">
                            <stop offset="0%" style={{stopColor:"#ff006e", stopOpacity:0.8}} />
                            <stop offset="100%" style={{stopColor:"#ff006e", stopOpacity:0}} />
                        </radialGradient>
                        
                        <radialGradient id="blob4" cx="50%" cy="50%">
                            <stop offset="0%" style={{stopColor:"#00ff87", stopOpacity:0.7}} />
                            <stop offset="100%" style={{stopColor:"#00ff87", stopOpacity:0}} />
                        </radialGradient>
                        
                        <radialGradient id="blob5" cx="50%" cy="50%">
                            <stop offset="0%" style={{stopColor:"#ffa500", stopOpacity:0.7}} />
                            <stop offset="100%" style={{stopColor:"#ffa500", stopOpacity:0}} />
                        </radialGradient>
                        
                        <radialGradient id="centerGlow" cx="50%" cy="50%">
                            <stop offset="0%" style={{stopColor:"#ffffff", stopOpacity:1}} />
                            <stop offset="40%" style={{stopColor:"#ffffff", stopOpacity:0.6}} />
                            <stop offset="100%" style={{stopColor:"#ffffff", stopOpacity:0}} />
                        </radialGradient>
                        
                        <filter id="blur">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
                        </filter>
                        
                        <filter id="softBlur">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
                        </filter>
                    </defs>
                    
                    <g filter="url(#blur)">
                        <ellipse cx="20" cy="14" rx="8.5" ry="9.5" fill="url(#blob1)" opacity="0.9">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 20 20"
                                to="360 20 20"
                                dur="20s"
                                repeatCount="indefinite" />
                        </ellipse>
                        
                        <ellipse cx="26" cy="17" rx="9" ry="8.5" fill="url(#blob2)" opacity="0.85">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 20 20"
                                to="-360 20 20"
                                dur="25s"
                                repeatCount="indefinite" />
                        </ellipse>
                        
                        <ellipse cx="25" cy="24" rx="8" ry="9" fill="url(#blob3)" opacity="0.8">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 20 20"
                                to="360 20 20"
                                dur="18s"
                                repeatCount="indefinite" />
                        </ellipse>
                        
                        <ellipse cx="15" cy="20" rx="8.8" ry="8.2" fill="url(#blob4)" opacity="0.75">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 20 20"
                                to="-360 20 20"
                                dur="22s"
                                repeatCount="indefinite" />
                        </ellipse>
                        
                        <ellipse cx="17" cy="25" rx="7.5" ry="8.5" fill="url(#blob5)" opacity="0.75">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 20 20"
                                to="360 20 20"
                                dur="19s"
                                repeatCount="indefinite" />
                        </ellipse>
                    </g>
                    
                    <circle cx="20" cy="20" r="5" fill="url(#centerGlow)" filter="url(#softBlur)" opacity="0.95" />
                    
                    <circle cx="20" cy="20" r="12" fill="none" stroke="#ffffff" strokeWidth="0.3" opacity="0.15" filter="url(#softBlur)" />
                </svg>
            </div>

            <div className="container relative z-10">
                <div className="text-center mx-auto max-w-4xl px-6">
                    <div className="mb-8 inline-flex">
                        <AnimatedShinyText className="!text-white">
                            Change devices like you change frameworks
                        </AnimatedShinyText>
                    </div>
                    
                    <h1 className="text-7xl font-bold tracking-tighter text-white mb-6">
                        Backup Your Dev Environment in Seconds
                    </h1>
                    
                    <p className="text-xl text-gray-400 mb-8">
                        Cross-platform tool that backs up your packages, configs, and extensions. Restore everything on a new machine with one command.
                    </p>
                    
                    <Terminal className="!bg-black/50 !border-gray-800">
                        <TypingAnimation className="!text-white">
                            curl -fsSL devbackup.sh | sudo bash
                        </TypingAnimation>
                    </Terminal>
                </div>
            </div>
        </section>
    );
}