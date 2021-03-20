import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator} from 'react-native';

// screens
import AdContainer from './Screens/Ads/AdContainer'

export default function App() {
  return (
    <View style={styles.container}>
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
