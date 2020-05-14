const addPX = (measure1, measure2) => {
  return `${parseInt(measure1, 10) + parseInt(measure2, 10)}px`;
};

export const layout = {
  barHeight: "50px",
  navigationHeight: "50px",
  baseWrapperPadding: "24px",
  get headerHeight() {
    return addPX(this.barHeight, this.navigationHeight)
  },
  get topOffset() {
    return addPX(this.headerHeight, this.baseWrapperPadding)
  },
};

/*const themes = {
  dark: {
    primary: "#1ca086",
    separatorColor: "rgba(255,255,255,0.20)",
    textColor: "white",
    backgroundColor: "#121212",
    headerBackgroundColor: "rgba(255,255,255,0.05)",
    blockquoteColor: "rgba(255,255,255,0.20)",
    icon: "white"
  },
  light: {
    primary: "#1ca086",
    separatorColor: "rgba(0,0,0,0.08)",
    textColor: "black",
    backgroundColor: "white",
    headerBackgroundColor: "#f6f6f6",
    blockquoteColor: "rgba(0,0,0,0.80)",
    icon: "#121212"
  }
};
*/
