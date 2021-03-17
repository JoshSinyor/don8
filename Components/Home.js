import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Ad from './Ad'

const Home = () => {

    const [title, setTitle] = useState('Don8')
    return(
        <View>
            <Text> {title} </Text>
            <Ad name={'First Ad'}/>
            <Ad name={'Second Ad'}/>
            <Button title='Make a new request' onPress={() => setTitle('Don8!')}/>
        </View>
    )
}

export default Home;
