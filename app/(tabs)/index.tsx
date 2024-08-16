import React from 'react'
import { Text, View } from 'react-native'
import LandingPage from '../../components/screens/LandingPage'
import UserHome from '../../components/screens/UserHome'
import AddVehicle from '../../components/screens/AddVehicle'
import VehicleDetails from '../../components/screens/VehicleDetails'
import AddSuccess from '../../components/screens/AddSuccess'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import UiTest from '../../components/screens/UiTest'
import InstaClone from '../../components/screens/InstaClone'
import CreateAccount from '../../components/screens/CreateAccount'
import Icon from 'react-native-vector-icons/FontAwesome'
import VerifyPassword from '../../components/screens/VerifyPassword'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    // <InstaClone />
    // <UiTest />


    // <CreateAccount />
    // <LandingPage />
    // <UserHome />
    // <AddSuccess />
    // <VehicleDetails />>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <VerifyPassword />

      // <Tab.Navigator screenOptions={{ headerShown: false }}>
      // <Tab.Navigator screenOptions={({route}) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;
      //     if(route.name === "Home") {
      //       iconName = focused ? 'home' : 'home'
      //     } else if (route.name === 'Refuelling') {
      //       iconName = focused ? 'exchange' : 'exchange'
      //     } else if (route.name === 'Performance') {
      //       iconName = focused ? 'bar-chart' : 'bar-chart'
      //     } else if (route.name === 'Vehicles') {
      //       iconName = focused ? 'motorcycle' : 'motorcycle'
      //     }
      //     return <Icon name = {iconName} size={size} color={color} />
      //   },
      //   headerShown: false,
      //   tabBArActiveTintColor: "tomato"
      // })}>
      //   <Tab.Screen  name="Home" component={LandingPage} />
      //   <Tab.Screen name="Refuelling" component={UserHome} />
      //   <Tab.Screen name="Performance" component={CreateAccount} />
      //   <Tab.Screen name="Vehicles" component={AddVehicle} />
      // </Tab.Navigator>
  )
}

export default App