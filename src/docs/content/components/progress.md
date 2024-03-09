---
layout: home
title: Progress Bar
description: The progress bar component is used to show the completion rate of a given task in the form of a filled bar where you can also add a label indicating percentage
group: components
toc: true

previous: Navbar
previousLink: components/navbar/
next: Sidebar
nextLink: components/sidebar/
---
Use the progress bar component from Flowbite Mithril to show the percentage and completion rate of a given task using a visually friendly bar meter based on multiple styles and sizes.

Choose one of the examples below for your application and use the Mithril attributes to update the progress fill rate, label, sizing, and colors and customize with the classes from Tailwind CSS.

## Default progress bar

Use this example to show a progress bar where you can set the progress rate using the `progress` attribute which should be a number from 1 to 100.

{{< example id="default" github="components/progress.md" >}}
import { Progress } from "flowbite-mithril";

const Component = {
  view: () =>
    m(Progress, { progress: 45 }),
};
{{< /example >}}

## Progress bar with labels

Use this example to show a progress bar with a label. You can set the label text using the `textLabel` attribute and the progress text using the `labelText` attribute.

{{< example id="labels" github="components/progress.md" >}}
import { Progress } from "flowbite-mithril";

const Component = {
  view: () =>
    m(Progress, { progress: 50, textLabel: "Flowbite", size: "lg", labelProgress: true, labelText: true }),
};
{{< /example >}}

## Label positioning

This example shows how you can position the label text inside the progress bar by using the Mithril attributes called `progressLabelPosition` and `textLabelPosition` on the `<Progress>` component in Mithril.

{{< example id="label-position" github="components/progress.md" >}}
import { Progress } from "flowbite-mithril";

const Component = {
  view: () =>
    m(Progress, {
      progress: 45,
      progressLabelPosition: "inside",
      textLabel: "Flowbite",
      textLabelPosition: "outside",
      size: "lg",
      labelProgress: true,
      labelText: true,
    }),
};
{{< /example >}}

## Sizing

The size attribute can be used on the `<Progress>` component to set the size of the progress bar. You can choose from `sm`, `md`, `lg` and `xl`.

{{< example id="sizes" github="components/progress.md" >}}
import { Progress } from "flowbite-mithril";

const Component = {
  view: () =>
    m("div", { class: "flex flex-col gap-2" },
      m("div", { class: "text-base font-medium dark:text-white" }, "Small"),
      m(Progress, { progress: 45, size: "sm", color: "dark" }),
      m("div", { class: "text-base font-medium dark:text-white" }, "Medium"),
      m(Progress, { progress: 45, size: "md", color: "dark" }),
      m("div", { class: "text-base font-medium dark:text-white" }, "Large"),
      m(Progress, { progress: 45, size: "lg", color: "dark" }),
      m("div", { class: "text-base font-medium dark:text-white" }, "Extra Large"),
      m(Progress, { progress: 45, size: "xl", color: "dark" }),
    ),
};
{{< /example >}}

## Colors

Set your own custom colors for the progress bar component by using the `color` attribute and the utility classes from Tailwind CSS.

{{< example id="colors" github="components/progress.md" >}}
import { Progress } from "flowbite-mithril";

const Component = {
  view: () =>
    m("div", { class: "flex flex-col gap-2" },
      m("div", { class: "text-base font-medium" }, "Dark"),
      m(Progress, { progress: 45, color: "dark" }),
      m("div", { class: "text-base font-medium text-blue-700" }, "Blue"),
      m(Progress, { progress: 45, color: "blue" }),
      m("div", { class: "text-base font-medium text-red-700" }, "Red"),
      m(Progress, { progress: 45, color: "red" }),
      m("div", { class: "text-base font-medium text-green-700" }, "Green"),
      m(Progress, { progress: 45, color: "green" }),
      m("div", { class: "text-base font-medium text-yellow-700" }, "Yellow"),
      m(Progress, { progress: 45, color: "yellow" }),
      m("div", { class: "text-base font-medium text-indigo-700" }, "Indigo"),
      m(Progress, { progress: 45, color: "indigo" }),
      m("div", { class: "text-base font-medium text-purple-700" }, "Purple"),
      m(Progress, { progress: 45, color: "purple" }),
      m("div", { class: "text-base font-medium text-cyan-700" }, "Cyan"),
      m(Progress, { progress: 45, color: "cyan" }),
      m("div", { class: "text-base font-medium text-gray-700" }, "Gray"),
      m(Progress, { progress: 45, color: "gray" }),
      m("div", { class: "text-base font-medium text-lime-700" }, "Lime"),
      m(Progress, { progress: 45, color: "lime" }),
      m("div", { class: "text-base font-medium text-pink-700" }, "Pink"),
      m(Progress, { progress: 45, color: "pink" }),
      m("div", { class: "text-base font-medium text-teal-700" }, "Teal"),
      m(Progress, { progress: 45, color: "teal" }),

    ),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://alexferl.github.io/flowbite-mithril/customize/theme/).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "base": "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
  "label": "mb-1 flex justify-between font-medium dark:text-white",
  "bar": "rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100 space-x-2",
  "color": {
    "dark": "bg-gray-600 dark:bg-gray-300",
    "blue": "bg-blue-600",
    "red": "bg-red-600 dark:bg-red-500",
    "green": "bg-green-600 dark:bg-green-500",
    "yellow": "bg-yellow-400",
    "indigo": "bg-indigo-600 dark:bg-indigo-500",
    "purple": "bg-purple-600 dark:bg-purple-500",
    "cyan": "bg-cyan-600",
    "gray": "bg-gray-500",
    "lime": "bg-lime-600",
    "pink": "bg-pink-500",
    "teal": "bg-teal-600"
  },
  "size": {
    "sm": "h-1.5",
    "md": "h-2.5",
    "lg": "h-4",
    "xl": "h-6"
  }
}
{{< /example >}}
