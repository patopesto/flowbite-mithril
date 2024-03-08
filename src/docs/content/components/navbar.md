---
layout: home
title: Navbar
description: The navbar component can be used to show a list of navigation links positioned on the top side of your page based on multiple layouts, sizes, and dropdowns
group: components
toc: true

previous: List Group
previousLink: components/list-group/
next: Sidebar
nextLink: components/sidebar/
---

The navbar component is an important section of any website as it is the first section that appears on any page and it serves the purpose of allowing your users to navigate throughout your website.

Generally, the navigation bar consists of the logo of your website, a list of menu items for navigation and other secondary elements such as buttons, dropdowns, and a hamburger menu for mobile devices.

All interactivity and options are handled by using Mithril attributes and you can customise the appearance of the navbar using the classes from Tailwind CSS.

## Default navbar

Use the default navbar component to showcase the logo and a list of menu items with links to other pages of your website by adding the `<Navbar.Brand>` and `<Navbar.Link>` components inside the `<Navbar>` component.

On mobile device the navigation bar will be collapsed and you will be able to use the hamburger menu to toggle the menu items by adding the `<Navbar.Toggle>` component.

{{< example id="default" github="components/navbar.md" >}}
import { Navbar } from "flowbite-mithril";

const Component = {
  view: () =>
    m(Navbar, { fluid: true, rounded: true }, [
      m(Navbar.Brand, { href: "https://alexferl.github.io/flowbite-mithril" }, [
        m("img", {
          src: "/flowbite-mithril/images/logo.svg",
          class: "mr-3 h-6 sm:h-9",
          alt: "Flowbite Mithril Logo",
        }),
        m(
          "span",
          { class: "self-center whitespace-nowrap text-xl font-semibold dark:text-white" },
          "Flowbite Mithril",
        ),
      ]),
      m(Navbar.Toggle),
      m(Navbar.Collapse, [
        m(Navbar.Link, { href: "#", active: true }, "Home"),
        m(Navbar.Link, { href: "#" }, "About"),
        m(Navbar.Link, { href: "#" }, "Services"),
        m(Navbar.Link, { href: "#" }, "Pricing"),
        m(Navbar.Link, { href: "#" }, "Contact"),
      ]),
    ]),
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://alexferl.github.io/flowbite-mithril/customize/theme/).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "root": {
    "base": "h-full",
    "collapsed": {
      "on": "w-16",
      "off": "w-64"
    },
    "inner": "h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 py-4 px-3 dark:bg-gray-800"
  },
  "collapse": {
    "button": "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    "icon": {
      "base": "h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      "open": {
        "off": "",
        "on": "text-gray-900"
      }
    },
    "label": {
      "base": "ml-3 flex-1 whitespace-nowrap text-left",
      "icon": {
        "base": "h-6 w-6 transition ease-in-out delay-0",
        "open": {
          "on": "rotate-180",
          "off": ""
        }
      }
    },
    "list": "space-y-2 py-2"
  },
  "cta": {
    "base": "mt-6 rounded-lg p-4 bg-gray-100 dark:bg-gray-700",
    "color": {
      "blue": "bg-cyan-50 dark:bg-cyan-900",
      "dark": "bg-dark-50 dark:bg-dark-900",
      "failure": "bg-red-50 dark:bg-red-900",
      "gray": "bg-alternative-50 dark:bg-alternative-900",
      "green": "bg-green-50 dark:bg-green-900",
      "light": "bg-light-50 dark:bg-light-900",
      "red": "bg-red-50 dark:bg-red-900",
      "purple": "bg-purple-50 dark:bg-purple-900",
      "success": "bg-green-50 dark:bg-green-900",
      "yellow": "bg-yellow-50 dark:bg-yellow-900",
      "warning": "bg-yellow-50 dark:bg-yellow-900"
    }
  },
  "item": {
    "base": "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    "active": "bg-gray-100 dark:bg-gray-700",
    "collapsed": {
      "insideCollapse": "group w-full pl-8 transition duration-75",
      "noIcon": "font-bold"
    },
    "content": {
      "base": "px-3 flex-1 whitespace-nowrap"
    },
    "icon": {
      "base": "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      "active": "text-gray-700 dark:text-gray-100"
    },
    "label": "",
    "listItem": ""
  },
  "items": {
    "base": ""
  },
  "itemGroup": {
    "base": "mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
  },
  "logo": {
    "base": "mb-5 flex items-center pl-2.5",
    "collapsed": {
      "on": "hidden",
      "off": "self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    },
    "img": "mr-3 h-6 sm:h-7"
  }
}
{{< /example >}}
