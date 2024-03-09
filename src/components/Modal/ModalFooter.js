import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { modalTheme } from "./theme.js";

export const ModalFooter = {
  view({ attrs, children }) {
    const { class: className, popup = false, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(modalTheme.footer, customTheme);

    return m(
      "div",
      {
        class: twMerge(theme.base, !popup && theme.popup, className),
        ...props,
      },
      children,
    );
  },
};
