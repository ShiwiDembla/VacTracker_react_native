import React from "react";
import { Button, TextInput } from 'react-native-paper';
import { StyleSheet, SafeAreaView, Text, View, Image, Icon } from 'react-native';
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#48A296", justifyContent: 'center', alignItems: 'center' }} >
        <Image source={require('../src/assets/signin.png')} style={styles.image} />
        <Text style={styles.titleText}>Welcome</Text>
      </View>
      <View style={{ flex: 2.5, backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 50 }} >


        <SafeAreaView style={{ marginTop: 80, marginLeft: 40, marginRight: 40 }}>

          <TextInput
            label="Email"
            placeholder="Email"
            mode="outlined"
            // value="Em"
            keyboardType="email-address"
            returnKeyType="next"
            style={styles.input}
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
            style={styles.input}
            right={<TextInput.Icon name="eye" />}
          // value={text}
          // onChangeText={text => setText(text)}
          />


          <View style={styles.row}>
            <Text style={styles.linkText} > Don't have an account? </Text>
            <Text style={[styles.linkText, { fontWeight: 'bold' }]} onPress={() => navigation.navigate('Signup')}>Signup</Text>
          </View>


          <Button mode="contained"
            style={styles.ButtonStyle}
            onPress={() => navigation.navigate('HomeScreen')}
            contentStyle={{ justifyContent: 'center', fontWeight: 100 }}>
            Login
          </Button>


        </SafeAreaView>


      </View>
    </View>
  );
};







const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: '#48A296',
    flexDirection: "column"
  },
  ButtonStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 55,
    width: 148,
  },
  row: {
    flexDirection: 'row',
    // textAlign: 'right'
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
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

