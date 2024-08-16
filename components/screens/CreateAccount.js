import React, { useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Pressable,
    TouchableOpacity
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import CheckBox from './CheckBox'

const Mandatory = () => {
    return (
        <Text style={styles.mandatoryAsterisk}>*</Text>
    )
}


const CreateAccount = () => {
    const [checked, setChecked] = useState(false)

    const onPressFunc = () => {
        setChecked(checked ? false : true)
    }

    return (
        <LinearGradient colors={["#b0e0e6", "white"]} style={styles.body} >
            <Text style={styles.headText}>Create Account</Text>
            <View style={styles.innerBody}>
                <View style={styles.innerView}>
                    <Text style={styles.subheadText}>Name<Mandatory /></Text>
                    <TextInput
                        style={styles.textInputContainer}
                    />
                </View>
                <View style={styles.innerView}>
                    <Text style={styles.subheadText}>Nickname</Text>
                    <TextInput
                        style={styles.textInputContainer}
                    />
                </View>
                <View style={styles.innerView}>
                    <Text style={styles.subheadText}>Email Address<Mandatory /></Text>
                    <TextInput
                        style={styles.textInputContainer}
                    />
                </View>
            </View>
            <View style={styles.pressableView}>
                <Pressable
                    onPress={onPressFunc}
                    style={checked ? styles.chekBoxSelected : styles.checkBox}
                >
                    {checked ? <Icon name="check" size={22} color="white" /> : null}
                </Pressable>
                <Text style={styles.descText}>Tick this box to confirm you are atleast 18 years old and agree to our terms and conditions.</Text>
            </View>
            <View style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10
            }}>
                <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>
            </View>
            {/* <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.continueText}>Continue</Text>
            </TouchableOpacity> */}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    headText: {
        fontSize: 20,
        textAlign: "left",
        paddingTop: 50,
        marginLeft: 30,
    },
    innerBody: {
        alignItems: "left",
        marginLeft: 10,
        // margin: 40
        // position: "absolute",
        // top: 0,
        // bottom: 0,
        // right: 0,
        // left: 
    },
    innerView: {
        margin: 20
    },
    subheadText: {
        fontSize: 16,
        paddingBottom: 10,
    },
    textInputContainer: {
        height: 50,
        width: "95%",
        borderRadius: 5,
        backgroundColor: "white"
    },
    mandatoryAsterisk: {
        color: "red"
    },
    checkBox: {
        backgroundColor: "white",
        height: 25,
        width: 25,
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#252f40",
        borderRadius: 5,
        margin: 10,
        paddingTop: 5

    },
    chekBoxSelected: {
        backgroundColor: "red",
        height: 25,
        width: 25,
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 5,
        margin: 10
    },
    pressableView: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "white",
        flexDirection: "row",
        height: 150,
        borderTopWidth: 1,
        borderColor: "#B5B4B4",
        paddingTop: 20
    },
    descText: {
        marginTop: 10,
        fontSize: 14,
        color: "#252f40",
    },
    continueButton: {
        backgroundColor: "#B5B4B4",
        padding: 10,
        paddingLeft: 100,
        paddingRight: 100,
        borderRadius: 5,
        marginBottom: 10
    },
    continueText: {
        color: "white",
        fontSize: 20
    }
})

export default CreateAccount