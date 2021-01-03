import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react'

import Liste from '../components/Liste';
import Details from '../components/Details';
import DetailsPartie from '../components/DetailsPartie';




const Stack = createStackNavigator();
export default function ListeStacckscreen() {
    return (
       
            <Stack.Navigator>
                <Stack.Screen name="Liste" component={Liste} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="Details" component={DetailsPartie} options={{ headerShown: false }}></Stack.Screen>
            </Stack.Navigator>
      
    )
}
