import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { modalTheme } from "./theme.js";
import { ModalHeader } from "./ModalHeader.js";
import { ModalBody } from "./ModalBody.js";
import { ModalFooter } from "./ModalFooter.js";
import { Modal as FlowbiteModal } from "flowbite";

export const ModalComponent = {
  view({ state, attrs, children }) {
    const {
      id = "modal",
      class: className,
      dismissible = false,
      popup = false,
      position = "center",
      show = false,
      size = "2xl",
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(modalTheme, customTheme);

    // Pass attributes down to children
    for (const child of children) {
      child.attrs.popup = popup;
      child.attrs.id = id;
    }

    return m(
      "div",
      {
        id: id,
        tabindex: -1,
        "aria-hidden": show,
        class: twMerge(
          theme.root.base,
          theme.root.positions[position],
          theme.root.show[show ? "on" : "off"],
          className,
        ),
        "data-modal-placement": position,
        "data-modal-backdrop": [dismissible ? "dynamic" : "static"],
        ...props,
      },
      m(
        "div",
        { class: twMerge(theme.content.base, theme.root.sizes[size]) },
        m("div", { class: theme.content.inner }, children),
      ),
    );
  },
};

export const Modal = Object.assign(ModalComponent, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
});
