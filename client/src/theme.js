// theme houses all the default values
export const DakTheme = {
  global: {
    colors: {
        "mainDark": "#343434",
        "mainWhite": "#ffffff",
        'lightGrey': "#f7f8f9",
        "secondaryGrey": "#dad7d1",
        "primary": "#85955B",
        "secondary": "#eceae5",
        "minor-1": "#efefef",
        "minor-2": "#dddfde",
        "minor-3": "#f7f6f4",
        "minor-4": "#8d8f7f",
        text: {light: "mainDark", dark: "mainWhite"},
        focus: 'none',
    },
    font: {
      family: 'Montserrat, Century Gothic, sans-serif',
      size: '14px',
    },
  },
  heading: {
    level: {
      1: {
        xsmall: {
          size: "16px",
          height: "24px",
          maxWidth: "100%"
        },
        small: {
          size: "20px",
          height: "30px",
          maxWidth: "100%"
        },
        medium: {
          size: "24px",
          height: "36px",
          maxWidth: "100%"
        },
        xlarge: {
          size: "32px",
          height: "54px",
          maxWidth: "100%"
        },
      },
      3: {
        xsmall: {
          size: "10px",
          height: "15px",
          maxWidth: "100%"
        },
        small: {
          size: "10px",
          height: "15px",
          maxWidth: "100%"
        },
        medium: {
          size: "14px",
          height: "21px",
          maxWidth: "100%"
        },
      },
    }
  },
  text: {
    small: {
      size: "12px",
      height: "18px",
    },
    medium: {
      size: "14px",
      height: "21px",
    },
    xlarge: {
      size: "22px",
      height: "33px",
    },
  },
  paragraph: {
    small: {
      size: "10px",
      height: "15px",
      maxWidth: "100%"
    },
    medium: {
      size: "14px",
      height: "28px",
      maxWidth: "100%"
    },
    large: {
      size: "16px",
      height: "32px",
      maxWidth: "100%"
    },
  },
  accordion: {
    icons: {
      color: {light: "#85955B", dark: "mainWhite"}
    },
    heading: {
      level: 3,
      margin: "xsmall"
    }
  },
  button: {
    border: {
      radius: '4px',
      color: 'mainDark'
    },
    color: 'mainWhite',
    extend: {
      textTransform: "uppercase",
    },
    padding: {
      horizontal: '20px',
      vertical: '10px'
    },
    primary: {
      color: 'mainDark'
    },
  },
  carousel: {
    icons: {
      color: "primary"
    },
    animation: {
      duration: 800
    }
  },
};
