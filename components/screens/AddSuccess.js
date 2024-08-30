import React, {useEffect} from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    ImageBackground
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const AddSuccess = ({navigation, route}) => {

    useEffect( () => {
         setTimeout(() => {
            navigation.navigate("UserTitle")
        }, 5000)
        }, [])

    return (
        <LinearGradient colors={["#b0e0e6", "white"]} style={styles.body} >
            <View style={styles.bgImageView}>
                <ImageBackground
                    style={styles.bgImageStyle}
                    source={require('../../assets/images/ribbons.png')}
                >
                    <Image
                        style={styles.bikeImage}
                        source={{
                            uri: route.params.imgSrc
                        }}
                    />
                </ImageBackground>
            </View>
            <Text style={styles.nameStyle}>{route.params.vehicleName}</Text>
            <Text style={styles.nameStyleTwo}>{route.params.message}</Text>
            <Image
                style={styles.downImage}
                source={require('../../assets/images/trafficdesign.png')}
            />
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center"
    },
    bgImageView: {
        flex: 1,
        paddingTop: 40
    },
    bgImageStyle: {
        height: 250,
        width: 250,
        alignItems: "center",
        justifyContent: "center",
    },
    bikeImage: {
        height: 150,
        width: 150,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "white"
    },
    downImage: {
        height: "40%",
        width: "100%"
    },
    nameStyle: {
        fontSize: 18,
        textAlign: "center",
    },
    nameStyleTwo: {
        fontSize: 30,
        textAlign: "center",
        margin: 30
    }
})

export default AddSuccess