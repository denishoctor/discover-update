# Pet Circle discover pages improvements

## Pet Circle notes

- `ui-main.css` is in [`assets/`](./assets/).
- Page partials are in [`views/`](./views/).
- Anything else not mentioned are extra files used to help local development.

## Personal notes

- Partials are put as-is inside the `main` tag.
- Partials often fetch images and stuff from `./` which is rewritten to a Google
  storage bucket on build time, dumb server redirects aren't perfect but work
  good enough.
