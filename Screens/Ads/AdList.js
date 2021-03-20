import React from 'react';
import { TouchableOpacity, View, Dimensions } from 'react-native'

let { width } = Dimensions.get("window");

const  AdList = (props) => {

    return(
        <TouchableOpacity style={{ width: '50%' }}>
            <View style={{ width: width / 2, 
            backgroundColor: 'gainsboro'}}
            >

            </View>
        </TouchableOpacity>
    )
}

export default AdList;