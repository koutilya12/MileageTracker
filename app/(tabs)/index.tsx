import React from 'react'
import { Text, View } from 'react-native'
import LandingPage from '../../components/screens/LandingPage'
import UserHome from '../../components/screens/UserHome'
import UserProfile from '../../components/screens/UserProfile'
import AddVehicle from '../../components/screens/AddVehicle'
import VehicleDetails from '../../components/screens/VehicleDetails'
import AddSuccess from '../../components/screens/AddSuccess'
import InstaClone from '../../components/screens/InstaClone'
import CreateAccount from '../../components/screens/CreateAccount'
import VerifyPassword from '../../components/screens/VerifyPassword'
import VehicleList from '../../components/screens/VehiclesList'
import FlatListTest from '../../components/screens/FlatListTest'
import UserTitle from '../../components/screens/UserTitle'
import SignUp from '@/components/screens/SignUp'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    // <InstaClone />
    // <CreateAccount />
    // <LandingPage />
    // <UserHome />
    // <AddSuccess />
    // <VehicleDetails />
    // <FlatListTest />
    // <VehicleList />
    // <VerifyPassword />

      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="Landing" component={LandingPage}/>
        <Stack.Screen name="UserHome" component={UserHome}/>
        <Stack.Screen name="VehicleDetails" component={VehicleDetails}/>
        <Stack.Screen name="UserTitle" component={UserTitle}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="UserProfile" component={UserProfile}/>
        <Stack.Screen name="CreateAccount" component={CreateAccount}/>
      </Stack.Navigator>
  )
}

export default App