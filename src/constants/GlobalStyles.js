import { StyleSheet } from "react-native";
import colors from "./Colors";
import dimensions from "./Dimensions";

// Globale styles and
// Methods for text which take size and and color as input and return font with font family
const globalStyles = StyleSheet.create({
  regularText: (size, color) => {
    return {
      fontSize: dimensions.width(size ? size : 4),
      color: color ? color : colors.darkBlue,
      fontFamily: "Montserrat-Regular",
    };
  },
  semiBoldText: (size, color) => {
    return {
      fontSize: dimensions.width(size ? size : 4),
      color: color ? color : colors.darkBlue,
      fontFamily: "Montserrat-SemiBold",
    };
  },
  boldText: (size, color) => {
    return {
      fontSize: dimensions.width(size ? size : 4),
      color: color ? color : colors.darkBlue,
      fontFamily: "Montserrat-Bold",
    };
  },
});
export default globalStyles;
