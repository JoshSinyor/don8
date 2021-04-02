import React, { useEffect, useContext, useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Error from "../../Shared/Error";
import Toast from "react-native-toast-message";
import { Button } from "react-native-elements";

// Context
import AuthGlobal from "../../Context/store/AuthGlobal";
import { loginUser } from "../../Context/actions/Auth.actions";

const Login = (props) => {
  const context = useContext(AuthGlobal);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (context.stateUser.isAuthenticated === true) {
      Toast.show({
        topOffset: 60,
        type: "success",
        text1: "Login Successful",
        text2: "Welcome back!",
      });
      props.navigation.navigate("UserProfile");
    }
  }, [context.stateUser.isAuthenticated]);

  const handleSubmit = () => {
    const user = {
      email,
      password,
    };

    if (email === "" || password === "") {
      setError("Please fill in your credentials");
    } else {
      loginUser(user, context.dispatch);
    }
  };

  return (
    <View style={styles.container}>
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
          title="Login"
          onPress={() => handleSubmit()}
        />
      </View>
      <View style={[{ marginTop: 40 }, styles.buttonGroup]}>
        <Text style={styles.middleText}> Don't have an account yet?</Text>
        <Button
          title="Register"
          titleStyle={{
            color: "#e91e63",
            fontSize: 22.5,
          }}
          buttonStyle={{
            backgroundColor: "#f5f5f5",
          }}
          onPress={() => props.navigation.navigate("Register")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    marginTop: 30,
    width: "80%",
    alignItems: "center",
  },
  middleText: {
    fontSize: 18.35,
    marginBottom: 20,
    alignSelf: "center",
  },
  container: {
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
    fontSize: 18.35,
    // fontFamily: "Didot",
    height: 50,
    color: "white",
  },
});

export default Login;
