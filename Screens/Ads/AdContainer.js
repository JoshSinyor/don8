import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";
import axios from 'axios'
import { Container, Header, Icon, Item, Input, Text } from "native-base";

import AdList from "./AdList";
import SearchedAd from "./SearchedAds";
import Banner from "../../Shared/Banner";

var { height } = Dimensions.get("window");

const AdContainer = (props) => {
  const [ads, setAds] = useState([]);
  const [adsFiltered, setAdsFiltered] = useState([]);
  const [focus, setFocus] = useState();

  useEffect(() => {
    async function updateList() {
      axios
        .get('http://localhost:3000/api/v1/ads')
        .then((res) => {
          setAds(res.data);
          setAdsFiltered(res.data)
          console.log(res.data);
        })
        .catch((error) => {
          console.log(`Error message: ${error}`);
        })
      }

    updateList()
    // setAds(data);
    // setAdsFiltered(data);
    // setFocus(false);

    return () => {
      setAds([]);
      setAdsFiltered([]);
      setFocus();
    };
  }, []);

  const searchAd = (text) => {
    setAdsFiltered(
      ads.filter((i) =>
        i.charityName.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  const openList = () => {
    setFocus(true);
  };

  const onBlur = () => {
    setFocus(false);
  };

  return (
    <Container>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
            onFocus={openList}
            onChangeText={(text) => searchAd(text)}
          />
          {focus === true ? <Icon onPress={onBlur} name="ios-close" /> : null}
        </Item>
      </Header>
      {focus === true ? (
        <SearchedAd navigation={props.navigation} adsFiltered={adsFiltered} />
      ) : (
        <ScrollView>
          <View>
            <Banner />
            <View styles={styles.container}>
              <View styles={styles.ListContainer}>
                <FlatList
                  key={2}
                  numColumns={2}
                  data={ads}
                  renderItem={({ item }) => (
                    <AdList
                      navigation={props.navigation}
                      key={item.id}
                      item={item}
                    />
                  )}
                  keyExtractor={(item) => item.title}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  listContainer: {
    height: height,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AdContainer;
