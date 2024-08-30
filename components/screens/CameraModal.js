import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import * as ImagePicker from "expo-image-picker";
import Icon from 'react-native-vector-icons/FontAwesome'

const CameraModal = (props) => {

    const cameraHandler = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your camera!");
            return;
        }

        const result = await ImagePicker.launchCameraAsync();
        props.setModalVisible(false)
        // Explore the result
        console.log(result);
        if (!result.cancelled) {
            props.setPickedImagePath(result.assets[0].uri);
        }

    }

    const libraryHandler = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your Media Library!");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync();
        props.setModalVisible(false)
        // Explore the result
        console.log(result);
        if (!result.cancelled) {
            props.setPickedImagePath(result.assets[0].uri);
        }

    }

    return (
        <View style={styles.body}>
            <TouchableOpacity
            onPress={cameraHandler}
              style={styles.iconView}
            >
                <Icon name="camera" size={55} color="#436090"/>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={libraryHandler}
              style={styles.iconView}
            >
                <Icon name="file-photo-o" size={50}  color="#436090"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#D2DDE7",
        height: 150,
        width: 280,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "white",
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    iconView: {
        margin: 20
    }
})

export default CameraModal