import React, { useContext, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable'
import { Context as AuthContext } from '../context/AuthContext' ;

const Profile = (props) => {
    const { signout  } = useContext(AuthContext);
         const   [nom,setnom]=useState('Ben Foulen');
         const   [prenom,setprenom]=useState('Foulen');
         const   [email,setemail]=useState('foulen@gmail.com');
         const  [tel,settel]=useState('123456789');
         const   [profession,setprofession]=useState('Etudiant');
            const   [dateDeNaissance,setdateDeNaissance]=useState('17-01-1994');
            const  [localisation,setlocalisation]=useState('Kalaa Sghira');
            const  [niveau,setniveau]=useState('Intermédiaire');
    return (
        <View style={styles.container}>
            
            <View style={styles.iconUser}>
                <MaterialCommunityIcons name="account-circle" color={'#00818A'} size={80} />
            </View>

            <Animatable.View animation="fadeInUpBig"
                style={styles.footer}>
                <ScrollView>
                    <View style={styles.item}>
                        <Text style={styles.text}>Nom : {nom}</Text>
                        <Text style={styles.text}>Prénom : {prenom}</Text>
                        <Text style={styles.text}>Adresse email : {email}</Text>
                        <Text style={styles.text}>Télèphone : {tel}</Text>
                        <Text style={styles.text}>Date de naissance : {dateDeNaissance}</Text>
                        <Text style={styles.text}>Localisation : {localisation}</Text>
                        <Text style={styles.text}>Niveau : {niveau}</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Edit')}>
                            <Text style={styles.edit} >Modifier mes infos</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bouton}>
                        <TouchableOpacity onPress={() => signout(props.navigation.navigate)}>
                            <Text style={styles.deconnexion}>Déconnexion</Text>
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
        backgroundColor: '#00EFA1',
        paddingTop: 10,

    },
    iconUser: {
        flex: 0.5,
        alignSelf: 'center',

        marginHorizontal: 3
    },

    footer: {
        flex: 2,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 25
    },

    text: {
        paddingLeft: 10,
        color: '#000000',
        fontSize: 16,
        paddingTop: 5,
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5

    },
    edit: {
        paddingTop: 20,
        color: '#00EAA1',
        fontSize: 16,
        textAlign: 'center',
    },
    deconnexion: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    bouton: {
        height: 50,
        backgroundColor: '#00818A',
        borderRadius: 50,
        paddingTop: 10,
        marginTop: 30,

    },
    
})

//make this component available to the app
export default Profile;
