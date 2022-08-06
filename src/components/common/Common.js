import React from "react";
import { forwardRef, useImperativeHandle, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import colors from "../../constants/Colors";
import dimensions from "../../constants/Dimensions";

// All general componets go here

// Loader to show when there is a task being executed and takes time to load
export const Loader = forwardRef(({}, ref) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    showLoader() {
      setVisible(true);
    },
    hideLoader() {
      setVisible(false);
    },
  }));

  return <Spinner visible={visible} color={colors.lightGreen} />;
});

/// Nested Text
export const NestedText = ({
  firstText,
  firstTextStyle,
  secondText,
  secondTextStyle,
  onPress,
  enableBtn
}) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={firstTextStyle}>{firstText}</Text>
      <TouchableOpacity
        disabled={enableBtn ? false : true}
        onPress={() => onPress(secondText)}
      >
        <Text style={secondTextStyle}>
          {" "}
          {secondText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const NestedTextWithListView = ({
  firstText,
  firstTextStyle,
  secondTextList,
  secondTextStyle,
}) => {
  return (
    <View>
      <Text style={firstTextStyle}>{firstText}</Text>
      {secondTextList &&
        secondTextList.map((element, index) => (
          <Text key={index} style={secondTextStyle}> {element?.name}</Text>
        ))}
    </View>
  );
};
