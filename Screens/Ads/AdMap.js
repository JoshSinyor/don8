import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView from "react-native-maps";
import * as Permissions from "expo-permissions";
import Polyline from "@mapbox/polyline";
import { Header, Footer } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import Constants from "expo-constants";

let googleApi = Constants.manifest.extra.googleApi;

export default class App extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    desLatitude: null,
    desLongitude: null,
  };

  async componentDidMount() {
    const { status } = await Permissions.getAsync(Permissions.LOCATION);
    if (status !== "granted") {
      const response = await Permissions.askAsync(Permissions.LOCATION);
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        this.setState({ latitude, longitude }, this.mergeCoords),
      (error) => console.log("Error:", error)
    );
    this.getLatLongPoints(this.props.route.params.item.location);
  }

  mergeCoords = () => {
    const { latitude, longitude, desLatitude, desLongitude } = this.state;
    const hasStartAndEnd = latitude !== null && desLatitude !== null;
    if (hasStartAndEnd) {
      const concatStart = `${latitude},${longitude}`;
      const concatEnd = `${desLatitude},${desLongitude}`;
      this.getDirections(concatStart, concatEnd);
    }
  };

  async getLatLongPoints(address) {
    try {
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleApi}`
      );
      const resJson = await res.json();
      const resJsonlat = resJson.results[0].geometry.location.lat;
      const resJsonlng = resJson.results[0].geometry.location.lng;

      this.setState(
        {
          desLatitude: resJsonlat,
          desLongitude: resJsonlng,
        },
        this.mergeCoords
      );
      return;
    } catch (error) {
      alert(error);
    }
  }

  async getDirections(startLoc, destinationLoc) {
    try {
      const resp = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${googleApi}`
      );
      const respJson = await resp.json();
      if (respJson.routes.length > 0) {
        const points = Polyline.decode(
          respJson.routes[0].overview_polyline.points
        );
        const coords = points.map((point, index) => {
          return {
            latitude: point[0],
            longitude: point[1],
          };
        });
        this.setState({ coords });
      }
      return;
    } catch (error) {
      alert(error);
    }
  }
  render() {
    const { latitude, longitude, coords, desLatitude, desLongitude } = this.state;
    if (latitude) {
      return (
        <View style={{width: "100%", height: "100%"}}>
          <Icon.Button
            style={{ justifyContent: "center" }}
            backgroundColor="white"
            color="#e91e63"
            name="arrow-left"
            size={40}
            onPress={() => this.props.navigation.navigate("Ad Detail", {})}
          >
            <Text
              style={{ color: "#e91e63", fontWeight: "bold", fontSize: 20 }}
            >
              Back to advert
            </Text>
          </Icon.Button>
          <MapView
            showsMyLocationButton={true}
            showsUserLocation={true}
            style={{ flex: 1 }}
            initialRegion={{
              latitude: (0.5 * latitude + 0.5 * desLatitude),
              longitude: (0.5 * longitude + 0.5 * desLongitude),
              latitudeDelta: Math.abs(desLatitude - latitude) * 1.5,
              longitudeDelta: Math.abs(desLongitude - longitude) * 1.5,
            }}
          >
            <MapView.Polyline
              strokeWidth={2}
              strokeColor="#FF0000"
              coordinates={coords || []}
            />
          </MapView>
        </View>

      );
    }
    return <View style={{ flex: 1, justifyContent: "center" }}></View>;
  }
}
