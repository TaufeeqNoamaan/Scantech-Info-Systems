import { ImageResponse } from "next/og";

export const alt =
  "Scantech Info Systems — enterprise IT infrastructure, hardware AMC and commercial security";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social share card.
 *
 * Generated rather than hand-authored so it stays in step with the brand
 * tokens. Before this existed, every link shared on LinkedIn, WhatsApp or email
 * rendered as a blank grey box — a visible miss for a firm whose pipeline comes
 * largely from referrals.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0F2942 0%, #123250 55%, #091A2B 100%)",
          padding: "76px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "56px",
              height: "6px",
              borderRadius: "3px",
              background: "#1D4ED8",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "3px",
              color: "#B0C9E8",
            }}
          >
            THREE DECADES OF ENTERPRISE IT
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: "60px",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-1.5px",
              color: "#FFFFFF",
              maxWidth: "940px",
            }}
          >
            Reliable IT Infrastructure, Hardware AMC &amp; Turnkey Networking
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "28px",
              fontSize: "26px",
              color: "#CBD5E1",
            }}
          >
            Structured cabling · Hardware AMC · Commercial CCTV &amp; security
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: "28px",
            fontSize: "24px",
            color: "#94A3B8",
          }}
        >
          <div style={{ display: "flex", fontWeight: 600, color: "#FFFFFF" }}>
            Scantech Info Systems
          </div>
          <div style={{ display: "flex" }}>Hardware · Service · Software</div>
        </div>
      </div>
    ),
    size,
  );
}
