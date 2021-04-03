import React, { useState, useEffect } from "react";
import {
  Linking,
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
} from "react-native";
import { Left, Right, Container, H1 } from "native-base";
import Constants from 'expo-constants'

const SingleAd = (props) => {
  const [item, setAd] = useState(props.route.params.item);
  return (
    <Container style={styles.container}>
      <ScrollView style={{ marginBottom: 80, padding: 5 }}>
        <View>
          <Image
            source={{
              uri: item.image
                ? item.image.replace("localhost", Constants.manifest.debuggerHost.split(':').shift())
                : "https://images.unsplash.com/photo-1514030849962-49ac486d3d20?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1450&q=80 ",
            }}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.contentContainer}>
          <H1 style={styles.contentHeader}>
            {capitalize(item.charity.charityName)}
          </H1>
          <Text style={styles.textSubHeader}>How can you help:</Text>
          <Text style={styles.contentDescription}>{item.description}</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Ad Map", { item: item })}
          >
            <Text style={styles.textSubHeader}>Where to find us:</Text>
            <Text style={styles.contentLocation}>{item.location}</Text>
          </TouchableOpacity>
          <Text style={styles.textSubHeader}>How to contact us:</Text>

          <Text style={styles.contentContact}>{item.contact}</Text>
          <Text style={styles.textSubHeader}>Our website:</Text>

          <Text
            style={styles.contentContact}
            onPress={() => Linking.openURL(`${item.website}`)}
          >
            {item.website}
          </Text>
        </View>
      </ScrollView>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    position: "relative",
    height: "100%",
  },
  image: {
    marginTop: 20,
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  contentContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  contentHeader: {
    fontWeight: "bold",
    marginBottom: 25,
    fontSize: 32,
  },
  contentDescription: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 25,
  },
  contentLocation: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#e91e63",
  },
  contentContact: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#e91e63",
  },
  textSubHeader: {
    fontSize: 18.35,
    marginBottom: 5,
    textAlign: "center",
  },
});
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default SingleAd;
