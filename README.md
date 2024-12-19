# tailwindcss-inner-border

Tailwindcss plugin that provides utilities for creating inner borders.

## Installation

Install the plugin from npm:

```sh
npm install -D @quibble-dev/tailwindcss-inner-border
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@quibble-dev/tailwindcss-inner-border'),
    // ...
  ],
};
```

## Usage

Use the `inner-border-{n}` utilities to set the inner border width for all sides of an element:

<!-- prettier-ignore-start -->
```html
<input class="inner-border ...">
<input class="inner-border-2 ...">
```
<!-- prettier-ignore-end -->

Control the inner border color of an element using the `inner-border-{color}` utilities:

<!-- prettier-ignore-start -->
```html
<input class="inner-border-2 inner-border-rose-500 ...">
```
<!-- prettier-ignore-end -->

Variants and color opacity modifiers may also be used:

<!-- prettier-ignore-start -->
```html
<input class="inner-border-2 inner-border-rose-500/75 hover:inner-border-rose-500 ...">
```
<!-- prettier-ignore-end -->
