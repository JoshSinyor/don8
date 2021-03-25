import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Button,
  Image,
} from "react-native";
//
var { width } = Dimensions.get("window");

const AdCard = (props) => {
  const { charity, image, title, location, description, contact } = props;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{
          uri: image
            ? image
            : "https://images.unsplash.com/photo-1514030849962-49ac486d3d20?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1450&q=80 ",
        }}
      />
      <View style={styles.card} />
      <Text style={styles.charityName}>{charity.charityName}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.description}>{`${description.substring(
        0,
        42
      )}...`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    marginLeft: 25,
    height: width / 1.7,
    padding: 10,
    borderRadius: 15,
    marginTop: 55,
    marginBottom: 5,
    alignItems: "center",
    elevation: 8,
    backgroundColor: "white",
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute",
    top: -45,
    opacity: 0.3,
  },
  card: {
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    width: width / 2 - 20 - 10,
    backgroundColor: "transparent",
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    textAlign: "center",
  },
  charityName: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  location: {
    marginTop: 10,
    fontSize: 19,
    textAlign: "center",
  },
  description: {
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
  },
});

export default AdCard;
