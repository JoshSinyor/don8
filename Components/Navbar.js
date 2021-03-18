import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Navbar = () => {
  return (
    <Text>This is a Navbar</Text>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#69f',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'whitesmoke'
  }
})


export default Navbar;