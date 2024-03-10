export const sidebarTheme = {
  root: {
    base: "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full",
    collapsed: {
      on: "w-16",
      off: "w-64",
    },
    inner: "h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800",
  },
  collapse: {
    button:
      "group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    icon: {
      base: "h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      open: {
        off: "",
        on: "text-gray-900",
      },
    },
    label: {
      base: "ml-3 flex-1 whitespace-nowrap text-left",
      icon: {
        base: "h-3 w-3 transition ease-in-out delay-0",
        open: {
          on: "rotate-180",
          off: "",
        },
      },
    },
    list: "space-y-2 py-2",
  },
  cta: {
    base: "mt-6 rounded-lg p-4 bg-gray-100 dark:bg-gray-700",
    color: {
      blue: "bg-cyan-50 dark:bg-cyan-900",
      dark: "bg-dark-50 dark:bg-dark-900",
      failure: "bg-red-50 dark:bg-red-900",
      gray: "bg-alternative-50 dark:bg-alternative-900",
      green: "bg-green-50 dark:bg-green-900",
      light: "bg-light-50 dark:bg-light-900",
      red: "bg-red-50 dark:bg-red-900",
      purple: "bg-purple-50 dark:bg-purple-900",
      success: "bg-green-50 dark:bg-green-900",
      yellow: "bg-yellow-50 dark:bg-yellow-900",
      warning: "bg-yellow-50 dark:bg-yellow-900",
    },
  },
  item: {
    base: "flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    active: "bg-gray-100 dark:bg-gray-700",
    content: {
      base: "px-3 flex-1 whitespace-nowrap",
      collapse: "group w-full pl-8 transition duration-75",
    },
    icon: {
      base: "h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white",
      active: "text-gray-700 dark:text-gray-100",
    },
    label: "",
    listItem: "",
  },
  items: {
    base: "",
  },
  itemGroup: {
    base: "space-y-2 font-medium",
  },
  logo: {
    base: "mb-5 flex items-center pl-2.5",
    img: "mr-3 h-6 sm:h-7",
    label: "self-center whitespace-nowrap text-xl font-semibold dark:text-white",
  },
};
