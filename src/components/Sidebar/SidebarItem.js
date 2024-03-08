import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { sidebarTheme } from "./theme.js";
import { Badge } from "../Badge/Badge.js";

export const SidebarItem = {
  isInsideCollapse: false,
  view({ attrs, children, state }) {
    const {
      class: className,
      as: Component = "a",
      collapsed: isCollapsed = false,
      active,
      icon,
      label,
      labelColor = "info",
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(sidebarTheme.item, customTheme);

    return m(
      "li",
      m(
        Component,
        {
          class: twMerge(
            theme.base,
            active && theme.active,
            isCollapsed && state.isInsideCollapse && theme.collapsed?.insideCollapse,
            className,
          ),
          ...props,
        },
        icon &&
          m(icon, {
            "aria-hidden": "true",
            class: twMerge(theme.icon?.base, active && theme.icon?.active),
          }),
        isCollapsed &&
          !icon &&
          m("span", {
            class: theme.collapsed?.noIcon,
          }),
        !isCollapsed &&
          m(
            "span",
            {
              class: twMerge(theme.content.base),
            },
            children,
          ),
        !isCollapsed &&
          label &&
          m(
            Badge,
            {
              class: theme.label,
              hidden: isCollapsed,
              color: labelColor,
            },
            label,
          ),
      ),
    );
  },
};
