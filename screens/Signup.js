import React from "react";
import { Button, TextInput } from 'react-native-paper';
import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, Icon } from 'react-native';

// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default Signup = ({ navigation }) => {
  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={{ flex: 1, backgroundColor: "#306060", justifyContent: 'center', alignItems: 'center' }} >
      {/* <Image source={require('../src/assets/signin.png')} style={styles.image} /> */}
      <Text style={styles.titleText}>Create your new account</Text>
    </View>


    <View style={{ flex: 2.5, backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 50 }} >
      <SafeAreaView style={{ marginTop: 20, marginLeft: 40, marginRight: 40 }}>

      <TextInput
            label="First Name"
            placeholder="First Name"
            mode="outlined"
            // value="Em"
            keyboardType="name-phone-pad"
            returnKeyType="next"
            style={styles.input}
            theme={{ roundness: 20 }}      
          // value={text}
          // onChangeText={text => setText(text)}
          />

          <TextInput
            label="Last Name"
            placeholder="Last Name"
            mode="outlined"
            // value="Em"
            keyboardType="name-phone-pad"
            returnKeyType="next"
            style={styles.input}
            theme={{ roundness: 20 }}      
          // value={text}
          // onChangeText={text => setText(text)}
          />

          <TextInput
            label="Email"
            placeholder="Email"
            mode="outlined"
            // value="Em"
            keyboardType="email-address"
            returnKeyType="next"
            style={styles.input}
            theme={{ roundness: 20 }}      
          // value={text}
          // onChangeText={text => setText(text)}
          />

          <TextInput
            label="Phone"
            placeholder="Phone"
            mode="outlined"
            // value="Em"
            keyboardType="numeric"
            returnKeyType="next"
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
          // value={text}
          // onChangeText={text => setText(text)}
          />

           <TextInput
            label="Confirm Password"
            placeholder="Confirm Password"
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
          // value={text}
          // onChangeText={text => setText(text)}
          />

          

          <View style={{alignItems:'center', justifyContent:'center', marginTop:40}}>
          <Button mode="contained"
            style={styles.ButtonStyle}
            theme={{ roundness: 20 }}  
            onPress={() => navigation.navigate('Login')}
            contentStyle={{ justifyContent: 'center', fontWeight: 100 }}>
            Signup
          </Button>
          </View>

  

          <View style={[styles.row]}>
            <Text style={styles.linkText} > Already have an account? </Text>
            <Text style={[styles.linkText, { fontWeight: 'bold' }]} onPress={() => navigation.navigate('Login')}>Login</Text>
          </View>
     
      </SafeAreaView>


    </View>
  </View>
  </ScrollView>
  );
};







const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: '#306060',
    // alignItems:'center',
    justifyContent:'center',
    flexDirection: "column"
  },

  ButtonStyle: {
    // flex: 1,
    backgroundColor:'#306060',
    marginBottom: 10,
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
    backgroundColor: '#306060',
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
    fontSize: 30,
  },
  input: {
    marginBottom: 10,
    // borderRadius: 15, 
    // height: 40,
    // margin: 12,
    // borderWidth: 1,
    // paddingTop:50,
  },
  colorstyle2: {
    backgroundColor: '#306060',
    marginVertical: 5,
    // fontWeight:"bold"
  },
  linkText: {
    color: 'gray',
    // textAlign: 'right'
  }
});

