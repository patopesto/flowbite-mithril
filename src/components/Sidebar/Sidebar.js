import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { sidebarTheme } from "./theme.js";
import { SidebarCollapse } from "./SidebarCollapse.js";
import { SidebarCTA } from "./SidebarCTA.js";
import { SidebarItem } from "./SidebarItem.js";
import { SidebarItems } from "./SidebarItems.js";
import { SidebarItemGroup } from "./SidebarItemGroup.js";
import { SidebarLogo } from "./SidebarLogo.js";

export const SidebarComponent = {
  view({ attrs, children }) {
    const {
      class: className,
      as: Component = "nav",
      collapsed: isCollapsed = false,
      collapseBehavior = "collapse",
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(sidebarTheme.root, customTheme);

    return m(
      Component,
      {
        class: twMerge(theme.base, theme.collapsed[isCollapsed ? "on" : "off"], className),
        hidden: isCollapsed && collapseBehavior === "hide",
        "aria-label": "Sidebar",
        ...props,
      },
      m(
        "div",
        {
          class: theme.inner,
        },
        children,
      ),
    );
  },
};

export const Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse,
  CTA: SidebarCTA,
  Item: SidebarItem,
  Items: SidebarItems,
  ItemGroup: SidebarItemGroup,
  Logo: SidebarLogo,
});
