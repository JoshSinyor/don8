import React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

const Form = () => {

  const [text, setText] = useState()

  return (
    <View style={{ width: '80%', marginBottom:60 }}>
      <Text style={[styles.align, styles.font]}>Form</Text>
      <TextInput style={[styles.input]} value={text} placeholder='title'/>
      <TextInput style={[styles.input]} value={text} placeholder='location'/>
      <TextInput style={[styles.input]} value={text} placeholder='description of request'/>
      <TextInput style={[styles.input]} value={text} placeholder='email or telephone number'/>
    </View>
  )
}

const styles = StyleSheet.create({
  align: {
    alignSelf: 'center'
  },
  font: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 8,
    padding: 8
  }
})

export default Form;