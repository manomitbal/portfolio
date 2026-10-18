# manomitbal.github.io

Personal portfolio of Manomit Bal. Plain HTML and CSS with a few lines of JavaScript; no build step.

## Deploy on GitHub Pages

1. Create a public repository named `manomitbal.github.io` (your username plus `.github.io`).
2. Upload everything in this folder to the repository root, keeping the structure:
   `index.html`, `favicon.svg`, `.nojekyll`, and the `assets/` folder.
3. Add your current resume as `assets/Manomit_Bal_Resume.pdf`. The Resume buttons link there.
4. In the repository, open Settings, then Pages. Under "Build and deployment", choose
   "Deploy from a branch", branch `main`, folder `/ (root)`, and save.
5. The site goes live at `https://manomitbal.github.io` within a minute or two.

A different repository name also works; the site then lives at `https://manomitbal.github.io/<repo-name>/`.
All links in the page are relative, so nothing needs to change.

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Editing

- Content lives in `index.html`, one section per block: hero, selected work, experience, research, contact.
- Colors, type, and spacing are tokens at the top of `assets/css/styles.css`, with a dark-mode set below them.
- Photos are in `assets/img/`. Keep `width` and `height` on each `<img>` in step with the file so the layout does not shift while loading.

The Geist typeface is self-hosted under the SIL Open Font License (`assets/fonts/LICENSE.txt`).

## Optional photos

These slots stay hidden until their file exists in `assets/img/` (JPG, landscape, about 1200 px wide):

- `future-acres-carry.jpg`, `bobacino.jpg`, `autocado.jpg`: the three Vebu platforms. Add all three together so the row stays even.

## Case-study videos

The Graze and Discovery case studies each have a YouTube slot. In `index.html`, find the comment above each one and paste the full YouTube link into `data-youtube=""`. Any form works: `https://www.youtube.com/watch?v=...`, `https://youtu.be/...`, or a Shorts link. A slot with no link stays hidden.
