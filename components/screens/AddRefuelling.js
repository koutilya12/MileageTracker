import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Button,
    KeyboardAvoidingView
} from 'react-native'
import { Calendar } from 'react-native-calendars';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {getItem,setItem} from '../../utils/AsyncStorage';
import { create } from 'zustand';


const defaultData = {
    fuel: "",
    total: "",
    refuellingDate: ""
}

const refuellingStore = create((set) => ({
    refuelData: defaultData,
    setRefuelData: (newRefuelData) => set((state) => ({ refuelData: newRefuelData}))
}))


const AddRefuelling = ({navigation, route}) => {
    const refuelData  = refuellingStore((state) => state.refuelData)
    const setRefuelData = refuellingStore((state) => state.setRefuelData)

    const saveRefuellingData = () => {
        console.log('rrrr1', route)
        let key2 = "refuellingList_" + route.params.vehicle.id + route.params.userId
        getItem(key2).then(refuelList =>{
            if(refuelList) {
                refuelList.push(refuelData)
                setItem(key2, refuelList)
            } else {
                setItem(key2, [refuelData])
            }
        })
        navigation.navigate("UserTitle")
    }

    const onChangeValue = (text) => {
        let refuelData1 = {...refuelData}
        refuelData1["fuel"] = text
        setRefuelData(refuelData1)
    }

    const calculateTotal = () => {
        let val = (parseFloat(refuelData.fuel) * 110).toString()
        let refuelData1 = {...refuelData}
        refuelData1["total"] = val
        setRefuelData(refuelData1)
    }

    const setRefuellingDate = (day) => {
        let refuelData1 = {...refuelData}
        refuelData1["refuellingDate"] = day
        setRefuelData(refuelData1)
    }

    return (
        <View style={styles.body} >
            <KeyboardAwareScrollView style={styles.mainView}>
                <Text style={styles.headerText}>Enter details for Pulsar</Text>
                    <Calendar
                        current = {refuelData.refuellingDate}
                        onDayPress={day => {
                            console.log('selected day', day.dateString);
                            setRefuellingDate(day.dateString);
                        }}
                        markedDates={{
                            [refuelData.refuellingDate]: {selected: true,selectedColor:'blue', disableTouchEvent: true,marked: true}
                          }}
                        style={styles.calendarStyles}
                    />

                <Text style={styles.subheadText}>Fuel</Text>
                <View style={{ flexDirection: "row", margin: 5 }}>
                    <TextInput
                        value={refuelData.fuel}
                        keyboardType={'phone-pad'}
                        style={styles.textInputContainer}
                        onChangeText={text => onChangeValue(text)}
                    />
                    <View style={styles.calculateButton}>
                        <TouchableOpacity
                            onPress={calculateTotal}
                            style={styles.totalButton}
                        >
                            <Text style={{ color: "white" }}>Calculate Total</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footerView}>
                    <View style={styles.innerFooter}>
                        <Text style={styles.innerText}>Fuel per Lit</Text>
                        <Text style={styles.innerValue}>Rs. 110</Text>
                    </View>
                    <View style={styles.innerFooter}>
                        <Text style={styles.innerText}>Total</Text>
                        <Text style={styles.innerValue}>{refuelData.total}</Text>
                    </View>
                </View>
                <TouchableOpacity 
                  onPress={saveRefuellingData}
                  style={styles.buttonFooter}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
        </KeyboardAwareScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#D2DDE7",
        padding: 10,
    },
    mainView: {
        flex: 1,
        backgroundColor: "#99AFC9",
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 10,
        // paddingBottom: 40
        // justifyContent: "space-around"
    },
    calendarStyles: {
        borderRadius: 5,
        marginLeft: 20,
        marginRight: 20
    },
    headerText: {
        marginLeft: 15,
        fontSize: 20,
        padding: 5
    },
    textInputContainer: {
        height: 50,
        width: "50%",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: "white",
        marginLeft: 15,
    },
    subheadText: {
        fontSize: 20,
        // padding: 10,
        color: "white",
        textAlign: "flex-start",
        marginLeft: 20,
    },
    footerView: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        margin: 5,
        // height: 150,
        // width: "90%",
        // backgroundColor: "white",
        // margin: 15,
        // borderRadius: 10
    },
    innerFooter: {
        height: 100,
        width: "40%",
        backgroundColor: "white",
        margin: 10,
        borderRadius: 10,

    },
    buttonFooter: {
        height: 40,
        width: "75%",
        backgroundColor: "#252f40",
        borderRadius: 5,
        // alignItems: "center",
        // justifyContent: "center",
        marginLeft: 40,
        margin: 20
    },
    buttonText: {
        fontSize: 20,
        color: "white",
        textAlign: "center",
        margin: 5
    },
    innerText: {
        fontSize: 16,
        textAlign: "center"
    },
    innerValue: {
        fontSize: 30,
        color: "red",
        textAlign: "center",
        marginTop: 20
    },
    calculateButton: {
        height: 50,
        width: "40%",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: "white",
        alignItems: "flex-end",
    },
    totalButton: {
        height: 40,
        width: 100,
        backgroundColor: "#486595",
        justifyContent: "center",
        margin: 5,
        borderRadius: 5,
        padding: 2,
    }
})

export default AddRefuelling