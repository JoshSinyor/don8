import * as React from "react";
import MapView from "react-native-maps";
import * as Permissions from 'expo-permissions';
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default class App extends React.Component {
  state = {
    latitude: null,
    longitude: null,
  };
  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);

    if (status !== "granted") {
      const response = await Permissions.askAsync(Permissions.LOCATION);
    }
    navigator.geolocation.getCurrentPosition (
      ({ coords: { latitude, longitude }}) => this.setState ({ latitude, longitude }, () => console.log('State:' , this.state)),
      (error) => console.log('Error', error)
    )
  }
  render() {
    const { latitude, longitude } = this.state;
    
    if (latitude) {
      return (
        <View style={styles.container}>
          <MapView
            showsUserLocation
            style={styles.map}
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
    );
  }
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>We need your permission!</Text>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
