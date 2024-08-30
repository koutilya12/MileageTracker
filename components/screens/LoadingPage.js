import React, { useEffect } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    ImageBackground
} from 'react-native'
// import LoaderKit from 'react-native-loader-kit'
import AnimatedLoader from "react-native-animated-loader";
import { ActivityIndicator } from 'react-native'

const LoadingPage = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Landing")
        }, 3000)
    }, [])

    return (
        <View style={styles.body}>
            {/* <AnimatedLoader
                visible={true}
                overlayColor="rgba(255,255,255,0.75)"
                animationStyle={styles.lottie}
                speed={1} />    */}

            <View>
                <ActivityIndicator size={40} color={'white'} style={{ position: "absolute", right: 0, left: 0, bottom: 200 }} />

                <Image
                    style={styles.logoStyle}
                    source={require('../../assets/images/mlogo.png')}
                />
            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#FA214D",
        alignItems: "center",
        justifyContent: "center",
    },
    logoStyle: {
        height: 180,
        width: 180,
        borderRadius: 100,
    },
    lottie: {
        width: 10,
        height: 10
    },
    loaderStyle: {
        // flex: 1,
        // justifyContent: "flex-start"

    }
})

export default LoadingPage
