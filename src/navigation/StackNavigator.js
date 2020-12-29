import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react'
import TabNavigator from './TabNavigator';
import Profile from '../components/Profile';
import EditProfile from '../components/EditProfile';
import Connexion from '../components/Connexion';
import creerCompte from '../components/CreerCompte';
import Acceuil from '../components/Acceuil';




const Stack = createStackNavigator();
export default function StackNav() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Acceuil" component={Acceuil} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="Connexion" component={Connexion} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="CreerCompte" component={creerCompte} options={{ headerShown: false }}></Stack.Screen>
                
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="Edit" component={EditProfile} options={{ headerShown: false }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
