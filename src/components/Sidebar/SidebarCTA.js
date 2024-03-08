import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { sidebarTheme } from "./theme.js";

export const SidebarCTA = {
  view({ attrs, children }) {
    const {
      class: className,
      color = "info",
      collapsed: isCollapsed = false,
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(sidebarTheme.cta, customTheme);

    return m(
      "div",
      {
        hidden: isCollapsed,
        class: twMerge(theme.base, theme.color[color], className),
        ...props,
      },
      children,
    );
  },
};
