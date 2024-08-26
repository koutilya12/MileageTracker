import React, { useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Pressable,
    TouchableOpacity,
    Alert
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import CheckBox from './CheckBox'
import { User } from '../../models/types'
import { create } from 'zustand'
import CreatePassword from './CreatePassword'
import {getItem,setItem} from '../../utils/AsyncStorage';

interface UserProfileProps {
    user: User;
  }

const Mandatory = () => {
    return (
        <Text style={styles.mandatoryAsterisk}>*</Text>
    )
}

const defaultUser: User = {
    id: '1',
    name: 'John Doe',
    nickName: 'john',
    email: 'john.doe@example.com',
}


const useStore = create((set) => ({
    user: defaultUser,
    setUser: (newUser: any) => set((state: any)=> ({ user:newUser}))
  }))

const CreateAccount = ({navigation}) => {
    const [checked, setChecked] = useState(false)
   // const [user,setUser] =useState(defaultUser)
   const user  = useStore((state) => state.user)
   const setUser = useStore((state) => state.setUser)
   const [proceed, setProceed] = useState(false)

    const onPressFunc = () => {
        setChecked(checked ? false : true)
    }

    const onChangeValue = (key: string, text: string) => {
        let user1 = {...user}
        user1[key as keyof User] = text
        setUser(user1)
    }

    const submitUser = async  (password: string) => {
        console.log('>>>>1')
        try {
            console.log('>>>>4', user)
            let user1 = user
            user1.password = password
            let users = await  getItem("users")
            console.log('>>>>2', users)
            const key = user.email + ''
            if(!users){
                user.id =1;
                await setItem("users",{key : user})
            }else {
                console.log('>>>>3', users)
                if(users[key]){
                    Alert.alert('Success', 'Duplicate email', [
                        {text: 'OK', onPress: () => console.log('ok')}
                    ])
                    return
                }
                user.id = Object.keys(users).length + 1;
                users[key] = user
                await setItem("users",users)
            }
            Alert.alert('Success', 'Account successfully created', [
                {text: 'OK', onPress: () => navigation.navigate('Landing')}
            ])

          } catch (error) {
            console.log(error)
            // Error saving data
          }
    }

    return ( 
        !proceed ?
        <LinearGradient colors={["#b0e0e6", "white"]} style={styles.body} >
            <Text style={styles.headText}>Create Account</Text>
            <View style={styles.innerBody}>
                <View style={styles.innerView}>
                    <Text style={styles.subheadText}>Name<Mandatory /></Text>
                    <TextInput
                        value={user.name}
                        style={styles.textInputContainer}
                        onChangeText={text => onChangeValue("name",text)}
                    />
                </View>

                <View style={styles.innerView}>
                    <Text style={styles.subheadText}>Email Address<Mandatory /></Text>
                    <TextInput
                        value={user.email}
                        style={styles.textInputContainer}
                        onChangeText={text => onChangeValue("email", text)}
                    />
                </View>

                <View style={styles.innerView}>
                    <Text style={styles.subheadText}>Nickname</Text>
                    <TextInput
                        value={user.nickName}
                        style={styles.textInputContainer}
                        onChangeText={text => onChangeValue("nickName", text)}
                    />
                </View>
                
            </View>
            {/* <View style={styles.pressableView}>
                <Pressable
                    onPress={onPressFunc}
                    style={checked ? styles.chekBoxSelected : styles.checkBox}
                >
                    {checked ? <Icon name="check" size={22} color="white" /> : null}
                </Pressable>
                <Text style={styles.descText}>Tick this box to confirm you are atleast 18 years old and agree to our terms and conditions.</Text>
            </View> */}
            <View style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10
            }}>
                <TouchableOpacity
                onPress={()=>{setProceed(true)}}
                  style={styles.continueButton}
                >
                    <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient> :
        <CreatePassword setProceed={setProceed} submitUser={submitUser}/>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    headText: {
        fontSize: 20,
        textAlign: "left",
        paddingTop: 50,
        marginLeft: 30,
    },
    innerBody: {
        marginLeft: 10,
        // margin: 40
        // position: "absolute",
        // top: 0,
        // bottom: 0,
        // right: 0,
        // left: 
    },
    innerView: {
        margin: 20
    },
    subheadText: {
        fontSize: 16,
        paddingBottom: 10,
    },
    textInputContainer: {
        height: 50,
        width: "95%",
        borderRadius: 5,
        backgroundColor: "white",
        padding: 10
    },
    mandatoryAsterisk: {
        color: "red"
    },
    checkBox: {
        backgroundColor: "white",
        height: 25,
        width: 25,
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#252f40",
        borderRadius: 5,
        margin: 10,
        paddingTop: 5

    },
    chekBoxSelected: {
        backgroundColor: "red",
        height: 25,
        width: 25,
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 5,
        margin: 10
    },
    pressableView: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "white",
        flexDirection: "row",
        height: 150,
        borderTopWidth: 1,
        borderColor: "#B5B4B4",
        paddingTop: 20,
        justifyContent: "center"
    },
    descText: {
        marginTop: 10,
        fontSize: 14,
        color: "#252f40",
    },
    continueButton: {
        backgroundColor: "#B5B4B4",
        padding: 10,
        paddingLeft: 100,
        paddingRight: 100,
        borderRadius: 5,
        marginBottom: 10
    },
    continueText: {
        color: "white",
        fontSize: 20
    },
    placeHolderStyle: {
        marginLeft: 5,
        textAlign: "center",
        alignItems: "center"
    }
})

export default CreateAccount