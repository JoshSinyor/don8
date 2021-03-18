import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Ad = (props) => {
  return(
    <View style={[styles.item, { margin: 8, padding: 8}]}>
      <Text> {props.item.title} </Text>
      <Text> {props.item.location} </Text>
      <Text> {props.item.description} </Text>
      <Text> {props.item.contact} </Text>
    </View>
  )
}

// Stylesheet for individual ad listings

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#69f',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'whitesmoke'
  }
})


export default Ad;
