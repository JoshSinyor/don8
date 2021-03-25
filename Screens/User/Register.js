import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Error from "../../Shared/Error";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import Toast from "react-native-toast-message";
import baseURL from "../../assets/common/baseUrl";
import { Button } from "react-native-elements";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [charityName, setCharityName] = useState("");
  const [charityIdNumber, setcharityIdNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const register = () => {
    if (
      email === "" ||
      password === "" ||
      username === "" ||
      charityName === "" ||
      charityIdNumber === "" ||
      address === "" ||
      phone === ""
    ) {
      setError("Please fill in all your details");
    }

    let user = {
      charityName: charityName,
      username: username,
      email: email,
      charityIdNumber: charityIdNumber,
      password: password,
      phone: phone,
      address: address,
      isAdmin: false,
      isCharity: true,
      isVolunteer: false,
    };

    axios
      .post(`${baseURL}users/register`, user)
      .then((res) => {
        if (res.status == 200) {
          Toast.show({
            topOffset: 60,
            type: "success",
            text1: "Registration Successful",
            text2: "Please login to your account",
          });
          setTimeout(() => {
            props.navigation.navigate("Login");
          }, 500);
        }
      })
      .catch((error) => {
        Toast.show({
          topOffset: 60,
          type: "error",
          text1: "Registration Unsuccessful",
          text2: "Please try again",
        });
      });
  };
  return (
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <View style={styles.container}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Username..."
            placeholderTextColor="white"
            onChangeText={(text) => setUsername(text)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="white"
            onChangeText={(text) => setEmail(text.toLowerCase())}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="white"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Charity Name..."
            placeholderTextColor="white"
            onChangeText={(text) => setCharityName(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Charity Number..."
            keyboardType={"numeric"}
            placeholderTextColor="white"
            onChangeText={(text) => setcharityIdNumber(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Phone number..."
            keyboardType={"numeric"}
            placeholderTextColor="white"
            onChangeText={(text) => setPhone(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Address..."
            placeholderTextColor="white"
            onChangeText={(text) => setAddress(text)}
          />
        </View>

        <View style={styles.buttonGroup}>
          {error ? <Error message={error} /> : null}
          <Button
            titleStyle={{
              color: "#e91e63",
              fontSize: 22.5,
            }}
            buttonStyle={{
              backgroundColor: "#f5f5f5",
            }}
            title="Register"
            onPress={() => register()}
          />
        </View>
        <View style={[{ marginTop: 20 }, styles.buttonGroup]}>
          <Text style={styles.middleText}>Already have an account?</Text>
          <Button
            titleStyle={{
              color: "#e91e63",
              fontSize: 22.5,
            }}
            buttonStyle={{
              backgroundColor: "#f5f5f5",
            }}
            title="Back to login page"
            onPress={() => props.navigation.navigate("Login")}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    width: "80%",
    alignItems: "center",
  },
  middleText: {
    fontSize: 18.35,
    marginBottom: 10,
    alignSelf: "center",
  },
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    width: "80%",
    backgroundColor: "#003f5c",
    color: "black",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    fontSize: 15,
    height: 50,
    color: "white",
  },
});

export default Register;
