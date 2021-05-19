import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';

//Import Screen
import Home from './src/screens/Home';
import ListName from './src/screens/listName';
import Increment from './src/screens/Inc';
import GetData from './src/screens/FetchData';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      {/* <Text>Hello B22 This Is My React Native Project</Text> */}
      <Home/>
      <ListName/>
      <Increment/>
      <GetData/>
      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
