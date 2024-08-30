import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert
} from 'react-native'
// import styles from "../../constants/styles.js"
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dropdown } from 'react-native-element-dropdown';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { create } from 'zustand';
import { setItem, getItem } from '@/utils/AsyncStorage';
// import { launchCamera } from 'react-native-image-picker';
import * as ImagePicker from "expo-image-picker";
import CameraModal from './CameraModal'

const data = [
    { label: '2 Wheeler', value: '2wheeler' },
    { label: '3 Wheeler', value: '3wheeler' },
    { label: '4 wheeler', value: '4wheeler' },
    { label: 'Other', value: 'other' },
];

const defaultVehicle = {
    vehicleName: '',
    vehicleType: '',
    engineCC: '',
    vehicleMileage: '',
    imgSrc: ''
}

const VehicleStore = create((set) => ({
    vehicle: defaultVehicle,
    setVehicle: (newVehicle) => set((state) => ({ vehicle: newVehicle }))
}))

const VehicleDetails = ({ navigation, route }) => {

    useEffect(() => {
        route && route.params ? setVehicle(route.params) : null
        route && route.params ? setPickedImagePath(route.params.imgSrc) : null
    }, [])

    const vehicle = VehicleStore((state) => state.vehicle)
    const setVehicle = VehicleStore((state) => state.setVehicle)
    const [modalVisible, setModalVisible] = useState(false)
    const [pickedImagePath, setPickedImagePath] = useState('')

    const validationCheck = () => {
        if (vehicle.vehicleName && vehicle.vehicleType && vehicle.engineCC && vehicle.vehicleMileage)
            return true
        return false
    }

    const onPressHandler = async () => {

        if (validationCheck()) {
            let user = await getItem("loggedInUser")
            let key = "vehicleDetails_" + user.id;
            let vehicles = await getItem(key);
            console.log('vehicles', vehicles)
            if (route.params.isDelete) {
                vehicles.splice(vehicle.id - 1, 1)
                await setItem(key, vehicles)
                let message = 'Vehicle Deleted!'
                navigation.navigate("AddSuccess", { ...vehicle, message })

            } else {
                if (!vehicles) {
                    let vehicle1 = { ...vehicle }
                    vehicle1.id = 1
                    vehicle1.imgSrc = pickedImagePath
                    setItem(key, [vehicle1])
                    let message = 'Vehicle Added!'
                    navigation.navigate("AddSuccess", { ...vehicle1, message })
                } else {
                    if (vehicle.id) {
                        vehicles[vehicle.id - 1] = { ...vehicle }
                        setItem(key, vehicles)
                        let message = 'Vehicle Updated!'
                        navigation.navigate("AddSuccess", { ...vehicle, message })
                    } else {
                        let vehicle1 = { ...vehicle }
                        vehicle1.id = vehicles.length + 1
                        console.log('pickedImagePath', pickedImagePath)
                        vehicle1.imgSrc = pickedImagePath
                        vehicles.push(vehicle1)
                        setItem(key, vehicles)
                        let message = 'Vehicle Added!'
                        navigation.navigate("AddSuccess", { ...vehicle1, message })
                    }
                }
            }
        } else {
            Alert.alert('', 'Enter all the required details', [
                { text: 'OK', onPress: () => console.log('Add Vehicle validation failed.') }
            ])
        }
    }

    const onChangeHandler = (item) => {
        let vehicle1 = { ...vehicle }
        vehicle1["vehicleType"] = item.value
        setVehicle(vehicle1)
    }

    return (

        <View style={styles.body}>
            <View style={styles.innerBody}>
                <KeyboardAwareScrollView>
                    <Text style={styles.headText}>Add Vehicle</Text>
                    <View style={{ alignItems: "center", paddingBottom: 60 }}>
                        {modalVisible ?
                            <CameraModal setPickedImagePath={setPickedImagePath} setModalVisible={setModalVisible} /> :
                            <TouchableOpacity
                                onPress={() => setModalVisible(true)}
                                style={pickedImagePath ? {} : styles.cameraView}
                            >
                                {
                                    pickedImagePath ?
                                        <Image
                                            style={styles.cameraView}
                                            source={{
                                                uri: pickedImagePath
                                            }}
                                        ></Image>
                                        : <Icon name="camera" size={40} color="white" />
                                }
                            </TouchableOpacity>
                        }
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
                            selectedTextStyle={styles.dropDownText}
                            inputTextStyle={styles.placeholder}
                            iconStyle={{}}
                            data={data}
                            //   search
                            //   maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder="Vehicle Type"
                            searchPlaceHolder="Search"
                            value={vehicle.vehicleType}
                            onChange={item => { onChangeHandler(item) }}
                        //   renderLeftIcon={() => {
                        //     <Icon style={styles.icon} color="black" name="down" size={20} />
                        //   }}
                        //   renderItem={renderItem}
                        />
                        <TextInput
                            value={vehicle.engineCC}
                            style={styles.textInput}
                            keyboardType="number-pad"
                            placeholder='Engine CC'
                            placeholderTextColor="#8392AB"
                            onChangeText={text => {
                                let vehicle1 = { ...vehicle }
                                vehicle1["engineCC"] = text
                                setVehicle(vehicle1)
                            }}
                        />
                        <TextInput
                            value={vehicle.vehicleMileage}
                            style={styles.textInput}
                            keyboardType="number-pad"
                            placeholder='Mileage per Litre'
                            placeholderTextColor="#8392AB"
                            onChangeText={text => {
                                let vehicle1 = { ...vehicle }
                                vehicle1["vehicleMileage"] = text
                                setVehicle(vehicle1)
                            }}
                        />
                    </View>
                    <View style={styles.bodyBottom}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cancelButton}>
                            <Text style={styles.cancelText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={onPressHandler}
                            style={{ ...styles.addButton, backgroundColor: route.params.isAdd ? "#252f40" : route.params.isUpdate ? "green" : "red" }}
                        >
                            {route.params.isDelete && <Text style={styles.deleteText}>Delete</Text>}
                            {route.params.isUpdate && <Text style={styles.updateText}>Update</Text>}
                            {route.params.isAdd && <Text style={styles.addText}>Add</Text>}
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>

            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#D2DDE7",
        borderWidth: 5,
        borderColor: "#B3CFE5",
        alignItems: "center",
    },
    innerBody: {
        // flex: 1,
        backgroundColor: "#99AFC9",
        margin: 10,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "white"
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
        marginTop: 20
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
        borderRadius: 5,
        fontSize: 15,
        paddingLeft: 5
    },
    bodyBottom: {
        justifyContent: "center",
        flexDirection: "row",
        margin: 30,
        paddingTop: 60
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
        backgroundColor: "#252f40",
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
    },
    deleteText: {
        color: "white",
        textAlign: "center",
    },
    updateText: {
        color: "white",
        textAlign: "center",
    },
    cameraContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1
    },
    dropDownText: {
        fontSize: 15,
        paddingLeft: 5
    }
})

export default VehicleDetails