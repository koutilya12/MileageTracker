import React from 'react'
import { Text, View } from 'react-native'
import LandingPage from '../../components/screens/LandingPage'
import UserHome from '../../components/screens/UserHome'
import UserProfile from '../../components/screens/UserProfile'
import VehicleDetails from '../../components/screens/VehicleDetails'
import AddSuccess from '../../components/screens/AddSuccess'
import InstaClone from '../../components/screens/InstaClone'
import CreateAccount from '../../components/screens/CreateAccount'
import CreatePassword from '../../components/screens/CreatePassword'
import VehicleList from '../../components/screens/VehiclesList'
import UserTitle from '../../components/screens/UserTitle'
import SignUp from '@/components/screens/SignUp'
import SubmitPassword from '@/components/screens/SubmitPassword'
import AddRefuelling from '../../components/screens/AddRefuelling'
import LoadingPage from '../../components/screens/LoadingPage'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

if (__DEV__) {
  require("../../ReactotronConfig");
}

const App = () => {
  return (
    // <InstaClone />
    // <CreateAccount />
    // <LandingPage />
    // <UserHome />
    // <AddSuccess />
    // <VehicleDetails />
    // <VehicleListDetail />
    // <VehicleList />
    // <CreatePassword />
    // <AddRefuelling />
    // <LoadingPage />

      <Stack.Navigator initialRouteName="Loading" screenOptions={{headerShown: false}} >
        <Stack.Screen name="Loading" component={LoadingPage}/>
        <Stack.Screen name="Landing" component={LandingPage}/>
        <Stack.Screen name="UserHome" component={UserHome}/>
        <Stack.Screen name="VehicleDetails" component={VehicleDetails}/>
        <Stack.Screen name="UserTitle" component={UserTitle}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="UserProfile" component={UserProfile}/>
        <Stack.Screen name="CreateAccount" component={CreateAccount}/>
        <Stack.Screen name="CreatePassword" component={CreatePassword}/>
        <Stack.Screen name="SubmitPassword" component={SubmitPassword}/>
        <Stack.Screen name="AddSuccess" component={AddSuccess}/>
        <Stack.Screen name="AddRefuelling" component={AddRefuelling}/>
        <Stack.Screen name="VehicleList" component={VehicleList}/>
      </Stack.Navigator>
  )
}

export default App