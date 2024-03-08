import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { sidebarTheme } from "./theme.js";

export const SidebarLogo = {
  view({ attrs, children }) {
    const {
      class: className,
      href,
      img,
      imgAlt,
      collapsed: isCollapsed = false,
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(sidebarTheme.logo, customTheme);

    return m(
      "a",
      {
        href: href,
        class: twMerge(theme.base, className),
        ...props,
      },
      m("img", { src: img, alt: imgAlt, class: theme.img }),
      m(
        "span",
        {
          class: theme.collapsed[isCollapsed ? "on" : "off"],
        },
        children,
      ),
    );
  },
};
