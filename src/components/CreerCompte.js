import React,{useState} from 'react'

import * as Animatable from 'react-native-animatable'
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import DatePicker from 'react-native-datepicker'
import { Picker } from '@react-native-community/picker'
import LinearGradient from 'react-native-linear-gradient'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
//import DatePicker from '@react-native-community/datetimepicker'
export default class creerCompte extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirm_password: '',
            check_textInputChange: false,
            secureTextEntry: true,
            confirm_secureTextEntry: true,
            select: 'niveau'
        }
    }

    textInputChange = (val) => {
        if (val.length !== 0) {
            this.setState({
                ...this.state,
                username: val,
                check_textInputChange: true
            });
        } else {
            this.setState({
                ...this.state,
                username: val,
                check_textInputChange: false
            });
        }
    }
    handlePasswordChange = (val) => {
        this.setState({
            ...this.state,
            password: val
        });
    }
    handleConfirmPasswordChange = (val) => {
        this.setState({
            ...this.state,
            confirm_password: val
        });
    }
    
    render() {
        

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Créer Un Compte !</Text>
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
                                placeholder="Nom"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => this.textInputChange(val)}
                            />
                            {this.state.check_textInputChange ?
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
                                onChangeText={(val) => this.textInputChange(val)}
                            />
                            {this.state.check_textInputChange ?
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
                                onChangeText={(val) => this.textInputChange(val)}
                            />
                            {this.state.check_textInputChange ?
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
                                onChangeText={(val) => this.textInputChange(val)}
                            />
                            {this.state.check_textInputChange ?
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
                                onChangeText={(val) => this.textInputChange(val)}
                            />
                            {this.state.check_textInputChange ?
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
                                onChangeText={(val) => this.textInputChange(val)}
                            />
                            {this.state.check_textInputChange ?
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
                                placeholder="Date de Naissance"
                                style={{ width: 200 }}
                                mode="date"
                           
                                format="YYYY-MM-DD "
                                minDate="2006-01-01"
                                maxDate="1970-01-01"
                                
                                
                                confirmBtnText="Confirmer"
                                cancelBtnText="Annuler"
                                

                            />
                            
                        </View>
                        <View style={styles.action}>
                            <Picker
                                selectedValue={this.state.niveau}
                                style={{ height: 50, width: 150, color: '#05375a' }}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ niveau: itemValue })
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
                                secureTextEntry={this.state.secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => this.handlePasswordChange(val)}
                            />
                            <TouchableOpacity
                                onPress={() => { { this.setState({ ...this.state, secureTextEntry: !this.state.secureTextEntry }) } }}
                            >
                                {this.state.secureTextEntry ?
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
                                secureTextEntry={this.state.confirm_secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(val) => this.handleConfirmPasswordChange(val)}
                            />
                            <TouchableOpacity
                                onPress={() => { { this.setState({ ...this.state, confirm_secureTextEntry: !this.state.confirm_secureTextEntry }) } }}
                            >
                                {this.state.secureTextEntry ?
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
                                onPress={() => this.props.navigation.navigate('TabNavigator')}
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
                                onPress={() => this.props.navigation.goBack()}
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
        )

    }
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
    }


})