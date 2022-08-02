import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import colors from "../../constants/Colors";
import globalStyles from "../../constants/GlobalStyles";
import styles from "./Styles";
import { helper } from "../../constants/Helper";
import dimensions from "../../constants/Dimensions";
import { urls } from "../../constants/ApiConstants";
import { NestedText } from "../../components/common/Common";

// Component as a View for UI only
const HomeScreen = (props) => {
  let { banner, movies } = props;

  const renderHeader = () => {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.headerView}>
          <NestedText
            firstText={"NASA:"}
            firstTextStyle={[
              globalStyles.semiBoldText(4, colors.limeYellow),
              { textAlign: "center" },
            ]}
            secondText={
              "Picture of the day " + helper.dateFormate(banner?.date)
            }
            secondTextStyle={globalStyles.semiBoldText(4, colors.skyBlue)}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Image style={styles.bannerImage} source={{ uri: banner?.url }} />
        </View>
      </View>
    );
  };

  const renderMovies = (item) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {}}
        style={{ backgroundColor: colors.white, padding: dimensions.width(2) }}
      >
        <Image
          style={styles.movieImage}
          source={{
            uri: item?.poster_path
              ? `${urls.imgUrl + item?.poster_path}`
              : "https://nasa-movies.netlify.app/image/gallery.png",
          }}
        />
        <View style={styles.movieDescriptionView}>
          <Text
            style={[
              globalStyles.boldText(5, colors.limeYellow),
              { textAlign: "center" },
            ]}
          >
            {item?.title}
          </Text>

          <Text
            style={[
              globalStyles.boldText(4, colors.black),
              { marginVertical: dimensions.width(2) },
            ]}
          >{"Description:"}</Text>
          <Text style={[globalStyles.semiBoldText(4, colors.black)]}>
            {item?.overview}
          </Text>
          <NestedText
            firstText={"Popularity:"}
            firstTextStyle={[globalStyles.semiBoldText(4, colors.black), {marginVertical: dimensions.width(4)}]}
            secondText={item?.popularity}
            secondTextStyle={globalStyles.semiBoldText(4, colors.limeYellow)}
          />
          <NestedText
            firstText={"Release Date:"}
            firstTextStyle={[globalStyles.semiBoldText(4, colors.black)]}
            secondText={item?.release_date}
            secondTextStyle={globalStyles.semiBoldText(4, colors.limeYellow)}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.mainCotainer}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item?.id}
        ListHeaderComponent={() => renderHeader()}
        renderItem={({ item }) => renderMovies(item)}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
};

HomeScreen.propTypes = {
  banner: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  movies: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

HomeScreen.defaultProps = {
  onPress: () => {},
};

export default HomeScreen;
