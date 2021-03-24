import React, { useEffect, useState, useContext } from "react";
import { View, TextInput, Text, StyleSheet, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import axios from 'axios'
import Toast from "react-native-toast-message"
import AsyncStorage from "@react-native-community/async-storage";
import AuthGlobal from "../../Context/store/AuthGlobal";


import Error from "../../Shared/Error";
import baseURL from '../../assets/common/baseUrl'


const NewAd = (props) => {
  const context = useContext(AuthGlobal);

  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [contact, setContact] = useState("")
  const [charity, setCharity] = useState(context.stateUser.user.userId)
  // const [image, setImage] = useState()
  const [website, setWebsite] = useState("")
  const [userProfile, setUserProfile] = useState();

  const [error, setError] = useState();

  useEffect(() => {
    async function updateUser() {
      if (
        context.stateUser.isAuthenticated === false ||
        context.stateUser.isAuthenticated === null
      ) {
        props.navigation.navigate("Login");
      }

      AsyncStorage.getItem("jwt")
        .then((res) => {
          axios
            .get(`${baseURL}users/${context.stateUser.user.userId}`, {
              headers: { Authorization: `Bearer ${res}` },
            })
            .then((user) => setUserProfile(user.data));
        })
        .catch((error) => console.log(error));
      }
    updateUser();

  console.log("Trying to load userProfile")
  console.log(userProfile)

  }, [])

    console.log("Loading useEffect Line 54")

const handleSubmit = () => {
  const ad = {
    title,
    location,
    description,
    contact,
    charity,
    website
  };

  if (![title, location, description, contact, charity, website].every((field) => {return field !== ""})) {
    setError("Please fill in all details");
  } else {
    axios
      .post(`${baseURL}ads`, ad)
      .then((response) => {
        if (response.status === 201) {
          props.navigation.navigate("Home")
          Toast.show({
            topOffset: 60,
            type: "success",
            text1: "Advert created!",
            text2: "",
          });
          console.log("success");
        }
      })
      .catch(error => {
        if(!error.response){
          console.log("Server not running")
        }
        else if (error.response.status === 401) {
          setError("You aren't authorized to make this advert")
        } else { setError("Unknown error") }
      })
  }
};

  return (
    console.log("Loading the return"),
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Title..."
          placeholderTextColor="white"
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          // defaultValue={userProfile ? userProfile.address : "Location" }
          placeholder="Location..."
          placeholderTextColor="white"
          onChangeText={(text) => setLocation(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Description..."
          placeholderTextColor="white"
          onChangeText={(text) => setDescription( text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          // defaultValue={userProfile ? userProfile.email : "Contact" }
          placeholder="Contact..."
          placeholderTextColor="white"
          onChangeText={(text) => setContact(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Website..."
          placeholderTextColor="white"
          onChangeText={(text) => setWebsite(text)}
        />
      </View>
      <View style={styles.buttonGroup}>
        {error ? <Error message={error} /> : null}
        <Button title="Submit" onPress={() => handleSubmit()} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  buttonGroup: {
    width: "80%",
    alignItems: "center",
  },
  middleText: {
    marginBottom: 20,
    alignSelf: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "gainsboro",
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
    height: 50,
    color: "white",
  },
});

export default NewAd;
