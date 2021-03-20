import React, { useState, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Content, Left, Body, ListItem, Thumbnail, Text } from 'native-base';

const SearchedAd = (props) => {
    const { adsFiltered } = props;
    return (
        <Content>
            {adsFiltered.length > 0 ? (
                adsFiltered.map((ad) => (
                    <ListItem
                    // onPress={navigation}
                    key={ad.id.$oid}
                    avatar
                    >
                        <Left>
                            <Thumbnail
                                source={{uri: ad.image ? 
                                    ad.image : 'https://images.unsplash.com/photo-1514030849962-49ac486d3d20?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1450&q=80 '
                                    }}
                            />
                        </Left>
                        <Body>
                            <Text>{ad.charityName}</Text>
                            <Text>note={ad.description}</Text>
                        </Body>
                    </ListItem>  
                ))
            ) : (
                <View style={StyleSheet.center}>
                    <Text style= {{ alignSelf: 'center'}}>
                        No adverts match the selected criteria
                    </Text>
                </View>
            )}
        </Content>
    );
};

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
}) 

export default SearchedAd