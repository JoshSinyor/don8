import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AdContainer from "../Screens/Ads/AdContainer";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={AdContainer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator() {
  return <MyStack />;
}
