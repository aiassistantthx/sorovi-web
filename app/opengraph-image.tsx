import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Hyreel";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 40,
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 20,
                background: "linear-gradient(135deg, #7c3aed 0%, #10b981 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 20,
              }}
            >
              <span style={{ fontSize: 48, color: "white" }}>H</span>
            </div>
            <span
              style={{
                fontSize: 64,
                fontWeight: 700,
                color: "white",
                letterSpacing: "-0.02em",
              }}
            >
              Hyreel
            </span>
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 600,
              color: "white",
              textAlign: "center",
              marginBottom: 20,
              maxWidth: 900,
            }}
          >
            AI Video Generation App
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255, 255, 255, 0.7)",
              textAlign: "center",
              maxWidth: 800,
            }}
          >
            Transform photos into viral videos for TikTok, Instagram & YouTube
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: 20,
            }}
          >
            <span>4.8</span>
            <span style={{ color: "#fbbf24" }}>★</span>
            <span>App Store</span>
          </div>
          <div
            style={{
              width: 1,
              height: 24,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
          />
          <div
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: 20,
            }}
          >
            14,000+ Creators
          </div>
          <div
            style={{
              width: 1,
              height: 24,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
          />
          <div
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: 20,
            }}
          >
            hyreel.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
