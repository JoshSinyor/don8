import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator, Text, FlatList } from 'react-native'

import AdList from './AdList';
const data = require('../../assets/sampleAds.json');

const AdContainer = () => {
  const [ads, setAds ] = useState([]);

  useEffect(() => {
    console.log(data)
    setAds(data);

    return () => {
      setAds([]);
    }
  }, [])

  return (
      <View style={{ marginTop: 100, backgroundColor: 'gainsboro'}}>
        <FlatList 
          key={2}
          numColumns={2}
          data={ads}
          renderItem={({item}) => <AdList 
          key={item.id}
          item={item}
            />}
          keyExtractor={item => item.title}
          />
      </View>
  )
}

export default AdContainer
