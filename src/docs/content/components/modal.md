---
layout: home
title: Modal
description: Use the modal component to show an interactive dialog to your website users that overlays the main content based on multiple sizes, layouts, and styles
group: components
toc: true

previous: List Group
previousLink: components/list-group/
next: Navbar
nextLink: components/navbar/
---
The modal component can be used to show any type of content such as text, form elements, and notifications to your website visitors by creating an off-canvas box on top of the main content area of your website.

You can choose from multiple examples based on various styles, layouts, and elements inside the modal component and you can customize the behaviour, placement, and sizing using the attributes and the utility classes from Tailwind CSS.

## Default modal

Use the `<Modal>` component to show a dialog element to the user with a header, body, and footer where you can add any type of content such as text or form elements.

If you set an `id` on the `<Modal>` component, you can use that id with any other element using the Flowbite API attributes by setting `data-modal-target: id` then you can use one of the following:

- `data-modal-toggle: id` - toggle the modal
- `data-modal-show: id` - show the modal
- `data-modal-hide: id` - close the modal

The visibility of the component can be set by passing a boolean value to the `show` attribute.

{{< example id="default" github="components/sidebar.md" >}}
import { Modal, Button } from "flowbite-mithril";

const Component = {
  view: () => [
    m(Button, { 'data-modal-target': 'my-modal', 'data-modal-toggle': 'my-modal' }, "Toggle Modal"),
    m(Modal, { id: "my-modal" },
      m(Modal.Header, "Terms of Service"),
      m(Modal.Body,
        m("div", { class: "space-y-6" },
          m("p", { class: "text-base leading-relaxed text-gray-500 dark:text-gray-400" },
            "With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, \
            companies around the world are updating their terms of service agreements to comply."
          ),
          m("p", { class: "text-base leading-relaxed text-gray-500 dark:text-gray-400" },
            "The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant \
            to ensure a common set of data rights in the European Union. It requires organizations to notify users as \
            soon as possible of high-risk data breaches that could personally affect them."
          ),
        ),
      ),
      m(Modal.Footer,
        m(Button, { 'data-modal-hide': 'my-modal'}, "I accept"),
        m(Button, { 'data-modal-hide': 'my-modal', color: "gray" }, "Decline"),
      ),
    ),
  ],
};
{{< /example >}}

## Backdrop dismissible

To enable the modal to be dismissed when clicking outside of the component (ie. the backdrop), you can pass the `dismissible` attribute to the `<Modal>` component.

{{< example id="dismissible" github="components/sidebar.md" >}}
import { Modal, Button } from "flowbite-mithril";

const Component = {
  view: () => [
    m(Button, { 'data-modal-target': 'dismissable-modal', 'data-modal-toggle': 'dismissable-modal' }, "Toggle Modal"),
    m(Modal, { id: "dismissable-modal", dismissible: true },
      m(Modal.Header, "Terms of Service"),
      m(Modal.Body,
        m("div", { class: "space-y-6" },
          m("p", { class: "text-base leading-relaxed text-gray-500 dark:text-gray-400" },
            "With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, \
            companies around the world are updating their terms of service agreements to comply."
          ),
          m("p", { class: "text-base leading-relaxed text-gray-500 dark:text-gray-400" },
            "The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant \
            to ensure a common set of data rights in the European Union. It requires organizations to notify users as \
            soon as possible of high-risk data breaches that could personally affect them."
          ),
        ),
      ),
      m(Modal.Footer,
        m(Button, { 'data-modal-hide': 'dismissable-modal'}, "I accept"),
        m(Button, { 'data-modal-hide': 'dismissable-modal', color: "gray" }, "Decline"),
      ),
    ),
  ],
};
{{< /example >}}

## Pop-up modal

Use this example by passing the `popup` attribute to the modal component to show a dialog to the user asking for a decision such as when confirming an item deletion from the database.

{{< example id="popup" github="components/sidebar.md" >}}
import { Modal, Button } from "flowbite-mithril";
import { ExclamationCircleIcon } from "flowbite-icons-mithril/outline";

const Component = {
  view: () => [
    m(Button, { 'data-modal-target': 'popup-modal', 'data-modal-toggle': 'popup-modal' }, "Toggle Modal"),
    m(Modal, { id: "popup-modal", popup: true },
      m(Modal.Header),
      m(Modal.Body,
        m("div", { class: "text-center" },
          m(ExclamationCircleIcon, { class: "mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" }),
          m("h3", { class: "mb-5 text-lg font-normal text-gray-500 dark:text-gray-400" },
            " Are you sure you want to delete this product?",
          ),
          m("div", { class: "flex justify-center gap-4" },
            m(Button, { 'data-modal-hide': 'popup-modal', color: "failure"}, "Yes, I'm sure"),
            m(Button, { 'data-modal-hide': 'popup-modal', color: "gray" }, "No, cancel"),
          ),
        ),
      ),
    ),
  ],
};
{{< /example >}}

## Modal with form elements

You can also add form elements inside of the modal component by adding the markup that you want inside the `<Modal.Body>` component. Form elements can be used to show user authentication or surveys modal elements.

{{< example id="form" github="components/sidebar.md" >}}
import { Button, Checkbox, Label, Modal, Input } from "flowbite-mithril";

const Component = {
  view: () => [
    m(Button, { 'data-modal-target': 'form-modal', 'data-modal-toggle': 'form-modal' }, "Toggle Modal"),
    m(Modal, { id: "form-modal", popup: true, size: "md" },
      m(Modal.Header),
      m(Modal.Body,
        m("div", { class: "space-y-6" },
          m("h3", { class: "text-xl font-medium text-gray-900 dark:text-white" }, "Sign in to our platform" ),
          m("div",
            m("div", { class: "mb-2 block" },
              m(Label, { for: "email" }, "Your email" ),
            ),
            m(Input, { type: "text", id: "email", placeholder: "name@company.com", required: true }),
          ),
          m("div",
            m("div", { class: "mb-2 block" },
              m(Label, { for: "password" }, "Your password"  ),
            ),
            m(Input, { type: "text", id: "password", required: true }),
          ),
          m("div", { class: "flex justify-between" },
            m("div", { class: "flex items-center gap-2" },
              m(Checkbox, { id: "remember" }),
              m(Label, { for: "remember" }, "Remember me"),
            ),
            m("a", { href: "#", class: "text-sm text-cyan-700 hover:underline dark:text-cyan-500" },
              "Lost Password?",
            ),
          ),
          m("div", { class: "w-full" },
            m(Button, "Log in to your account"),
          ),
          m("div", { class: "flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300" },
            "Not registered?",
            m("a", { href: "#", class: "text-cyan-700 hover:underline dark:text-cyan-500" },
              "Create account",
            ),
          ),
        ),
      ),
    ),
  ],
};
{{< /example >}}

## Sizing options

To make the modal component smaller or larger you can pass the `size` attribute to the `<Modal>` component and you can choose from `sm`, `md`, `lg`, `xl` and all the way to `7xl`.

{{< example id="sizing" github="components/sidebar.md" >}}
import { Modal, Button, Select } from "flowbite-mithril";

const Component = {
  size: 'md',
  view: (vnode) => [
    m("div", { class: "flex flex-wrap gap-4" },
      m("div", { class: "w-40" },
       m(Select, { onchange: (e) => {vnode.state.size = e.target.value} },
          m("option", "sm"),
          m("option", "md"),
          m("option", "lg"),
          m("option", "xl"),
          m("option", "2xl"),
          m("option", "3xl"),
          m("option", "4xl"),
          m("option", "5xl"),
          m("option", "6xl"),
          m("option", "7xl"),
        ),
      ),
      m(Button, { 'data-modal-target': 'sizes-modal', 'data-modal-toggle': 'sizes-modal' }, "Toggle Modal"),
    ),
    m(Modal, { id: "sizes-modal", size: vnode.state.size },
      m(Modal.Header, "Modal"),
      m(Modal.Body,
        m("div", { class: "space-y-6" },
          m("p", { class: "text-base leading-relaxed text-gray-500 dark:text-gray-400" },
            "With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, \
            companies around the world are updating their terms of service agreements to comply."
          ),
          m("p", { class: "text-base leading-relaxed text-gray-500 dark:text-gray-400" },
            "The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant \
            to ensure a common set of data rights in the European Union. It requires organizations to notify users as \
            soon as possible of high-risk data breaches that could personally affect them."
          ),
        ),
      ),
      m(Modal.Footer,
        m(Button, { 'data-modal-hide': 'sizes-modal'}, "I accept"),
        m(Button, { 'data-modal-hide': 'sizes-modal', color: "gray" }, "Decline"),
      ),
    ),
  ],
};
{{< /example >}}

## Placement options

To set the position of the modal component relative to the page you can use the `position` attribute on the modal component and you can choose from `center`, `top-left`, `top-center`, `bottom-right`, and more based on the selector options below.

{{< example id="placement" github="components/sidebar.md" >}}
import { Modal, Button, Select } from "flowbite-mithril";

const Component = {
  position: 'center',
  view: (vnode) => [
    m("div", { class: "flex flex-wrap gap-4" },
      m("div", { class: "w-40" },
       m(Select, { onchange: (e) => {vnode.state.position = e.target.value} },
          m("option", "center"),
          m("option", "top-left"),
          m("option", "top-center"),
          m("option", "top-right"),
          m("option", "center-left"),
          m("option", "center-right"),
          m("option", "bottom-left"),
          m("option", "bottom-center"),
          m("option", "bottom-right"),
        ),
      ),
      m(Button, { 'data-modal-target': 'position-modal', 'data-modal-toggle': 'position-modal' }, "Toggle Modal"),
    ),
    m(Modal, { id: "position-modal", position: vnode.state.position },
      m(Modal.Header, "Modal"),
      m(Modal.Body,
        m("div", { class: "space-y-6" },
          m("p", { class: "text-base leading-relaxed text-gray-500 dark:text-gray-400" },
            "With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, \
            companies around the world are updating their terms of service agreements to comply."
          ),
          m("p", { class: "text-base leading-relaxed text-gray-500 dark:text-gray-400" },
            "The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant \
            to ensure a common set of data rights in the European Union. It requires organizations to notify users as \
            soon as possible of high-risk data breaches that could personally affect them."
          ),
        ),
      ),
      m(Modal.Footer,
        m(Button, { 'data-modal-hide': 'position-modal'}, "I accept"),
        m(Button, { 'data-modal-hide': 'position-modal', color: "gray" }, "Decline"),
      ),
    ),
  ],
};
{{< /example >}}

## Theme

To learn more about how to customize the appearance of components, please see the [Theme docs](https://alexferl.github.io/flowbite-mithril/customize/theme/).

{{< example id="theme" lang="json" show_preview=false >}}
{
  "root": {
    "base": "fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full",
    "show": {
      "on": "flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80",
      "off": "hidden"
    },
    "sizes": {
      "sm": "max-w-sm",
      "md": "max-w-md",
      "lg": "max-w-lg",
      "xl": "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl"
    },
    "positions": {
      "top-left": "items-start justify-start",
      "top-center": "items-start justify-center",
      "top-right": "items-start justify-end",
      "center-left": "items-center justify-start",
      "center": "items-center justify-center",
      "center-right": "items-center justify-end",
      "bottom-right": "items-end justify-end",
      "bottom-center": "items-end justify-center",
      "bottom-left": "items-end justify-start"
    }
  },
  "content": {
    "base": "relative h-full w-full p-4 md:h-auto",
    "inner": "relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-[90vh]"
  },
  "body": {
    "base": "p-6 flex-1 overflow-auto",
    "popup": "pt-0"
  },
  "header": {
    "base": "flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5",
    "popup": "p-2 border-b-0",
    "title": "text-xl font-medium text-gray-900 dark:text-white",
    "close": {
      "base": "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
      "icon": "h-5 w-5"
    }
  },
  "footer": {
    "base": "flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600",
    "popup": "border-t"
  }
}
{{< /example >}}
