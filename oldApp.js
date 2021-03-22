import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import MapView from 'react-native-maps'
import * as Permissions from 'expo-permissions';

export default class Map extends React.Component {
  // state = {
  //   latitude: null,
  //   longitude: null
  // }

  // async componentDidMount() {

  // }
  render () {
    return (

        <MapView 
          style={styles.map}
          // initialRegion={{
          //     latitude,
          //     longitude,
          //     latitudeDelta: 0.0922,
          //     longitudeDelta: 0.0421
          // }}
        >
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
