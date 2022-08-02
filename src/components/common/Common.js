import React from "react";
import { forwardRef, useImperativeHandle, useState } from "react";
import { Text } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import colors from "../../constants/Colors";

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
export const NestedText = ({firstText, firstTextStyle, secondText, secondTextStyle}) => {
  return (
    <Text
      style={firstTextStyle}
    >
      {firstText}
      <Text style={secondTextStyle}>
        {" "}
        {secondText}
      </Text>
    </Text>
  );
};
