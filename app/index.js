import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function Bem_Vindo() {
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
    const navigation = useNavigation()

    return (
        <View style={ESTILOS.container}>

            <View style={ESTILOS.inicio}>
                <View style={ESTILOS.texto}>
                    <Text style={ESTILOS.text}>Seja bem-vindo ao Aplicativo{'\n'}da Cantina do SESI !</Text>
                </View>
            </View>

            <View style={ESTILOS.banner}>

            </View>

            <View style={ESTILOS.buttons}>

            </View>

        </View>
    );
}

const ESTILOS = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 17,
        top:50,
    },
    inicio: {
        flex: 0.55,
        width: '100%',
        backgroundColor: 'red',
    },
    banner: {
        flex: 0.8,
        width: '100%',
    },
    buttons: {
        flex: 1,
        width: '100%',
    },
});
