import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'

const InstaClone = () => {
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1,
                alignItems: "center",
            }}>
                <Text style={styles.headerText}>Language: English (United States)</Text>
                <Text style={styles.titleText}>Instagram</Text>
                <TextInput
                    style={styles.inputStyleOne}
                />
                <TextInput
                    style={styles.inputStyleOne}
                />
                <TouchableOpacity
                    style={styles.loginStyle}
                >
                    <Text style={styles.logInText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Text style={{
                        fontSize: 12,
                        color: "white"
                    }}>Forgot your login details? Get help signing in</Text>
                </TouchableOpacity>
                <Text style={{ color: "white" }}>OR</Text>
                <TouchableOpacity style={{ 
                    marginTop: 5,
                    flexDirection: "row" 
                    }}>
                    <Text style={styles.fLogo}>f</Text>
                    <Text style={{ color: "white", marginLeft: 5 }}>Log in with Facebook</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flex: 1,
                // justifyContent: "flex-end"
            }}>
                <View style={styles.signUpView}>
                    <TouchableOpacity>
                        <Text style={styles.signUpText}>Don't have an account? Sign Up.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#BF448E",
    },
    headerText: {
        fontSize: 15,
        color: "white",
        padding: 20,
    },
    titleText: {
        fontSize: 30,
        color: "white",
        fontFamily: "serif"
    },
    inputStyleOne: {
        backgroundColor: "#DF96C2",
        height: 40,
        width: 300,
        borderRadius: 5,
        margin: 10
    },
    loginText: {
        color: "white",
        backgroundColor: "#DF96C2",
        height: 40,
        width: 300,
    },
    loginStyle: {
        height: 40,
        width: 300,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        margin: 10,
        borderWidth: 1,
        borderColor: "pink"
    },
    logInText: {
        color: "white"
    },
    fLogo:
    {
        height: 20,
        width: 22,
        fontWeight: "bold",
        fontSize: 20,
        color: "grey",
        backgroundColor: "white",
        textAlign: "right",
        borderRadius: 2,
        paddingRight: 5
    },
    signUpView: {
        // flex:1,
        padding: 12,
        borderTopWidth: 2,
        borderColor: "pink",
        position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0
    },
    signUpText: {
        fontSize: 12,
        color: "white",
        textAlign: "center",
        justifyContent: "flex-end"
    }

})

export default InstaClone