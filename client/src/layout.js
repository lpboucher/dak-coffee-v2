const addPX = (measure1, measure2="0px") => {
  return `${parseInt(measure1, 10) + parseInt(measure2, 10)}px`;
};

const addPCT = (measure1, measure2="0%") => {
  return `${parseInt(measure1, 10) + parseInt(measure2, 10)}%`;
};

const subUnits = (measure1, measure2="0%") => {
  return `calc(${measure1} - ${measure2})`;
};

// layout should be used for attributes that are passed as props to components
// for modifications, should also be
// properties modified for responsive should be labelled differently e.g. barHeight small
// responsive is then by switching properties e.g. browser.isSmall ? barHeight : barHeightSmall
export const layout = {
  barHeight: "36px",
  navigationHeight: "80px",
  logoHeight: "24px",
  logoWidth: "250px",
  logoHeight_small: "18px",
  logoWidth_small: "160px",
  logoHeight_extraSmall: "10px",
  logoWidth_extraSmall: "100px",
  settingsGap: "medium",
  settingsGap_small: "xxsmall",
  settingsGap_extraSmall: "xxsmall",
  baseWrapperPadding: "18px",
  sectionPadding:"18px",
  cardHeight: "400px",
  baseCardWidth: "33%",
  baseCardWidth_medium: "50%",
  baseCardWidth_small: "50%",
  baseCardWidth_extraSmall: "100%",
  cardTop: "75%",
  cardBottom: "25%",
  cardMargin: "10px",
  cardMargin_medium: "10px",
  cardMargin_small: "10px",
  cardMargin_extraSmall: "10px",
  cartButtonWidth: "300px",
  cartButtonWidth_medium: "250px",
  cartButtonWidth_small: "250px",
  cartButtonWidth_extraSmall: "180px",
  filterWidth: "80%",
  filterWidth_medium: "90%",
  filterWidth_small: "90%",
  filterWidth_extraSmall: "100%",
  fullSlideTextWidth: "50%",
  fullSlideTextWidth_small: "100%",
  newsletterSectionWidth: "50%",
  newsletterSectionWidth_small: "100%",
  newsletterSectionPadding: {horizontal: "small", vertical: "medium"},
  newsletterSectionPadding_small: {horizontal: "large", vertical: "large"},
  newsletterButtonMargin: {vertical: "none", left: "20px", right: "auto"},
  newsletterButtonMargin_small: "none",
  fullNewsletterWidth: "50%",
  fullNewsletterWidth_small: "100%",
  fullNewsletterWidth_extraSmall: "100%",
  fullNewsletterPadding: "large",
  fullNewsletterPadding_medium: "medium",
  fullNewsletterPadding_small: "large",
  fullNewsletterPadding_extraSmall: "medium",
  newsletterTextMargin: "xlarge",
  newsletterTextMargin_small: "small",
  newsletterTextMargin_extraSmall: "small",
  productColumnWidth: "50%",
  productFeatureHeight: "600px",
  productFeatureHeight_extraSmall: "400px",
  productFeatureSpacing: "small",
  productFeatureSpacing_small: {vertical: "large", horizontal: "small"},
  productFeatureSpacing_extraSmall: {vertical: "large", horizontal: "small"},
  accordionFontSize: "14px",
  accordionFontSize_extraSmall: "12px",
  accordionFontSize_small: "14px",
  categoryFontSize: "medium",
  categoryFontSize_extraSmall: "small",
  categoryFontSize_small: "small",
  productNameFontSize: "medium",
  productNameFontSize_extraSmall: "xsmall",
  productNameFontSize_small: "small",
  twoColLayoutWidth: "50%",
  twoColLayoutWidth_small: "100%",
  twoColLayoutWidth_extraSmall: "100%",
  twoColLayoutHeight: "600px",
  twoColLayoutHeight_small: "500px",
  twoColLayoutHeight_extraSmall: "400px",
  socialPad: "medium",
  socialPad_small: "large",
  //productColumnWidth_small: "100%",
  get productColumnWidth_small() {
    return addPCT(this.productColumnWidth, "50%")
  },
  get headerHeight() {
    return addPX(this.barHeight, this.navigationHeight)
  },
  get topOffset() {
    return addPX(this.headerHeight)
  },
  get cardWidth() {
    return subUnits(this.baseCardWidth, addPX(this.cardMargin, this.cardMargin))
  },
  get cardWidth_medium() {
    return subUnits(this.baseCardWidth_medium, addPX(this.cardMargin_medium, this.cardMargin_medium))
  },
  get cardWidth_small() {
    return subUnits(this.baseCardWidth_small, addPX(this.cardMargin_small, this.cardMargin_small))
  },
  get cardWidth_extraSmall() {
    return subUnits(this.baseCardWidth_extraSmall, addPX(this.cardMargin_extraSmall, this.cardMargin_extraSmall))
  },
  footerNavLinkWidth: "33%",
  footerDescriptionWidth: "33%",
  footerDescriptionWidth_small: "100%",
};
