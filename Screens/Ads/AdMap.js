import * as React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import MapView from "react-native-maps";
import * as Permissions from "expo-permissions";
import Polyline from "@mapbox/polyline";
import Constants from "expo-constants";
import { Button, Container, Header } from "native-base";

const locations = require("../../location.json");

var { width } = Dimensions.get("window");

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
    console.log("I'm printing this.state", this.state);
    // const {
    //   locations: [sampleLocation],
    // } = this.state;
    // this.setState(
    //   {
    //     desLatitude: sampleLocation.lat,
    //     desLongitude: sampleLocation.lng,
    //   },
    // this.mergeCoords
    // )
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
      const adLocation = this.props.route.params.item.location;
      console.log("location:", adLocation);
      console.log("Address", address);
      const res = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=London&key=AIzaSyChRiuf9F4XCTumcyNRtdVlhtf04fJaMTA`
      );
      const resJson = await res.json();
      console.log("Line 64 resJson", resJson.results[0].geometry.location.lng);
      console.log("Line 64 resJson", resJson.results[0].geometry.location.lat);

      const resJsonlat = resJson.results[0].geometry.location.lat;
      const resJsonlng = resJson.results[0].geometry.location.lng;

      console.log("line 69", this.state);

      this.setState(
        {
          desLatitude: resJsonlat,
          desLongitude: resJsonlng,
        },
        this.mergeCoords
      );
      console.log("line 78", this.state);
      return;
    } catch (error) {
      alert(error);
    }
  }

  async getDirections(startLoc, destinationLoc) {
    try {
      const resp = await fetch(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=AIzaSyChRiuf9F4XCTumcyNRtdVlhtf04fJaMTA`
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
        // console.log(coords);
      }
      return;
    } catch (error) {
      alert(error);
    }
  }
  render() {
    const { latitude, longitude, coords } = this.state;
    // console.log(latitude, longitude, coords && coords.length);
    if (latitude) {
      return (
        <MapView
          showsMyLocationButton={true}
          showsUserLocation={true}
          style={{ flex: 1 }}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <View>
            <Header>
              <Button
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
                title="Back"
                onPress={() => this.props.navigation.navigate("Ad Detail", {})}
              />
            </Header>
          </View>
          <MapView.Polyline
            strokeWidth={6}
            strokeColor="#FF0000"
            coordinates={coords || []}
          />
        </MapView>
      );
    }
    return <View style={{ flex: 1, justifyContent: "center" }}></View>;
  }
}
