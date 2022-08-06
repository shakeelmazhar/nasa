import React from "react";
import { Image, ScrollView, View } from "react-native";
import PropTypes from "prop-types";
import {
  NestedText,
  NestedTextWithListView,
} from "../../components/common/Common";
import { urls } from "../../constants/ApiConstants";
import colors from "../../constants/Colors";
import { constants } from "../../constants/Constants";
import dimensions from "../../constants/Dimensions";
import globalStyles from "../../constants/GlobalStyles";
import styles from "./Styles";

const MovieScreen = (props) => {
  let { movie, onPress } = props;
  return (
    <View style={styles.mainCotainer}>
      <ScrollView style={{ flex: 1 }}>
        <Image
          style={styles.movieImage}
          source={{
            uri: movie?.poster_path
              ? `${urls.imgUrl + movie?.poster_path}`
              : constants.dummyImg,
          }}
        />
        <View style={styles.descriptionView}>
          <NestedText
            firstText={"Title:"}
            firstTextStyle={styles.nestedTextView}
            secondText={movie?.title}
            secondTextStyle={styles.secondTextSyle}
          />
          <NestedText
            firstText={"Overview:"}
            firstTextStyle={styles.nestedTextView}
            secondText={movie?.overview}
            secondTextStyle={styles.secondTextSyle}
          />
          <NestedText
            firstText={"Vote Average:"}
            firstTextStyle={styles.nestedTextView}
            secondText={movie?.vote_average}
            secondTextStyle={styles.secondTextSyle}
          />

          <NestedText
            firstText={"Total Votes:"}
            firstTextStyle={styles.nestedTextView}
            secondText={movie?.vote_count}
            secondTextStyle={styles.secondTextSyle}
          />

          <NestedText
            firstText={"Status:"}
            firstTextStyle={styles.nestedTextView}
            secondText={movie?.status}
            secondTextStyle={styles.secondTextSyle}
          />

          <NestedText
            firstText={"IMDB Link:"}
            firstTextStyle={styles.nestedTextView}
            secondText={movie?.imdb_id}
            secondTextStyle={[globalStyles.semiBoldText(4, colors.skyBlue), {marginTop: dimensions.width(2)}]}
            enableBtn={true}
            onPress={onPress}
          />

          <NestedText
            firstText={"Budget:"}
            firstTextStyle={styles.nestedTextView}
            secondText={movie?.budget > 0 ? movie?.budget : "Unknown budget costs"}
            secondTextStyle={styles.secondTextSyle}
          />

          <NestedTextWithListView
            firstText={"Production Countries:"}
            firstTextStyle={styles.nestedTextView}
            secondTextList={movie?.production_countries}
            secondTextStyle={styles.nestedListViewText}
          />

          <NestedTextWithListView
            firstText={"Genres:"}
            firstTextStyle={styles.nestedTextView}
            secondTextList={movie?.genres}
            secondTextStyle={styles.nestedListViewText}

          />
          <NestedTextWithListView
            firstText={"Languages:"}
            firstTextStyle={styles.nestedTextView}
            secondTextList={movie?.spoken_languages}
            secondTextStyle={styles.nestedListViewText}
          />
        </View>
      </ScrollView>
    </View>
  );
};
MovieScreen.propTypes = {
  movie: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onPress: PropTypes.func
};

MovieScreen.defaultProps = {
  movie: {},
  onPress: () => {}
};
export default MovieScreen;
