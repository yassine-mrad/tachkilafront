import React, { useState,useEffect ,useCallback,useContext} from 'react';
import api from '../../api/tachkila';
import { Context as AuthContext } from '../../context/AuthContext';
import { useRoute } from '@react-navigation/native';
//import liraries

import io from "socket.io-client";
import { GiftedChat } from 'react-native-gifted-chat'
import { PATH } from '../../api/tachkila';



const DiscussionRejoint = (props)=>{
    
    const route=useRoute();
    const { state } = useContext(AuthContext);
   // const name =route.params.name;
    const partieId =route.params.id;
    console.log(partieId); 
    const [users,setUsers]= useState([]);
    const [messages, setMessages] = useState([]);
    const [useer1,setUseer1] =useState([]);
    const [inputMessage,setInputMessage] =useState("");
    useEffect(()=>{ 
        initialisationMessages();
    },[])
    const  initialisationMessages = async ()=>{
        const response = await api.post('/messages',{partieId:partieId});
        console.log(response.data);
        const messagess=response.data;
        const tab=[];
        for(let i=0;i<messagess.length;i++)
        {
            tab.push( {
                _id: messagess[i]._id,
                text: messagess[i].contenue,
                createdAt: messagess[i].date,
                user: { 
                  _id: messagess[i].userId,
                  name: messagess[i].nom,
                },
              })
        }
        tab.reverse();
        setMessages(tab)
        

    }



    useEffect(() => {
        const socket = io(PATH+'/');
        socket.on(partieId.toString(), msg => {
          console.log("msg",msg);
          setMessages(previousMessages => GiftedChat.append(previousMessages, msg))
          
          return () => {
            disconnectSocket();
          }
         });
         
      }, [])

    const onSend = useCallback((messages = []) => {
      console.log("heeeee",state.user);
        const socket = io(PATH+'/');
       
        socket.emit('message', {messages,partieId,user:state.iduser});
        
      }, [])

    return (/*<View style={{flex:1}}>
        {chatMessagess}
        
        
         
            <View style={styles.container}>
            
            <TextInput
              style={{height: 40, borderWidth: 2}}
              autoCorrect={false}
              value={chatMessage}
              onSubmitEditing={() => submitChatMessage()}
              onChangeText={chatMessage => {
                setChatMessage(chatMessage)
              }}
            />
          </View>
          </View>*/  
            <GiftedChat
            renderUsernameOnMessage={true}
              messages={messages}
              onSend={messages => onSend(messages)}
              user={{
                _id: state.iduser,
                name: state.user.data.prenom + ' ' +state.user.data.nom,
              }}
            />
          );

    
}
export default DiscussionRejoint;