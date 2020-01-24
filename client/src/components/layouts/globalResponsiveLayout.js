export const navbarLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall: {
            areas: [
                { name: 'logo', start: [0, 0], end: [0, 0] },
                { name: 'topNav', start: [1, 0], end: [1, 0] },
            ],
            rows: ['80px'],
            columns: ['flex', '50%']
        },
        small: {
            areas: [
                { name: 'logo', start: [0, 0], end: [0, 0] },
                { name: 'topNav', start: [1, 0], end: [1, 0] },
            ],
            rows: ['80px'],
            columns: ['flex', '50%']
        },
        medium: {
            areas: [
                { name: 'announce', start: [0, 0], end: [1, 0]},
                { name: 'logo', start: [0, 1], end: [0, 1] },
                { name: 'topNav', start: [1, 1], end: [1, 1] },
            ],
            rows: ['30px', '80px'],
            columns: ['flex', '30%']
        },
        large: {
            areas: [
                { name: 'announce', start: [0, 0], end: [1, 0]},
                { name: 'logo', start: [0, 1], end: [0, 1] },
                { name: 'topNav', start: [1, 1], end: [1, 1] },
                { name: 'subNav', start: [0, 2], end: [1, 2] },
            ],
            rows: ['30px', '80px', '40px'],
            columns: ['flex', '25%']
        },
        infinity: {
            areas: [
                { name: 'announce', start: [0, 0], end: [1, 0]},
                { name: 'logo', start: [0, 1], end: [0, 1] },
                { name: 'topNav', start: [1, 1], end: [1, 1] },
                { name: 'subNav', start: [0, 2], end: [1, 2] },
            ],
            rows: ['30px', '80px', '40px'],
            columns: ['flex', '25%']
        },
    }
    return mediaQueries[screenSize]
}

export const logoLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall: {
            pad: {'left': '10vw', 'top': '0px'},
            width: "80px",
            align: "start"
        },
        small: {
            pad: {'left': '10vw', 'top': '0px'},
            width: "80px",
            align: "start"
        },
        medium: {
            pad: {'left': '30vw', 'top': '0px'},
            width: "80px",
            align: "start"
        },
        large: {
            pad: {'left': '25vw', 'top': '15px'},
            width: "100px",
            align: "center"
        },
        infinity: {
            pad: {'left': '25vw', 'top': '15px'},
            width: "100px",
            align: "center"
        },
    }
    return mediaQueries[screenSize]
}

export const heroLayout = (screenSize, height) => {
    const mediaQueries = {
        extraSmall: {
            pad: '0px',
            height: '50vh'
        },
        small: {
            pad: '0px',
            height: '50vh'
        },
        medium: {
            pad: '0px',
            height: height
        },
        large: {
            pad: '112px',
            height: height
        },
        infinity: {
            pad: '112px',
            height: height
        }
    }
    return mediaQueries[screenSize]
}

export const introLayout = (screenSize, isSmall) => {
    const mediaQueries = {
        extraSmall: {
            main: {
                size: 'small',
                margin: isSmall ? "medium" : {"horizontal": "large", "vertical": "small"}
            },
            sub: { size: isSmall ? '10px' : 'small'},
            small: { size: isSmall ? 'xsmall' : '12px', margin: {"bottom": "medium"}},
            align: 'center',
            around: {vertical: 'large'}
        },
        small: {
            main: {
                size: 'small',
                margin: isSmall ? "medium" : "large"
            },
            sub: { size: isSmall ? '10px' : 'small'},
            small: { size: isSmall ? 'xsmall' : '12px', margin: {"bottom": "medium"}},
            align: 'center',
            around: {vertical: 'large'}
        },
        medium: {
            main: {
                size: isSmall ? 'xsmall' : 'small',
                margin: isSmall ? {"bottom": "medium"} : {"bottom": "large"}
            },
            sub: { size: isSmall ? '10px' : 'small'},
            small: { size: isSmall ? 'xsmall' : '12px', margin: {"bottom": "medium"}},
            align: 'start',
            around: {vertical: 'medium'}
        },
        large: {
            main: {
                size: isSmall ? 'small' : '',
                margin: isSmall ? {"bottom": "medium"} : {"bottom": "large"}
            },
            sub: { size: isSmall ? '10px' : 'small'},
            small: { size: isSmall ? 'xsmall' : 'small', margin: {"bottom": "medium"}},
            align: 'start',
            around: {vertical: 'medium'}
        },
        infinity: {
            main: {
                size: isSmall ? 'small' : '',
                margin: isSmall ? {"bottom": "medium"} : {"bottom": "medium"}
            },
            sub: { size: isSmall ? '10px' : 'small'},
            small: { size: isSmall ? 'xsmall' : 'small', margin: {"bottom": "medium"}},
            align: 'start',
            around: {vertical: 'medium'}
        },
    }
    return mediaQueries[screenSize]
}

export const TwoCol = (screenSize, pad) => {
    const mediaQueries = {
        extraSmall: {
            width: '100%', 
            pad: {
                outer: 'none',
                inner: 'none'
            }
        },
        small: {
            width: '100%', 
            pad: {
                outer: 'none',
                inner: {vertical: 'medium', horizontal: 'large'}
            }
        },
        medium: {
            width: '100%', 
            pad: {
                outer: 'none',
                inner: {vertical: 'medium', horizontal: 'large'}
            }
        },
        large: {
            width: '50%', 
            pad: {
                outer: pad.outer,
                inner: pad.inner
            }
        },
        infinity: {
            width: '50%', 
            pad: {
                outer: pad.outer,
                inner: pad.inner
            }
        },
    }
    return mediaQueries[screenSize]
};

export const footerLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall: {dir: 'column', pad: 'large'},
        small: {dir: 'column', pad: 'large'},
        medium: {dir: 'column', pad: 'large'},
        large: {dir: 'row', pad: 'medium'},
        infinity: {dir: 'row', pad: 'medium'}
    }
    return mediaQueries[screenSize]
}

export const footerDescriptionLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall: {width: '100%', pad: '0 0 20px'},
        small: {width: '100%' , pad: '0 0 20px'},
        medium: {width: '100%' , pad: '20px 0'},
        large: {width: '40%', pad: '20px 0'},
        infinity: {width: '40%', pad: '20px 0'}
    }
    return mediaQueries[screenSize]
}

export const footerLinksLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall: {width: '50%'},
        small: {width: '50%'},
        medium: {width: '33%'},
        large: {width: '33%'},
        infinity: {width: '33%'},
    }
    return mediaQueries[screenSize]
}

export const productGridLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall: {
            size: 'small',
            columns: ["auto"],
            rows: ["300px", "300px", "300px", "300px", "300px"],
            areas: [
                { name: 'main', start: [0, 0], end: [0, 0] },
                { name: 'product1', start: [0, 1], end: [0, 1] },
                { name: 'product2', start: [0, 2], end: [0, 2] },
                { name: 'product3', start: [0, 3], end: [0, 3] },
                { name: 'product4', start: [0, 4], end: [0, 4] },
            ]
        },
        small: {
            size: 'small',
            columns: ["auto"],
            rows: ["300px", "300px", "300px", "300px", "300px"],
            areas: [
                { name: 'main', start: [0, 0], end: [0, 0] },
                { name: 'product1', start: [0, 1], end: [0, 1] },
                { name: 'product2', start: [0, 2], end: [0, 2] },
                { name: 'product3', start: [0, 3], end: [0, 3] },
                { name: 'product4', start: [0, 4], end: [0, 4] },
            ]
        },
        medium: {
            size: '',
            columns: ["auto"],
            rows: ["300px", "300px", "300px", "300px", "300px"],
            areas: [
                { name: 'main', start: [0, 0], end: [0, 0] },
                { name: 'product1', start: [0, 1], end: [0, 1] },
                { name: 'product2', start: [0, 2], end: [0, 2] },
                { name: 'product3', start: [0, 3], end: [0, 3] },
                { name: 'product4', start: [0, 4], end: [0, 4] },
            ]
        },
        large: {
            size: '',
            columns: ["auto", "auto", "auto"],
            rows: ["300px", "300px"],
            areas: [
                { name: 'main', start: [0, 0], end: [0, 1] },
                { name: 'product1', start: [1, 0], end: [1, 0] },
                { name: 'product2', start: [1, 1], end: [1, 1] },
                { name: 'product3', start: [2, 0], end: [2, 0] },
                { name: 'product4', start: [2, 1], end: [2, 1] },
            ]
        },
        infinity: {
            size: '',
            columns: ["auto", "auto", "auto"],
            rows: ["300px", "300px"],
            areas: [
                { name: 'main', start: [0, 0], end: [0, 1] },
                { name: 'product1', start: [1, 0], end: [1, 0] },
                { name: 'product2', start: [1, 1], end: [1, 1] },
                { name: 'product3', start: [2, 0], end: [2, 0] },
                { name: 'product4', start: [2, 1], end: [2, 1] },
            ]
        },
    }
    return mediaQueries[screenSize]
}

export const shopPageLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall : {padTop: '80px', width: '100%'},
        small : {padTop: '80px', width: '100%'},
        medium : {padTop: '208px', width: '66%'},
        large : {padTop: '208px', width: '66%'},
        infinity : {padTop: '208px', width: '66%'},
    }
    return mediaQueries[screenSize]
}

export const categorySectionLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall: {width: '98%', size: 'small'},
        small: {width: '98%', size: 'small'},
        medium: {width: '48%', size: ''},
        large: {width: '31%', size: ''},
        infinity: {width: '31%', size: ''},
    }
    return mediaQueries[screenSize]
}

export const productDetailsLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall: {level: 1, size: 'small', margin: {vertical: 'small'}, formDir: 'column'},
        small: {level: 1, size: 'small', margin: {vertical: 'small'}, formDir: 'column'},
        medium: {level: 3, size: '', margin: {bottom: 'small'}, formDir: 'row'},
        large: {level: 3, size: '', margin: {bottom: 'small'}, formDir: 'row'},
        infinity: {level: 3, size: '', margin: {bottom: 'small'}, formDir: 'row'}
    }
    return mediaQueries[screenSize]
}

export const singleDescriptionLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall: {
            marginH: 'small',
            size: 'small'
        },
        small: {
            marginH: 'small',
            size: 'small'
        },
        medium: {
            marginH: 'xlarge',
            size: ''
        },
        large: {
            marginH: 'xlarge',
            size: ''
        },
        infinity: {
            marginH: 'xlarge',
            size: ''
        }
    }
    return mediaQueries[screenSize]
}

export const spacedRowLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall: {width: '100%'},
        small: {width: '100%'},
        medium: {width: '33%'},
        large: {width: '33%'},
        infinity: {width: '33%'}
    }
    return mediaQueries[screenSize]
}

export const twoCardLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall: {width: '98%', margin: '1%'},
        small: {width: '98%', margin: '1%'},
        medium: { width: '98%', margin: '1%'},
        large: { width: '44%', margin: '3%'},
        infinity: { width: '44%', margin: '3%'}
    }
    return mediaQueries[screenSize]
}

export const cardLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall: {size: 'small'},
        small: {size: 'small'},
        medium: {size: ''},
        large: {size: ''},
        infinity: {size: ''}
    }
    return mediaQueries[screenSize]
}

export const cartLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall: {pad: {horizontal: "medium", top: '80px'}, dir: "row-reverse", width: '100%'},
        small: {pad: {horizontal: "medium", top: '80px'}, dir: "row-reverse", width: '100%'},
        medium: {pad: {horizontal: "xlarge", top: '204px'}, dir: "row", width: '33%'},
        large: {pad: {horizontal: "xlarge", top: '204px'}, dir: "row", width: '33%'},
        infinity: {pad: {horizontal: "xlarge", top: '204px'}, dir: "row", width: '33%'},
    }
    return mediaQueries[screenSize]
}

export const cartItemLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall: {height:'xsmall', width: ['10%', '25%', '35%', '0%', '20%', '10%']},
        small: {height:'xsmall', width: ['10%', '25%', '35%', '0%', '20%', '10%']},
        medium: {height:'small', width: ['10%', '25%', '25%', '20%', '10%', '20%']},
        large: {height:'small', width: ['10%', '25%', '25%', '20%', '10%', '20%']},
        infinity: {height:'small', width: ['10%', '25%', '25%', '20%', '10%', '20%']}
    }
    return mediaQueries[screenSize]
}

export const orderSummaryLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall: {pad: {horizontal: "medium", top: '80px'}, width: '100%'},
        small: {pad: {horizontal: "medium", top: '80px'}, width: '100%'},
        medium: {pad: {horizontal: "xlarge", top: '204px'}, width: '33%'},
        large: {pad: {horizontal: "xlarge", top: '204px'}, width: '33%'},
        infinity: {pad: {horizontal: "xlarge", top: '204px'}, width: '33%'},
    }
    return mediaQueries[screenSize]
}

export const newsletterFormLayout = (screenSize, isFull) => {
    const mediaQueries = {
        extraSmall: {width: '100%'},
        small: {width: '100%'},
        medium: {width: isFull ? '100%' : '40%'},
        large: {width: isFull ? '100%' : '40%'},
        infinity: {width: isFull ? '100%' : '40%'},
    }
    return mediaQueries[screenSize]
}

export const newsletterFullLayout = (screenSize, isFull) => {
    const mediaQueries = {
        extraSmall: {width: '100%', dir: isFull ? 'row' : 'column'},
        small: {width: '100%', dir: isFull ? 'row' : 'column'},
        medium: {width: isFull ? '50%' : '100%', dir: isFull ? 'row' : 'column'},
        large: {width: isFull ? '50%' : '100%', dir: isFull ? 'row' : 'column'},
        infinity: {width: isFull ? '50%' : '100%', dir: isFull ? 'row' : 'column'},
    }
    return mediaQueries[screenSize]
}

export const productSpecsLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall: {pad: 'medium', columns: '2', rows: 'auto'},
        small: {columns: '2', rows: 'auto'},
        medium: {columns: '50%', rows: '50%'},
        large: {columns: '50%', rows: '50%'},
        infinity: {columns: '50%', rows: '50%'}
    }
    return mediaQueries[screenSize]
}

export const aboutProfilesLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall: {height: ['400px', ''], size: "small", align:"center", pad: {top: '80px'}},
        small: {height: ['400px', ''], size: "small", align:"center", pad: {top: '80px'}},
        medium: {height: ['90%', '10%'], size: "", align:"start", pad: {top: '0px'}},
        large: {height: ['90%', '10%'], size: "", align:"start", pad: {top: '0px'}},
        infinity: {height: ['90%', '10%'], size: "", align:"start", pad: {top: '0px'}},
    };
    return mediaQueries[screenSize]
}

export const contactGridLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall: {width: '100%', size: "small", align:"center"},
        small: {width: '100%', size: "small", align:"center"},
        medium: {width: '50%', size: "", align:"start"},
        large: {width: '50%', size: "", align:"start"},
        infinity: {width: '50%', size: "", align:"start"}
    };
    return mediaQueries[screenSize]
}

export const singleProductLayout = (screenSize) => {
    const mediaQueries = {
        extraSmall: {imagePad: 'large', descPad: "large", wrapperPad: {outer: {horizontal: "large", top: "208px", bottom: "large"}, inner:"large"}},
        small: {imagePad: 'large', descPad: "large", wrapperPad: {outer: {horizontal: "large", top: "208px", bottom: "large"}, inner:"large"}},
        medium: {imagePad: 'large', descPad: "0px", wrapperPad: {outer: {horizontal: "large", top: "208px", bottom: "large"}, inner:"large"}},
        large: {imagePad: 'large', descPad: "0px", wrapperPad: {outer: {horizontal: "large", top: "208px", bottom: "large"}, inner:"large"}},
        infinity: {imagePad: 'large', descPad: "0px", wrapperPad: {outer: {horizontal: "large", top: "208px", bottom: "large"}, inner:"large"}}
    };
    return mediaQueries[screenSize]
}


