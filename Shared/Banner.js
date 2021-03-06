import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  Dimensions,
  View,
  ScrollView,
} from "react-native";
import Swiper from "react-native-swiper/src";

let { width } = Dimensions.get("window");
let { height } = Dimensions.get("window");

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Oxfam_logo_vertical.svg/1280px-Oxfam_logo_vertical.svg.png",
      "https://i2.wp.com/bathhalf.co.uk/wp-content/uploads/2019/10/Save-the-Children-logo-e1597850754346.png?resize=290%2C290&ssl=1",
      "https://www.cheshirefire.gov.uk/Assets/1/2-132d7c2dx1298x828.jpg?t=559",
      "https://s3-eu-west-1.amazonaws.com/nusdigital/image/images/80903/original/Copy_of_RAG_logo.png",
    ]);

    return () => {
      setBannerData();
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper showButtons={false} autoplay={true} autoplayTimeout={2}>
            {bannerData.map((item) => {
              return (
                <Image
                  key={item}
                  style={styles.imageBanner}
                  resizeMode="contain"
                  source={{ uri: item }}
                />
              );
            })}
          </Swiper>
          <View style={{ height: 20 }}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  swiper: {
    height: height / 4,
    width: width,
    alignItems: "center",
    marginTop: 10,
  },
  imageBanner: {
    height: width / 3,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default Banner;
