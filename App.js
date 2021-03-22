// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
// import { LogBox } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
import MapView from 'expo';
// Navigators
// import Main from "./Navigators/Main";

// screens
// import Header from "./Shared/Header";
// import AdContainer from "./Screens/Ads/AdContainer";

// LogBox.ignoreAllLogs(true);

export default class App extends React.Component {
//   state = {
//     latitude: null,
//     longitude: null
//   }
  
//   async componentDidMount () {
//   const { status } = await Permissions.getAsync(Permissions.LOCATION)

//   if (status != 'granted') {
//     const response = await Permissions.askAsync(Permissions.LOCATION)
//   }
// }

  render() {
    return (
      <MapView></MapView>
    );
  }
}
