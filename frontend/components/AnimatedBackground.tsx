export default function AnimatedBackground() {
  return (
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
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="20s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="80" cy="25" rx="28" ry="25" fill="url(#blob2)" opacity="0.6">
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="-360 50 50" dur="22s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="75" cy="80" rx="26" ry="28" fill="url(#blob3)" opacity="0.5">
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="18s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="25" cy="75" rx="27" ry="26" fill="url(#blob4)" opacity="0.5">
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="-360 50 50" dur="24s" repeatCount="indefinite" />
          </ellipse>
        </g>
      </svg>
    </div>
  );
}