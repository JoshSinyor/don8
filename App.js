import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

// context API
import Auth from "./Context/Auth";

// Navigators
import Main from "./Navigators/Main";

// screens
import Header from "./Shared/Header";
import AdContainer from "./Screens/Ads/AdContainer";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <Auth>
      <NavigationContainer>
        <Header />
        <Main />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </Auth>
  );
}
