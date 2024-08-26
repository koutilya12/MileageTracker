import React, { useState,useEffect } from 'react'
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
import {getItem,setItem} from '../../utils/AsyncStorage';
import { useIsFocused} from '@react-navigation/native';



const Item = (props) => {


    const renderIcon = (type) => {
        switch (type) {
            case "2wheeler": return <Icon name="motorcycle" size={80} color="grey" />
            case "4wheeler": return <IconNew name="automobile" size={120} color="grey" />
            case "3": return
        }
    }

    const deleteOnPress = (index) => {
        props.onRefresh()
        bikeData.splice(index,1)
    }

    return (
        <View style={styles.mainContainer}>
            {
                props.data.source ?
                    <ImageBackground
                        style={styles.imageStyle}
                        source={props.data.source}
                    >
                        <Icon onPress={() => {deleteOnPress(props.index)}} name="trash-o" size={25} color="#EF0B39" style={{position: "absolute", right: 0, padding: 10}}/>
                    </ImageBackground> :
                    <View style={styles.iconView}>
                        {renderIcon(props.data.vehicleType)}
                        <Icon onPress={() => {deleteOnPress(props.index)}} name="trash-o" size={25} color="#EF0B39" style={{position: "absolute", right:0, top: 0, padding: 10}}/>
                        <Text style={props.data.vehicleType === "2" ? styles.noImageStyle : styles.noImageCar}>No Image</Text>
                    </View>
            }

            <View style={styles.innerContainer}>
                <View style={{ margin: 5 }}>
                    <Text>{props.data.model}</Text>
                    <Text style={{ fontSize: 10, marginTop: 5 }}>{props.data.type} </Text>
                </View>
                <View style={styles.ccInfo}>
                    <Text>{props.data.engineCC !== "NA" ? props.data.engineCC : null} </Text>
                    <Text>{props.data.engineCC !== "NA" ? "CC" : "Not Applicable"}</Text>
                </View>

            </View>
        </View>
    )
}

const FlatListTest = () => {
const [isRefreshing, setIsRefreshing] = useState(false)
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
                setVehicles(rep)
            })
        })
        }
      }, [isFocused]);

  const onRefresh = () => {
    setIsRefreshing(false)
  }

    return (
        <View>
        { vehicles &&
            <FlatList
            data={vehicles}
            // onRefresh={onRefresh}
            // refreshing={isRefreshing}
            refreshControl={
                <RefreshControl 
                    refreshing={isRefreshing} 
                    onRefresh={onRefresh}
                    tintColor="red"/>
            }
            renderItem={({ item, index }) => <Item data={item} index={index} onRefresh={onRefresh}/>}
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
        height: 50,
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

export default FlatListTest