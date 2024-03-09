import m from "mithril";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep.js";
import { progressTheme } from "./theme.js";

export const Progress = {
  view({ attrs, children }) {
    const {
      id = "progressbar",
      class: className,
      color = "cyan",
      labelProgress = false,
      labelText = false,
      progress,
      progressLabelPosition = "inside",
      size = "md",
      textLabel = "progressbar",
      textLabelPosition = "inside",
      theme: customTheme = {},
      ...props
    } = attrs;
    const theme = mergeDeep(progressTheme, customTheme);

    return m(
      "div",
      {
        id: id,
        "aria-label": textLabel,
        "aria-valuenow": progress,
        role: "progressbar",
        ...props,
      },
      [
        ((textLabel && labelText && textLabelPosition === "outside") ||
          (progress > 0 && labelProgress && progressLabelPosition === "outside")) &&
          m(
            "div",
            { class: theme.label },
            [textLabel && labelText && textLabelPosition === "outside" && m("span", textLabel)],
            [labelProgress && progressLabelPosition === "outside" && m("span", `${progress}%`)],
          ),
      ],
      m(
        "div",
        { class: twMerge(theme.base, theme.size[size], className) },
        m(
          "div",
          { style: `width: ${progress}%`, class: twMerge(theme.bar, theme.color[color], theme.size[size]) },
          [textLabel && labelText && textLabelPosition === "inside" && m("span", textLabel)],
          [progress > 0 && labelProgress && progressLabelPosition === "inside" && m("span", `${progress}%`)],
        ),
      ),
    );
  },
};
