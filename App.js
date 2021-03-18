import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home';
import NavigationBar from './Components/Navbar';
// import AdContainer from './Screens/Ads/AdContainer'
import Form from './Components/Form';
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <>
     <View style={styles.navbar}>
        <NavigationBar />
      </View>
      <View style={styles.container}>
        < Home />
      </View>
      <View>
        < Form />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
