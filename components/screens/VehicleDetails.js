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

const VehicleDetails = () => {
    return (

        <View style={styles.body}>
            <Text style={styles.headText}>Add Vehicle</Text>
            <View style={styles.cameraView}>
                <Icon name="camera" size={30} color="white" />
            </View>
            {/* <View> */}
            <TextInput
                style={styles.textInput}
                placeholder='Vehicle Name'
                placeholderTextColor="#8392AB"
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
                }}
            //   renderLeftIcon={() => {
            //     <Icon style={styles.icon} color="black" name="down" size={20} />
            //   }}
            //   renderItem={renderItem}

            />
            <TextInput
                style={styles.textInput}
                placeholder='Engine CC'
                placeholderTextColor="#8392AB"
            />
            {/* </View> */}
            <View style={styles.bodyBottom}>
                <TouchableOpacity style={styles.cancelButton}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButton}>
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