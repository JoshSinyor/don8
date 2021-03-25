import React, { useContext, useState, useCallback } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Container } from "native-base";
import AsyncStorage from "@react-native-community/async-storage";
import { Button } from "react-native-elements";
import Toast from "react-native-toast-message";

import axios from "axios";
import baseURL from "../../assets/common/baseUrl";

import AuthGlobal from "../../Context/store/AuthGlobal";
import { logoutUser } from "../../Context/actions/Auth.actions";
import { useEffect } from "react/cjs/react.development";

const UserProfile = (props) => {
  const context = useContext(AuthGlobal);
  const [userProfile, setUserProfile] = useState();

  useEffect(() => {
    // useCallback(() => {
    async function updateUser() {
      if (
        context.stateUser.isAuthenticated === false ||
        context.stateUser.isAuthenticated === null
      ) {
        props.navigation.navigate("Login");
      }

      AsyncStorage.getItem("jwt")
        .then((res) => {
          console.log(context.stateUser);
          axios
            .get(`${baseURL}users/${context.stateUser.user.userId}`, {
              headers: { Authorization: `Bearer ${res}` },
            })
            .then((user) => setUserProfile(user.data));
        })
        .catch((error) => console.log(error));
    }

    updateUser();
    return () => {
      setUserProfile();
    };
  }, [context.stateUser.isAuthenticated]);

  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={styles.subContainer}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          {userProfile ? userProfile.charityName : ""}
        </Text>
        <View style={{ marginTop: 30 }}>
          <Text style={{ margin: 30, fontSize: 20 }}>
            Email: {userProfile ? userProfile.email : ""}
          </Text>
          <Text style={{ margin: 30, fontSize: 20 }}>
            Username: {userProfile ? userProfile.username : ""}
          </Text>
          <Text style={{ margin: 30, fontSize: 20 }}>
            Phone: {userProfile ? userProfile.phone : ""}
          </Text>
          <Text style={{ margin: 30, fontSize: 20 }}>
            Address: {userProfile ? userProfile.address : ""}
          </Text>
          <Text style={{ margin: 30, fontSize: 20 }}>
            Charity ID: {userProfile ? userProfile.charityIdNumber : ""}
          </Text>
        </View>
        <View style={{ marginTop: 80 }}>
          <Button
            titleStyle={{
              color: "#e91e63",
              fontSize: 22.5,
            }}
            buttonStyle={{
              backgroundColor: "#f5f5f5",
            }}
            title={"Log Out"}
            onPress={() => [
              AsyncStorage.removeItem("jwt"),
              logoutUser(context.dispatch),
              Toast.show({
                topOffset: 60,
                type: "success",
                text1: "Logout Successful",
                text2: "Come back soon!",
              }),
            ]}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",

    flex: 1,
    alignItems: "center",
  },
  subContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});

export default UserProfile;
