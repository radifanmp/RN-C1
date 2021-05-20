import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

//Import Component
import Greeting from "../components/Greeting";
import Header from "../components/Headers";

const ListName = () => {
  return (
    <View style={{ marginTop: 50 }}>
      <Header title="ListName" />
      <Greeting name="Diaz" />
      <Greeting name="Rezaldi" />
      <Greeting name="Irham" />
    </View>
  );
};

export default ListName;
