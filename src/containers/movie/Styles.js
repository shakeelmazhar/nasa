import { StyleSheet } from "react-native";
import colors from "../../constants/Colors";
import dimensions from "../../constants/Dimensions";
import globalStyles from "../../constants/GlobalStyles";

const styles = StyleSheet.create({
  mainCotainer: {
    flex: 1,
    backgroundColor: colors.black,
    paddingVertical: dimensions.width(4),
  },
  movieImage: {
    width: dimensions.width(100),
    height: dimensions.height(50),
    resizeMode: "contain",
  },

  descriptionView: {
    paddingHorizontal: dimensions.width(3),
    marginTop: dimensions.width(5),
  },

  nestedTextView: [
    globalStyles.semiBoldText(4, colors.limeYellow),
    { marginTop: dimensions.width(2) },
  ],
  secondTextSyle: [
    globalStyles.semiBoldText(4, colors.white),
   { marginTop: dimensions.width(2)}
  ],

  nestedListViewText: [
    globalStyles.semiBoldText(3, colors.white),
    {
      marginStart: dimensions.width(5),
      marginTop: dimensions.width(2),
    },
  ]
});

export default styles;
