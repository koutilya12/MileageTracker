import React, { useRef,useEffect } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { getItem, setItem } from '../../utils/AsyncStorage';
import { useIsFocused} from '@react-navigation/native';


const SubmitPassword = ({ route, navigation }) => {
    const isFocused = useIsFocused();


    // useEffect(() => {
    //     if (isFocused) {
    //         getItem("loggedInUser").then(user => {
    //             if(user){
    //                 navigation.navigate('UserTitle', {user: route.params.item})

    //             }
    //         })
    //     }
    //   }, [isFocused]);

    const inputRefs = useRef([])
    let passcode = []

    const handleChange = (text, index) => {
        passcode[index] = text
        if (text.length !== 0) {
            return (
                inputRefs.current[index + 1]?.focus()
            )
        }
        inputRefs.current[index - 1]?.focus()
    }

    const handleBackSpaceEvent = (event, index) => {
        const { nativeEvent } = event

        if (nativeEvent.key === "Backspace") {
            passcode.splice(index, 1)
            handleChange('', index)
        }
    }

    const checkPasscode = async () => {
        let confirmPasscode = route.params.item.password
        let pass = passcode.join('')
        if (pass === confirmPasscode) {
            await setItem('loggedInUser',route.params.item)
            navigation.reset({
                index: 0,
                routes: [{ name: 'UserTitle',params:  {user: route.params.item} }],
              });
        } else {
            Alert.alert('Wrong Password!', 'Please enter correct Password to proceed', [
                { text: 'OK', onPress: () => console.log('Password Failed.') }
            ])
        }
    }

    return (
        <LinearGradient colors={["#b0e0e6", "white"]} style={styles.linearView}>
            <View>
                <Text style={styles.descTextHeader}>Welcome back {route.params.item.name},</Text>
                <Text style={styles.descText}>Enter your 4-Digit Passcode<Text style={{ color: "red" }}>*</Text></Text>
                <Text style={{ color: "grey", marginLeft: 20, marginBottom: 10 }}>Just checking it's really you!</Text>
                <View style={styles.textInputView}>
                    {[...new Array(4)].map((item, index) => {
                        return (
                            <TextInput key = {index}
                                ref={ref => {
                                    if (ref && !inputRefs.current.includes(ref)) {
                                        inputRefs.current = [...inputRefs.current, ref]
                                    }
                                }}
                                keyboardType={"number-pad"}
                                style={styles.textInputStyle}
                                textAlign={"center"}
                                maxLength={1}
                                secureTextEntry={true}
                                onChangeText={(text) => handleChange(text, index)}
                                onKeyPress={(event) => handleBackSpaceEvent(event, index)}
                            />
                        )
                    })}
                </View>
                <TouchableOpacity
                    onPress={() => { checkPasscode() }}
                    style={styles.continueButton}>
                    <Text style={styles.continueText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>

    )
}

const styles = StyleSheet.create({
    linearView: {
        flex: 1,
        paddingTop: 40
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
        flexDirection: "row",
        textAlign: "center"
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
})

export default SubmitPassword