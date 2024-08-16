import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

const UiTest = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxOne}>
                <Text style={styles.textOne}>Hello</Text>
            </View>
            <View style={styles.boxTwo}>
                <Text style={styles.textTwo}>Hello</Text>
            </View>
            <View style={styles.boxThree}>
                <Text style={styles.textThree}>Hello</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        flexDirection: "column"
    },
    boxOne: {
        flex: 1,
        height: 100,
        width: 100,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center"
    },
    boxTwo: {
        flex: 3,
        height: 100,
        width: 100,
        backgroundColor: "red",
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    boxThree: {
        flex: 5,
        height: 100,
        width:  40,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center"
    },
    textOne: {
        backgroundColor: "yellow",
        // flex:1
    },
    textTwo: {
        backgroundColor: "pink"
    },
    textThree: {
        backgroundColor: "orange"
    }
})

export default UiTest