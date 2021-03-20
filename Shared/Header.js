import React from "react"
import { StyleSheet, Image, Text, SafeAreaView, View } from "react-native"

const Header = () => {
    return(
        <SafeAreaView style={styles.header}>
            <Text style={styles.title}>
                Don8
            </Text>
            {/* <Image
                source={require("../assets/icon.png")}
                resizeMode="contain"
                style={{ height: 50 }}
            /> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",
        padding: 20,
        marginTop:100
    },
    title: {
        fontWeight: 'bold',
        fontSize: 50,
        textAlign: 'center' 
    }
})

export default Header;