import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

const Form = () => {

  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [contact, setContact] = useState("")

  const handleSubmit = () => {
    console.log("Submitting")
    const ad = {
      title,
      location,
      description,
      contact
    }
    axios
      .post('http://localhost:3000/api/v1/ads', ad)
      .then((response) => {
        if (response.status === 201) {
          console.log(response.data)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <View style={{ width: '80%', marginBottom:60 }}>
      <Text style={[styles.align, styles.font]}>Form</Text>
      <TextInput style={[styles.input]} value={title} placeholder='Title' onChangeText={(title) => setTitle(title)}/>
      <TextInput style={[styles.input]} value={location} placeholder='Location' onChangeText={(location) => setLocation(location)}/>
      <TextInput style={[styles.input]} value={description} placeholder='Description of request' onChangeText={(description) => setDescription(description)}/>
      <TextInput style={[styles.input]} value={contact} placeholder='Email or telephone number' onChangeText={(contact) => setContact(contact)}/>
      <Button title="Submit" onPress={() => handleSubmit()}/>
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
