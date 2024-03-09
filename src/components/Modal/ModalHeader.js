import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { modalTheme } from "./theme.js";
import { CloseIcon } from "flowbite-icons-mithril/outline";

export const ModalHeader = {
  view({ attrs, children }) {
    const { class: className, as: Component = "h3", id, popup = false, theme: customTheme = {}, ...props } = attrs;
    const theme = mergeDeep(modalTheme.header, customTheme);

    return m(
      "div",
      {
        class: twMerge(theme.base, popup && theme.popup, className),
        ...props,
      },
      m(Component, { class: theme.title }, children),
      m(
        "button",
        {
          "aria-label": "Close",
          type: "button",
          class: theme.close.base,
          "data-modal-hide": id,
        },
        m(CloseIcon, { "aria-hidden": true, class: theme.close.icon }),
      ),
    );
  },
};
