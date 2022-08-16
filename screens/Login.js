import React, { useState, useContext} from "react";
import { Button, TextInput } from 'react-native-paper';
import * as Animatable from 'react-native-animatable'
import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, Icon } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import { AuthContext } from "../src/context/AuthContext";

import { AuthContext } from "../src/components/Context";


export default Login = ({ navigation }) => {


 
  // const {test} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//state 
    // const [data, setData] =  React.useState(
    //   {
    //     email: "",
    //     password: "",
    //     check_textInputChange: false,
    //     secureTextEntry: true
    //   }
    // )
   
  const { Login } = React.useContext(AuthContext);

  const onLogin = (email,password) => {
  Login(email,password);
  }
  


  return (
    // <ScrollView>
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#48A296", justifyContent: 'center', alignItems: 'center' }} >
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require('../src/assets/signin.png')} style={styles.image} />
        <Text style={styles.titleText}>Welcome</Text>
      </View>



      <Animatable.View
        animation="fadeInUpBig"
        duration={1500}
        style={{ flex: 2.5, backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 50 }} >
        <SafeAreaView style={{ marginTop: 80, marginLeft: 40, marginRight: 40 }}>

          <TextInput
            label="Email"
            placeholder="Email"
            mode="outlined"
            // value="Em"
            keyboardType="email-address"
            returnKeyType="next"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            theme={{ roundness: 20 }}
          // value={text}
          // onChangeText={text => setText(text)}
          />

          <TextInput
            label="Password"
            placeholder="Password"
            mode="outlined"
            // value="Em"
            secureTextEntry={true}
            returnKeyType="done"
            multiline={false}
            // secureTextEntry
            autoCorrect={false}
            theme={{ roundness: 20 }}
            style={styles.input}
            right={<TextInput.Icon name="eye" />}
          value={password}
          onChangeText={setPassword}
          />
          {/* <Text> hello {test}</Text> */}


          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
            <Button
              // icon={camera}
              mode="contained"
              style={styles.ButtonStyle}
              theme={{ roundness: 20 }}
              // onPress={() => navigation.navigate('HomeScreen')}
              onPress ={()=> {onLogin(email,password)}}
              contentStyle={{ justifyContent: 'center', fontWeight: 100 }}>
              Login
            </Button>
          </View>


          <View style={[styles.row, { marginTop: 4 }]}>
            <Text style={styles.linkText} > Don't have an account? </Text>
            <Text style={[styles.linkText, { fontWeight: 'bold' }]} onPress={() => navigation.navigate('Signup')}>Signup</Text>
          </View>

        </SafeAreaView>
      </Animatable.View>


    </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: '#48A296',
    // alignItems:'center',
    justifyContent: 'center',
    flexDirection: "column"
  },

  ButtonStyle: {
    // flex: 1,
    backgroundColor: '#48A296',
    marginBottom: 55,
    width: 148,
  },
  row: {
    flexDirection: 'row',
    // textAlign: 'right'
    justifyContent: 'center',
    alignItems: 'center'
  },
  colorstyle: {
    // color:'#48A296',
    backgroundColor: '#48A296',
    marginVertical: 5,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  titleText: {
    fontWeight: "bold",
    color: 'white',
    fontSize: 40,
  },
  input: {
    marginBottom: 10,
    height: 50,
    // borderRadius: 15, 
    // height: 40,
    // margin: 12,
    // borderWidth: 1,
    // paddingTop:50,
  },
  colorstyle2: {
    backgroundColor: '#48A296',
    marginVertical: 5,
    // fontWeight:"bold"
  },
  linkText: {
    color: 'gray',
    // textAlign: 'right'

  }

});

