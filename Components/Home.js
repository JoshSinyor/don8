import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';

import Ad from './Ad'

// Import sampleAds
let samples = require('../assets/sampleAds.json');
// End import

const Home = () => {

    const [title, setTitle] = useState('Don8')
    const [text, setText] = useState()
    const [list, setList] = useState(samples)

    const addItem = () => {
      const updatedList = list;
      updatedList.push(text);
      setList(updatedList);
      setText('')
    }

    return(
        <View style={{ width: '80%', marginBottom: 60 }}>
          <Text style={[styles.align, styles.font]}> {title} </Text>
          <View>
            {/* <TextInput
              style={[styles.input]}
              value={text}
              onChangeText={(text) => setText(text)}
            /> */}
            <Button title='Make a new request' onPress={addItem}/>
          </View>
          <ScrollView>
            {list.map((x, index) =>
              <Ad key={index} item={x} index={index}/>
            )}
          </ScrollView>
        </View>
    )
}

// Stylesheet for title and input box

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

export default Home;
