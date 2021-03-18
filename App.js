import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home';
// import AdContainer from './Screens/Ads/AdContainer'
import Navbar from './Components/Navbar'

export default function App() {
  return (
    <>
     <View style={styles.navbar}>
        <Navbar />
      </View>
      <View style={styles.container}>
        < Home />
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
  navbar: {
    backgroundColor: 'yellowgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
