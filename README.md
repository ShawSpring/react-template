vite react ts swc  tailwind4.0 biome
## 模板克隆

```
npx degit ShawSpring/react-template#main my-project
```

## 模板配置过程

### vite react ts

```bash
 pnpm create vite
```

选择 typescrite-react-swc

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

// tsconfig.app.json
   "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
```

### [oxlint](https://oxc.rs/docs/guide/usage/linter.html) 
使用oxlint 代替 eslint 
1. 删除所有eslint有关的包,禁用eslint插件
2. 安装oxlint, 和vscode插件oxc. 
```bash
pnpm add -D oxlint
# 创建配置文件,默认的规则够用就不需要
pnpm oxlint --init 
```
package.json 添加 lint脚本命令
```json
	"lint": "pnpm dlx oxlint --fix",
```

### [tailwind](https://tailwindcss.com/docs/guides/vite)
tailwind4.0  以vite插件的形式使用tailwind

1. Install Tailwind CSS with Vite

```bash
pnpm install tailwindcss @tailwindcss/vite
```

```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

```css
/* index.css */
@import "tailwindcss";
```
扫描范围默认的就可以了，需要配置(比如monorepo)参考:https://tailwindcss.com/docs/detecting-classes-in-source-files


注意： 以往postcss插件的几个功能已经被tailwindcss包含了， 比如下面三个
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

### custom types

style 里写 css 变量,需要扩展react的CSSProperties接口
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
