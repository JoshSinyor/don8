import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { Container, Header, Icon, Item, Input, Text} from 'native-base';

import AdList from './AdList';
import SearchedAd from '../SeacrhedAds';

const data = require('../../assets/sampleAds.json');

const AdContainer = () => {
  const [ads, setAds ] = useState([]);
  const [adsFiltered, setAdsFiltered] = useState([])
  const [focus, setFocus] = useState();

  useEffect(() => {
    setAds(data);
    setAdsFiltered(data);
    setFocus(false);

    return () => {
      setAds([])
      setAdsFiltered([])
      setFocus()
    }
  }, [])

const searchAd = (text) => {
  setAdsFiltered(
    ads.filter((i) => i.charityName.toLowerCase().includes(text.toLowerCase()))
  )
}

const openList = () => {
  setFocus(true);
}

const onBlur = () => {
  setFocus(false);
}

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search"/>
          <Input placeholder="Search"
            onFocus={openList}
            onChangeText={(text) => searchAd(text)}
          />
          {focus === true ? (
            <Icon onPress={onBlur} name='ios-close' />
          ) : null }
        </Item>
      </Header>
      {focus === true ? (
        <SearchedAd 
          adsFiltered={adsFiltered}
        />
      ) : (
        <View style={{ backgroundColor: 'gainsboro'}}>
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

      )}
      </Container>
  )
}

export default AdContainer
