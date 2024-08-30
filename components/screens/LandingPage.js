import React, { useEffect, useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native'
import SignUp from "./SignUp"
import UserProfile from "./UserProfile"
import { LinearGradient } from "expo-linear-gradient"
import {getItem,setItem} from '../../utils/AsyncStorage';
import { useIsFocused} from '@react-navigation/native';

const LandingPage = ({navigation}) => {
    const isFocused = useIsFocused();
    // fetchUserData = async () => {
    //         const userDetails = await AsyncStorage.getItem('username');
    //         userDetails.userId ? renderUserData() : null
    // }
    const [users, setUsers] = useState([])

    useEffect(() => {

        getItem('users').then(rep => {
            console.log('users',rep)
            if(rep){
                setUsers(Object.values(rep))
            }
            //clear();
        }, [])

        getItem('loggedInUser').then(rep => {
            if(rep && rep.email) {
                navigation.navigate("SubmitPassword", {item : rep})
            }
        })
    }, [])

    useEffect(() => {
        if (isFocused) {
          // Perform actions you want when the screen is focused.
          // This could be fetching data, re-rendering components, or any other refresh logic.
          getItem('users').then(rep => {
             if(rep){
                setUsers(Object.values(rep))
             }
              //clear();
          })
        }
      }, [isFocused]);

    return (
        <View style={styles.mainView}>
            <LinearGradient  colors={["#b0e0e6", "white"]} style={styles.linearView}>
                <View style={styles.logoView}>
                    <Image
                        style={styles.imageStyle}
                        source={require('../../assets/images/mlogo.png')}
                    />
                    <Text style={styles.titleText}>Mileage Tracker</Text>
                </View>
                {users && users.length > 0 ? <UserProfile navigation={navigation} users = {users}/> : <SignUp navigation={navigation} />  }
            </LinearGradient>
        </View >
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "#b0e0e6",
        // backgroundColor: "#afeeee",
        borderWidth: 3,
        borderColor: "#4A89D1"
    },
    logoView: {
        alignItems: 'center',
    },
    imageStyle: {
        height: 130,
        width: 130,
        borderRadius: 80,
        marginTop: 25
    },
    titleText: {
        color: '#FA214D',
        fontSize: 22,
        margin: 10
    },
    linearView: {
        flex:1
    }
})

export default LandingPage
