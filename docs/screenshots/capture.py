from playwright.sync_api import sync_playwright
import sys

pages = [
    ("http://localhost:3000/tools/ai-script-generator", "tool-ai-script-generator.png", "AI Script Generator"),
    ("http://localhost:3000/", "homepage.png", "Homepage"),
    ("http://localhost:3000/tools", "tools-listing.png", "Tools Listing"),
]

with sync_playwright() as p:
    browser = p.chromium.launch()

    for url, filename, label in pages:
        print(f"Capturing {label} ({url})...")
        page = browser.new_page(viewport={'width': 1440, 'height': 900})
        page.goto(url, wait_until='networkidle', timeout=30000)
        # Wait a bit for any animations/transitions
        page.wait_for_timeout(1000)
        output_path = f"/Users/ivorobyev/projects/sorovi-web/docs/screenshots/{filename}"
        page.screenshot(path=output_path, full_page=True)
        print(f"  Saved to {output_path}")
        page.close()

    browser.close()
    print("All screenshots captured successfully.")
