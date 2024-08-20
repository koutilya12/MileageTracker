import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconNew from 'react-native-vector-icons/Fontisto'
import FlatListTest from './FlatListTest'

const VehicleList = () => {
    return (
        <View style={styles.mainView}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Vehicles</Text>
            </View>

            <View style={{
                flex: 1,
                // height: "100%",
                backgroundColor: "#99AFC9",
                borderRadius: 10,
                margin: 10,
                borderWidth: 3,
                borderColor: "white",
            }}
            >
                <FlatListTest />
            </View>

            {/* <View style={styles.mainContainer}>
                <View style={styles.outerContainer}>
                    <Icon name="motorcycle" size={80} color="grey" />
                    <Text style={{ color: "grey", fontSize: 15, marginTop: 20 }}>No Image</Text>
                </View>

                <View style={styles.innerContainer}>
                    <View style={{ margin: 5 }}>
                        <Text>Yamaha FZ</Text>
                        <Text style={{ fontSize: 10, marginTop: 5 }}>2 Wheeler</Text>
                    </View>
                    <Text style={{
                        margin: 10,
                        textAlign: "right",
                        position: "absolute",
                        top: 0,
                        right: 0
                    }}>
                        155 CC
                    </Text>
                </View>
            </View> */}

            {/* <View style={styles.mainContainer}>
                <View style={styles.outerContainer}>
                    <IconNew name="automobile" size={120} color="grey" />
                    <Text style={{ color: "grey", fontSize: 15 }}>No Image</Text>
                </View>

                <View style={styles.innerContainer}>
                    <View style={{ margin: 5 }}>

                        <Text>Yamaha</Text>
                        <Text style={{ fontSize: 10, marginTop: 5 }}>2 Wheeler</Text>
                    </View>
                    <Text style={{
                        margin: 10,
                        textAlign: "right",
                        position: "absolute",
                        top: 0,
                        right: 0
                    }}>
                        155 CC
                    </Text>
                </View>
            </View> */}


            {/* <View style={styles.mainContainer}>
                <View style={styles.outerContainer}>
                </View>
                <View style={styles.innerContainer}>
                    <Text>Yamaha</Text>
                </View>
            </View> */}
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
    }
})

export default VehicleList