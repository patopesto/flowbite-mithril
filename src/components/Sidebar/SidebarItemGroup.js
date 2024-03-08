import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { sidebarTheme } from "./theme.js";

export const SidebarItemGroup = {
  view({ attrs, children }) {
    const { class: className, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(sidebarTheme.itemGroup, customTheme);

    return m("ul", { class: twMerge(theme.base, className), ...props }, children);
  },
};
