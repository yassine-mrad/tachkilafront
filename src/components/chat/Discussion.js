import React from 'react'
import { Text, View,ImageBackground }from 'react-native'
import {useRoute} from '@react-navigation/native'
import MessageItem from './MessageItem'
import { FlatList } from 'react-native-gesture-handler'
import chats from './Chats'
import InputBox from './InputBox'
const Discussion = () =>{
    const route = useRoute();
    return (
        <View>
            <ImageBackground style={{width:'100%', height:'100%'}}source={require('../../components/bg.jpg')}>
            <FlatList 
            data={chats.messages}
            renderItem={({item}) => <MessageItem message={item} />}
           inverted/>
           <InputBox />
            </ImageBackground>
        
        </View>
    )
}


export default Discussion;