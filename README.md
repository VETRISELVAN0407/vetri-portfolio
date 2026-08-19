# Vetri Selvan — Portfolio Website

A premium, dark-themed personal portfolio for a Java Full Stack Developer, built with **HTML5, CSS3, Bootstrap 5 and vanilla JavaScript only** — no build tools required.

## 1. Project Structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── profile.jpg        ← placeholder, replace with your photo
│   ├── about.jpg           ← placeholder, replace with your photo
│   └── projects/
│       ├── wayfarer-tours.jpg
│       ├── cloudrtech.jpg
│       └── yogalahari-nadhalahari.jpg
├── resume/
│   └── resume.pdf          ← add your real resume here
└── README.md
```

Placeholder images have already been generated for `profile.jpg`, `about.jpg` and the three project screenshots so the site renders correctly the moment you open it. Swap them out with your own photos/screenshots whenever you're ready — same filenames, same folders.

## 2. Replacing Images

| File | Recommended size | Notes |
|---|---|---|
| `images/profile.jpg` | 600×600 (square) | Your hero photo |
| `images/about.jpg` | 700×860 (portrait) | About section photo |
| `images/projects/wayfarer-tours.jpg` | 800×500 | Screenshot of the Wayfarer Tours app |
| `images/projects/cloudrtech.jpg` | 800×500 | Screenshot of the Cloudrtech website |
| `images/projects/yogalahari-nadhalahari.jpg` | 800×500 | Screenshot of Yogalahari / Nadhalahari |

Just drop a new file in with the **same name** to replace a placeholder — no HTML edits needed.

## 3. Adding Your Resume

Place your real resume PDF at:

```text
resume/resume.pdf
```

The "Download Resume" and "View Resume" buttons already point to this path.

## 4. Replacing GitHub URL

Search `index.html` for:

```text
https://github.com/yourusername
```

Replace every instance with your actual GitHub profile/repo URLs (navbar socials aren't present, but hero socials, footer, project cards and the GitHub CTA section all reference this).

## 5. Replacing LinkedIn URL

Search `index.html` for:

```text
https://linkedin.com/in/yourusername
```

and

```text
[Your LinkedIn URL]
```

Replace with your real LinkedIn profile link (appears in the hero socials, footer, and Contact section).

## 6. Other Placeholders to Fill In

Search `index.html` for bracketed placeholders and replace with real details as they become available:

- `[Issuing Organization]` / `[Date]` — certification issuer and date
- `[Certificate Name]` — the 4th certification slot
- Certificate `href="#"` links — replace with real certificate URLs
- Project `Live Demo` links (`href="#"`) — replace once projects are deployed

## 7. Running Locally

No build step is required. Just open the file directly:

```text
double-click index.html
```

or serve it locally (recommended, avoids browser file:// restrictions on some setups):

```bash
# Python
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 8. Deploying with GitHub Pages

1. Create a new GitHub repository (e.g. `portfolio`).
2. Push this folder's contents to the repository root:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under **Source**, select the `main` branch and `/ (root)` folder, then **Save**.
5. Your site will be live at:
   ```text
   https://yourusername.github.io/portfolio/
   ```

## 9. Tech Notes

- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (mono/eyebrow labels) — loaded via Google Fonts CDN.
- Icons: Bootstrap Icons CDN.
- All animations (typing effect, scroll reveals, counters, skill bars, navbar transition) are plain JavaScript using `IntersectionObserver` — no external animation libraries.
- Color tokens are defined as CSS custom properties at the top of `css/style.css` (`:root`) — edit them there to retheme the whole site.
