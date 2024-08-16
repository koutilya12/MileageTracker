import React from 'react'
import {
    Text,
    View,
    Pressable,
    StyleSheet
} from 'react-native'

const CheckBox = (props) => {
    return (
        <Pressable
            onPress={onPressFunc}
            style={props.style }
        >
            {checked ? <Icon name="check" size={25} color="white" /> : null}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    checkBox: {
        backgroundColor: "white",
        height: 30,
        width: 30,
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 3
    
    },
    chekBoxSelected: {
        backgroundColor: "red",
        height: 30,
        width: 30,
        justifyContent: "center",
        borderWidth: 1,
        // borderColor: "grey",
        borderRadius: 3
    }
})

export default CheckBox

