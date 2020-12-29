import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import ChatItem from './chat/ChatItem'
import chatRooms from '../components/chat/ChatRooms'
import { FlatList } from 'react-native-gesture-handler';
export default function GroupeRejoint(){
    
        return(
            <View>
                <FlatList 
                style={{width:"100%"}}
                data={chatRooms}
                renderItem={({item}) => <ChatItem chatRoom={item} />}
                keyExtractor={(item)=> item.id}
                />
            </View>
        )
    
}


