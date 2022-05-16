// import React from "react";
// import {Button, Text, View,ScrollView} from 'react-native';

// function RequestVaccine(){
//     return(
//         <ScrollView>
//         <View>
//            <Text> Request a Vaccine </Text>
//         </View>
//         </ScrollView>
//     );

// }

// export default RequestVaccine;


// import React, {useState} from 'react';
// import { Text, StyleSheet, View, TextInput, Button} from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// const RequestVaccine = () => {
//   const [vaccine, setVaccine] = useState('Synopharm');
//   return (
//     <View style={styles.container}>
//       <Text style={styles.formLabel}> Request Vaccine </Text>
//       <View>
      {/* <Picker
          selectedValue={vaccine}
          onValueChange={currentVaccine => setVaccine(currentVaccine)}>
          <Picker.Item label="Moderna" value="Moderna" />
          <Picker.Item label="Synopharm" value="Synopharm" />
          <Picker.Item label="Synovac" value="Synovac" />
        </Picker>
        <TextInput placeholder="City" style={styles.inputStyle} />
        <TextInput placeholder="Center" style={styles.inputStyle} />
        <TextInput placeholder="CNIC" style={styles.inputStyle} />
       
        <Text
          style={{
            fontSize: 30,
            color: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          Vaccine: {vaccine}
        </Text> */}
        {/* <Button
          title="Submit"
          color="#fff"
          onPress={() => alert('Simple Button pressed')}
        /> */}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#306060',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   formLabel: {
//     fontSize: 20,
//     color: '#fff',
//   },
//   inputStyle: {
//     marginTop: 20,
//     width: 300,
//     height: 40,
//     paddingHorizontal: 10,
//     borderRadius: 50,
//     backgroundColor: '#306060',
//   },
//   formText: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: '#fff',
//     fontSize: 20,
//   },
//   text: {
//     color: '#fff',
//     fontSize: 20,
//   },
// });

// export default RequestVaccine;


import React, {useState} from "react";
import { Button, TextInput } from 'react-native-paper';
import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, Icon } from 'react-native';
import { Picker } from "@react-native-picker/picker";

// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default RequestVaccine = ({ navigation }) => {

  const [vaccine, setVaccine] = useState('Vaccine Type');
  return (
    <ScrollView>
    <View style={styles.container}>
    <View style={{ flex: 1, backgroundColor: "#306060", justifyContent: 'center', alignItems: 'center' }} >
      {/* <Image source={require('../src/assets/signin.png')} style={styles.image} /> */}
      <Text style={styles.titleText}>Request Vaccine</Text>
    </View>


    <View style={{ flex: 2.5, backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 50 }} >
      <SafeAreaView style={{ marginTop: 20, marginLeft: 40, marginRight: 40 }}>

      <Picker
          selectedValue={vaccine}
          onValueChange={currentVaccine => setVaccine(currentVaccine)}>
          <Picker.Item label="Moderna" value="Moderna" />
          <Picker.Item label="Synopharm" value="Synopharm" />
          <Picker.Item label="Synovac" value="Synovac" />
        </Picker>
        {/* <TextInput placeholder="City" style={styles.inputStyle} />
        <TextInput placeholder="Center" style={styles.inputStyle} />
        <TextInput placeholder="CNIC" style={styles.inputStyle} /> */}
       
        <Text
          style={{
            fontSize: 30,
            color: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          Vaccine: {vaccine}
          </Text>
      <TextInput
            label="City"
            placeholder="City/Picker?"
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
            label="Center"
            placeholder="Center/Picker?"
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
            label="CNIC"
            placeholder="CNIC"
            mode="outlined"
            // value="Em"
            keyboardType="numeric"
            returnKeyType="next"
            style={styles.input}
            theme={{ roundness: 20 }}      
          // value={text}
          // onChangeText={text => setText(text)}
          />

         
          

          <View style={{alignItems:'center', justifyContent:'center', marginTop:40}}>
          <Button mode="contained"
            style={styles.ButtonStyle}
            theme={{ roundness: 20 }}  
            onPress={() => navigation.navigate('Submit')}
            contentStyle={{ justifyContent: 'center', fontWeight: 100 }}>
          Submit
          </Button>
          </View>

  

          {/* <View style={[styles.row]}>
            <Text style={styles.linkText} > Already have an account? </Text>
            <Text style={[styles.linkText, { fontWeight: 'bold' }]} onPress={() => navigation.navigate('Login')}>Login</Text>
          </View> */}
     
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
  inputStyle: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: '#306060',
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
  },
});

