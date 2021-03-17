import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Ad from './Ad'

const Home = () => {

    const [title, setTitle] = useState('Don8')
    return(
        <View style={{ width: '80%', marginBottom: 60 }}>
            <Text style={[styles.align, styles.font]}> {title} </Text>
            <Button title='Make a new request' onPress={() => setTitle('Don8!')}/>
            <Ad name={'First Ad'}/>
            <Ad name={'Second Ad'}/>
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
    }
})

export default Home;
