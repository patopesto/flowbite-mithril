import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { sidebarTheme } from "./theme.js";
import { Badge } from "../Badge/Badge.js";

export const SidebarItem = {
  isInsideCollapse: false,
  oncreate({ state, attrs }) {
    const { isInsideCollapse = false } = attrs;
    state.isInsideCollapse = isInsideCollapse;
  },
  view({ attrs, children, state }) {
    const {
      class: className,
      as: Component = "a",
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
            className,
          ),
          ...props,
        },
        icon &&
          m(icon, {
            "aria-hidden": "true",
            class: twMerge(theme.icon?.base, active && theme.icon?.active),
          }),
        m(
          "span",
          {
            class: twMerge(
              theme.content.base,
              state.isInsideCollapse && theme.content.collapse,
            ),
          },
          children,
        ),
        label &&
          m(
            Badge,
            {
              class: theme.label,
              color: labelColor,
            },
            label,
          ),
      ),
    );
  },
};
