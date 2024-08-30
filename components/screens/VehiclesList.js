import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconNew from 'react-native-vector-icons/Fontisto'
import VehicleListDetail from './VehicleListDetail'

const VehicleList = ({ navigation }) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Vehicles</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("VehicleDetails", { isAdd: true,isDelete: false,isUpdate: false })}
                    style={styles.addButton}
                >
                    <Text style={{ color: "#2D4877", fontSize: 18 }}>Add</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flex: 1,
                backgroundColor: "#99AFC9",
                borderRadius: 10,
                margin: 10,
                borderWidth: 3,
                borderColor: "white",
            }}
            >
                <VehicleListDetail navigation={navigation} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#D2DDE7"
    },
    headerView: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    headerText: {
        fontSize: 20,
        color: "#2D4877",
        // margin: 10,
        paddingTop: 20
    },
    mainContainer: {
        alignItems: "center",
        margin: 10
    },
    outerContainer: {
        height: 160,
        width: 300,
        backgroundColor: "#E2E2E2",
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    innerContainer: {
        height: 50,
        width: 300,
        backgroundColor: "white",
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10
    },
    addButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#99AFC9",
        height: 35,
        width: 100,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#436090",
        position: "absolute",
        right: 0,
        top: 0,
        // margin: 20,
        marginTop: 15,
        marginRight: 10
    }
})

export default VehicleList