# Pet Circle discover pages improvements

## Pet Circle notes

- `ui-main.css` is in [`assets/`](./assets/).
- Page partials are in [`views/`](./views/).
- Anything else not mentioned are extra files used to help local development.
- SEO content (meta tags) are declared in a fake `<seo>` block at the top of
  each partial. These need to be extracted out into the `<head>` element in
  order to work properly.

- Change `discover/preparing-for-a-puppy` to
  `discover/preparing-for-a-puppy-or-kitten` or similar, in order to get extra
  hits (since it relates to more than just puppies).
- Maybe look at [JSON-LD](https://json-ld.org/) for SEO (can be used to create
  Google smart cards).
- For decorative images, add an `alt=""` attribute to designate it as such.
- Add understandable alt text for images important to page content.
- Ensure proper heading hierarchy (h1 > h2 > h3 > h4 > h5 > h6), descending by
  one step at a time. There should only be one `h1` on each page.
- [Run a Lighthouse performance test](https://web.dev/measure/) to see what
  aspects you can improve on.

## Personal notes

- Partials are put as-is inside the `main` tag.
- Partials often fetch images and stuff from `./` which is rewritten to a Google
  storage bucket on build time, dumb server redirects aren't perfect but work
  good enough.
