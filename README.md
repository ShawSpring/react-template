## 模板克隆

```
npx degit ShawSpring/react-template#main my-project
```

## 模板配置过程

### vite react ts

```bash
 pnpm create vite
```

选择 typescrite-reacte-swc

### alias '@'

```js
// vite.config.ts
import { resolve } from 'path';
// pnpm add -D @types/node
resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },

// tsconfig.json
   "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
```

### tailwind

1. [Install Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite)

```bash
pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```css
/* index.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

```js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

2. [Using PostCSS as your preprocessor](https://tailwindcss.com/docs/using-with-preprocessors#using-post-css-as-your-preprocessor)
   不使用 sass,使用 tailwind 推荐了两个 postcss 插件,

```bash
pnpm install -D postcss-import
```

> tailwindcss/nesting 是 tailwindcss 自带

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

2. [Extending Preflight](https://tailwindcss.com/docs/preflight#extending-preflight)
   > tailwind has normalize the css with '@tailwind base' 比如 margin/padding 为 0, h1~h6 a 皆无样式
   > _所以进行自己的预设_

```css
@layer base {
  #app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    @apply bg-slate-100;
  }
  h1 {
    @apply text-2xl;
  }
  h2 {
    @apply text-xl;
  }
  h3 {
    @apply text-lg;
  }
  a {
    @apply text-blue-600 underline;
  }
}
```

### vite svg sprite plugin

[vite-svg-sprite-wrapper](https://www.npmjs.com/package/vite-svg-sprite-wrapper)

```bash
pnpm i vite-svg-sprite-wrapper -D
```

### custom types

style 里写 css 变量,需要的类型声明如下

```typescript
/* types/css.d.ts */
import 'react';
declare module 'react' {
  interface CSSProperties {
    // '--theme-color'?:'dark'|'light';
    [index: `--${string}`]: string;
  }
}
```
