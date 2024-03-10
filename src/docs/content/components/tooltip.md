---
layout: home
title: Tooltip
description: Use the tooltip component to show a descriptive text when hovering over an element such as a button and customize the content and style with Tailwind CSS
group: components
toc: true

previous: Spinner
previousLink: components/spinner/
next: Checkbox
nextLink: forms/checkbox/
---

Use the tooltip component to indicate helpful information when hovering over an element such as a button or link to improve the UI/UX of your website.

Choose from multiple options, layouts, styles, colors, and animations from the examples below and customize the content and options using the Mithril attributes and the utility classes from Tailwind CSS.

## Default tooltip

Define the tooltip for a component by passing a `target` attribute containing the `id` of the element the tooltip should be triggered by.

This will render the tooltip whenever you hover over the trigger component.

{{< example id="default" github="components/spinner.md" >}}
import { Button, Tooltip } from "flowbite-mithril";

const Component = {
  view: () => [
    m(Button, { id: "my-button" }, "Toggle tooltip"),
    m(Tooltip, { target: "my-button", content: "Tooltip Content" }),
  ],
};
{{< /example >}}

## Tooltip styles

Use the `style` attribute to change the style of the tooltip. The default style is `auto` but you can also use `light` or `dark`.

{{< example id="style" github="components/spinner.md" >}}
import { Button, Tooltip } from "flowbite-mithril";

const Component = {
  view: () => [
    m(Button, { id: "style-button" }, "Toggle tooltip"),
    m(Tooltip, { target: "style-button", style: "light", content: "Tooltip Content" }),
  ],
};
{{< /example >}}

## Placement

Update the placement of the tooltip using the `placement` attribute. The default placement is `top` and you can also use `right`, `bottom`, and `left`.

{{< example id="placement" github="components/spinner.md" >}}
import { Button, Tooltip } from "flowbite-mithril";

const Component = {
  view: () => 
    m("div", { class: "flex gap-2" },
      m(Button, { id: "button-1" }, "Tooltip top"),
      m(Tooltip, { target: "button-1", placement: 'top', content: "Tooltip Content" }),
      m(Button, { id: "button-2" }, "Tooltip right"),
      m(Tooltip, { target: "button-2", placement: 'right', content: "Tooltip Content" }),
      m(Button, { id: "button-3" }, "Tooltip bottom"),
      m(Tooltip, { target: "button-3", placement: 'bottom', content: "Tooltip Content" }),
      m(Button, { id: "button-4" }, "Tooltip left"),
      m(Tooltip, { target: "button-4", placement: 'left', content: "Tooltip Content" }),
  ),
};
{{< /example >}}

## Trigger type

Use the `trigger` attribute to change the trigger type of the tooltip if you want to show the tooltip when clicking on the trigger element instead of hovering over it.

The default `trigger` type is `hover` and you can also use `click`.

{{< example id="trigger" github="components/spinner.md" >}}
import { Button, Tooltip } from "flowbite-mithril";

const Component = {
  view: () => 
    m("div", { class: "flex gap-2" },
      m(Button, { id: "button-hover" }, "Tooltip hover"),
      m(Tooltip, { target: "button-hover", trigger: 'hover', content: "Tooltip Content" }),
      m(Button, { id: "button-click" }, "Tooltip click"),
      m(Tooltip, { target: "button-click", trigger: 'click', content: "Tooltip Content" }),
  ),
};
{{< /example >}}

## Animation

Update the default animation of the tooltip component by using the `animation` attribute. The default animation is `duration-300` and you can use any [duration](https://tailwindcss.com/docs/transition-duration) defined by TailwindCSS.

{{< example id="animation" github="components/spinner.md" >}}
import { Button, Tooltip } from "flowbite-mithril";

const Component = {
  view: () => 
    m("div", { class: "flex gap-2" },
      m(Button, { id: "button-no" }, "No animation"),
      m(Tooltip, { target: "button-no", animation: false, content: "Tooltip Content" }),
      m(Button, { id: "button-fast" }, "Fast animation"),
      m(Tooltip, { target: "button-fast", animation: "animation-100", content: "Tooltip Content" }),
      m(Button, { id: "button-medium" }, "Normal animation"),
      m(Tooltip, { target: "button-medium", animation: "duration-500", content: "Tooltip Content" }),
      m(Button, { id: "button-slow" }, "Slow animation"),
      m(Tooltip, { target: "button-slow", animation: "duration-1000", content: "Tooltip Content" }),
  ),
};
{{< /example >}}

## Disable arrow

You can disable the arrow of the tooltip component by passing the `arrow: false` attribute.

{{< example id="arrow" github="components/spinner.md" >}}
import { Button, Tooltip } from "flowbite-mithril";

const Component = {
  view: () => [
    m(Button, { id: "button-no-arrow" }, "Toggle tooltip"),
    m(Tooltip, { target: "button-no-arrow", arrow: false, content: "Tooltip Content" }),
  ],
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://alexferl.github.io/flowbite-mithril/customize/theme/).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "base": "inline animate-spin text-gray-200",
  "color": {
    "failure": "fill-red-600",
    "gray": "fill-gray-600",
    "info": "fill-blue-600",
    "pink": "fill-pink-600",
    "purple": "fill-purple-600",
    "success": "fill-green-500",
    "warning": "fill-yellow-400"
  },
  "light": {
    "off": {
      "base": "dark:text-gray-600",
      "color": {
        "failure": "",
        "gray": "dark:fill-gray-300",
        "info": "",
        "pink": "",
        "purple": "",
        "success": "",
        "warning": ""
      }
    },
    "on": {
      "base": "",
      "color": {
        "failure": "",
        "gray": "",
        "info": "",
        "pink": "",
        "purple": "",
        "success": "",
        "warning": ""
      }
    }
  },
  "size": {
    "xs": "w-3 h-3",
    "sm": "w-4 h-4",
    "md": "w-6 h-6",
    "lg": "w-8 h-8",
    "xl": "w-10 h-10"
  }
}
{{< /example >}}

