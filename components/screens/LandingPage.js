import React, { useEffect } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native'
import SignUp from "./SignUp"
import UserProfile from "./UserProfile"
import { LinearGradient } from "expo-linear-gradient"

const LandingPage = ({navigation}) => {

    fetchUserData = async () => {
            const userDetails = await AsyncStorage.getItem('username');
            userDetails.userId ? renderUserData() : null
    }

    useEffect(async () => {
        const loginDetails = await AsyncStorage.getItem('login');
        loginDetails.userId ? "navigate to password screen" : fetchUserData()
    })

    return (
        <View style={styles.mainView}>
            <LinearGradient  colors={["#b0e0e6", "white"]} style={styles.linearView}>
                <View style={styles.logoView}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../../assets/images/mlogo.png')}
                    />
                    <Text style={styles.titleText}>Mileage Tracker</Text>
                </View>
                {0 ? <SignUp /> : <UserProfile navigation={navigation} />}
            </LinearGradient>
        </View >
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#b0e0e6",
        // backgroundColor: "#afeeee",
        borderWidth: 3,
        borderColor: "#4A89D1"
    },
    logoView: {
        alignItems: 'center',
    },
    imageStyle: {
        height: 130,
        width: 130,
        borderRadius: 80,
        marginTop: 25
    },
    titleText: {
        color: '#FA214D',
        fontSize: 22,
        margin: 10
    },
    linearView: {
        flex:1
    }
})

export default LandingPage
