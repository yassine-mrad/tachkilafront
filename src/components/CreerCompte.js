//import liraries
import React ,{  useContext,useState }  from 'react'

import * as Animatable from 'react-native-animatable'
import { View, StyleSheet, Text, ScrollView ,ActivityIndicator} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import DatePicker from 'react-native-datepicker'
import { Picker } from '@react-native-community/picker'
import LinearGradient from 'react-native-linear-gradient'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { Context as AuthContext } from '../context/AuthContext' ;

// create a component
const CreerCompte = (props) => {

    const { state, signup ,clearErrorMessage  } = useContext(AuthContext);
    
    const [loading,setLoading] = useState(false);
    
    const [nom,setNom] = useState('');
    const [prenom,setPrenom] = useState('');
    const [email,setemail] = useState('');
    const [motdepasse,setmotdepasse] = useState('');
    const [confirm_motdepasse,setConfirm_motdepasse] = useState('');
    const [datenaissance,setDatenaissance] = useState('2000-01-01');
    const [localisation,setLocalisation] = useState('');
    const [telephone,setTelephone] = useState('');
    const [profession,setProfession] = useState('');
    const [niveau,setniveau] = useState('niveau');
    const [textchange,settextchange] = useState(false);
    const [secureTextEntry,setSecureTextEntry] = useState(true);
    const [confirm_secureTextEntry,setConfirm_secureTextEntry] = useState(true);
    if(loading)
    {
        return <View style={{flex: 1,justifyContent: "center",flexDirection: "row",
        justifyContent: "space-around",padding: 10}}>
            <ActivityIndicator size="large" color="#00ff00" /></View>
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Créer Un Compte !</Text>
            </View>
            <Animatable.View animation="fadeInUpBig"
                style={styles.footer}>
                <ScrollView 
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >

                    <View style={{
                        flexDirection: 'row', borderBottomWidth: 1,
                        borderBottomColor: '#f2f2f2',
                        paddingBottom: 5
                    }}>

                        <TextInput
                            placeholder="Nom"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(nom) =>{ 
                                setNom(nom)
                            }}
                        />
                        {textchange ?
                            <Animatable.View
                                animation="bounceIn">
                                <Icon
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View> : null}
                    </View>

                    <View style={styles.action}>

                        <TextInput
                            placeholder="Prénom"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(prenom) =>{ 
                                setPrenom(prenom)
                            }}
                        />
                        {textchange ?
                            <Animatable.View
                                animation="bounceIn">
                                <Icon
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View> : null}
                    </View>

                    <View style={styles.action}>

                        <TextInput
                            placeholder="Adresse Email"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(email) =>{ 
                                setemail(email)
                            }}
                        />
                        {textchange ?
                            <Animatable.View
                                animation="bounceIn">
                                <Icon
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View> : null}
                    </View>

                    <View style={styles.action}>

                        <TextInput
                            placeholder="Numéro de Télephone"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(telephone) =>{ 
                                setTelephone(telephone)
                            }}
                            keyboardType={'numeric'} 
                        />
                        {textchange ?
                            <Animatable.View
                                animation="bounceIn">
                                <Icon
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View> : null}
                    </View>

                    <View style={styles.action}>

                        <TextInput
                            placeholder="Profession"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(profession) =>{
                                setProfession(profession)
                            }}
                        />
                        {textchange ?
                            <Animatable.View
                                animation="bounceIn">
                                <Icon
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View> : null}
                    </View>

                    <View style={styles.action}>

                        <TextInput
                            placeholder="Localisation"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(localisation) =>{
                                setLocalisation(localisation)
                            }}
                        />
                        {textchange ?
                            <Animatable.View
                                animation="bounceIn">
                                <Icon
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View> : null}
                    </View>

                    <View style={styles.action}>
                    <DatePicker
    style={{width: 200}}
    date={datenaissance}
    mode="date"
    format="YYYY-MM-DD"
    minDate="1950-01-01"
    maxDate="2007-01-01"
    confirmBtnText="Confirm"
    cancelBtnText="Cancel"
    customStyles={{
      dateIcon: {
        position: 'absolute',
        left: 0,
        top: 4,
        marginLeft: 50
      },
      dateInput: {
        marginLeft: 96
      }
    }}
    onDateChange={(date) => setDatenaissance(date) }
  />
                    </View>
                    <View style={styles.action}>
                        <Picker
                            selectedValue={niveau}
                            style={{ height: 50, width: 150, color: '#05375a' }}
                            onValueChange={(itemValue, itemIndex) =>{setniveau(itemValue) }
                            }
                        >

                            <Picker.Item label="Débutant" value="debutant" />
                            <Picker.Item label="Intérmediaire" value="intermediaire" />
                            <Picker.Item label="Avancé" value="avancé" />
                        </Picker>
                    </View>
                    <View style={styles.action}>
                        <Icon
                            name="lock"
                            color="#05375a"
                            size={20}
                            style={styles.icon}
                        />
                        <TextInput
                            placeholder="Mot de Passe"
                            secureTextEntry={secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => setmotdepasse(val)}
                        />
                        <TouchableOpacity
                            onPress={() => {  setSecureTextEntry(!secureTextEntry) } }
                        >
                            {secureTextEntry ?
                                <Icon
                                    style={styles.icon}
                                    name="eye-slash"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Icon
                                    style={styles.icon}
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>


                    <View style={styles.action}>
                        <Icon
                            style={styles.icon}
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Confirmer Votre mot de passe"
                            secureTextEntry={confirm_secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => setConfirm_motdepasse(val)}
                        />
                        <TouchableOpacity
                            onPress={() => { setConfirm_secureTextEntry(!confirm_secureTextEntry) }}
                        >
                            {secureTextEntry ?
                                <Icon
                                    style={styles.icon}
                                    name="eye-slash"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Icon
                                    style={styles.icon}
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>

                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={async () => {
                                
                                setLoading(true);
                                await signup({nom,prenom,email,motdepasse,datenaissance,localisation,telephone,profession,niveau},props.navigation.navigate)
                                
                                setLoading(false);
                        }}
                        >                           
                            <LinearGradient
                                colors={['#08d4c4', '#00EAA1']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff'
                                }]}>Créer Un Compte</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <View style={styles.textS}>
                            <Text style={styles.textS}>Si vous avez dèja un Compte</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => props.navigation.goBack()}
                            style={[styles.signIn, {
                                borderColor: '#00EAA1',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#009387'
                            }]}>Connexion</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </Animatable.View>



        </View>
    );
};

// define your styles
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
    }


})

//make this component available to the app
export default CreerCompte;
