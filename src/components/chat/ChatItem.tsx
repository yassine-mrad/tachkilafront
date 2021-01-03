import React from 'react'
import ChatRoom from './types'
import { View, Text, Image, StyleSheet} from 'react-native'
import moment from "moment";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native'


const ChatItem=(props:ChatRoom) =>{
const {chatRoom}=props;
const user= chatRoom.users[1]
console.log(chatRoom.users[1].name)
const navigation= useNavigation()
const onClick= ()=>{
   navigation.navigate('Discussion', { id: chatRoom.id ,name:chatRoom.users[1].name})
}
return (
    <TouchableOpacity onPress={onClick}>
    <View style={styles.container}>
        <View style={styles.leftContainer}>
        <Image source={{uri: user.imageUri}} style={styles.avatar} />
       
        
        <View style={styles.midContainer}>
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.content}>{chatRoom.lastMessage.content}</Text>
        </View>
        <Text style={styles.time}>{moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
        </View>
        
    </View> 
    </TouchableOpacity>
)
}

export default ChatItem;
 const styles = StyleSheet.create({
    avatar:{
        height:60,
        width:60,
        marginRight:15,
        borderRadius:50
    },
    container:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        padding:10
    },
    midContainer:{
        justifyContent:'space-around'
    },
    leftContainer:{
        flexDirection:'row'
    },
    userName:{
        fontWeight:"bold",
        fontSize:17
    },
    content:{
        fontSize:16,
        color:'grey'
    },
    time:{
        fontSize:14,
        color:'grey',
        justifyContent:'flex-end'
    }
 })