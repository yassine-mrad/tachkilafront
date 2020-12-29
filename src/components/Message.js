import React from 'react';
import {  View,StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import GroupeRejoint from './GroupeRejoint'
import Discussion from './chat/Discussion'
import mesGroupes from './mesGroupes'
import {createStackNavigator} from '@react-navigation/stack'





const Stack=createStackNavigator()
  const StackNavigator=() => {
    
    return(
        <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#00818A"},
              title:"Boite de messages",
             headerTintColor:'#FFFFFF'
          }
          }
          >
        <Stack.Screen name="GroupeRejoint" component={Home} />
        <Stack.Screen name="Discussion" component={Discussion } 
        options={( {route} ) =>({title: route.params.name,
        headerRight:() =>(
          <View style={{marginRight:10}}>
            <Icon name="ellipsis-v" size={22} color="white"/>
          </View>
        )})
        } 
        />
      </Stack.Navigator> 
    )
}
export default StackNavigator

const Top= createMaterialTopTabNavigator()


export const Home =() => {
  
  
    return (

        <Top.Navigator 
        tabBarOptions={{
          activeTintColor: '#00818A', // Couleur d'arrière-plan de l'onglet sélectionné
          // inactiveTintColor: '#C9F6E3', // Couleur d'arrière-plan des onglets non sélectionnés
             // On masque les titres
            showIcon: true,// On informe le TabNavigator qu'on souhaite afficher les icônes définis
            indicatorStyle:{backgroundColor:'#00818A',height:3},
            labelStyle:{fontWeight:'bold'}
            
           }}>
            <Top.Screen name="rejoints" component={GroupeRejoint}  />
            <Top.Screen name="mes Groupes" component={mesGroupes}  />
        </Top.Navigator>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
    }
})
