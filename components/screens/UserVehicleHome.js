import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { getItem, setItem } from '../../utils/AsyncStorage';
import { useIsFocused } from '@react-navigation/native';

const RenderDropdown = (props) => {

    const onChangeHandler = async (item) => {
        await setItem("selectedVehicle_", item)
        props.setSelectedVehicle(item);
        console.log('dropdown selected')
    }

    let data = []
    props.vehiclesList.map(item => data.push({ id: item.id, label: item.vehicleName, value: `${item.id}`, imgSrc: item?.imgSrc, vehicleMileage: item?.vehicleMileage }))
    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            iconStyle={styles.iconStyle}
            data={data}
            labelField="label"
            valueField="value"
            placeholder={'Select item'}
            searchPlaceholder="Search..."
            value={props.selectedVechicle}
            onChange={item => { onChangeHandler(item) }}
        //   renderLeftIcon={() => (
        //     <AntDesign
        //       style={styles.icon}
        //       color={isFocus ? 'blue' : 'black'}
        //       name="Safety"
        //       size={20}
        //     />
        //   )}
        />
    )
}

const UserVehicleHome = (props) => {

    const isFocused = useIsFocused();
    let initialSelectedVehicle = { id: props.vehiclesList[0].id, label: props.vehiclesList[0].vehicleName, value: `${props.vehiclesList[0].id}`, imgSrc: props.vehiclesList[0]?.imgSrc,vehicleMileage: props.vehiclesList[0]?.vehicleMileage }
    const [selectedVechicle, setSelectedVehicle] = useState(initialSelectedVehicle)

    useEffect(() => {
        if (isFocused) {
            getItem("selectedVehicle_").then(vehicle => {
                if (!vehicle) {
                    let initialSelectedVehicle = { id: props.vehiclesList[0].id, label: props.vehiclesList[0].vehicleName, value: `${props.vehiclesList[0].id}`, imgSrc: props.vehiclesList[0]?.imgSrc,vehicleMileage: props.vehiclesList[0]?.vehicleMileage }
                    setItem("selectedVehicle_", initialSelectedVehicle).then(() => {
                        setSelectedVehicle(initialSelectedVehicle)
                    })
                }
            })

        }
    }, [isFocused]);

    return (
        <View style={styles.body}>
            <Text style={styles.descText}>Here is everything about your</Text>
            <RenderDropdown vehiclesList={props.vehiclesList} selectedVechicle={selectedVechicle} setSelectedVehicle={setSelectedVehicle} />
            <Image
                style={styles.bikeStyle}
                source={{
                    uri: selectedVechicle?.imgSrc,
                }}
            />
            <Image
                style={styles.cloudStyle}
                source={require("../../assets/images/cloud.png")}
            />
            <Text style={styles.descText}>It's time to add the refuelling details to get more insights</Text>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                    props.navigation.navigate('AddRefuelling', { userId: props.user.id, vehicle: props.vehiclesList.find(data => data.id == selectedVechicle.value), selectedVechicle })
                }}
            >
                <Text style={styles.buttonText}>Add Refuelling</Text>
                <Image
                    style={styles.arrowImage}
                    source={require("../../assets/images/arrow.png")}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    iconStyle: {
        marginRight: 5,
    },
    bikeStyle: {
        height: 180,
        width: 300,
        borderRadius: 10,
        alignItems: "center",
        borderWidth: 3,
        borderColor: "white",
        marginTop: 10,
    },
    cloudStyle: {
        height: 80,
        width: 100,
        marginTop: 15
    },
    buttonStyle: {
        backgroundColor: "#3A416F",
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 15,
        margin: 5
    },
    arrowImage: {
        height: 20,
        width: 20,
        marginRight: 5
    },
    descText: {
        fontSize: 16,
        color: "#4682b4",
        marginBottom: 10,
        textAlign: "center",
        marginTop: 10
    },
    dropdown: {
        height: 30,
        width: 150,
        borderRadius: 5,
        backgroundColor: "white",
        marginBottom: 10
    },
    placeholderStyle: {
        color: "#4682b4",
        textAlign: "center"
    },
    innerView: {
        alignItems: "center",
        justifyContent: "flex-start",
    }
})

export default UserVehicleHome