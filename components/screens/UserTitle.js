import React from 'react'
import {
    Text,
    View
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AddVehicle from '../../components/screens/AddVehicle'
import CreateAccount from '../../components/screens/CreateAccount'
import VehicleList from '../../components/screens/VehiclesList'
import UserHome from '../../components/screens/UserHome'
import Refuelling from '../../components/screens/RefuellingDetails'
import Performance from '../../components/screens/PerformanceTab'
import Icon from 'react-native-vector-icons/FontAwesome'

const UserTitle = ({route}) => {

    const Tab = createBottomTabNavigator()

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Home") {
                    iconName = focused ? 'home' : 'home'
                } else if (route.name === 'Refuelling') {
                    iconName = focused ? 'exchange' : 'exchange'
                } else if (route.name === 'Performance') {
                    iconName = focused ? 'bar-chart' : 'bar-chart'
                } else if (route.name === 'Vehicles') {
                    iconName = focused ? 'motorcycle' : 'motorcycle'
                }
                return <Icon name={iconName} size={size} color={color} />
            },
            headerShown: false
        })}>
            <Tab.Screen name="Home" component={UserHome} />
            <Tab.Screen name="Refuelling" component={Refuelling} />
            <Tab.Screen name="Performance" component={Performance} />
            <Tab.Screen name="Vehicles" component={VehicleList} />
        </Tab.Navigator>
    )
}

export default UserTitle