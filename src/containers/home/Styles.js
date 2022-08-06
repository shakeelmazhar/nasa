import { StyleSheet } from "react-native";
import colors from "../../constants/Colors";
import dimensions from "../../constants/Dimensions";

const styles = StyleSheet.create({
    mainCotainer: {
        flex: 1,
        backgroundColor: colors.black,
        paddingVertical: dimensions.width(4)
    },

    /// Home page header styles
    headerView: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: dimensions.width(20),
    },
    bannerImage: {
        width: dimensions.width(100),
        height: dimensions.height(100),
        marginVertical: dimensions.width(4),
    },

    //// Home page movies grid stles 
    movieImage: {
        width: dimensions.width(100),
        height: dimensions.width(100),
        resizeMode: "contain",
    },
    movieDescriptionView: {
        padding: dimensions.width(5)
    }
})

export default styles;