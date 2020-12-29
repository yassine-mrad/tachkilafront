import React from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native'
import * as Animatable from 'react-native-animatable'


import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            check_textInputChange: false,
            secureTextEntry: true,
            isValideUser: true,
            isValidPassword: true
        }

    }

    textInputChange = (val) => {
        if (val.trim().length >= 4) {
            this.setState({
                ...this.state,
                username: val,
                check_textInputChange: true,
                isValideUser: true
            });
        } else {
            this.setState({
                ...this.state,
                username: val,
                check_textInputChange: false,
                isValideUser: false
            });
        }
    }

    handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            this.setState({
                ...this.state,
                password: val,
                isValidPassword: true
            });
        } else {
            this.setState({
                ...this.state,
                password: val,
                isValidPassword: false
            });
        }
    }

    handleValidUser = (val) => {
        if (val.trim().length >= 4) {
            this.setState({
                ...this.state,
                isValideUser: true
            });
        } else {
            this.setState({
                ...this.state,
                isValideUser: false
            });
        }
    }
    loginHandle = (username, password) => {
        if (username.length == 0 || password.length == 0) {
            Alert.alert('', 'Informations Incorrects !', [{ text: 'Cancel', onPress: () => console.log('cancel pressed') }, { text: 'ok', onPress: () => console.log('ok pressed') }]);
            return;
        }
        else Alert.alert('Bravo !'); return;
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Bienvenue ! </Text>
                </View>
                <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                    {/* <Text style={styles.text_footer}>Login</Text> */}
                    <View style={styles.action}>
                        <Icon name="user-o" size={20} style={styles.icon} color='#00EAA1' />
                        <TextInput placeholder="Votre Login" placeholderTextColor="#666666" style={styles.textInput}
                            autoCapitalize="none" onChangeText={(val) => { this.textInputChange(val) }}
                            onEndEditing={(e) => this.handleValidUser(e.nativeEvent.text)} />
                        {this.state.check_textInputChange ?
                            <Animatable.View animation="bounceIn">
                                <Icon name="check-circle" color="green" size={20} style={styles.icon} />
                            </Animatable.View>
                            : null}
                    </View>
                    {this.state.isValideUser ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg} > Login doit etre plus que 4 caractères</Text>
                        </Animatable.View>
                    }
                    {/* <Text style={[styles.text_footer,{marginTop:35}]}>Mot De Passe</Text> */}
                    <View style={styles.action}>
                        <Icon name="lock" size={20} color='#00EAA1' style={styles.icon} />
                        <TextInput placeholder="Votre mot de passe" placeholderTextColor="#666666" style={styles.textInput}
                            secureTextEntry={this.state.secureTextEntry ? true : false} autoCapitalize="none"
                            onChangeText={(val) => this.handlePasswordChange(val)}
                        />
                        <TouchableOpacity onPress={() => { this.setState({ ...this.state, secureTextEntry: !this.state.secureTextEntry }) }}>
                            {this.state.secureTextEntry ?
                                <Icon name="eye-slash" color="grey" size={20} style={styles.icon} />
                                :
                                <Icon name="eye" color="grey" size={20} style={styles.icon} />
                            }
                        </TouchableOpacity>
                    </View>
                    {this.state.isValidPassword ? null :
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}> Mot de passe doit etre plus de 8 caractères</Text>
                        </Animatable.View>
                    }
                    <TouchableOpacity>
                        <Text style={{ color: '#009387', marginTop: 15, paddingLeft: 20 }}>Mot de Passe oublié ?</Text>
                    </TouchableOpacity>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn} onPress={() => { this.props.navigation.navigate("TabNavigator")}}>
                            <LinearGradient
                                colors={['#08d4c4', '#00EAA1']}
                                style={styles.signIn}>
                                <Text style={[styles.textSign, { color: '#fff' }]}>Connexion</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("CreerCompte")}
                            style={styles.signUp}>
                            <Text style={[styles.textSign, { color: '#00EAA1' }]}>Créer Un Compte</Text>
                        </TouchableOpacity>
                    </View>

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