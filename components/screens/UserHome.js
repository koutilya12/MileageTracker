import React, { useEffect, useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
// import UserVehicleHome from './UserVehicleHome'
import { LinearGradient } from 'expo-linear-gradient';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserVehicleHome from '../../components/screens/UserVehicleHome'
import CreateAccount from '../../components/screens/CreateAccount'
import VehicleList from '../../components/screens/VehiclesList'
import { getItem, setItem, removeItem } from '../../utils/AsyncStorage';
import { useIsFocused } from '@react-navigation/native';


const RenderUserHome = ({ navigation }) => {

    return (
        <View>
            <View style={styles.descTopView}>
                <Text style={styles.descText}>Track your miles towards a prosperous financial journey!</Text>
            </View>
            <View style={styles.sectionDown}>
                <Image
                    style={styles.roadImage}
                    source={require('../../assets/images/road.png')}
                />
                <Text style={styles.descText}>Add a vehicle to start tracking its refuelling & performance</Text>
                <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={() => {
                        navigation.navigate('VehicleDetails', { isAdd: true,isDelete: false,isUpdate: false })
                    }}
                >
                    <Text style={styles.buttonText}>Add Vehicle</Text>
                    <Image
                        style={styles.arrowImage}
                        source={require("../../assets/images/arrow.png")}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const UserHome = ({ navigation }) => {
    const isFocused = useIsFocused();

    const [user, setUser] = useState({})
    const [detailsFlag, setDetailsFlag] = useState(false)
    let [vehiclesList, setVehiclesList] = useState({})

    useEffect(() => {
        if (isFocused) {
            getItem('loggedInUser').then(userRep => {
                setUser(userRep)
                getItem('vehicleDetails_' + userRep.id).then(rep => {
                    setVehiclesList(rep)
                    if (rep)
                        setDetailsFlag(true)
                })
            })
        }


    }, [isFocused])


    const logoutHandler = () => {
        Alert.alert("Logout", "Press ok to logout", [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK', onPress: async () => {
                    console.log('Logout successful.')
                    await removeItem('selectedVehicle_')
                    await removeItem('loggedInUser')
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Landing' }],
                    });
                }
            }
        ]
        )
    }

    return (
        <LinearGradient colors={["#b0e0e6", "white"]} style={styles.container} >
            <View style={styles.headSection}>
                <TouchableOpacity onPress={logoutHandler} style={{ marginRight: "auto", padding: 10 }}>
                    <Icon name="user" size={20} />
                </TouchableOpacity>
                <Image
                    style={styles.logoImage}
                    source={require('../../assets/images/mlogonew.png')}
                />
            </View>
            <View style={styles.body}>
                <Text style={styles.nameText}>Hi {user.name},</Text>

            </View>
            {detailsFlag ? <UserVehicleHome navigation={navigation} vehiclesList={vehiclesList} user={user} /> : <RenderUserHome navigation={navigation} />}
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#b0e0e6",
    },
    headSection: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    body: {
        alignItems: "center",
        justifyContent: "center",
    },
    sectionDown: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 50
    },
    roadImage: {
        height: 100,
        width: 100,
        borderRadius: 100,
        marginBottom: 20
    },
    nameText: {
        color: "#FF0080",
        fontSize: 22
    },
    descText: {
        fontSize: 16,
        color: "#4682b4",
        textAlign: "center",
    },
    logoImage: {
        height: 80,
        width: 80,
        borderRadius: 100,
        margin: 10,
        marginRight: "auto"
    },
    buttonStyle: {
        backgroundColor: "#3A416F",
        borderRadius: 8,
        flexDirection: 'row',
        marginTop: 20
    },
    buttonText: {
        fontSize: 15,
        color: "white",
        margin: 5
    },
    arrowImage: {
        height: 20,
        width: 20,
        margin: 5
    },
    descTopView: {
        alignItems: "center",
        marginBottom: 50
    }
})

export default UserHome