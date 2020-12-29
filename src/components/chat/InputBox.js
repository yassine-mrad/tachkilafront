import React from 'react'
import { View } from 'react-native-animatable';
import {StyleSheet} from 'react-native'
import Icon  from 'react-native-vector-icons/FontAwesome';
import { TextInput } from 'react-native-gesture-handler';




const InputBox= () =>{
    return(
        <View style={styles.container}>
                <TextInput style={styles.textInput} multiline placeholder="Votre Message"></TextInput>
                <Icon style={{marginTop:18}}name="send" size={24} color="#00818A" />
                
        </View>
    )
}

export default InputBox;

const styles=StyleSheet.create({
    container:{
       
    flexDirection:'row',

        
    },
   textInput:{
       margin:10,
       backgroundColor:'white',
       borderRadius:40,
       height:40,
       width:'83%'
   }
})