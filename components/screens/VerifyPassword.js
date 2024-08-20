import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const VerifyPassword = () => {
    return (
        <LinearGradient colors={["#b0e0e6", "white"]} style={styles.linearView}>
            <View>
                <Text style={styles.descTextHeader}>Set a Passcode</Text>
                <Text style={styles.descText}>Enter a 4-Digit Passcode<Text style={{ color: "red" }}>*</Text></Text>
                <Text style={{ color: "grey", marginLeft: 20, marginBottom: 10 }}>You will need to enter at every app launch.</Text>
                <View style={styles.textInputView} >
                    <TextInput style={styles.textInputStyle} />
                    <TextInput style={styles.textInputStyle} />
                    <TextInput style={styles.textInputStyle} />
                    <TextInput style={styles.textInputStyle} />
                </View>
                <Text style={styles.descText}>Confirm Passcode<Text style={{ color: "red" }}>*</Text></Text>
                <View style={styles.textInputView} >
                    <TextInput style={styles.textInputStyle} />
                    <TextInput style={styles.textInputStyle} />
                    <TextInput style={styles.textInputStyle} />
                    <TextInput style={styles.textInputStyle} />
                </View>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.skipButton}>
                    <Text style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearView: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "space-around"
    },
    descTextHeader: {
        fontSize: 22,
        color: "#252f40",
        margin: 20,
        paddingsTop: 20
    },
    descText: {
        fontSize: 22,
        color: "#252f40",
        marginLeft: 20,
        marginBottom: 10
    },
    textInputView: {
        paddingBottom: 40,
        justifyContent: "space-evenly",
        flexDirection: "row"
    },
    textInputStyle: {
        height: 45,
        width: 60,
        backgroundColor: "white",
        borderRadius: 4,
    },
    buttonView: {
        alignItems: "center",
        justifyContent: "flex-end"
    },
    continueButton: {
        height: 40,
        width: "75%",
        backgroundColor: "#252f40",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 40,
    },
    continueText: {
        fontSize: 20,
        color: "white",
    },
    skipButton: {
        height: 40,
        width: "30%",
        margin: 20,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "35%",
    },
    skipText: {
        fontSize: 20,
        textAlign: "center",
        color: "#252f40",
    },
    buttonView: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
    }
})

export default VerifyPassword