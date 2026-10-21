---
target: resume homepage
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:C:\\dev\\my-personal-resume\\src\\pages\\index.astro"
target_fingerprint: "sha256:281934337f39ef40300a50c72c891988b0747b2daa508b6197ea3445b831d837"
target_path: "C:\\dev\\my-personal-resume\\src\\pages\\index.astro"
timestamp: 2026-10-21T10-03-11Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector)

Score 22/32 (69%, Acceptable, edge of Good). n/a: 7, 10. Previous: 19/32.

Verdict: craft and voice authored (Newsreader/Archivo split, rationed brick accent, duotone portrait); argument generic (standard timeline + chip wall, AI positioning only in prose, no proof slot). Detector: source clean (Arial finding resolved); live-page line-length on p.lede and p.job__summary (68ch measure renders ~89-97 chars, es/pt worse); print tiny-text/line-length judged false positives for A4 10pt.

Priority issues:
1. [P1] Single start years on 4 of 5 roles (web + PDF); tenure unreadable, two 2021 roles. clarify.
2. [P1] No proof for the AI-assisted claim: projects empty, older roles filler, one metric. clarify, distill.
3. [P2] Page ends on weakest fact (English B1, Portuguese Basic); /pt/ fluent page says Portuguese basic. layout.
4. [P2] Dark-mode portrait renders as pale grey box, brightest object on page. polish.
5. [P2] PDF robustness: one reader extracted headings out of order after restyle; tinted paper background prints as box inside white margins. harden.

Minor: double rule under masthead; tagline orphan "architecture"; Kotlin listed twice; empty label column on long Experience; date format differs web vs PDF; load animations replay on locale switch; --measure 68ch too wide (use ~60ch); /print/en/ 404 in dev only.
