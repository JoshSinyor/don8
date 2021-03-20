import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator, Text, FlatList } from 'react-native'

import AdList from './AdList';
const data = require('../../assets/sampleAds.json');

const AdContainer = () => {
  const [ads, setAds ] = useState([]);

  useEffect(() => {
    setAds(data);

    return () => {
      setAds([])
    }
  }, [])

  return (
    <View>
      <Text>This is AdContainer.js.</Text>
      <View style={{ marginTop: 300}}>
        <FlatList
          horizontal
          data={ads}
          renderItem={({item}) => <AdList 
          key={item.id}
          item={item}
            />}
          keyExtractor={item => item.title}
          />
      </View>
    </View>
  )
}

export default AdContainer
