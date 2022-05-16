import React from 'react'
import {View,Text, StyleSheet} from 'react-native'
import { Title } from 'react-native-paper'
// import { Card } from "@paraboly/react-native-card";
export default BookSlot=()=> {
  return (
   <View style={styles.container}>
       <View style={{flex:1,backgroundColor:'#ffffff', justifyContent:'center', alignItems:'center'}}> 
       <Title style={styles.title}>Book a Slot </Title>
       </View>
       <View style={styles.innerContainer}>
       {/* <Card
            title="Title"
            iconName="home"
            iconType="Entypo"
            topRightText="50/301"
            bottomRightText="30 km"
            description="Lorem ipsum dolor sit."
            onPress={() => {}}
            /> */}
       </View>
  
   </View>
  )
}


const styles=StyleSheet.create({
    container:{
       flex:1,
       backgroundColor: '#ffffff',
       justifyContent:'center',
       flexDirection: "column",
      
       },
       innerContainer:{
           flex:2.5,
           backgroundColor:'#48A296',
           borderTopLeftRadius:50,
           borderTopRightRadius:50,
       },
       title:{
        fontWeight: "bold",
        color: '#48A296',
        fontSize: 30,
       }
})

// import React, {useState} from 'react';
// import { Text, StyleSheet, View, TextInput, Button} from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// const BookSlot = () => {
//   const [currency, setCurrency] = useState('US Dollar');
//   return (
//     <View style={styles.container}>
//       <Text style={styles.formLabel}> Demo Form </Text>
//       <View>
//         <TextInput placeholder="Email" style={styles.inputStyle} />
//         <TextInput
//           secureTextEntry={true}
//           placeholder="Password"
//           style={styles.inputStyle}
//         />
//         <Picker
//           selectedValue={currency}
//           onValueChange={currentCurrency => setCurrency(currentCurrency)}>
//           <Picker.Item label="USD" value="US Dollars" />
//           <Picker.Item label="EUR" value="Euro" />
//           <Picker.Item label="NGN" value="Naira" />
//         </Picker>
//         <Text
//           style={{
//             fontSize: 30,
//             color: '#fff',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           Selected: {currency}
//         </Text>
//         {/* <Button
//           title="Submit"
//           color="#fff"
//           onPress={() => alert('Simple Button pressed')}
//         /> */}
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

// export default BookSlot;

// import React from "react";
// import { Button, TextInput } from 'react-native-paper';
// import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, Icon } from 'react-native';

// // import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// export default Bool = ({ navigation }) => {
//   return (
//     <ScrollView>
//     <View style={styles.container}>
//     <View style={{ flex: 1, backgroundColor: "#306060", justifyContent: 'center', alignItems: 'center' }} >
//       {/* <Image source={require('../src/assets/signin.png')} style={styles.image} /> */}
//       <Text style={styles.titleText}>Create your new account</Text>
//     </View>


//     <View style={{ flex: 2.5, backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 50 }} >
//       <SafeAreaView style={{ marginTop: 20, marginLeft: 40, marginRight: 40 }}>

//       <TextInput
//             label="First Name"
//             placeholder="First Name"
//             mode="outlined"
//             // value="Em"
//             keyboardType="name-phone-pad"
//             returnKeyType="next"
//             style={styles.input}
//             theme={{ roundness: 20 }}      
//           // value={text}
//           // onChangeText={text => setText(text)}
//           />

//           <TextInput
//             label="Last Name"
//             placeholder="Last Name"
//             mode="outlined"
//             // value="Em"
//             keyboardType="name-phone-pad"
//             returnKeyType="next"
//             style={styles.input}
//             theme={{ roundness: 20 }}      
//           // value={text}
//           // onChangeText={text => setText(text)}
//           />

//           <TextInput
//             label="Email"
//             placeholder="Email"
//             mode="outlined"
//             // value="Em"
//             keyboardType="email-address"
//             returnKeyType="next"
//             style={styles.input}
//             theme={{ roundness: 20 }}      
//           // value={text}
//           // onChangeText={text => setText(text)}
//           />

//           <TextInput
//             label="Phone"
//             placeholder="Phone"
//             mode="outlined"
//             // value="Em"
//             keyboardType="numeric"
//             returnKeyType="next"
//             style={styles.input}
//             theme={{ roundness: 20 }}      
//           // value={text}
//           // onChangeText={text => setText(text)}
//           />

//           <TextInput
//             label="Password"
//             placeholder="Password"
//             mode="outlined"
//             // value="Em"
//             secureTextEntry={true}
//             returnKeyType="done"
//             multiline={false}
//             // secureTextEntry
//             autoCorrect={false}
//             theme={{ roundness: 20 }}  
//             style={styles.input}
//             right={<TextInput.Icon name="eye" />}
//           // value={text}
//           // onChangeText={text => setText(text)}
//           />

//            <TextInput
//             label="Confirm Password"
//             placeholder="Confirm Password"
//             mode="outlined"
//             // value="Em"
//             secureTextEntry={true}
//             returnKeyType="done"
//             multiline={false}
//             // secureTextEntry
//             autoCorrect={false}
//             theme={{ roundness: 20 }}  
//             style={styles.input}
//             right={<TextInput.Icon name="eye" />}
//           // value={text}
//           // onChangeText={text => setText(text)}
//           />

          

//           <View style={{alignItems:'center', justifyContent:'center', marginTop:40}}>
//           <Button mode="contained"
//             style={styles.ButtonStyle}
//             theme={{ roundness: 20 }}  
//             onPress={() => navigation.navigate('Login')}
//             contentStyle={{ justifyContent: 'center', fontWeight: 100 }}>
//             Signup
//           </Button>
//           </View>

  

//           <View style={[styles.row]}>
//             <Text style={styles.linkText} > Already have an account? </Text>
//             <Text style={[styles.linkText, { fontWeight: 'bold' }]} onPress={() => navigation.navigate('Login')}>Login</Text>
//           </View>
     
//       </SafeAreaView>


//     </View>
//   </View>
//   </ScrollView>
//   );
// };







// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // padding: 20,
//     backgroundColor: '#306060',
//     // alignItems:'center',
//     justifyContent:'center',
//     flexDirection: "column"
//   },

//   ButtonStyle: {
//     // flex: 1,
//     backgroundColor:'#306060',
//     marginBottom: 10,
//     width: 148,
//   },
//   row: {
//     flexDirection: 'row',
//     // textAlign: 'right'
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   colorstyle: {
//     // color:'#48A296',
//     backgroundColor: '#306060',
//     marginVertical: 5,
//   },
//   image: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//     resizeMode: 'contain',
//   },
//   titleText: {
//     fontWeight: "bold",
//     color: 'white',
//     fontSize: 30,
//   },
//   input: {
//     marginBottom: 10,
//     // borderRadius: 15, 
//     // height: 40,
//     // margin: 12,
//     // borderWidth: 1,
//     // paddingTop:50,
//   },
//   colorstyle2: {
//     backgroundColor: '#306060',
//     marginVertical: 5,
//     // fontWeight:"bold"
//   },
//   linkText: {
//     color: 'gray',
//     // textAlign: 'right'
//   }
// });

