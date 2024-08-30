import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    Image,
    ImageBackground,
    RefreshControl
} from 'react-native'
import data from '../../UserData'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconNew from 'react-native-vector-icons/Fontisto'
import bikeData from '../../VehicleData'
import { getItem, setItem } from '../../utils/AsyncStorage';
import { useIsFocused } from '@react-navigation/native';



const Item = (props) => {

    const renderIcon = (type) => {
        switch (type) {
            case "2wheeler": return <Icon name="motorcycle" size={80} color="grey" />
            case "4wheeler": return <IconNew name="automobile" size={120} color="grey" />
            case "3": return
        }
    }

    const deleteOnPress = async (id) => {
        props.navigation.navigate("VehicleDetails", {...props.data,isDelete: true,isUpdate: false,isAdd: false})
    }

    const editOnPress = () => {
        props.navigation.navigate("VehicleDetails",{ ...props.data,isUpdate: true,isDelete: false,isAdd: false})
    }

    return (
        <View style={styles.mainContainer}>
            {
                props.data.imgSrc &&  props.data.imgSrc != '' ?
                    <ImageBackground
                        style={styles.imageStyle}
                        source={{
                            uri: props.data.imgSrc
                        }}
                    >
                        <View style={{flexDirection: "column", position: "absolute", right: 0, paddingRight: 5}}>
                        {/* <Icon onPress={() => { deleteOnPress(props.data.id) }} name="trash-o" size={25} color="#FFF700" style={{ marginTop: 10 }} /> */}
                        <Icon onPress={() => { editOnPress() }} name="edit" size={25} color="#DBC34B" style={{ marginTop: 25 }} />
                        </View>
                            
                    </ImageBackground>
                    :
                    <View style={styles.iconView}>
                        {renderIcon(props.data.vehicleType)}
                        {/* <Icon onPress={() => { deleteOnPress(props.data.id) }} name="trash-o" size={25} color="#E6E708" style={{ position: "absolute", right: 0, top: 0, padding: 10 }} /> */}
                        <Icon onPress={() => { editOnPress() }} name="edit" size={25} color="#DBC34B" style={{ position: "absolute", right: 0, padding: 5 }} />
                        <Text style={props.data.vehicleType === "2" ? styles.noImageStyle : styles.noImageCar}>No Image</Text>
                    </View>
            }

            <View style={styles.innerContainer}>
                <View style={{ margin: 5 }}>
                    <Text style={{ fontSize: 18 }}>{props.data.vehicleName}</Text>
                    <Text style={{ fontSize: 12 }}>{props.data.vehicleType} </Text>
                </View>
                <View style={styles.ccInfo}>
                    <Text>{props.data.engineCC !== "NA" ? props.data.engineCC : null} </Text>
                    <Text>{props.data.engineCC !== "NA" ? "CC" : "Not Applicable"}</Text>
                </View>

            </View>
        </View>
    )
}

const VehicleListDetail = (props) => {
    // const [isRefreshing, setIsRefreshing] = useState(false)
    const [vehicles, setVehicles] = useState([])
    const isFocused = useIsFocused();

    // useEffect(() => {

    //     getItem('loggedInUser').then(user => {
    //         let key = "vehicleDetails_" + user.id;
    //         getItem(key).then(rep => {
    //             setVehicles(rep)
    //         })
    //     })
    // }, [])

    useEffect(() => {
        if (isFocused) {
            // Perform actions you want when the screen is focused.
            // This could be fetching data, re-rendering components, or any other refresh logic.
            getItem('loggedInUser').then(user => {
                let key = "vehicleDetails_" + user.id;
                getItem(key).then(rep => {
                    console.log("vechicles", rep)
                    setVehicles(rep)
                })
            })
        }
    }, [isFocused]);

    // const onRefresh = () => {
    //     setIsRefreshing(false)
    // }

    return (
        <View>
            {vehicles &&
                <FlatList
                    data={vehicles}
                    // onRefresh={onRefresh}
                    // refreshing={isRefreshing}
                    renderItem={({ item, index }) => <Item data={item} index={index} navigation={props.navigation} />}
                />
            }
        </View>


    )
}

const styles = StyleSheet.create({
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
        height: 60,
        width: 300,
        backgroundColor: "#E2E2E2",
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,
        borderBottomWidth: 5,
        borderColor: "grey"
    },
    imageStyle: {
        height: 150,
        width: 300,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: "center"
    },
    iconStyle: {
        height: 150,
        weight: 3000,
        backgroundColor: "white"
    },
    iconView: {
        height: 150,
        width: 300,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    noImageStyle: {
        color: "grey",
        fontSize: 15,
        marginTop: 20
    },
    noImageCar: {
        color: "grey",
        fontSize: 15,
        marginBottom: 15
    },
    ccInfo: {
        flexDirection: "row",
        margin: 10,
        textAlign: "right",
        position: "absolute",
        top: 0,
        right: 0
    }
})

export default VehicleListDetail