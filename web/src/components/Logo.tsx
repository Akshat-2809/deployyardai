export function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" aria-hidden="true">
      <path d="M2 10 V2 H10 M26 2 H34 V10 M34 26 V34 H26 M10 34 H2 V26" fill="none" stroke="var(--yel)" strokeWidth="3" />
      <rect x="9" y="9" width="18" height="18" fill="none" stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="18" cy="18" r="5" fill="var(--yel)" />
    </svg>
  );
}
