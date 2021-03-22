import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../Screens/User/Login";
import Register from "../Screens/User/Register";
import UserProfile from "../Screens/User/UserProfile";

const Stack = createStackNavigator();

function MyStack() {}

export default function UserNavigator() {
  return <MyStack />;
}
