import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = "Deployyard — Infrastructure for robots at scale.";

function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36">
      <path d="M2 10 V2 H10 M26 2 H34 V10 M34 26 V34 H26 M10 34 H2 V26" fill="none" stroke="#FFD43B" strokeWidth="3" />
      <rect x="9" y="9" width="18" height="18" fill="none" stroke="#FFFFFF" strokeWidth="2" />
      <circle cx="18" cy="18" r="5" fill="#FFD43B" />
    </svg>
  );
}

/** Shared by opengraph-image and twitter-image. */
export function renderOgImage() {
  // Sync read keeps the image prerendered at build time (async fs would make it dynamic).
  const display = readFileSync(join(process.cwd(), "assets/BigShouldersDisplay-ExtraBold.ttf"));

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#0B2C6F", fontFamily: "Big Shoulders Display", color: "#FFFFFF", overflow: "hidden" }}>
        {/* the page's blueprint grid */}
        {Array.from({ length: 6 }, (_, i) => (
          <div key={`h${i}`} style={{ position: "absolute", left: 0, right: 0, top: i * 120, height: 1, background: "rgba(214,228,255,.1)" }} />
        ))}
        {Array.from({ length: 11 }, (_, i) => (
          <div key={`v${i}`} style={{ position: "absolute", top: 0, bottom: 0, left: i * 120, width: 1, background: "rgba(214,228,255,.1)" }} />
        ))}

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 72px", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <Mark size={68} />
            <div style={{ display: "flex", fontSize: 58, letterSpacing: "0.04em", textTransform: "uppercase" }}>
              <span>Deploy</span>
              <span style={{ color: "#FFD43B" }}>yard</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 138, lineHeight: 0.9, textTransform: "uppercase" }}>
            <span>Infrastructure for</span>
            <span>robots <span style={{ color: "#FFD43B", marginLeft: 28 }}>at scale.</span></span>
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: [{ name: "Big Shoulders Display", data: display, style: "normal", weight: 800 }] },
  );
}

export function renderAppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0B2C6F" }}>
        <Mark size={132} />
      </div>
    ),
    { width: 180, height: 180 },
  );
}
