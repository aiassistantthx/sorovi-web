import { ImageResponse } from "next/og";
import { getBlogPostBySlug } from "@/lib/blog";

export const alt = "Hyreel Blog";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(124, 58, 237, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
          padding: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 16px",
              borderRadius: 20,
              backgroundColor: "rgba(124, 58, 237, 0.2)",
              border: "1px solid rgba(124, 58, 237, 0.3)",
            }}
          >
            <span style={{ color: "#a78bfa", fontSize: 18, fontWeight: 500 }}>
              {post?.category || "Blog"}
            </span>
          </div>
          <span
            style={{
              marginLeft: 16,
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: 18,
            }}
          >
            {post?.readingTime || 5} min read
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.2,
              maxWidth: 1000,
              marginBottom: 24,
            }}
          >
            {post?.title || "Hyreel Blog"}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            {post?.excerpt?.slice(0, 150) || "AI video creation tips and tutorials"}
            {(post?.excerpt?.length || 0) > 150 ? "..." : ""}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: "linear-gradient(135deg, #7c3aed 0%, #10b981 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <span style={{ fontSize: 28, color: "white" }}>H</span>
            </div>
            <span
              style={{
                fontSize: 28,
                fontWeight: 600,
                color: "white",
              }}
            >
              Hyreel Blog
            </span>
          </div>
          <div
            style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: 20,
            }}
          >
            hyreel.com/blog
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
