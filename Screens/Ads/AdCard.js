import React from 'react';
import { StyleSheet,
    View, 
    Dimensions,
    Text,
    Button,
    Image
} from 'react-native';

const data = require('../../assets/sampleAds.json');


var { width } = Dimensions.get("window");

const AdCard = (props) => {
    const { charityName, image, title, location, description, contact } = props;
    
    return (
        <View style={styles.container}>
            <Image 
            style={styles.image} 
            resizeMode="contain"
            source={{uri: image ? 
                image : 'https://images.unsplash.com/photo-1514030849962-49ac486d3d20?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1450&q=80 '}}
            />
            <View style={styles.card}/>
            <View>
                <Button title={`${charityName}`}style={styles.charityName}/>
            </View>
            <Text style={styles.title}> {title} </Text>
            <Text styles={styles.location}> {location} </Text>
            <Text styles={styles.description}> {description} </Text>
            <Text styles={styles.contact}> {contact} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width / 2 - 20,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width /2  - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45,
        opacity: 0.3
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        width: width / 2 - 20 - 10,
        backgroundColor: 'transparent'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
    },
    charityName: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    location: {
        marginTop: 10,
        fontSize: 14,
        textAlign: 'center'
    },
    description: {
        marginTop: 10,
        fontSize: 14,
        textAlign: 'center'
    },
    contact: {
        marginTop: 10,
        fontSize: 14,
        textAlign: 'center'
    }
});

export default AdCard;
