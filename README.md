# flowbite-mithril

Work in progress.

✅ = Fully implemented

🚧 = Partially implemented

❌ = Not implemented

## Components
|     Name          | Done | Notes                 |
|:-----------------:|------|-----------------------|
|  Accordion        | ✅   |
|    Alert          | ✅   |
|    Avatar         | ✅   |
|    Badge          | ✅   |
|    Banner         | ❌   |
| Bottom navigation | ❌   |
|  Breadcrumb       | ✅   |
|    Button         | ✅   |
| Button group      | ✅   |
|     Card          | ✅   |
|   Carousel        | ❌   |
|   Chat bubble     | ❌   |
|   Clipboard       | ❌   |
|   Datepicker      | ❌   |
|   Device mockups  | ❌   |
|   Drawer          | ❌   |
|   Dropdown        | ✅   |
|    Footer         | ✅   |
|     KBD           | ✅   |
|  List group       | ✅   |
|    Modal          | ✅   |
|    Navbar         | ✅   |
|  Pagination       | ❌   |
| Progress bar      | ✅   |
|    Rating         | ❌   |
|   Sidebar         | ✅   | `collapsed` attribute needs to be manually set for all children |
|   Skeleton        | ❌   |
|   Speed dial      | ❌   |
|   Spinner         | ✅   |
|   Stepper         | ❌   |
|    Table          | 🚧   | Missing hover/striped |
|     Tabs          | ❌   |
|   Timeline        | ❌   |
|    Toast          | ❌   |
|   Tooltip         | ✅   |

## Forms
|    Name    | Done | Notes            |
|:----------:|------|------------------|
|  Checkbox  | ✅   |
| File Input | 🚧   | Missing dropzone |
|   Input    | ✅   |
|   Radio    | ✅   |
|   Range    | ✅   |
|   Select   | ✅   |
|  Textarea  | ✅   |
|   Toggle   | ✅   |


## Typography
|    Name    | Done | Notes |
|:----------:|------|-------|
| Blockquote | ✅    |

## Getting started
Learn how to get started with Flowbite Mithril.

### Setup Tailwind CSS
Install Tailwind CSS:

```shell
npm i -D autoprefixer postcss tailwindcss
npx tailwindcss init -p
```

Point Tailwind CSS to files you have class="..." in:
```javascript
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add Tailwind CSS to a CSS file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Install Flowbite Mithril
Install Flowbite and Flowbite Mithril:
```shell
npm i -D flowbite github:alexferl/flowbite-mithril
```

Add the Flowbite plugin to `tailwind.config.js`, and include content from `flowbite-mithril`:
```javascript
module.exports = {
  content: ["./node_modules/flowbite-mithril/**/*.js"],
  plugins: [require("flowbite/plugin")],
};
```
