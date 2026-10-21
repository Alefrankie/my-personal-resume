---
target: resume homepage
total_score: 19
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 3
target_identity: "file:C:\\dev\\my-personal-resume\\src\\pages\\index.astro"
target_fingerprint: "sha256:984f0a61cdb0b45b10b1979c5a8c4c44e81a0c10a21682b5fefb699113ee7cec"
target_path: "C:\\dev\\my-personal-resume\\src\\pages\\index.astro"
timestamp: 2026-10-21T09-25-22Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector)

Score 19/32 (59%, Acceptable). n/a: 7, 10.

Verdict: generic resume template, web copy of 2024 Canva PDF; detector: 1 overused-font (Arial, index.astro:235), probable false positive.

Priority issues:
1. [P0] Web page and downloadable PDF disagree (English level, stale Feb 2024 PDF). Generate PDF from page. harden.
2. [P1] Missing screening facts: location, availability, email, date ranges ("Present"); experience after education. clarify.
3. [P1] Inverted hierarchy: name 24px, title 12px uppercase; everything bold. typeset.
4. [P1] Duty bullets, no impact/metrics; boilerplate About; no projects. clarify.
5. [P2] Print unplanned: no @page, no break-inside, background dots vanish, 720px breakpoint may collapse print. adapt.

Minor: invalid aria-label on div; two unexplained GitHubs; tech casing inconsistent; "Javascript y PostgreSQL"; no OG tags; small tap targets; contact at bottom on mobile.
