import React, { useRef } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';


const CreatePassword = ({submitUser}) => {
    const inputRefs = useRef([]);
    const inputRefNew = useRef([]);
    let passcode = []
    let confirmPasscode = []

    

    const handleChangeEvent = (text, index) => {
        if(text.length !== 0) {
            passcode[index] = text
            return(
                inputRefs.current[index+1]?.focus()
            )}
        inputRefs.current[index-1]?.focus()
    }

    const handleChange = (text, index) => {
        if(text.length !== 0) {
            confirmPasscode[index] = text
            return(
                inputRefNew.current[index+1]?.focus()
            )}
        
        inputRefNew.current[index-1]?.focus()
    }

    const handleBackSpaceEvent = (event, index) => {
        const {nativeEvent} = event

        if(nativeEvent.key === "Backspace") {
            passcode.splice(index, 1)
            handleChangeEvent('', index)
        }
    }

    const handleBackSpace = (event, index) => {
        const {nativeEvent} = event

        if(nativeEvent.key === "Backspace") {
            confirmPasscode.splice(index, 1)
            handleChange('', index)
        }
    }

    const submitPassword = () => {
        let allowToSubmit = true;
        let password = ''
        if(passcode.length < 4){
            Alert.alert('Password length must be four', 'Please try again', [
              {text: 'OK', onPress: () => console.log('OK Pressed')}
                    ])
            return;
        }
        passcode.map((value, index) => {
            if(value !== confirmPasscode[index]) {
                allowToSubmit = false;
                Alert.alert('Passwords not matching!', 'Please try again', [
                  {text: 'OK', onPress: () => console.log('OK Pressed')}
                        ])
            }
            password = password + value
        })
        if(allowToSubmit){
            submitUser(password)
        }
    }

    return (
        <LinearGradient colors={["#b0e0e6", "white"]} style={styles.linearView}>
            <View>
                <Text style={styles.descTextHeader}>Set a Passcode</Text>
                <Text style={styles.descText}>Enter a 4-Digit Passcode<Text style={{ color: "red" }}>*</Text></Text>
                <Text style={{ color: "grey", marginLeft: 20, marginBottom: 10 }}>You will need to enter at every app launch.</Text>
                <View style={styles.textInputView}>
                    {[...new Array(4)].map((item, index) => {
                        return (
                        <TextInput 
                          ref = {ref => {
                            if(ref && !inputRefs.current.includes(ref)) {
                                inputRefs.current = [...inputRefs.current, ref]
                            }
                          }}
                          keyboardType={"number-pad"}  
                          style={styles.textInputStyle} 
                          textAlign={"center"} 
                          maxLength={1} 
                         // secureTextEntry={true}
                          onChangeText = {(text) => handleChangeEvent(text, index)}
                          onKeyPress = {(event) => handleBackSpaceEvent(event, index)}
                        />
                        )
                    })}
                </View>
                <Text style={styles.descText}>Confirm Passcode<Text style={{ color: "red" }}>*</Text></Text>
                <View style={styles.textInputView}>
                    {[...new Array(4)].map((item, index)=>{
                        return(
                        <TextInput 
                          ref = {ref => {
                            if(ref && !inputRefNew.current.includes(ref)) {
                                inputRefNew.current = [...inputRefNew.current, ref]
                            }
                          }}
                          keyboardType={"number-pad"}  
                          style={styles.textInputStyle} 
                          textAlign={"center"} 
                          maxLength={1} 
                          secureTextEntry={true}
                          onChangeText = {(text) => handleChange(text, index)}
                          onKeyChangeEvent = {(event) => handleBackSpace(event, index)}
                        />)
                    })}
                </View>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity 
                   onPress={()=>{
                    Alert.alert('Confirmation!', 'Please confirm to create the Account', [
                        {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          {text: 'OK', onPress: () => submitPassword()}
                    ])
                }}
                  style={styles.continueButton}>
                    <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  onPress={(()=>{props.setProceed(false)})}
                  style={styles.skipButton}
                >
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

export default CreatePassword