import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'
// import styles from "../../constants/styles.js"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-element-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { create } from 'zustand';
import { setItem, getItem } from '@/utils/AsyncStorage';

const data = [
    { label: '2 Wheeler', value: '2wheeler' },
    { label: '3 Wheeler', value: '3wheeler' },
    { label: '4 wheeler', value: '4wheeler' },
    { label: 'Other', value: 'other' },
];

const defaultVehicle = {
    vehicleName: "",
    vehicleType: '',
    engineCC: ''
}

const VehicleStore = create((set) => ({
    vehicle: defaultVehicle,
    setVehicle: (newVehicle) => set((state) => ({ vehicle: newVehicle }))
}))

const VehicleDetails = ({navigation}) => {

    const vehicle  = VehicleStore((state) => state.vehicle)
    const setVehicle = VehicleStore((state) => state.setVehicle)

    const onPressHandler = async () => {

        let user = await getItem("loggedInUser")
        let key = "vehicleDetails_" + user.id;
        let vehicles = await getItem(key);
        console.log('vehicles',vehicles)
        if(!vehicles){
            let vehicle1 = { ...vehicle}
            vehicle1.id = 1
            setItem(key, [vehicle1])
        } else {
            let vehicle1 = { ...vehicle}
            vehicle1.id = vehicles.length + 1
            vehicles.push(vehicle1)
            setItem(key, vehicles)
        }
        navigation.navigate("AddSuccess")
    }

    return (

        <View style={styles.body}>
            <Text style={styles.headText}>Add Vehicle</Text>
            <View style={styles.cameraView}>
                <Icon name="camera" size={30} color="white" />
            </View>
            {/* <View> */}
            <TextInput
                value={vehicle.vehicleName}
                style={styles.textInput}
                placeholder='Vehicle Name'
                placeholderTextColor="#8392AB"
                onChangeText={(text) => {
                    let vehicle1 = { ...vehicle }
                    vehicle1["vehicleName"] = text
                    setVehicle(vehicle1)
                }}
            />
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholder}
                selectedTextStyle={styles.placeholder}
                inputTextStyle={{}}
                iconStyle={styles.iconStyle}
                data={data}
                //   search
                //   maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Vehicle Type"
                searchPlaceHolder="Search"
                //   value={value}
                onChange={item => {
                    // setValue={item.value}
                    let vehicle1 = {...vehicle}
                    vehicle1["vehicleType"] = item.value
                    setVehicle(vehicle1)
                }}
            //   renderLeftIcon={() => {
            //     <Icon style={styles.icon} color="black" name="down" size={20} />
            //   }}
            //   renderItem={renderItem}

            />
            <TextInput
                value={vehicle.engineCC}
                style={styles.textInput}
                keyboardType= "number-pad"
                placeholder='Engine CC'
                placeholderTextColor="#8392AB"
                onChangeText={text => {
                    let vehicle1 = {...vehicle}
                    vehicle1["engineCC"] = text
                    setVehicle(vehicle1)
                }}
            />
            {/* </View> */}
            <View style={styles.bodyBottom}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cancelButton}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={onPressHandler}
                  style={styles.addButton}
                >
                    <Text style={styles.addText}>Add</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#D2DDE7",
        borderWidth: 5,
        borderColor: "#B3CFE5"
        // borderColor: "#79A8D2",
    },
    cameraView: {
        height: 120,
        width: 120,
        borderRadius: 100,
        backgroundColor: "#40B1BF",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 10
    },
    headText: {
        color: "#252f40",
        fontSize: 22,
        textAlign: "center",
        marginTop: 30
    },
    dropdown: {
        height: 40,
        width: 300,
        backgroundColor: "white",
        borderRadius: 5,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 1
        // }
        // shadowOpacity: 0.2,
        // shadowRadius: 1.41,
        // elevation: 2
    },
    placeholder: {
        color: "#8392AB",
        marginLeft: 5,
        fontSize: 15
    },
    iconStyle: {
        marginRight: 5,
    },
    textInput: {
        height: 40,
        width: 300,
        backgroundColor: "white",
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 5,
        fontSize: 15,
        paddingLeft: 5
    },
    bodyBottom: {
        flex: 1,
        alignItems: "flex-end",
        flexDirection: "row",
        margin: 30,
    },
    cancelButton: {
        height: 40,
        width: 145,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#252f40",
        justifyContent: "center",
        marginRight: 3
    },
    addButton: {
        height: 40,
        width: 145,
        borderRadius: 6,
        backgroundColor: "#999999",
        justifyContent: "center",
        marginLeft: 3,
    },
    cancelText: {
        textAlign: "center",
        color: "#252f40"
    },
    addText: {
        color: "white",
        textAlign: "center",
    }
})

export default VehicleDetails