# Son of Atlan

A very simple vue application to demo some UI skills

## Libraries

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite) - Born with fastness

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)

- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- 🦾 TypeScript, of course

- 📦 [AntDv Components]([./src/components](https://www.antdv.com/components/overview))

- 🔎 [Prism Editor](https://prism-editor.netlify.app) - Syntax Highlighting

- 📦 [SurelyVue Components]([./src/components](https://www.antdv.com/components/overview)) - For virtual scrolling

- ☁️ Deploy on Vercel, zero-config

## Handling "large amount of rows"
A virtual scrolling table from SurelyVue (<i>trial licence so pls bear with it 🔥</i>) has been added instead of a normal one to handle bigger chunks of data.

Previously the page that used to lag for the orders table (800+ rows, 15 columns) now performs flawlessly. Check it out [Orders Table](https://son-of-atlan.vercel.app/explorer/orders)

## Performance
Measured using Google Lighthouse

- Initial Specs
  - First Paint: 1.8s
  - Performance Insight: 87
- Post Optimisation
  - First Paint: 1.0s
  - Performance Insight: 93 

## Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [eslint-config-google](hhttps://github.com/google/eslint-config-google), Double Quotes, Semi

## Try it now!

> requires Node >=14.18

### Clone to local

```bash
git clone https://github.com/sanmoh-hombal/son-of-atlan.git
cd son-of-atlan
yarn install # If you don't have yarn installed, run: npm install -g yarn
```

## Usage

### Development

Just run and visit http://localhost:3000

```bash
yarn dev
```

### Build

To build the App, run

```bash
yarn build
```

### Preview

To preview the build, run

```bash
yarn preview
```