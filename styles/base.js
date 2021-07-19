import { Dimensions } from "react-native";
import Constants from "expo-constants";

export const DIMENSIONS = {
  fullHeight: Dimensions.get("window").height,
  fullWidth: Dimensions.get("window").width,
  statusBarHeight: Constants.statusBarHeight,
  body: {
    width: "90%",
    alignSelf: "center",
  },
};

export const COLORS = {
  primary: "#3aaa35",
  secondary: "#00AD50",
  black: "#212227",
  white: "#FFFFFF",
  pills: "#DCF4FA",
  borders: "#AA4359",
  background: "#F1F1F2",
  grey: "#F0F0F0",
  lightgrey: "#6F7280",
  activeColor: "#3aaa35",
  inactiveColor: "#FFFFFF",
  star: "#40C1AC",
  danger: "#EE2737",
  success: "#17AD50",
  btnGrey: "#DDDDDD",
  backWarning: "#E7F2F5",
  greenSuccess: "#00AD50",
  greenback: "#D8F2E4",
  orange: "#FE6720",
  backRed: "#F8EDF1",
  strongRed: "#E40046",
};

export const PADDING = {
  xs: 10,
  sm: 15,
  md: 20,
  lg: 30,
  xl: 100,
};

export const FONTS = {
  ss: 11,
  xs: 12,
  sm: 14,
  md: 16,
  xd: 18,
  lg: 22,
  xg: 30,
  xl: 40,
  primary: {
    black: "Raleway_900Black",
    extrabold: "Raleway_800ExtraBold",
    bold: "Raleway_700Bold",
    semibold: "Raleway_600SemiBold",
    medium: "Raleway_500Medium",
    regular: "Raleway_400Regular",
  },
};

export const TEXTS = {
  medium: {
    //NOT IN USE
    color: COLORS.secondary,
    fontSize: FONTS.sm,
    fontFamily: FONTS.primary.medium,
    lineHeight: 18,
    letterSpacing: 0.7,
  },
  title: {
    color: COLORS.black,
    fontSize: FONTS.xd,
    fontFamily: FONTS.primary.medium,
    lineHeight: 22,
  },
  titleCategory: {
    color: COLORS.secondary,
    fontSize: FONTS.lg,
    fontFamily: FONTS.primary.bold,
    lineHeight: 26,
  },
  paragraph: {
    fontFamily: FONTS.primary.regular,
    fontSize: FONTS.xs,
    color: COLORS.secondary,
  },
};
