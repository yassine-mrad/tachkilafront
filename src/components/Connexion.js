import React,{  useContext,useState }  from 'react';
import { View, StyleSheet, Text, Alert,ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';


import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Context as AuthContext } from '../context/AuthContext' ;


const Connexion = (props) => {

    const [loading,setLoading] = useState(false);

    const { state, signin ,clearErrorMessage  } = useContext(AuthContext);
   const [email,setEmail]=useState('');
   const [motdepasse,setmotdepasse]=useState('');
   const [check_textInputChange,setcheck_textInputChange]=useState(false);
   const [secureTextEntry,setsecureTextEntry]=useState(true);
   const [isValideUser,setisValideUser]=useState(true); 
   const [isValidmotdepasse,setisValidmotdepasse]=useState(true);

// create a component
function textInputChange(val) {
    if (val.trim().length >= 4) {
        setEmail(val);
            setcheck_textInputChange(true);
            setisValideUser(true);
    } else {
            setEmail(val)
            setcheck_textInputChange(false);
            setisValideUser(false);
    }
}

function handlemotdepasseChange(val) {
    if (val.trim().length >= 8) {
        setmotdepasse(val);
            setisValidmotdepasse(true);
    } else {
        setmotdepasse(val);
        setisValidmotdepasse(false);
    }
}

function handleValidUser(val) {
    if (val.trim().length >= 4) {
        setisValideUser(true);
    } else {
        setisValideUser(false);
    }
}
function loginHandle(email, motdepasse) {
    if (email.length == 0 || motdepasse.length == 0) {
        Alert.alert('', 'Informations Incorrects !', [{ text: 'Cancel', onPress: () => console.log('cancel pressed') }, { text: 'ok', onPress: () => console.log('ok pressed') }]);
        return;
    }
    else Alert.alert('Bravo !'); return;
}

if(loading)
    {
        return <View style={{flex: 1,justifyContent: "center",flexDirection: "row",
        justifyContent: "space-around",padding: 10}}>
            <ActivityIndicator size="large" color="#00ff00" /></View>
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Bienvenue ! </Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                {/* <Text style={styles.text_footer}>Login</Text> */}
                <View style={styles.action}>
                    <Icon name="user-o" size={20} style={styles.icon} color='#00EAA1' />
                    <TextInput value={email} placeholder="Votre Login" placeholderTextColor="#666666" style={styles.textInput}
                        autoCapitalize="none" onChangeText={(val) => { textInputChange(val) }}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)} />
                    {check_textInputChange ?
                        <Animatable.View animation="bounceIn">
                            <Icon name="check-circle" color="green" size={20} style={styles.icon} />
                        </Animatable.View>
                        : null}
                </View>
                {isValideUser ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg} > Login doit etre plus que 4 caractères</Text>
                    </Animatable.View>
                }
                {/* <Text style={[styles.text_footer,{marginTop:35}]}>Mot De Passe</Text> */}
                <View style={styles.action}>
                    <Icon name="lock" size={20} color='#00EAA1' style={styles.icon} />
                    <TextInput placeholder="Votre mot de passe" placeholderTextColor="#666666" style={styles.textInput}
                        secureTextEntry={secureTextEntry ? true : false} autoCapitalize="none"
                        onChangeText={(val) => handlemotdepasseChange(val)}
                    />
                    <TouchableOpacity onPress={() => { setsecureTextEntry(!secureTextEntry)}}>
                        {secureTextEntry ?
                            <Icon name="eye-slash" color="grey" size={20} style={styles.icon} />
                            :
                            <Icon name="eye" color="grey" size={20} style={styles.icon} />
                        }
                    </TouchableOpacity>
                </View>
                {isValidmotdepasse ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}> Mot de passe doit etre plus de 8 caractères</Text>
                    </Animatable.View>
                }
                <TouchableOpacity>
                    <Text style={{ color: '#009387', marginTop: 15, paddingLeft: 20 }}>Mot de Passe oublié ?</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn} onPress={async () => { 
                            setLoading(true);
                            await signin({email,motdepasse},props.navigation.navigate)
                            setLoading(false);
                            }}>
                        <LinearGradient
                            colors={['#08d4c4', '#00EAA1']}
                            style={styles.signIn}>
                            <Text style={[styles.textSign, { color: '#fff' }]}>Connexion</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation.navigate("CreerCompte")}
                        style={styles.signUp}>
                        <Text style={[styles.textSign, { color: '#00EAA1' }]}>Créer Un Compte</Text>
                    </TouchableOpacity>
                </View>

            </Animatable.View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00EAA1'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 4,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375A',
        fontSize: 18,
        paddingLeft: 30
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 0
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ff0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#05375A'
    },
    errorMsg: {
        color: '#ff0000',
        fontSize: 14
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    signUp: {
        borderColor: '#00EAA1',
        borderWidth: 1,
        marginTop: 15,
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    icon: {
        marginTop: 12
    }

})

export default Connexion;
