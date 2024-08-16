import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];


const RenderDropdown = () => {
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
            value={""}
            onChange={item => {
                setValue(item.value);
                console.log('dropdown selected')
            }}
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

const AddVehicle = () => {
    return (
        <View style={styles.body}>
            <Text style={styles.descText}>Here is everything about your</Text>
            <RenderDropdown />
            <Image
                style={styles.bikeStyle}
                source={require("../../assets/images/triumph400.png")}
            />
            <Image
                style={styles.cloudStyle}
                source={require("../../assets/images/cloud.png")}
            />
            <Text style={styles.descText}>It's time to add the refuelling details to get more insights</Text>
            <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => {
                    navigation.navigate('Home')
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

export default AddVehicle