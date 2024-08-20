import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native'

const SignUp = () => {
    return (
        <View style={styles.flexView}>
            <Text style={styles.descText}>Create an account to get started</Text>
            <TouchableOpacity
                style={styles.buttonStyle}
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <ImageBackground
                style={styles.bgImageStyle}
                source={require("../../assets/images/trafficdesign.png")}
            >
                <View style={styles.borderOuterView}>
                    <View style={styles.borderInnerView}>
                        <View style={styles.footerView}>
                            <Text style={styles.descText}>Track your miles towards a prosperous financial journey!</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    flexView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    logoView: {
        justifyContent: "center",
        alignItems: 'center',
    },
    descText: {
        fontSize: 20,
        color: "#041F3F",
        // color: "#4682b4",
        textAlign: "center",
        margin: 20
    },
    buttonStyle: {
        backgroundColor: "#3A416F",
        borderRadius: 8,
        paddingLeft: 80,
        paddingRight: 80,
        marginTop: 20
    },
    buttonText: {
        color: "white",
        fontSize: 15,
        margin: 10
    },
    arrowImage: {
        height: 20,
        width: 20,
        margin: 5
    },
    bgImageStyle: {
        flex: 1,
        height: "70%",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        margin: 10
    },
    footerView: {
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
        backgroundColor: "#F5F7FA",
        // borderWidth: 2,
        borderColor: "#7FA2DD",
        paddingTop: 20,
    },
    borderOuterView: {
        // borderWidth: 2,
        borderColor: "#7FA2DD",
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
        marginBottom: 10
    },
    borderInnerView: {
        borderWidth: 5,
        borderColor: "white",
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
    }
})

export default SignUp
