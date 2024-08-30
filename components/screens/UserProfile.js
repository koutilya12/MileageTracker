import React, { useEffect } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import userData from '../../UserData'
import Icon from 'react-native-vector-icons/FontAwesome'
import { getItem } from '@/utils/AsyncStorage'

const UserProfile = (props) => {

    // useEffect(async () => {
    //     const userDetails = await AsyncStorage.getItem('login');
    //     userDetails.userId ? "navigate to password screen" : null
    // })

    return (
        <View style={styles.qView}>
            <Text style={styles.qText}>Who are you?</Text>
            <View style={styles.addContainer}>
                {
                    props.users.map((item) => {
                        return (
                            <View key = {item.id} style={styles.addView}>
                                {
                                    item.imgSrc ?
                                        <TouchableOpacity onPress={() => {props.navigation.navigate("SubmitPassword", {item})}}>
                                            <Image
                                                style={styles.profilePic}
                                                source={{
                                                    uri: item.imgSrc
                                                }}
                                            />
                                        </TouchableOpacity> :
                                        <TouchableOpacity style={{ borderWidth: 2, borderRadius: 100, borderColor: "grey" }}>
                                            <View style={{ borderWidth: 2, borderRadius: 100, borderColor: "white" }}>
                                                <View style={styles.iconUser}>
                                                    <Icon onPress={() => {props.navigation.navigate("SubmitPassword", {item})}} name="user" size={25} color="white" />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                }
                                <Text style={styles.userName}>{item.name}</Text>
                            </View>
                        )
                    })
                }
                <View style={styles.addView}>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate('CreateAccount')}}
                    >
                        <Image
                            style={styles.addImage}
                            source={require('../../assets/images/addicon.png')}
                        />
                    </TouchableOpacity>
                    <Text style={styles.userName}>Add User</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    qView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center"
    },
    addView: {
        alignItems: 'center',
        flexBasis: '30%',
    },
    addContainer: {
        flexWrap: 'wrap',
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    addImage: {
        height: 60,
        width: 60,
        borderRadius: 100,
    },
    qText: {
        fontSize: 20,
        // fontWeight: 'bold',
        color: '#041F3F',
        margin: 35
    },
    subText: {
        margin: 10,
        color: "#4682b4"
    },
    margin10: {
        margin: 10
    },
    userName: {
        margin: 15,
        color: "#07366E"
    },
    iconUser: {
        height: 50,
        width: 50,
        backgroundColor: "#3B76DE",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "grey"
    },
    profilePic: {
        height: 50,
        width: 50,
        borderRadius: 50
    }
})

export default UserProfile