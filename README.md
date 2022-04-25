

[Eleventy](https://www.11ty.dev/) starter kit with support of 2+ languages.

## Getting started

1. Clone or fork this repo
2. `cd` into the project directory and run `npm install`

## Running and serving a dev build

```sh
npm run dev
```

Browse to [http://localhost:8080](http://localhost:8080).

## Running and serving a prod build

```sh
npm run prod
```

## Technologies used

* [Eleventy](https://www.11ty.dev/)… obviously
* [EJS](https://ejs.co/) as the templating language
* [Sass](https://sass-lang.com/) for writing CSS
* [Babel](https://babeljs.io/) for transpiling and polyfilling JavaScript
* [Autoprefixer](https://github.com/postcss/autoprefixer) for vendor prefixing CSS
* [Webpack](https://webpack.js.org/) for compiling the Sass and JavaScript assets
* [ESLint](https://eslint.org/) and [Airbnb's base configuration](https://www.npmjs.com/package/eslint-config-airbnb-base) for linting

## Project structure

```
src/
  _components/
    All UI partials
  _data/
    Eleventy data files
  _layouts/
    Base page layouts
  _pages/
    Each individual page template
  assets/
    css/
      index.scss
      All other scss files
    js/
      index.js
      All other js files
  images/
    All images used
Configuration and build files
```

Files in `assets` will be handled by webpack, Eleventy will transform all of the directories with a leading `_`, and will copy across any `images`.

Eleventy’s output will be to a `dist` directory at the root level.
