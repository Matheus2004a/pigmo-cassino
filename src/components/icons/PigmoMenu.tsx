export function PigmoMenu({ className }: { className?: string }) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g clipPath="url(#clip0_1_6361)">
        <g filter="url(#filter0_d_1_6361)">
          <path d="M6.24998 16.25L11.25 21.25L9.49998 23.025L1.47498 15L9.49998 6.97498L11.25 8.74998L6.24998 13.75H26.25V16.25H6.24998ZM26.25 7.49998V9.99998H13.75V7.49998H26.25ZM26.25 20V22.5H13.75V20H26.25Z" fill="#E90083" />
        </g>
      </g>
      <defs>
        <filter id="filter0_d_1_6361" x="-3.22502" y="4.27498" width="34.175" height="25.45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.35" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.00392157 0 0 0 0 0.513726 0 0 0 0.43 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_6361" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_6361" result="shape" />
        </filter>
        <clipPath id="clip0_1_6361">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}