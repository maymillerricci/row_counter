# Row & Stitch Counter

A simple browser-based row and stitch counter for crochet and knitting. Counts are saved locally in your browser.

[Use the counter](https://counter.maymayscrochets.com/)

## Development

This is a static site with no build step. Serve the repository root with any local HTTP server to preview changes.

When `styles.css` or `counter.js` changes, update its version query in the HTML files that load it so returning visitors do not receive a stale asset after deployment.

## Credits and license

The visual design was adapted from the [Kawaii-Chan WordPress theme](https://wordpress.com/theme/kawaii-chan) by Automattic, licensed under GPLv2 or later. Theme graphics were created by Henrique Iamarino and released under [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). The theme has been modified for this counter.

Counter functionality and modifications are by [May May's Crochets](https://maymayscrochets.com/). This project is distributed under GPLv2 or later; see [LICENSE](LICENSE).
