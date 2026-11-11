# -*- coding: utf-8 -*-
"""Generate typographic SVG placeholders for the activity gallery.

Replace these later with real photos in /photos and update assets/js/data.js.
Run: python tools/generate_placeholders.py
"""
from pathlib import Path
import math

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "img" / "ph"
OUT.mkdir(parents=True, exist_ok=True)

FONT = "'Noto Sans TC','PingFang TC','Microsoft JhengHei','Segoe UI',sans-serif"
SIZES = [(1200, 900), (900, 1200), (1000, 1000), (1200, 900), (900, 1200), (1000, 1000)]

PALETTES = {
    "academic": {
        "start": "#071E4D", "end": "#2563EB", "accent": "#FFCF3F", "soft": "#9CC0FF",
        "label": "學術 ACADEMIC",
    },
    "guidance": {
        "start": "#57130A", "end": "#FF6B4A", "accent": "#FFCF3F", "soft": "#FFC2B5",
        "label": "升學與生涯 GUIDANCE",
    },
    "culture": {
        "start": "#4A2600", "end": "#D18A00", "accent": "#FFE4B0", "soft": "#FFD98A",
        "label": "文化傳承 CULTURE",
    },
    "talks": {
        "start": "#04382D", "end": "#10A97F", "accent": "#FFCF3F", "soft": "#A5EEDC",
        "label": "專題講座 TALKS",
    },
}

SERIES = [
    # id, category, glyphs, date label
    ("math-week", "academic", ["數", "學", "週", "π", "∑", "×"], "APR 2026"),
    ("math-competition", "academic", ["算", "競", "賽", "F1", "F2", "F3"], "MAR 2026"),
    ("subject-selection", "guidance", ["選", "科", "會", "親", "子", "路"], "FEB 2026"),
    ("career-week", "guidance", ["涯", "規", "劃", "夢", "想", "路"], "MAR 2026"),
    ("chinese-culture", "culture", ["華", "文", "化", "傳", "承", "愛"], "APR 2026"),
    ("bamboo-craft", "culture", ["棚", "竹", "藝", "手", "工", "築"], "APR 2026"),
    ("maritime-talk", "talks", ["航", "海", "船", "風"], "MAY 2026"),
    ("reclamation-talk", "talks", ["填", "海", "地", "城"], "MAY 2026"),
]


def dots(w, h, color, step=48):
    parts = []
    for y in range(step, h, step):
        for x in range(step, w, step):
            parts.append(f'<circle cx="{x}" cy="{y}" r="1.6" fill="{color}" opacity=".16"/>')
    return "".join(parts)


def grid(w, h, color, step=120):
    parts = []
    for x in range(step, w, step):
        parts.append(f'<line x1="{x}" y1="0" x2="{x}" y2="{h}" stroke="{color}" stroke-width="1" opacity=".07"/>')
    for y in range(step, h, step):
        parts.append(f'<line x1="0" y1="{y}" x2="{w}" y2="{y}" stroke="{color}" stroke-width="1" opacity=".07"/>')
    return "".join(parts)


def build_svg(activity_id, category, glyph, index, width, height):
    p = PALETTES[category]
    variant = index % 4
    n = index + 1
    unit = min(width, height)
    glyph_size = int(unit * (0.66 if variant != 2 else 0.58))
    label = p["label"]

    # Base layers
    bg = f'''
    <rect width="{width}" height="{height}" fill="url(#bg)"/>
    {grid(width, height, p["soft"])}
    {dots(width, height, p["soft"]) if variant in (1, 3) else ""}
    <circle cx="{width * 0.82:.0f}" cy="{height * 0.18:.0f}" r="{unit * 0.30:.0f}" fill="{p["accent"]}" opacity=".10"/>
    <circle cx="{width * 0.12:.0f}" cy="{height * 0.92:.0f}" r="{unit * 0.42:.0f}" fill="none" stroke="{p["soft"]}" stroke-width="2" opacity=".16"/>
    '''

    # Giant glyph position per variant
    if variant == 0:
        gx, gy = width * 0.63, height * 0.55
    elif variant == 1:
        gx, gy = width * 0.50, height * 0.52
    elif variant == 2:
        gx, gy = width * 0.36, height * 0.52
    else:
        gx, gy = width * 0.60, height * 0.54

    glyph_block = f'''
    <circle cx="{gx:.0f}" cy="{gy:.0f}" r="{glyph_size * 0.58:.0f}" fill="url(#glow)" opacity=".9"/>
    <text x="{gx:.0f}" y="{gy + glyph_size * 0.03:.0f}" text-anchor="middle" dominant-baseline="central"
          font-family="{FONT}" font-size="{glyph_size}" font-weight="900"
          fill="{p["accent"]}" opacity=".14">{glyph}</text>
    <text x="{gx:.0f}" y="{gy + glyph_size * 0.03:.0f}" text-anchor="middle" dominant-baseline="central"
          font-family="{FONT}" font-size="{glyph_size}" font-weight="900"
          fill="none" stroke="{p["accent"]}" stroke-width="2.4" opacity=".82">{glyph}</text>
    '''

    # Variant decorations
    decor = ""
    if variant == 0:
        decor = f'''
        <path d="M0 {height * 0.72:.0f} L{width * 0.46:.0f} {height * 0.72:.0f} L0 {height * 0.98:.0f} Z" fill="{p["soft"]}" opacity=".10"/>
        <line x1="{width * 0.06:.0f}" y1="{height * 0.16:.0f}" x2="{width * 0.06:.0f}" y2="{height * 0.84:.0f}" stroke="{p["accent"]}" stroke-width="6" stroke-linecap="round" opacity=".8"/>
        '''
    elif variant == 1:
        decor = f'''
        <g transform="rotate(-12 {width * 0.5:.0f} {height * 0.78:.0f})">
          <rect x="{width * 0.06:.0f}" y="{height * 0.78:.0f}" width="{width * 0.5:.0f}" height="{unit * 0.035:.0f}" rx="{unit * 0.02:.0f}" fill="{p["accent"]}" opacity=".75"/>
        </g>
        <circle cx="{width * 0.14:.0f}" cy="{height * 0.20:.0f}" r="{unit * 0.022:.0f}" fill="{p["accent"]}"/>
        '''
    elif variant == 2:
        decor = f'''
        <circle cx="{width * 0.76:.0f}" cy="{height * 0.52:.0f}" r="{unit * 0.34:.0f}" fill="none" stroke="{p["soft"]}" stroke-width="2" opacity=".3"/>
        <circle cx="{width * 0.76:.0f}" cy="{height * 0.52:.0f}" r="{unit * 0.25:.0f}" fill="{p["accent"]}" opacity=".08"/>
        '''
    else:
        decor = f'''
        <rect x="0" y="{height * 0.80:.0f}" width="{width:.0f}" height="{height * 0.20:.0f}" fill="{p["start"]}" opacity=".35"/>
        <line x1="{width * 0.08:.0f}" y1="{height * 0.86:.0f}" x2="{width * 0.92:.0f}" y2="{height * 0.86:.0f}" stroke="{p["accent"]}" stroke-width="1.5" opacity=".45"/>
        '''

    # Minimal vertical brand line — keeps poster art clean under card overlays
    brand = f'''
    <text x="{width * 0.043:.0f}" y="{height * 0.5:.0f}" transform="rotate(-90 {width * 0.043:.0f} {height * 0.5:.0f})"
          text-anchor="middle" font-family="{FONT}" font-size="{unit * 0.017:.0f}" font-weight="600"
          letter-spacing="{unit * 0.006:.0f}" fill="{p["soft"]}" opacity=".52">SALESIAN SCHOOL MACAU · ACTIVITY GALLERY</text>
    '''

    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}" role="img">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="{p["start"]}"/>
      <stop offset="1" stop-color="{p["end"]}"/>
    </linearGradient>
    <radialGradient id="glow" cx=".5" cy=".5" r=".5">
      <stop offset="0" stop-color="{p["soft"]}" stop-opacity=".20"/>
      <stop offset="1" stop-color="{p["soft"]}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  {bg}
  {decor}
  {glyph_block}
  {brand}
</svg>
'''

SERIES_BY_ID = {s[0]: {"category": s[1], "glyphs": s[2], "date": s[3]} for s in SERIES}

for activity_id, category, glyphs, _date in SERIES:
    for i in range(len(glyphs)):
        w, h = SIZES[i % len(SIZES)]
        svg = build_svg(activity_id, category, glyphs[i], i, w, h)
        path = OUT / f"{activity_id}-{i + 1:02d}.svg"
        path.write_text(svg, encoding="utf-8")

print(f"Generated {sum(len(s[2]) for s in SERIES)} placeholder images in {OUT}")
