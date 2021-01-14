import React from 'react'
import {  View,ImageBackground }from 'react-native'
import moment from 'moment'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import api from '../../api/tachkila';
import {io} from 'socket.io-client'
import {StyleSheet,Text} from 'react-native'
import Icon  from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';
import { useEffect, useState ,useContext} from 'react';
import { Context as AuthContext } from '../../context/AuthContext';
import { useRoute } from '@react-navigation/native';



const DiscussionRejoint = ()=>{
    const route=useRoute();
    const { state} = useContext(AuthContext);
    console.log(state)
    console.log(route)
   // const name =route.params.name;
    const partieId =route.params.id;

    const [useer1,setUseer1] =useState([]);
    const [messages,setMessages] =useState([]);
    const [inputMessage,setInputMessage] =useState("");

   

    const loadMessages =() =>{
        console.log(partieId)
        api.post('/messages',{partieId:partieId}).then(res =>{
            setMessages(res.data.reverse());
            
            // console.log('/messages/index', res.data);

            api.post('/userName',{_id:state.userid}).then(res =>{                
               // console.log('/messages/index', res.data);
                setUseer1(res.data.nom+" "+res.data.prenom)
            })
        })
    
    }

    


    const onSocket =() =>{
        const socket = io('https://2853fcdc1fd7.ngrok.io/');
         
        socket.on('message',(res)=>{
             
            setMessages(messages=>[res.contenue,...messages]);
            console.log('onSocket',res.contenue);
            //console.log(messages)
         })
        
    }
    const submitMessage=()=>{
        
        if(inputMessage.length ===0){
            return;
        }
        const Data={
           userId:state.userid,
           partieId:partieId,
            contenue:inputMessage
        }        
        api.post('/message',Data).then(()=>{
        })
        setInputMessage("");
    }
    useEffect(()=>{
        loadMessages();
        onSocket();
        
       
    },[true]);
    

    const RenderItem=(item)=>{
       // console.log("msguser",item.userId)
           // console.log("userconnected",state.userid)
          
        return (
            <View >
                <View style={[styles.messageBox,
                {backgroundColor:item.userId===state.userid ? '#DCF8C5':'#e5e5e5',marginLeft: item.userId===state.userid ? 50 : 0 ,
            marginRight: item.userId===state.userid ? 0:50} ]}>
                  { item.userId!==state.userid && <Text style={styles.name}>{useer1}</Text>}
                        <Text style={styles.content}> {item.contenue}</Text>
                        <Text style={styles.time}>{moment(item.date).fromNow()}</Text>
                 </View>
        
        </View>
        )
    }
    
  
        
    return (
            <View  style={{marginBottom:10}}>
             <ImageBackground style={{width:'100%', height:'100%'}}source={require('../../../assets/bg.jpg')}>
            <FlatList 
            style={{flex:1,padding:10,marginBottom:10}}
            data={messages}
           inverted
           scrollEnabled
            renderItem={({item}) => RenderItem (item) }
           keyExtractor={(item, index) => 'key'+index}
           
        />

             <View style={styles.container}>
                <TextInput style={styles.textInput} multiline placeholder="Votre Message" 
                onChangeText={e=>setInputMessage(e)}
                value={inputMessage}
                ></TextInput>
                <TouchableOpacity onPress={submitMessage}>
                <Icon style={{marginTop:18}}name="send" size={24} color="#00818A" />
                </TouchableOpacity>
                
        </View>
            </ImageBackground> 
        
        </View>
    )
}


export default DiscussionRejoint;
const styles=StyleSheet.create({
    container:{
        flexDirection:'row'
    

        
    },
    messageBox:{
        borderRadius:5,
        padding:8,
        marginBottom:8
    },
   textInput:{
       margin:10,
       backgroundColor:'white',
       borderRadius:40,
       height:40,
       width:'83%'
   },
 
time:{
    alignSelf:'flex-end',
    color:'grey'
},
content:{
    fontSize:15,
    fontStyle:'italic'   
},
name:{
    color:'#00818A',
    fontWeight:'bold',
    marginBottom:5
}
})