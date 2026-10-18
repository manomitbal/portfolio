# Design

Conventional engineer portfolio, executed with restraint: field photography leads, everything else is quiet structure that lets numbers and architecture carry the page.

## Tokens

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| --bg | #f7f8f9 | #15181c | Page ground |
| --surface | #ffffff | #1c2025 | Diagram panels |
| --tint | #eef0f2 | #191d22 | Experience band, image placeholders |
| --ink | #1a1d21 | #e9ebee | Text, primary buttons, fused-pose node |
| --muted | #59606a | #a3aab3 | Secondary text (4.5:1+ on ground) |
| --line / --line-strong | #dfe2e6 / #c4c9cf | #2c3138 / #3d434b | Hairlines, connectors |
| --accent | #d18b00 | #f0b23a | Link underlines, focus, selection, factor-graph node. Never body text in light mode |
| --accent-ink | #8a5a00 | #f0b23a | Accent-colored text on hover |

Type: Geist variable, self-hosted. Body 17px / 1.6. Display h1 clamp(2.4rem, 5.4vw, 4.25rem), tracking -0.035em. Section titles clamp(1.9rem, 3.2vw, 2.6rem). Case titles clamp(1.6rem, 2.6vw, 2.1rem). Subheads 1.3 to 1.5rem. Tabular numerals for figures and dates.

Layout: 1200px max content, gutter clamp(20px, 4vw, 40px), section rhythm clamp(72px, 10vw, 128px). Radius 6px on media and nodes, 10px on diagram panels. Left-aligned throughout.

## Components

- Photo mosaic: 2fr / 1fr grid, captions on a bottom scrim. On phones the main photo spans full width, side photos go square without captions.
- Case study: title, meta row (company emphasized), prose capped at 62ch, a facts list where each item is a bold result line plus one sentence.
- System diagrams: built in HTML, not images, so they reflow. Inputs connect to an accent-tinted core node; outputs are inverted ink. Connectors are 1.5px lines with clip-path arrowheads; on phones they turn vertical.
- Timeline: date column 180px, role, organization, bullets with a short amber dash.

## Motion

One moment: on load, hero photos develop top-down (clip-path, slight scale and saturation), staggered 0, 140, 260ms, with the headline settling after. Disabled under reduced motion. Elsewhere only state feedback: link underlines, button press, header hairline on scroll, current section in the nav.

## Browser surfaces

Amber selection and caret, amber focus ring with 3px offset, scrollbar colored from the line token, underline offset 4px.
