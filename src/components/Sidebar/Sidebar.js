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
import { Drawer as FlowbiteDrawer } from "flowbite";

export const SidebarComponent = {
  id: "sidebar",
  sidebar: null,
  options: {
    placement: "left",
    backdrop: false,
    bodyScrolling: true,
    edge: false,
    edgeOffset: "",
    backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30",
  },
  oninit({ state, attrs }) {
    const { id = "sidebar" } = attrs;
    state.id = id;
  },
  oncreate({ state, attrs }) {
    const {
      backdrop = false,
      bodyScrolling = true,
      collapsed = false,
    } = attrs;

    state.options.backdrop = backdrop;
    state.options.bodyScrolling = bodyScrolling;
    const targetEl = document.getElementById(state.id);

    const instanceOptions = {
      id: state.id,
      override: true,
    }

    state.sidebar = new FlowbiteDrawer(targetEl, state.options, instanceOptions);
    if (!collapsed) {
      state.sidebar.show()
    }
  },
  view({ state, attrs, children }) {
    const {
      class: className,
      as: Component = "aside",
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(sidebarTheme.root, customTheme);

    return m(
      Component,
      {
        id: state.id,
        class: twMerge(theme.base, className),
        "aria-label": "Sidebar",
        "aria-labelledby": `${state.id}-label`,
        tabindex: -1,
        ...props,
      },
      m(
        "div",
        {
          id: `${state.id}-label`,
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
