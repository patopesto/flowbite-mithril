import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { sidebarTheme } from "./theme.js";

export const SidebarCTA = {
  view({ attrs, children }) {
    const {
      class: className,
      color = "info",
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(sidebarTheme.cta, customTheme);

    return m(
      "div",
      {
        class: twMerge(theme.base, theme.color[color], className),
        ...props,
      },
      children,
    );
  },
};
