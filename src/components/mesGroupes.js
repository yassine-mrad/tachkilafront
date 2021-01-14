import { View, StyleSheet, Text} from 'react-native';
import React from 'react';
import ChatItem from './chat/ChatItemMesgrp'
import { FlatList } from 'react-native-gesture-handler';
import api from '../api/tachkila';
import { Context as AuthContext } from '../context/AuthContext';
import { useEffect, useState ,useContext} from 'react';

export default function mesGroupes(){
    const [user,setUser] =useState();
    // const userId =  AsyncStorage.getItem('iduser');
    const { state} = useContext(AuthContext);
    console.log(state)
    
    const [parties,setParties] =useState([]);
    
  
    const loadParties =() =>{
        api.post('/mesParties',{userId:state.iduser}).then(res =>{
            console.log(res.data)
           setParties(res.data)
           
        })
    }

   
    
    useEffect(()=>{
        loadParties();
        setTimeout(    async () => {
                  setUser(userId._W) 
                    console("effect",userId)
                 },0)
    },[]);

    


        return(
            <View>
                <FlatList 
                data={parties}
                renderItem={({item}) => <ChatItem partie={item} />}
                keyExtractor={(item)=> item._id}
                />
            </View>
        )
    
}

