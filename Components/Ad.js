import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const Ad = () => {

    const [title, setTitle] = useState('Don8')
    return(
        <View>
            <Text> {title} </Text>
            <Button title='Make a new request' onPress={() => setTitle('Don8!')}/>
        </View>
    )
}

export default Ad;