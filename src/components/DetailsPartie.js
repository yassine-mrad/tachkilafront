import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';





class DetailsPartie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            place: 'Kalaa Sghira',
            title: 'Les médecins',
            date: '01/12/2020',
            time: '14:00',
            age: '20-25',
            niveau: 'Intermediaire',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua. Up exlaborum incididunt',
            nmax: 10,
            ndispo: 5,
            date: '29/11/2020',
            heure: '15:00',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Liste')}>
                    <MaterialCommunityIcons name="keyboard-backspace" color={'#00818A'} size={50} />
                </TouchableOpacity>
                <ScrollView>
                <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                
                    <View style={styles.item}>
                       
                            <View style={{
                                flexDirection: 'row',
                                paddingBottom: 10,

                            }}>
                                <FontAwesome5 name={'map-marker-alt'} size={20} left={50} />
                                <Text style={{ textAlign: 'left', marginLeft: 5 }}>{this.state.place}</Text>
                            </View>
                            <View style={styles.contenu}>
                                <Text style={styles.text}>{this.state.title}</Text>
                                <Text style={styles.text}>Crée par: Foulen  </Text>
                                <Text>Tranches d'age: {this.state.age}</Text>
                                <Text>Niveau: {this.state.niveau}</Text>
                            </View>
                            <View style={styles.contenu, {
                                position: 'absolute',
                                top: '35%',
                                width: 240,
                                height: 250,
                                marginLeft: '5%',
                                borderWidth: 2,
                                borderColor: '#707070',
                                paddingLeft: 10,
                            }}
                            >

                                <Text style={{ marginBottom: 10, }}>Description:</Text>
                                <Text>{this.state.description}</Text>
                                <Text style={{ marginTop: 10, }}>Nombre de joueurs maximal:{this.state.nmax}</Text>
                                <Text style={{ marginTop: 10, }}>Nombre de joueurs disponible:{this.state.ndispo}</Text>

                            </View>
                            <Text style={{ marginBottom: 10, }}>Date: {this.state.date}</Text>
                            <Text style={{ marginBottom: 10, }}>Heure: {this.state.heure}</Text>
                        
                    </View>
                   

                </Animatable.View>

                </ScrollView>
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


    // footer: {
    //     flex: 2,
    //     backgroundColor: '#fff',
    //     borderTopLeftRadius: 30,
    //     borderTopRightRadius: 30,
    //     paddingVertical: 10,
    //     paddingHorizontal: 25
    // },

    text: {
        paddingLeft: 10,
        color: '#000000',
        fontSize: 16,
        paddingTop: 2,
        marginTop: 2,

        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        textAlign: 'center'

    },
    contenu: {
        flex: 2,

    },
    item: {
        marginRight: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,

        borderRadius: 5,
        backgroundColor: 'white',
        width: 270,
        height: 500,
        padding: 10,
        left: "10%"

    },




})

export default DetailsPartie;