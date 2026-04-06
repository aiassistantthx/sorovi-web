"""
Pipeline: Generate showcase videos for each tool landing page.
1. Analyze tool content → craft image prompt
2. Generate image via Freepik Mystic
3. Generate video from image via MiniMax Hailuo i2v
4. Download and convert to web-optimized mp4
"""

import os
import sys
import time
import json
import subprocess
import urllib.request
import urllib.parse

API_KEY = "FPSXb24e7b59801eb8ec0aec896bbbdea2b9"
BASE = "https://api.freepik.com"
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "videos", "tools")
os.makedirs(OUTPUT_DIR, exist_ok=True)

HEADERS = {
    "x-freepik-api-key": API_KEY,
    "Content-Type": "application/json",
}

# Tool slug → 3 image prompts (cinematic, trendy, eye-catching)
TOOL_PROMPTS = {
    "ai-zoom-video-effect": [
        "A stunning close-up of a golden perfume bottle on black velvet, dramatic zoom perspective, bokeh lights, luxury product photography, 4k cinematic",
        "Extreme close-up of a human eye with colorful reflections, cinematic macro photography, shallow depth of field, dramatic lighting",
        "Red sports car headlight in rain, dramatic zoom composition, neon reflections on wet surface, moody cinematic atmosphere",
    ],
    "ai-orbit-video-effect": [
        "A pair of premium white sneakers floating on gradient background, studio lighting, product showcase, clean modern aesthetic, 4k",
        "Crystal perfume bottle on reflective dark surface, 360 degree view angle, dramatic rim lighting, luxury product photography",
        "A delicious gourmet burger floating against dark background, ingredients visible, food photography, dramatic studio lighting",
    ],
    "ai-follow-video-effect": [
        "A stylish woman walking through neon-lit Tokyo street at night, street photography, cinematic color grading, trendy urban vibe",
        "Golden retriever running through sunlit meadow with wildflowers, dynamic motion, warm golden hour light, joyful energy",
        "Skateboarder doing trick in empty pool at sunset, dynamic angle, warm backlight, California vibes, action photography",
    ],
    "ai-parallax-video-effect": [
        "Breathtaking mountain landscape with lake reflection at sunrise, multiple depth layers, misty atmosphere, dramatic natural lighting",
        "Ancient Japanese temple with cherry blossoms in foreground, layered depth, soft morning light, serene peaceful atmosphere",
        "New York City skyline from rooftop at blue hour, foreground flowers blurred, layered cityscape depth, cinematic urban photography",
    ],
    "image-to-video-ai": [
        "A mystical forest with sunbeams cutting through dense fog, magical atmosphere, particles of light floating, fantasy landscape photography",
        "A colorful hot air balloon floating over lavender fields in Provence, dreamy golden hour, aerial perspective, vibrant colors",
        "Ocean waves crashing on volcanic rocks at sunset, dramatic sky with orange and purple clouds, long exposure feel, powerful nature",
    ],
    "ai-video-from-image": [
        "A butterfly resting on a dewy red rose, macro photography, morning light, soft bokeh background, nature beauty",
        "Steaming cup of coffee on rustic wooden table by a window with rain, cozy atmosphere, warm tones, lifestyle photography",
        "Northern lights dancing over snow-covered mountains reflected in still fjord, magical night sky, vibrant greens and purples",
    ],
    "ai-tiktok-video-generator": [
        "Trendy Gen Z girl making content with ring light and phone, colorful room, aesthetic setup, influencer vibes, bright and fun",
        "Flat lay of trendy fashion accessories on pink marble, sunglasses watches jewelry phone, aesthetic social media content, top view",
        "Colorful smoothie bowls with tropical fruits arranged beautifully, food content creator setup, vibrant Instagram aesthetic, overhead shot",
    ],
    "ai-instagram-reels-maker": [
        "Aesthetic coffee shop interior with warm lighting, latte art on marble table, Instagram-worthy scene, cozy minimalist design",
        "Fashion model in flowing dress on rooftop at golden hour, wind in hair, backlit silhouette, editorial photography style",
        "Beautiful sunrise yoga pose on beach, silhouette against orange sky, peaceful wellness aesthetic, Instagram lifestyle content",
    ],
    "ai-product-video-maker": [
        "Premium cosmetics collection on marble podium with soft pink lighting, luxury beauty products, clean studio photography, elegant composition",
        "Sleek smartphone on reflective surface with colorful gradient background, tech product photography, modern minimalist, Apple-style aesthetic",
        "Handcrafted leather watch displayed on dark stone with dramatic side lighting, luxury menswear product, premium quality feel",
    ],
    "ai-ecommerce-video-creator": [
        "Multiple skincare products arranged in an aesthetic flat lay with flowers and textures, e-commerce styled photography, clean white background",
        "Premium headphones on geometric display blocks, colorful gradient lighting, tech e-commerce product photography, modern and clean",
        "Artisan chocolate truffles arranged in gift box with gold accents, luxury food product photography, warm elegant lighting",
    ],
    "ai-social-media-video-maker": [
        "Dynamic collage of social media content creation, colorful graphics, multiple screens, digital marketing aesthetic, vibrant modern design",
        "Content creator desk setup with camera, lights, laptop, and coffee, aesthetic workspace, warm productive atmosphere, top-down view",
        "Vibrant street art mural in urban setting, bold colors and patterns, street photography style, social media worthy composition",
    ],
    "ai-youtube-shorts-generator": [
        "Professional YouTube studio setup with camera, ring light, colorful LED backdrop, content creator workspace, modern and inspiring",
        "Dynamic shot of gaming setup with RGB lighting, multiple monitors, keyboard and mouse, tech content creator aesthetic",
        "Cooking content being filmed from above, colorful ingredients on cutting board, hands preparing food, engaging top-down recipe shot",
    ],
    "ai-faceless-video-generator": [
        "Cinematic overhead shot of hands typing on laptop keyboard with stock charts on screen, business content, moody blue lighting",
        "Animated text and graphics floating over dark gradient background, modern motion design aesthetic, clean typography, digital content",
        "Aesthetic book and coffee flat lay with autumn leaves, cozy knowledge aesthetic, warm natural lighting, faceless lifestyle content",
    ],
    "ai-short-video-maker": [
        "Explosive paint splash in multiple colors frozen in time against black background, high speed photography, dynamic and energetic",
        "Time-lapse style cityscape with light trails from traffic, dynamic urban energy, blue hour sky, long exposure effect",
        "Dancer in flour explosion, dramatic freeze moment, artistic motion captured, black background, powerful and dynamic",
    ],
    "ai-photo-animation": [
        "A serene koi fish pond with lily pads and clear water, Japanese garden, peaceful atmosphere, ready to animate",
        "A field of sunflowers under dramatic cloudy sky, gentle breeze feeling, golden warm light, countryside landscape",
        "Portrait of a woman with flowing hair and closed eyes, artistic double exposure with flowers, dreamy ethereal mood",
    ],
    "ai-3d-photo-video": [
        "Miniature city diorama with tilt-shift effect, tiny buildings and streets, dramatic depth of field, 3D perspective",
        "Architectural interior of modern luxury home, clean lines and open space, depth and perspective, real estate photography",
        "A stack of vintage cameras on wooden shelf, shallow depth of field, nostalgic aesthetic, 3D depth feeling",
    ],
    "ai-script-generator": [
        "Vintage typewriter with paper and coffee on wooden desk, warm creative atmosphere, writer aesthetic, inspirational workspace",
        "Screenplay pages scattered on desk with film clapperboard and pen, Hollywood screenwriting aesthetic, dramatic overhead lighting",
        "Modern tablet showing script text with headphones and microphone nearby, content creation workspace, professional creator setup",
    ],
    "ai-voice-generator": [
        "Professional podcast microphone with pop filter, warm studio lighting, audio waves visualization overlay, recording studio aesthetic",
        "Sleek wireless earbuds on minimalist surface with sound wave graphics, modern audio technology, clean product photography",
        "Vintage radio microphone with warm golden lighting, retro broadcasting studio feel, nostalgic yet premium atmosphere",
    ],
    "ai-avatar-creator": [
        "Stylized digital portrait of a person with vibrant neon colors and geometric shapes, modern digital art, avatar aesthetic",
        "Collection of diverse cartoon character avatars on colorful grid background, playful digital art style, friendly and fun",
        "Futuristic holographic face with digital data streams, cyberpunk avatar aesthetic, blue and purple tones, AI generated feel",
    ],
}


def api_request(method, path, data=None):
    """Make API request to Freepik"""
    url = BASE + path
    body = json.dumps(data).encode() if data else None
    req = urllib.request.Request(url, data=body, headers=HEADERS, method=method)
    try:
        resp = urllib.request.urlopen(req, timeout=30)
        return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        print(f"  API Error {e.code}: {body[:200]}")
        return None


def generate_image(prompt):
    """Generate image using Mystic"""
    result = api_request("POST", "/v1/ai/mystic", {
        "prompt": prompt,
        "resolution": "2k",
        "aspect_ratio": "portrait_9_16",
    })
    if not result:
        return None

    task_id = result["data"]["task_id"]
    print(f"  Image task: {task_id}")

    # Poll for completion
    for _ in range(30):
        time.sleep(5)
        status = api_request("GET", f"/v1/ai/mystic/{task_id}")
        if status and status["data"]["status"] == "COMPLETED":
            img_url = status["data"]["generated"][0]
            print(f"  Image ready")
            return img_url
        elif status and status["data"]["status"] == "FAILED":
            print(f"  Image generation failed")
            return None

    print(f"  Image generation timeout")
    return None


def generate_video(image_url, prompt="smooth cinematic camera motion, professional quality"):
    """Generate video from image using MiniMax Hailuo"""
    result = api_request("POST", "/v1/ai/image-to-video/minimax-hailuo-02-1080p", {
        "image": image_url,
        "prompt": prompt,
    })
    if not result:
        return None

    task_id = result["data"]["task_id"]
    print(f"  Video task: {task_id}")

    # Poll for completion (videos take longer)
    for _ in range(60):
        time.sleep(10)
        status = api_request("GET", f"/v1/ai/image-to-video/minimax-hailuo-02-1080p/{task_id}")
        if status and status["data"]["status"] == "COMPLETED":
            video_url = status["data"]["generated"][0]
            print(f"  Video ready")
            return video_url
        elif status and status["data"]["status"] == "FAILED":
            print(f"  Video generation failed")
            return None

    print(f"  Video generation timeout")
    return None


def download_and_convert(url, output_name):
    """Download video and convert to web-optimized mp4"""
    tmp_path = os.path.join(OUTPUT_DIR, f"{output_name}.tmp")
    final_path = os.path.join(OUTPUT_DIR, output_name)

    # Download
    urllib.request.urlretrieve(url, tmp_path)

    # Convert with ffmpeg - 720p, no audio, web-optimized
    subprocess.run([
        "ffmpeg", "-y", "-i", tmp_path,
        "-vf", "scale=720:-2",
        "-c:v", "libx264", "-crf", "24", "-preset", "fast",
        "-an", "-movflags", "+faststart",
        final_path
    ], capture_output=True)

    os.remove(tmp_path)
    size = os.path.getsize(final_path)
    print(f"  Saved: {output_name} ({size // 1024}KB)")
    return final_path


def process_tool(slug, prompts):
    """Full pipeline for one tool"""
    print(f"\n{'='*60}")
    print(f"Processing: {slug}")
    print(f"{'='*60}")

    for i, prompt in enumerate(prompts, 1):
        output_name = f"gen-{slug}-{i}.mp4"
        final_path = os.path.join(OUTPUT_DIR, output_name)

        # Skip if already exists
        if os.path.exists(final_path) and os.path.getsize(final_path) > 1000:
            print(f"\n  [{i}/3] Skipping (exists): {output_name}")
            continue

        print(f"\n  [{i}/3] Generating...")
        print(f"  Prompt: {prompt[:80]}...")

        # Step 1: Generate image
        image_url = generate_image(prompt)
        if not image_url:
            print(f"  FAILED: Could not generate image")
            continue

        # Step 2: Generate video from image
        video_motion = "smooth slow cinematic camera movement, professional video quality"
        video_url = generate_video(image_url, video_motion)
        if not video_url:
            print(f"  FAILED: Could not generate video")
            continue

        # Step 3: Download and convert
        download_and_convert(video_url, output_name)


if __name__ == "__main__":
    # Process specific tool or all
    if len(sys.argv) > 1:
        slug = sys.argv[1]
        if slug in TOOL_PROMPTS:
            process_tool(slug, TOOL_PROMPTS[slug])
        else:
            print(f"Unknown tool: {slug}")
            print(f"Available: {', '.join(TOOL_PROMPTS.keys())}")
    else:
        for slug, prompts in TOOL_PROMPTS.items():
            process_tool(slug, prompts)
