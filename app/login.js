import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Index() {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        'Itim': require('../assets/fonts/Itim-Regular.ttf')
    });
    const [fontsLoaded2] = useFonts({
        'Inter': require('../assets/fonts/Inter.ttf')
    });

    if (!fontsLoaded) {
        return null;
    }
    if (!fontsLoaded2) {
        return null;
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/images/Login.png')} style={styles.container}>
                <View style={styles.containerLogo}>
                    <Animatable.Image
                        source={require("../assets/images/logo.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />

                </View>

                <View style={styles.form}>

                    <View style={styles.Login}>

                        <TextInput
                            style={styles.inputLogin}
                            placeholder="Email"
                        />
                        <TextInput
                            style={styles.inputLogin}
                            placeholder="Senha"
                        />
                    </View>

                    <View style={styles.botaoinicio}>
                        <TouchableOpacity

                            style={styles.button2}>
                            <Text style={styles.buttonText2}>
                                Iniciar Sessão
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>


            </ImageBackground >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF3838'
    },
    botaoinicio:{
        bottom:50,
    },
    Login: {
        bottom: 50,
        width: '70%',
    },
    input: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    inputLogin: {
        height: 62,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        marginBottom: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EAEAEA',
    },
    form: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'

    },
    textbaixo: {
        bottom: 35,
        alignItems: 'center',
        textAlign: 'center',
    },
    containerLogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: "70%"
    },
    title: {
        fontSize: 24,
        marginTop: 20,
        marginBottom: 12,
        color: "#FFF"
    },
    text: {
        color: 'white'
    },

    buttonText2: {
        fontSize: 17,
        color: '#FF0000',
    },
    button2: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 8,
        marginTop: 20,
        width:150,
        height: 45,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});