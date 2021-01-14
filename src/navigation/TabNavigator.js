import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Create from '../components/Create';
import Profile from '../components/Profile';
import Message from '../components/Message';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ListeStacckscreen from './ListeStacckscreen';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

const Tab = createBottomTabNavigator()
const TabNavigator = () => {
    return <Tab.Navigator>
        <Tab.Screen name='Liste' component={ListeStacckscreen}
            onIconPressed={ReloadInstructions}
            options={{
                
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}>

        </Tab.Screen>
        <Tab.Screen
            name=' Message'
           component={Message}
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="comment-multiple" color={color} size={26} />
                ),
            }}>

        </Tab.Screen>
        <Tab.Screen
            name='Créer equipe'
            component={Create}
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="plus" color={color} size={26} />
                ),
            }}>

        </Tab.Screen>
        <Tab.Screen
            name='Profil'
            component={Profile}
            options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }}>

        </Tab.Screen>

    </Tab.Navigator>
}

const styles = StyleSheet.create({

})
export default TabNavigator;