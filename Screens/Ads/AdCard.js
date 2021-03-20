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
    const { charityName, title, location, description, contact } = props;
    console.log("Adcard", props)
    
    return (
        <View style={styles.container}>
            <Image style={styles.image} />
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
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: 'white'
    },
    image: {
        width: width / 2 - 20 - 10,
        height: width / 2 - 20 - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 90 - 90,
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
