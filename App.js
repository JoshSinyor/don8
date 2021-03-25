import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { setCustomText } from "react-native-global-props";
// context API
import Auth from "./Context/store/Auth";

// Navigators
import Main from "./Navigators/Main";

// screens
import Header from "./Shared/Header";
import AdContainer from "./Screens/Ads/AdContainer";

LogBox.ignoreAllLogs(true);

export default function App() {
  setCustomText(customTextProps);
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

const customTextProps = {
  style: {
    fontFamily: "Didot",
  },
};
