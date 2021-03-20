import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { Container, Header, Icon, Item, Input, Text} from 'native-base';

import AdList from './AdList';
const data = require('../../assets/sampleAds.json');

const AdContainer = () => {
  const [ads, setAds ] = useState([]);
  const [adFiltered, setAdsFiltered] = useState([])

  useEffect(() => {
    setAds(data);
    setAdsFiltered(data);
    
    return () => {
      setAds([]);
    }
  }, [])

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search"/>
          <Input placeholder="Search"
            //onFocus={}
            // onChangeText={(text) => }
          />
        </Item>
      </Header>
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
      </Container>
  )
}

export default AdContainer
