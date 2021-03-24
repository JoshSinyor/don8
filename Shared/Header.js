import React from "react";
import { StyleSheet, Image, Text, SafeAreaView, View } from "react-native";

const Header = () => {
  return (
      <SafeAreaView style={styles.header}>
        <Text style={styles.title}>Don8</Text>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  header: {
     width: "100%",
     flexDirection: "row",
     alignContent: "center",
     justifyContent: "center",
     padding: 20,
   },
   title: {
     fontWeight: "bold",
     fontSize: 50,
     textAlign: "center",
   },
});

export default Header;
