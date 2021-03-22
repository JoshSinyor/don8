import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import FormContainer from "../../Shared/Form/FormContainer";
import Input from "../../Shared/Form/Input";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <View>
      <Text>Login Screen</Text>
    </View>
  );
};

export default Login;
