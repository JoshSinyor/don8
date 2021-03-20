import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, LogBox, FlatList, ActivityIndicator} from 'react-native';


// screens
import Header from './Shared/Header'
import AdContainer from './Screens/Ads/AdContainer'

LogBox.ignoreAllLogs(true);


export default function App() {
  return (
    <View style={styles.container}>
        <Header />
        < AdContainer />
    </View>
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
