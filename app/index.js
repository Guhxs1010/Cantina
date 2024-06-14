import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
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
            <ImageBackground source={require('../assets/images/FundoLogin.png')} style={styles.container}>
                <View style={styles.containerLogo}>
                    <Animatable.Image
                        source={require('../assets/images/logo.png')}
                        style={styles.logo}
                        resizeMode='contain'
                    />

                </View>

                <View style={styles.form}>

                    <TouchableOpacity
                        style={styles.button}>
                        <Text style={styles.buttonText}>
                            Criar uma conta
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('login')}
                        style={styles.button2}>
                        <Text style={styles.buttonText2}>
                            Iniciar Sessão
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button99}>
                        <View style={styles.textbaixo}>
                            <Text style={styles.text}>
                                Continuar como visitante
                            </Text>
                        </View>
                    </TouchableOpacity>

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
    form: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",

    },
    textbaixo: {
        alignItems: 'center',
        textAlign: 'center',
    },
    containerLogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '70%'
    },
    title: {
        fontSize: 24,
        marginTop: 20,
        marginBottom: 12,
        color: '#FFF'
    },
    text: {
        color: 'white',
    },
    button: {
        backgroundColor: '#FE6363',
        borderRadius: 10,
        paddingVertical: 8,
        width: '60%',
        height: 55,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
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
        width: "60%",
        borderRadius: 10,
        paddingVertical: 8,
        height: 55,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,

    },
});