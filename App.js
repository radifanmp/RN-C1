import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";

//Import Screen
import Home from "./src/screens/Home";
import ListName from "./src/screens/listName";
import Increment from "./src/screens/Inc";
import GetData from "./src/screens/FetchData";
import FCSS from "./src/screens/FCSS";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "ListName") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "Increment") {
            iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
          } else {
            iconName = focused ? "ios-planet" : "ios-planet-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#e93b81",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ListName" component={ListName} />
      <Tab.Screen name="Increment" component={Increment} />
      <Tab.Screen name="GetData" component={GetData} />
    </Tab.Navigator>
  );
}

export default function App() {
  // Setup Font
  const [isReady, setIsReady] = useState(false);

  const startUp = async () => {
    await Font.loadAsync({
      //Font
      FontAwesome: require("native-base/Fonts/FontAwesome.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    setIsReady(true);
  };

  useEffect(() => {
    startUp();
  }, []);

  if (!isReady) {
    return <AppLoading />;
  }
  //End Setup Font

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={MainTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="FCSS" component={FCSS} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
