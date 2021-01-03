import { View, StyleSheet, Text} from 'react-native';
import React from 'react';
import ChatItem from './chat/ChatItem'
import chatRooms from '../components/chat/ChatRooms'
import { FlatList } from 'react-native-gesture-handler';


export default function mesGroupes(){
    
        return(
            <View>
                <FlatList 
                data={chatRooms}
                renderItem={({item}) => <ChatItem chatRoom={item} />}
                keyExtractor={(item)=> item.id}
                />
            </View>
        )
    
}


