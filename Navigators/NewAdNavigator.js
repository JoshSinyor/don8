import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NewAd from "../Screens/Ads/NewAd";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="New Ad"
        component={NewAd}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function NewAdNavigator() {
  return <MyStack />;
}
