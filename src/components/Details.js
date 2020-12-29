import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable'




class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: 'Ben Foulen',
            prenom: 'Foulen',
            email: 'foulen@gmail.com',
            tel: '123456789',
            profession: 'Etudiant',
            dateDeNaissance: '17-01-1994',
            localisation: 'Kalaa Sghira',
            niveau: 'Intermédiaire'
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Liste')}>
                    <MaterialCommunityIcons name="keyboard-backspace" color={'#00818A'} size={50} />
                </TouchableOpacity>
                <View style={styles.iconUser}>
                    <MaterialCommunityIcons name="account-circle" color={'#00818A'} size={80} />
                </View>

                <Animatable.View animation="fadeInUpBig"
                    style={styles.footer}>
                    <ScrollView>
                        <View style={styles.item}>
                            <Text style={styles.text}>Nom : {this.state.nom}</Text>
                            <Text style={styles.text}>Prénom : {this.state.prenom}</Text>
                            <Text style={styles.text}>Adresse email : {this.state.email}</Text>
                            <Text style={styles.text}>Télèphone : {this.state.tel}</Text>
                            <Text style={styles.text}>Date de naissance : {this.state.dateDeNaissance}</Text>
                            <Text style={styles.text}>Localisation : {this.state.localisation}</Text>
                            <Text style={styles.text}>Niveau : {this.state.niveau}</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Edit')}>
                                <Text style={styles.edit} >Modifier mes infos</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.bouton}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Connexion')}>
                                <Text style={styles.deconnexion}>Déconnexion</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </Animatable.View>


            </View>
        )
    }
}
//            


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

export default Details;