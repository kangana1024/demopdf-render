import { StyleSheet } from "@react-pdf/renderer";

export const minStyles = StyleSheet.create({
  textBold: {
    fontWeight: "bold"
  },
  fontTHSarabunNew: {
    fontFamily: "THSarabunNew",
    fontWeight: "bold"
  },
  fontTHSarabunNewBold: {
    fontFamily: "THSarabunNewBold"
  },
  fontSupermarket: {
    fontFamily: "supermarket"
  },
  lineHeight_1: {
    lineHeight: 1
  },
  lineHeight_1_5: {
    lineHeight: 1.5
  },
  lineHeight_2: {
    lineHeight: 2
  },
  lineHeight_07: {
    lineHeight: 0.7
  },
  lineHeight_1_2: {
    lineHeight: 1.2
  },
  lineHeight_1_7: {
    lineHeight: 1.7
  },
  inlineText: {
    display: "inline"
  },
  inlineBlockText: {
    display: "inline-block"
  },
  borderTest: {
    border: "1px solid green"
  },
  flexRow: {
    flexDirection: "row"
  },
  columnjustifyCenter: {
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 3
  }
});
export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    paddingTop: 50,
    paddingHorizontal: 50,
    fontSize: 11,
    ...minStyles.fontTHSarabunNew
  },
  m20: {
    marginTop: 20
  },
  pageRowCenter: {
    flexDirection: "row",
    alignItems: "center"
  },
  headMarketLeft: {
    textAlign: "left",
    fontSize: 18,
    marginTop: 5,
    ...minStyles.fontTHSarabunNewBold
  },
  headMarketCenter: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 5,
    ...minStyles.fontTHSarabunNewBold
  },
  textCenter: {
    textAlign: "center"
  },
  centerView: {
    textAlign: "center"
  },
  leftView: {
    textAlign: "left"
  },
  headText: {
    fontSize: 12,
    ...minStyles.textBold,
    ...minStyles.lineHeight_07,
    ...minStyles.fontTHSarabunNewBold
  },
  headGreenText: {
    fontSize: 8,
    color: "#85764E",
    marginBottom: 20,
    ...minStyles.textBold,
    ...minStyles.lineHeight_07,
    ...minStyles.fontSupermarket
  },
  subHeadText: {
    marginTop: 10,
    ...minStyles.lineHeight_07
  },
  textRightInline: {
    ...minStyles.inlineBlockText
  },
  textRightMargin_20: {
    paddingRight: 20,
    ...minStyles.inlineBlockText
  },
  text20space: {
    width: 20,
    minWidth: 20,
    ...minStyles.inlineBlockText
  },
  textGreenLeft: {
    color: "#FFFFFF",
    backgroundColor: "green",
    fontSize: 16,
    minWidth: 20,
    minHeight: 20,
    padding: 5,
    borderRadius: 10,
    overflow: "hidden",
    display: "inline-block",
    ...minStyles.fontTHSarabunNewBold
  },
  textRedLeft: {
    color: "#FFFFFF",
    backgroundColor: "red",
    fontSize: 16,
    minWidth: 20,
    minHeight: 20,
    padding: 5,
    borderRadius: 10,
    overflow: "hidden",
    display: "inline-block",
    ...minStyles.fontTHSarabunNewBold
  },
  textLeft: {
    textAlign: "left",
    fontSize: 16,
    ...minStyles.fontTHSarabunNew
  },
  footerPage: {
    position: "absolute",
    bottom: 10,
    display: "block",
    textAlign: "center",
    width: "100%",
    left: 0
  },
  textSmallBold: {
    textAlign: "left",
    alignSelf: "center",
    fontSize: 10,
    color: "#808080",
    ...minStyles.fontTHSarabunNewBold
  },
  textCenterBold: {
    textAlign: "left",
    alignSelf: "center",
    fontSize: 16,
    ...minStyles.fontTHSarabunNewBold
  },
  textCenterfooter: {
    textAlign: "left",
    alignSelf: "center",
    fontSize: 9,
    color: "#808080",
    ...minStyles.fontTHSarabunNew
  },
  textLeftBold: {
    textAlign: "left",
    fontSize: 16,
    ...minStyles.fontTHSarabunNewBold
  },
  textLeftMargin_20: {
    marginLeft: 20,
    ...minStyles.inlineBlockText
  },
  textStrong: {
    ...minStyles.textBold,
    ...minStyles.fontTHSarabunNewBold
  },
  textStrongUnderline: {
    ...minStyles.textBold,
    ...minStyles.fontTHSarabunNewBold,
    textDecoration: "underline",
    textDecorationColor: "#000000"
  },
  reportBody: {
    ...minStyles.fontTHSarabunNew,
    flexDirection: "column",
    marginTop: 12
  },
  reportFooter: {
    ...minStyles.textBold,
    ...minStyles.fontTHSarabunNewBold,
    flexDirection: "column",
    marginTop: 17
  },
  rRow: {
    flexDirection: "row",
    flex: 1,
    position: "relative",
    ...minStyles.fontTHSarabunNew
  },
  rCol: {
    ...minStyles.columnjustifyCenter,
    flex: 1,
    paddingRight: 5
  },
  rCol_half: {
    ...minStyles.columnjustifyCenter,
    flex: 0.5,
    paddingRight: 5
  },
  rCol_1_half: {
    ...minStyles.columnjustifyCenter,
    flex: 1.5,
    paddingRight: 5
  },
  rCol_Bold: {
    ...minStyles.columnjustifyCenter,
    flex: 1,
    ...minStyles.textBold,
    ...minStyles.fontTHSarabunNewBold,
    paddingRight: 5
  },
  rCol_Half_Bold: {
    ...minStyles.columnjustifyCenter,
    flex: 0.5,
    ...minStyles.textBold,
    ...minStyles.fontTHSarabunNewBold,
    paddingRight: 5
  },
  rCol_Text_Right: {
    textAlign: "right"
  },
  rCol_Text_Left: {
    textAlign: "left",
    ...minStyles.fontTHSarabunNewBold
  },
  bluebg: {
    backgroundColor: "#6db8ef"
  },
  rCol_l_border: {
    ...minStyles.textBold,
    ...minStyles.fontTHSarabunNewBold,
    borderLeftColor: "black",
    borderLeftStyle: "solid",
    borderLeftWidth: 1,
    ...minStyles.columnjustifyCenter,
    flex: 1,
    textAlign: "center",
    borderTopWidth: 0
  },

  rCol_l_border_blue: {
    ...minStyles.textBold,
    ...minStyles.fontTHSarabunNewBold,
    borderLeftColor: "black",
    borderLeftStyle: "solid",
    borderLeftWidth: 1,
    ...minStyles.columnjustifyCenter,
    flex: 1,
    textAlign: "center",
    backgroundColor: "#6db8ef",
    borderTopWidth: 0
  },
  borderBlackV: {
    borderTopColor: "black",
    borderTopStyle: "solid",
    borderTopWidth: 1,
    borderBottomColor: "black",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    zIndex: 999
  },
  borderBlackBottom: {
    borderBottomColor: "black",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    zIndex: 999
  },
  borderBlackL: {
    borderLeftColor: "black",
    borderLeftStyle: "solid",
    borderLeftWidth: 1,
    zIndex: 999,
    ...minStyles.fontTHSarabunNewBold,
    flex: 0.45
  },
  borderBlackVR: {
    borderTopColor: "black",
    borderTopStyle: "solid",
    borderTopWidth: 1,
    borderBottomColor: "black",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    borderRightColor: "black",
    borderRightStyle: "solid",
    borderRightWidth: 1,
    overflow: "hidden"
  },
  borderBlackVR_notop: {
    borderBottomColor: "black",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    borderRightColor: "black",
    borderRightStyle: "solid",
    borderRightWidth: 1,
    overflow: "hidden"
  },
  borderBlackVR_hastop: {
    borderTopColor: "transparent",
    borderTopStyle: "solid",
    borderTopWidth: 1
  },
  borderBottomBlack: {
    borderBottomColor: "black",
    borderBottomStyle: "solid",
    borderBottomWidth: 1
  }
});
