import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';

export default function Inicial() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonback}>
                    <Ionicons name="chevron-back-outline" size={44} color="white" />
                </TouchableOpacity>
                <Text style={styles.textcabe}>Seja bem-vindo ao Aplicativo da Cantina do SESI!</Text>
            </View>
            <View style={styles.banner}>
                <Animatable.Image
                    source={require("../assets/images/banner.png")}
                    style={styles.bannerimg}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.bolinhas}>
                <View style={styles.ballContainer}>
                    <View style={[styles.bolinha, styles.ativaBolinha]} />
                    <View style={styles.bolinha} />
                    <View style={styles.bolinha} />
                </View>
            </View>

            <View style={styles.botoes}>

                <View style={styles.botao1}>
                    <TouchableOpacity style={styles.button1}>

                    </TouchableOpacity>
                </View>

                <View style={styles.botao2}>
                    <TouchableOpacity style={styles.button2}>

                    </TouchableOpacity>
                </View>

                <View style={styles.botao3}>
                    <TouchableOpacity style={styles.button3}>

                    </TouchableOpacity>
                </View>

                <View style={styles.botao4}>
                    <TouchableOpacity style={styles.button4}>

                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
    },
    botoes:{
      flex:3,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',  
      flexWrap:'wrap',
      flexDirection:'column',
      backgroundColor: 'green',
      width: '80%',
      height: 500,
    },
    cabecalho: {
        width: '100%',
        flex: 1.5,
        backgroundColor: '#FF3838',
        alignItems: 'center',
        justifyContent: 'center',
    },
    banner: {
        flex: 2.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bannerimg: {
        width: '100%',
        height: 200,
    },
    bolinhas: {
        flex: 1,
    },
    textcabe: {
        color: '#fff',
        fontSize: 18,
        width: '60%',
        textAlign: 'center',
    },
    buttonback: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    ballContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 20,
    },
    bolinha: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
    },
    ativaBolinha: {
        backgroundColor: '#FF3838',
    },
    botao1:{
        backgroundColor:'#FF3838',
        width:100,
        height:100,
        margin:10,
    },
    botao2:{
        backgroundColor:'#FF3838',
        width:100,
        height:100,
        margin:10,
    },
    botao3:{
        backgroundColor:'#FF3838',
        width:100,
        height:100,
        margin:10,
    },
    botao4:{
        backgroundColor:'#FF3838',
        width:100,
        height:100,
        margin:10,
    },
});
