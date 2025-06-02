export function Logo({ className = "w-40 h-12" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Shape */}
      <path
        d="M8 0h144c4.418 0 8 3.582 8 8v32c0 4.418-3.582 8-8 8H8c-4.418 0-8-3.582-8-8V8c0-4.418 3.582-8 8-8z"
        fill="#3B82F6"
      />
      
      {/* W */}
      <path
        d="M20 12l4 24h4l3-18 3 18h4l4-24h-4l-2.5 15-2.5-15h-4l-2.5 15-2.5-15h-4z"
        fill="white"
      />
      
      {/* W */}
      <path
        d="M65 12l4 24h4l3-18 3 18h4l4-24h-4l-2.5 15-2.5-15h-4l-2.5 15-2.5-15h-4z"
        fill="white"
      />
      
      {/* T */}
      <path
        d="M105 12v4h6v20h4V16h6v-4h-16z"
        fill="white"
      />

      {/* Circuit Board Pattern */}
      <path
        d="M140 8h4v4h-4zM144 12h4v4h-4zM136 16h4v4h-4z"
        fill="#60A5FA"
        opacity="0.6"
      />
    </svg>
  );
}
