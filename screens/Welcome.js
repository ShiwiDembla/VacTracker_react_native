import React from 'react';
import { Button } from 'react-native-paper';
import {StyleSheet,Text, View, Image} from 'react-native';


 export default Welcome = ({ navigation }) => {
    return (
    <View style={style.container}>

        <Image source={require('../src/assets/welcome.png')} style={{marginTop:30}}/> 
        <Text style={style.titleText}>Welcome</Text>
        
        <View style={style.ButtonStyle}>
                <Button  mode="contained" style={style.colorstyle} onPress={() => navigation.navigate('Register')}  >
                    Register
                 </Button>

                <Button  mode="contained" style={style.colorstyle} onPress={() => navigation.navigate('Login')}   contentStyle={{  justifyContent: 'center' }}>
                Login
                </Button>

                 {/* <Button title='Hello' onPress={() => console.log("jashjsha")}> </Button> */}
         </View>


    </View>

)}

const style = StyleSheet.create({
    container: {flex: 1, backgroundColor:"white", alignItems: 'center'},
    titleText:{
        fontSize: 30,
        fontWeight: 'bold',
        color:'#48A296',
       
    },
    ButtonStyle:{
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 55,
    width: 148,
    },
    colorstyle:{
        // color:'#48A296',
        backgroundColor: '#48A296',
        marginVertical:5,
    
    }
});