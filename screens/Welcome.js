import React from 'react';
import { Button, Title } from 'react-native-paper';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";


export default Welcome = ({ navigation }) => {
    return (
        <View style={style.container}>

            <Image source={require('../src/assets/welcome.png')} style={{ marginTop: 30 }} />
            <Title style={style.titleText}>Welcome</Title>

            <View style={style.ButtonStyle}>
                {/* <Button mode="contained" style={style.colorstyle} onPress={() => navigation.navigate('Signup')}  >
                    Signup
                </Button> */}

                <View style={style.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <LinearGradient
                            colors={['#306060', '#82afb0']}
                            style={style.signIn}
                        >
                            <Text
                                style={style.textSign}
                            > Signup</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color='#ffffff'
                                size={20}
                            >

                            </MaterialIcons>
                        </LinearGradient>

                    </TouchableOpacity>
                </View>


                {/* <Button mode="contained" style={style.colorstyle2} onPress={() => navigation.navigate('Login')} contentStyle={{ justifyContent: 'center' }}>
                    Login
                </Button> */}
                <View style={style.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>

                        <LinearGradient
                            colors={['#306060', '#82afb0']}
                            style={style.signIn}
                        >
                            <Text
                                style={style.textSign}
                            > Login</Text>
                            <MaterialIcons
                                name="login"
                                color='#ffffff'
                                size={20}
                            >

                            </MaterialIcons>
                        </LinearGradient>

                    </TouchableOpacity>
                </View>
                {/* <Button title='Hello' onPress={() => console.log("jashjsha")}> </Button> */}
            </View>


        </View>

    )
}

const style = StyleSheet.create({
    container: { flex: 1, backgroundColor: "white", alignItems: 'center' },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#306060',

    },
    ButtonStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 55,
        width: 148,
    },
    colorstyle: {
        // color:'#48A296',
        backgroundColor: '#306060',
        marginVertical: 5,

    },
    colorstyle2: {
        backgroundColor: '#306060',
        marginVertical: 5,
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 10
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});