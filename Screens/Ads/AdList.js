import React from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native'

import AdCard from './AdCard'
let { width } = Dimensions.get("window");

const  AdList = (props) => {
    const { item } = props;

    return(
        <TouchableOpacity style={{ width: '50%' }}>
            <View style={{ width: width / 2, 
            backgroundColor: 'gainsboro'}}
            >
            <AdCard {...item} />   
            </View>
        </TouchableOpacity>
    )
}

export default AdList;