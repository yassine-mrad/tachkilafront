import React from 'react'
import { View, StyleSheet, Dimensions, Text, StatusBar } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Animatable from 'react-native-animatable'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'

export default class Acceuil extends React.Component {
    render() {
        return (

            <View style={styles.container}>
                <StatusBar backgroundColor='#009387' barStyle="light-content" />
                <View style={styles.header}>
                    <Animatable.Image
                        animation="bounceIn"
                        source={require('../components/logo.png')}
                        style={styles.logo}
                        resizeMode="stretch" />
                </View>
                <Animatable.View style={styles.footer} animation="fadeInUpBig">
                    <Text style={styles.text}>Organiser vos Match avec TACHKILA</Text>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("Connexion")}  >
                            <LinearGradient
                                colors={['#08d4c4', '#00EAA1']}
                                style={styles.commencer}
                            >
                                <Text style={styles.texte}>Commencer</Text>
                                <MaterialIcons
                                    name="navigate-next"
                                    color='#fff'
                                    size={25} />

                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        )

    }
}

const { height } = Dimensions.get("screen")
const height_logo = height * 0.28
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
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    text: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    commencer: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',


    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30
    },
    texte: {
        color: '#fff',
        fontWeight: 'bold'
    }
})