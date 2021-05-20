import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = (props) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        margin: 40,
        borderBottomWidth: 1,
      }}
    >
      <Text
        style={{
          fontSize: 26,
          color: "grey",
          fontFamily: "Roboto_medium",
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};
export default Header;
