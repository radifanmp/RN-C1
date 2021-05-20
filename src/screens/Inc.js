import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

//Import Components
import Header from "../components/Headers";

const Increment = () => {
  const [value, setValue] = useState(0);

  return (
    <View style={{ backgroundColor: "#dfe6e9", flex: 1 }}>
      <Header title="Increment & Decrement" />
      <Text
        style={{
          textAlign: "center",
        }}
      >
        Hit The Button for Increment or Decrement
      </Text>

      <Text style={style.stylingValue}>{value}</Text>

      <TouchableOpacity
        style={style.stylingButton1}
        onPress={() => setValue(value + 1)}
      >
        <Text style={style.stylingText}>Hit Me to Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.stylingButton1}
        onPress={() => setValue(value - 1)}
      >
        <Text style={style.stylingText}>Hit Me to Decrement</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.stylingButton1}
        onPress={() => setValue(0)}
      >
        <Text style={style.stylingText}>Hit Me to Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Increment;

const style = StyleSheet.create({
  stylingText: {
    color: "#FFF",
    textAlign: "center",
  },
  stylingButton1: {
    borderRadius: 10,
    backgroundColor: "#e93b81",
    height: 50,
    justifyContent: "center",
    marginTop: 25,
  },
  stylingValue: {
    color: "#f5abc9",
    fontSize: 50,
    textAlign: "center",
    marginBottom: 25,
    marginTop: 25,
  },
});
