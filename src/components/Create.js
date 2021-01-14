import React, { useContext,useState,useEffect } from 'react'
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable'
import { View, StyleSheet, Text, ScrollView ,Button,ActivityIndicator} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-community/picker'
import LinearGradient from 'react-native-linear-gradient'
import Textarea from 'react-native-textarea';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Context as AuthContext } from '../context/AuthContext';
const Create = (props) => {
    const { state, partie, clearErrorMessage } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);


    const [niveau, setNiveau] = useState('Debutant');
    const [dateestime, setdateestime] = useState(new Date(1598051730000));
    const [titre,setTitre]=useState('');
    const [nombre,setNombre]=useState(null);
    const [localisation,setLocalisation]=useState('');
    const [description,setDescription]=useState('');
    const [tranchedage,setTranchedage]=useState('15-20');


    const [isValideTitre,setisValideTitre]=useState(true);
    const [isValideNbjoueurs,setisValideNbjoueurs]=useState(true);
    const [isValideLocalisation,setisValideLocalisation]=useState(true);

    
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setdateestime(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
        showMode('time');
      };







    function handleValidTitre(val) {
        if (val.trim().length >= 4) {
            setisValideTitre(true); 
        } else {
            setisValideTitre(false);
        }
    }
    function handleValidLocalisation(val) {
        if (val.trim().length >= 4) {
            setisValideLocalisation(true); 
        } else {
            setisValideLocalisation(false);
        }
    }
    function handleValidNbjoueurs(val) {
        if ((val<= 20)&&(val>=8)) {
            setisValideNbjoueurs(true); 
        } else {
            setisValideNbjoueurs(false);
        }
    }
    const [userId,setUserId] =useState(null);
    useEffect(() => {
        setTimeout(    async () => {
           
            const user = await AsyncStorage.getItem('iduser');
            setUserId(user);
    
        
       
    },0)
    
    
    }, [state]);
    if(loading)
    {
        return <View style={{flex: 1,justifyContent: "center",flexDirection: "row",
        justifyContent: "space-around",padding: 10}}>
            <ActivityIndicator size="large" color="#00ff00" /></View>
    }else
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Créer Une Equipe!</Text>
            </View>
            <Animatable.View animation="fadeInUpBig"
                style={styles.footer}>
                <ScrollView>

                    <View style={{
                        flexDirection: 'row', borderBottomWidth: 1,
                        borderBottomColor: '#f2f2f2',
                        paddingBottom: 5
                    }}>

                        <TextInput
                            placeholder="Nom de l'équipe"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(titre) => {
                                setTitre(titre)
                            }}
                            onEndEditing={(e) => handleValidTitre(e.nativeEvent.text)}
                        />
                        
                    
                    </View>
                    {isValideTitre ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg} >Titre doit contenir plus que 5 caractères</Text>
                        </Animatable.View>
                    }

                    <View style={styles.action}>
                        <Picker
                            selectedValue={niveau}
                            style={{ height: 50, width: 150, color: '#05375a' }}
                            onValueChange={(itemValue, itemIndex) =>{setNiveau(itemValue)}
                            }
                        >

                            <Picker.Item label="Débutant" value="debutant" />
                            <Picker.Item label="Intérmediaire" value="intermediaire" />
                            <Picker.Item label="Avancé" value="avancé" />
                        </Picker>
                    </View>

                    <View style={styles.action}>

                        <TextInput
                            placeholder="Nombre de joueurs"
                            style={styles.textInput}
                            keyboardType="numeric"
                            autoCapitalize="none"
                            onChangeText={(nombre) => setNombre(nombre)}
                            onEndEditing={(e) => handleValidNbjoueurs(e.nativeEvent.text)}

                        />
                       
                    </View>
                    {isValideNbjoueurs ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg} >Minimum 8 et maximum 20</Text>
                        </Animatable.View>
                    }
                    <View style={styles.action}>
                        <Picker
                            selectedValue={tranchedage}
                            style={{ height: 50, width: 150, color: '#05375a' }}
                            onValueChange={(itemValue, itemIndex) =>{setTranchedage(itemValue)}
                            }
                        >

                            <Picker.Item label="15-20" value="15-20" />
                            <Picker.Item label="20-25" value="20-25" />
                            <Picker.Item label="25-30" value="25-30" />
                        </Picker>
                    </View>


                    <View style={styles.action}>

                    <Picker
                            selectedValue={localisation}
                            style={{ height: 50, width: 150, color: '#05375a' }}
                            onValueChange={(itemValue, itemIndex) => { setLocalisation(itemValue) }
                            }
                        >

                            <Picker.Item label="Ariana" value="ariana" />
                            <Picker.Item label="Beja" value="beja" />
                            <Picker.Item label="Ben Arous" value="ben arous" />
                            <Picker.Item label="Bizerte" value="bizerte" />
                            <Picker.Item label="Gabes" value="gabes" />
                            <Picker.Item label="Gafsa" value="gafsa" />
                            <Picker.Item label="Jendouba" value="jendouba" />
                            <Picker.Item label="Kairouan" value="kairouan" />
                            <Picker.Item label="kasserine" value="kasserine" />
                            <Picker.Item label="Kébili" value="kebili" />
                            <Picker.Item label="Le Kef" value="le kef" />
                            <Picker.Item label="Mahdia" value="mahdia" />
                            <Picker.Item label="Manouba" value="manouba" />
                            <Picker.Item label="Médenine" value="medenine" />
                            <Picker.Item label="Monastir" value="monastir" />
                            <Picker.Item label="Sfax" value="sfax" />
                            <Picker.Item label="Sid Bouzid" value="sidi bouzid" />
                            <Picker.Item label="Siliana" value="siliana" />
                            <Picker.Item label="Sousse" value="sousse" />
                            <Picker.Item label="Tataouine" value="tataouine" />
                            <Picker.Item label="Tozeur" value="tozeur" />
                            <Picker.Item label="Tunis" value="tunis" />
                            <Picker.Item label="Zaghouan" value="zaghouan" />

                        </Picker>
                        
                    </View>
                   


                    <View style={styles.action}>
                    <View>
      <View>
        <TouchableOpacity onPress={showDatepicker}>
            <Text style={{ color: '#05375a', marginBottom: 10 }}>Date de la partie</Text></TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity onPress={showTimepicker}><Text style={{ color: '#05375a', marginBottom: 10 }}>Heure de la partie</Text></TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={dateestime}
          mode={mode}
          minimumDate={new Date()}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
                    </View>

                    <Textarea
                        containerStyle={styles.textareaContainer}
                        style={styles.textarea}

                        maxLength={120}
                        placeholder={'Description'}
                        onChangeText={(description) => setDescription(description)}

                    />




                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={async () => {
                                console.log({userId,titre,nombre,niveau,dateestime,localisation,description,tranchedage })
                                setLoading(true);
                                const a=Number(nombre);
                                await partie({userId,titre,a,niveau,dateestime,localisation,description,tranchedage }, props.navigation.navigate)

                                setLoading(false);
                            }}
                          
                        >
                            <LinearGradient
                                colors={['#08d4c4', '#00EAA1']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff'
                                }]}>Créer Une Equipe</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            style={[styles.signIn, {
                                borderColor: '#00EAA1',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={{
                                color: '#009387'
                            }}>Annuler</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </Animatable.View>



        </View>
    )


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00EAA1'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 4,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 25
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: 12,
        paddingLeft: 10,
        color: '#05375a'
    },
    button: {
        alignItems: 'center',
        marginTop: 20
    },
    signIn: {
        width: 270,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    icon: {
        marginTop: 25
    },
    textS: {
        justifyContent: 'center',
        marginTop: 9,
        color: 'grey'
    },
    textareaContainer: {
        height: 180,
        padding: 5,
        backgroundColor: '#F5FCFF',
    },
    textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        color: '#333',
    },
    errorMsg: {
        color: '#ff0000',
        fontSize: 14
    },


})
export default Create;