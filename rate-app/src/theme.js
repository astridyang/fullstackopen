import { Platform } from "react-native";

const theme = {
  bgcolors: {
    main: "#e1e4e8",
    appBar: "#24292e",
    repository: "#ffffff",
  },
  colors: {
    appBar: "#ffffff",
    primary: "#0366d6",
    textPrimary: "#24292e",
    textSecondary: "#586069",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.OS === "android" ? "Roboto" : "System",
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};
export default theme;
