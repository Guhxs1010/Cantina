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

                    <View style={styles.input}>
                        <TextInput
                            style={styles.inputLogin}
                            placeholder="Email"
                        />
                        <TextInput
                            style={styles.inputLogin}
                            placeholder="Senha"
                        />

                    </View>





                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FF3838'
    },
    inputLogin: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        left: 40,
        height: 70,
        backgroundColor: '#D9D9D9',
    },
    form: {
        width: '100%',

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
    button: {
        backgroundColor: '#FE6363',
        borderRadius: 10,
        paddingVertical: 8,
        width: '60%',
        height: 70,
        alignSelf: 'center',
        bottom: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
    buttonText2: {
        fontSize: 20,
        color: '#FF0000',
    },
    button2: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 8,
        width: '60%',
        height: 70,
        alignSelf: 'center',
        bottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
