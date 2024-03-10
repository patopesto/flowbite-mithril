import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { tooltipTheme } from "./theme.js";
import { Tooltip as FlowbiteTooltip } from "flowbite";

export const Tooltip = {
  id: "tooltip",
  tooltip: null,
  options: {
    placement: "top",
    triggerType: "hover",
  },

  oninit({ state, attrs }) {
    const { id = "tooltip", target } = attrs;
    // Create custom id based on target
    state.id = `${target}-${id}`;
  },

  oncreate({ state, attrs, children }) {
    const { target, placement = "top", trigger = "hover" } = attrs;
    state.options.placement = placement;
    state.options.triggerType = trigger;
    const targetEl = document.getElementById(state.id);
    const triggerEl = document.getElementById(target);
    
    const instanceOptions = {
      id: state.id,
      override: true,
    }

    state.tooltip = new FlowbiteTooltip(targetEl, triggerEl, state.options, instanceOptions)
  },

  view({ state, attrs, children }) {
    const {
      class: className,
      target,
      animation = 'duration-300',
      arrow = true,
      open = false,
      content,
      style = 'auto',
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(tooltipTheme, customTheme);

    return m(
      "div",
      {
        id: state.id,
        role: 'tooltip',
        class: twMerge(
          theme.base,
          animation && `${theme.animation} ${animation}`,
          !open && theme.hidden,
          theme.style[style],
          className,
        ),
        ...props,
      },
      m("div", { class: theme.content },
        content,
      ),
      arrow && m("div", 
        { 
          class: twMerge(
            theme.arrow.base,
            theme.arrow.style[style],
          ),
          'data-popper-arrow': true,
        },
      ),
    );
  },
};
