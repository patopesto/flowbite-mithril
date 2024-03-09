---
layout: home
title: Sidebar
description: Use the sidebar component to show a list of menu items including multi-level dropdown menu on the left or right side of your page for admin dashboards and applications
group: components
toc: true

previous: Progress Bar
previousLink: components/progress/
next: Spinner
nextLink: components/spinner/
---
The sidebar component is an UI component that you can use for the navigation mechanism in your website or application that you would position to the left or right side of your page.

A sidebar can include content such as menu list items, dropdown, user profile information, CTA buttons, and more.
All interactivity and options are handled by using Mithril attributes and you can customise the appearance of the navbar using the classes from Tailwind CSS.

## Default sidebar

Use this example to show a list of navigation menu items by adding `<Sidebar.Item>` children components inside the `<Sidebar>` component and pass the href prop to set a URL and icon to apply any icons from the flowbite-icons-mithril icon library.

You can also add a text label as a badge by using the `label` attribute and the `labelColor` attribute to set the color of the label background.

{{< example id="default" github="components/sidebar.md" >}}
import { Sidebar } from "flowbite-mithril";
import { ArrowRightIcon, ChartPieIcon, InboxIcon, UserIcon, ColumnIcon } from "flowbite-icons-mithril/solid";
import { ShoppingBagIcon, TableRowIcon } from "flowbite-icons-mithril/outline";

const Component = {
  view: () =>
    m(Sidebar,
      m(Sidebar.Items,
        m(Sidebar.ItemGroup,
          m(Sidebar.Item, { href: "#", icon: ChartPieIcon }, "Dashboard"),
          m(Sidebar.Item, { href: "#", icon: ColumnIcon, label: "Pro", labelColor: "dark" }, "Kanban"),
          m(Sidebar.Item, { href: "#", icon: InboxIcon, label: "3" }, "Inbox"),
          m(Sidebar.Item, { href: "#", icon: UserIcon }, "Users"),
          m(Sidebar.Item, { href: "#", icon: ShoppingBagIcon }, "Products"),
          m(Sidebar.Item, { href: "#", icon: ArrowRightIcon }, "Sign In"),
          m(Sidebar.Item, { href: "#", icon: TableRowIcon }, "Sign Up"),
        ),
      ),
    ),
};
{{< /example >}}

## Multi-level dropdown

Use this example to learn how to stack multiple sidebar menu items inside one dropdown menu by using the `<Sidebar.Collapse>` component.

{{< example id="multi-level" github="components/sidebar.md" >}}
import { Sidebar } from "flowbite-mithril";
import { ArrowRightIcon, ChartPieIcon, InboxIcon, UserIcon } from "flowbite-icons-mithril/solid";
import { ShoppingBagIcon, TableRowIcon } from "flowbite-icons-mithril/outline";

const Component = {
  view: () =>
    m(Sidebar,
      m(Sidebar.Items, [
        m(Sidebar.ItemGroup,
          m(Sidebar.Item, { href: "#", icon: ChartPieIcon }, "Dashboard"),
          m(Sidebar.Collapse, { icon: ShoppingBagIcon, label: "E-Commerce" }, [
            m(Sidebar.Item, { href: "#" }, "Products"),
            m(Sidebar.Item, { href: "#" }, "Sales"),
            m(Sidebar.Item, { href: "#" }, "Refunds"),
            m(Sidebar.Item, { href: "#" }, "Shipping"),
          ]),
          m(Sidebar.Item, { href: "#", icon: InboxIcon, label: "3" }, "Inbox"),
          m(Sidebar.Item, { href: "#", icon: UserIcon }, "Users"),
          m(Sidebar.Item, { href: "#", icon: ShoppingBagIcon }, "Products"),
          m(Sidebar.Item, { href: "#", icon: ArrowRightIcon }, "Sign In"),
          m(Sidebar.Item, { href: "#", icon: TableRowIcon }, "Sign Up"),
        ),
      ]),
    ),
};
{{< /example >}}

## Content Separator

Use this example to separate content inside of the sidebar using a horizontal line.

{{< example id="content-separator" github="components/sidebar.md" >}}
import { Sidebar } from "flowbite-mithril";
import { ArrowRightIcon, ChartPieIcon, InboxIcon, UserIcon, ColumnIcon } from "flowbite-icons-mithril/solid";
import { ShoppingBagIcon, TableRowIcon } from "flowbite-icons-mithril/outline";

const Component = {
  view: () =>
    m(Sidebar,
      m(Sidebar.Items, [
        m(Sidebar.ItemGroup,
          m(Sidebar.Item, { href: "#", icon: ChartPieIcon }, "Dashboard"),
          m(Sidebar.Item, { href: "#", icon: InboxIcon, label: "3" }, "Inbox"),
          m(Sidebar.Item, { href: "#", icon: UserIcon }, "Users"),
          m(Sidebar.Item, { href: "#", icon: ShoppingBagIcon }, "Products"),
          m(Sidebar.Item, { href: "#", icon: ArrowRightIcon }, "Sign In"),
          m(Sidebar.Item, { href: "#", icon: TableRowIcon }, "Sign Up"),
        ),
        m(Sidebar.ItemGroup,
          m(Sidebar.Item, { href: "#" }, "Upgrade to Pro"),
          m(Sidebar.Item, { href: "#" }, "Documentation"),
          m(Sidebar.Item, { href: "#" }, "Help"),
        ),
      ]),
    ),
};
{{< /example >}}

## Sidebar with button

{{< example id="cta" github="components/sidebar.md" >}}
import { Sidebar, Badge } from "flowbite-mithril";
import { ArrowRightIcon, ChartPieIcon, InboxIcon, UserIcon, ColumnIcon } from "flowbite-icons-mithril/solid";
import { ShoppingBagIcon, TableRowIcon } from "flowbite-icons-mithril/outline";

const Component = {
  view: () =>
    m(Sidebar,
      m(Sidebar.Items,
        m(Sidebar.ItemGroup,
          m(Sidebar.Item, { href: "#", icon: ChartPieIcon }, "Dashboard"),
          m(Sidebar.Item, { href: "#", icon: ColumnIcon, label: "Pro", labelColor: "dark" }, "Kanban"),
          m(Sidebar.Item, { href: "#", icon: InboxIcon, label: "3" }, "Inbox"),
          m(Sidebar.Item, { href: "#", icon: UserIcon }, "Users"),
          m(Sidebar.Item, { href: "#", icon: ShoppingBagIcon }, "Products"),
          m(Sidebar.Item, { href: "#", icon: ArrowRightIcon }, "Sign In"),
          m(Sidebar.Item, { href: "#", icon: TableRowIcon }, "Sign Up"),
        ),
      ),
      m(Sidebar.CTA,
        m("div", { class: "mb-3 flex justify-left" },
          m(Badge, { color: "warning" }, "Beta"),
        ),
        m("div", { class: "mb-3 text-sm text-cyan-900 dark:text-gray-400" },
          "Preview the new Flowbite dashboard navigation! You can turn the new navigation off for a limited time in your profile."
        ),
        m("a", { href:"#", class: "text-sm text-cyan-900 underline hover:text-cyan-800 dark:text-gray-400 dark:hover:text-gray-300" },
          "Turn new navigation off"
        ),
      ),
    ),
};
{{< /example >}}

This example can be used to show a call to action button inside the sidebar next to the menu items.

## Sidebar with logo

Feature the branded logo of your company on the top side of the sidebar using this example.

{{< example id="logo" github="components/sidebar.md" >}}
import { Sidebar } from "flowbite-mithril";
import { ArrowRightIcon, ChartPieIcon, InboxIcon, UserIcon, ColumnIcon } from "flowbite-icons-mithril/solid";
import { ShoppingBagIcon, TableRowIcon } from "flowbite-icons-mithril/outline";

const Component = {
  view: () =>
    m(Sidebar,
      m(Sidebar.Logo, { href: "#", img: "/flowbite-mithril/images/logo.svg", imgAlt: "Flowbite logo"},
        "Flowbite Mithril",
      ),
      m(Sidebar.Items,
        m(Sidebar.ItemGroup,
          m(Sidebar.Item, { href: "#", icon: ChartPieIcon }, "Dashboard"),
          m(Sidebar.Item, { href: "#", icon: ColumnIcon, label: "Pro", labelColor: "dark" }, "Kanban"),
          m(Sidebar.Item, { href: "#", icon: InboxIcon, label: "3" }, "Inbox"),
          m(Sidebar.Item, { href: "#", icon: UserIcon }, "Users"),
          m(Sidebar.Item, { href: "#", icon: ShoppingBagIcon }, "Products"),
          m(Sidebar.Item, { href: "#", icon: ArrowRightIcon }, "Sign In"),
          m(Sidebar.Item, { href: "#", icon: TableRowIcon }, "Sign Up"),
        ),
      ),
    ),
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
