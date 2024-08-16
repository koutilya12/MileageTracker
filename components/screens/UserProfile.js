import React, { useEffect } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import userData from '../../UserData.json'

// const RenderUserProfiles = () => {
//     return (
//         <>
//             {userData.map((item) => {
//                 let img = item.img
//                 return (
//                     <View style={styles.addView}>
//                         <TouchableOpacity>
//                             <Image
//                                 style={styles.addImage}
//                                 source={require('../../assets/images/addicon.png')}
//                             />
//                         </TouchableOpacity>
//                         <Text style={styles.userName}>{item.name}</Text>
//                     </View>
//                 )

//             })}
//         </>
//     )
// }

const RenderUserProfiles = () => {
    return (
        <>
            <View style={styles.addView}>
                <TouchableOpacity>
                    <Image
                        style={styles.addImage}
                        source={require('../../assets/images/addicon.png')}
                    />
                </TouchableOpacity>
                <Text style={{ margin: 10 }}>John Doe</Text>
            </View>

            <View style={styles.addView}>
                <TouchableOpacity>
                    <Image
                        style={styles.addImage}
                        source={require('../../assets/images/addicon.png')}
                    />
                </TouchableOpacity>
                <Text style={{ margin: 10 }}>Kevin</Text>
            </View>

            <View style={styles.addView}>
                <TouchableOpacity>
                    <Image
                        style={styles.addImage}
                        source={require('../../assets/images/addicon.png')}
                    />
                </TouchableOpacity>
                <Text style={{ margin: 10 }}>Tony</Text>
            </View>

            <View style={styles.addView}>
                <TouchableOpacity>
                    <Image
                        style={styles.addImage}
                        source={require('../../assets/images/addicon.png')}
                    />
                </TouchableOpacity>
                <Text style={{ margin: 10 }}>Mike</Text>
            </View>
        </>
    )
}

const UserProfile = () => {

    // useEffect(async () => {
    //     const userDetails = await AsyncStorage.getItem('login');
    //     userDetails.userId ? "navigate to password screen" : null
    // })

    return (
        <View style={styles.qView}>
            <Text style={styles.qText}>Who are you?</Text>
            <View style={styles.addContainer}>
                <RenderUserProfiles />
                <View style={styles.addView}>
                    <TouchableOpacity>
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
        height: 50,
        width: 50,
        borderRadius: 80,
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
        margin: 10,
        color: "#07366E"
    }
})

export default UserProfile