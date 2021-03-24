import React from "react";
import { StyleSheet, Image, Text, SafeAreaView, View } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <img src={require('../assets/logo_hourglass_rounded.svg')}
          resizeMode="contain"
          style={{ height: 50 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "left",
    margin: 20,
  },
});

export default Header;
