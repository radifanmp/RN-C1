import React from "react";
import { ScrollView, View } from "react-native";

//Component Import
import Header from "../components/Headers";
import Content from "../components/Content";

const Home = () => {
  return (
    <View style={{ backgroundColor: "#FFF", flex: 1 }}>
      <Header title="Home" />
      <ScrollView>
        <Content />
      </ScrollView>
    </View>
  );
};

export default Home;
