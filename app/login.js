import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput, KeyboardAvoidingView } from 'react-native';
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
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
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

                            <View>
                                <TextInput
                                    style={styles.inputLogin}
                                    placeholder="Senha"
                                />

                            </View>

                        </View>

                        <View style={styles.botaoinicio}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('inicial')}
                                style={styles.button2}>
                                <Text style={styles.buttonText2}>
                                    Iniciar Sessão
                                </Text>

                            </TouchableOpacity>
                        </View>

                    </View>


                </ImageBackground >
            </View >
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF3838'
    },
    botaoinicio: {
    },
    Login: {
        width: '70%',
    },
    input: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    inputLogin: {
        height: 65,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        marginBottom: 20,

        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EAEAEA',
        fontSize: 17,
    },
    form: {
        flex: 3,
        alignItems: 'center'

    },
    textbaixo: {
        bottom: 35,
        alignItems: 'center',
        textAlign: 'center',
    },
    containerLogo: {
        flex: 2,
        top:30,
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
        width: 150,
        height: 50,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
});