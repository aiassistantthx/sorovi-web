from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()

    # Homepage - above the fold
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto("http://localhost:3000/", wait_until='networkidle', timeout=30000)
    page.wait_for_timeout(1000)
    page.screenshot(path="/Users/ivorobyev/projects/sorovi-web/docs/screenshots/homepage-above-fold.png", full_page=False)
    print("Homepage above fold captured")
    page.close()

    # Tool page - above the fold
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto("http://localhost:3000/tools/ai-script-generator", wait_until='networkidle', timeout=30000)
    page.wait_for_timeout(1000)
    page.screenshot(path="/Users/ivorobyev/projects/sorovi-web/docs/screenshots/tool-above-fold.png", full_page=False)
    print("Tool page above fold captured")
    page.close()

    # Tool page - scroll to features section
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto("http://localhost:3000/tools/ai-script-generator", wait_until='networkidle', timeout=30000)
    page.wait_for_timeout(1000)
    page.evaluate("window.scrollTo(0, 1600)")
    page.wait_for_timeout(500)
    page.screenshot(path="/Users/ivorobyev/projects/sorovi-web/docs/screenshots/tool-features.png", full_page=False)
    print("Tool features section captured")
    page.close()

    # Tool page - FAQ section
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto("http://localhost:3000/tools/ai-script-generator", wait_until='networkidle', timeout=30000)
    page.wait_for_timeout(1000)
    page.evaluate("window.scrollTo(0, 3600)")
    page.wait_for_timeout(500)
    page.screenshot(path="/Users/ivorobyev/projects/sorovi-web/docs/screenshots/tool-faq.png", full_page=False)
    print("Tool FAQ section captured")
    page.close()

    # Tools listing - categories
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto("http://localhost:3000/tools", wait_until='networkidle', timeout=30000)
    page.wait_for_timeout(1000)
    page.evaluate("window.scrollTo(0, 600)")
    page.wait_for_timeout(500)
    page.screenshot(path="/Users/ivorobyev/projects/sorovi-web/docs/screenshots/tools-categories.png", full_page=False)
    print("Tools categories captured")
    page.close()

    # Homepage - stats section
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto("http://localhost:3000/", wait_until='networkidle', timeout=30000)
    page.wait_for_timeout(1000)
    page.evaluate("window.scrollTo(0, 800)")
    page.wait_for_timeout(500)
    page.screenshot(path="/Users/ivorobyev/projects/sorovi-web/docs/screenshots/homepage-stats.png", full_page=False)
    print("Homepage stats captured")
    page.close()

    # Homepage - how it works section
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto("http://localhost:3000/", wait_until='networkidle', timeout=30000)
    page.wait_for_timeout(1000)
    page.evaluate("window.scrollTo(0, 2200)")
    page.wait_for_timeout(500)
    page.screenshot(path="/Users/ivorobyev/projects/sorovi-web/docs/screenshots/homepage-how-it-works.png", full_page=False)
    print("Homepage how-it-works captured")
    page.close()

    # Homepage footer
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto("http://localhost:3000/", wait_until='networkidle', timeout=30000)
    page.wait_for_timeout(1000)
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(500)
    page.screenshot(path="/Users/ivorobyev/projects/sorovi-web/docs/screenshots/homepage-footer.png", full_page=False)
    print("Homepage footer captured")
    page.close()

    # Tool page - "Why use" two-column section
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto("http://localhost:3000/tools/ai-script-generator", wait_until='networkidle', timeout=30000)
    page.wait_for_timeout(1000)
    page.evaluate("window.scrollTo(0, 2200)")
    page.wait_for_timeout(500)
    page.screenshot(path="/Users/ivorobyev/projects/sorovi-web/docs/screenshots/tool-why-use.png", full_page=False)
    print("Tool why-use section captured")
    page.close()

    # Tool page - SEO content section
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto("http://localhost:3000/tools/ai-script-generator", wait_until='networkidle', timeout=30000)
    page.wait_for_timeout(1000)
    page.evaluate("window.scrollTo(0, 2800)")
    page.wait_for_timeout(500)
    page.screenshot(path="/Users/ivorobyev/projects/sorovi-web/docs/screenshots/tool-seo-content.png", full_page=False)
    print("Tool SEO content captured")
    page.close()

    browser.close()
    print("All zoomed screenshots captured.")
