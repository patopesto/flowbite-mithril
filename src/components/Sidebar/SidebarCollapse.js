import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { sidebarTheme } from "./theme.js";
import { ChevronDownIcon } from "flowbite-icons-mithril/outline";

export const SidebarCollapse = {
  isOpen: false,
  oninit({ attrs, children, state }) {
    const { open = false } = attrs;
    state.isOpen = open;

    for (const child of children) {
      child.state.isInsideCollapse = true;
    }
    // call redraw so the DOM is updated
    // with the state values we just set
    m.redraw();
  },

  view({ attrs, children, state }) {
    const {
      class: className,
      icon,
      label,
      ChevronIcon = ChevronDownIcon,
      collapsed: isCollapsed = false,
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(sidebarTheme.collapse, customTheme);

    return m(
      "li",
      m(
        "button",
        {
          title: label,
          type: "button",
          class: twMerge(theme.button, className),
          onclick: () => {
            state.isOpen = !state.isOpen;
          },
          ...props,
        },
        icon &&
          m(icon, {
            class: twMerge(theme.icon.base, theme.icon.open[state.isOpen ? "on" : "off"]),
          }),
        [
          isCollapsed
            ? m("span", { class: "sr-only" }, label)
            : [
                m("span", { class: theme.label.base }, label),
                m(ChevronIcon, {
                  "aria-hidden": "true",
                  class: twMerge(theme.label.icon.base, theme.label.icon.open[state.isOpen ? "on" : "off"]),
                }),
              ],
        ],
      ),
      m(
        "ul",
        {
          hidden: !state.isOpen,
          class: theme.list,
        },
        children,
      ),
    );
  },
};
