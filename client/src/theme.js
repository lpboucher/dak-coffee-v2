export const DakTheme = {
    global: {
        colors: {
            'mainDark': '#343434',
            'lightGrey': '#f7f8f9',
            'darkGrey': '#dcddde',
            'mainWhite': '#ffffff',
            'highlight': '#c5b6a4',
            'darkHighlight': '#a96c35',
            brand: '#a96c35',
            focus: 'none',
            active: 'mainWhite',
            control: {dark: 'mainDark', light: 'darkHighlight'},
        },
        drop: {
          zIndex: '1021',
        },
        font: {
          family: 'Montserrat',
          size: '14px',
        },
        hover: {
          color: {dark: 'mainHighlight', light: 'lightGrey'},
          background: {
            dark: {color: 'mainHighlight', opacity: 'medium'},
            light: {color: 'lightGrey', opacity: 'medium'},
          },
        },
        /*focus: {
          border: {
            color: 'darkHighlight'
          }
        },*/
        control: {
          border: {
            color: 'darkHighlight',
            radius: '4px'
          }
        },
        input: {
          padding: '6px',
          weight: 'normal'
        }
      },
      anchor: {
        color: {dark: 'mainWhite', light: 'mainDark'}
      },
      button: {
        border: {
          radius: '4px',
          color: 'mainDark'
        },
        color: 'mainWhite',
        extend: {
          textTransform: "uppercase",
          marginTop: "10px",
          marginBottom: "10px"
        },
        padding: {
          horizontal: '20px',
          vertical: '10px'
        },
        primary: {
          color: 'mainDark'
        },
      },
      checkBox: {
        color: 'darkHighlight',
        extend: {
          marginBottom: '10px',
          marginTop: '10px',
        }
      },
      formField: {
        border: {
          color: {dark: 'mainWhite', light: 'none'},
          side: 'all'
        },
        margin: {
          bottom: "medium"
        }
      },
      heading: {
        level: {
          1: {
            xsmall: {
              size: "10px",
              height: "20px",
              maxWidth: "100%"
          },
          small: {
            size: "14px",
            height: "28px",
            maxWidth: "100%"
        },
            medium: {
                size: "22px",
                height: "44px",
                maxWidth: "100%"
            },
          },
          2: {
            xsmall: {
              size: "8px",
              height: "16px",
              maxWidth: "100%"
          },
            small: {
                size: "16px",
                height: "32px",
            },
          },
          3: {
            xsmall: {
              size: "6px",
              height: "12px",
              maxWidth: "100%"
          },
            small: {
                size: "12px",
                height: "24px",
            },
            medium: {
              size: "16px",
              height: "32px",
          },
          },
          4: {
            medium: {
              size: "12px",
              height: "32px",
          },
          }
        },
        extend: {
          textTransform: "uppercase"
        }
      },
      menu: {
        extend: {
          margin: '0px',
          padding: '0px'
        }
      },
      paragraph: {
        xsmall: {
          size: "8px",
          height: "16px",
        },
        small: {
          size: "10px",
          height: "18px",
          maxWidth: "none"
        },
        medium: {
          size: "14px",
          height: "28px",
          maxWidth: "none"
        },
        large: {
          size: "26px",
          height: "52px",
        },
        xlarge: {
          size: "38px",
          height: "60px",
        },
      },
      select: {
        control: {
          extend: {
            margin: '0'
          }
        },
        options: {
          container: {
            background: "mainHighlight"
          },
          text: {
            weight: 'normal'
          }
        }
      },
      tab: {
        active: {
          color: "darkHighlight"
        },
        color: "black",
        margin: {
          left: "none",
          right: "24px"
        },
        pad: {
          bottom: '3px'
        },
        border: {
          "side": "bottom",
          "size": "xsmall",
          "color": {
            "dark": "white",
            "light": "white"
          },
          "active": {
            "color": {
              "dark": "white",
              "light": "darkHighlight"
            }
          },
          "hover": {
            "color": {
              "dark": "black",
              "light": "black"
            }
          }
        }
      },
      text: {
        xsmall: {
          size: "10px",
          height: "20px",
        },
        small: {
          size: "12px",
          height: "24px",
        },
        medium: {
          size: "14px",
          height: "28px",
        },
        large: {
          size: "26px",
          height: "52px",
        },
        xlarge: {
          size: "38px",
          height: "60px",
        },
        extend: {
          whiteSpace: "pre-wrap"
        }
      },
      textInput: {
        container: {
          extend: {
            border: "1px solid #dcddde"
          }
        },
        placeholder: {
          extend: {
            color: "mainDark"
          }
        },
        extend: {
          margin: "10px 0"
        }
      },
      tabs: {
        panel: {
          extend: {
            padding: '10px 0'
          }
        }
      }
    };