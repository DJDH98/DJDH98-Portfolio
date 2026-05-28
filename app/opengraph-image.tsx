import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "DJDH98 developer portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#f5f5f5",
          padding: "72px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ color: "#6366f1", fontSize: 28, letterSpacing: 4 }}>
          DJDH98
        </div>
        <div>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1 }}>
            Building thoughtful digital tools
          </div>
          <div style={{ marginTop: 28, color: "#a3a3a3", fontSize: 34 }}>
            Interactive experiences. Clean interfaces. Practical systems.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
