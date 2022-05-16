
// import { StyleSheet, Text, View, FlatList,item,TouchableOpacity } from 'react-native'
// import React from 'react'

// export default function CentersResults({navigation}) {
//   onclick_item(key);{
//     switch (key) {
//       case "Devin":
//         navigation.navigate(Login)
//         break;
//       case "Jackson":
//         //navigate
//         break;
//       default:
//       //whatever you want
//     }
//   }
//   return (
    
//     <View>
//        <FlatList
//           data={[
//             { key: "Devin" },
//             { key: "Jackson" },
//             { key: "James" },
//             { key: "Joel" },
//             { key: "John" },
//             { key: "Jillian" },
//             { key: "Jimmy" },
//             { key: "Julie" }
//           ]}
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={item => this.onclick_item(item.key)}>
//               <Text>{item.key}</Text>
//             </TouchableOpacity>
//           )}
//         />
//     </View>
//   );
// }

// const styles = StyleSheet.create({})


import React from "react";
import { Button, TextInput, Title } from 'react-native-paper';
import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, Icon, FlatList,TouchableOpacity } from 'react-native';
import { black } from "react-native-paper/lib/typescript/styles/colors";

// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default CentersResults = ({ navigation }) => {
  return (
    // <ScrollView>
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#306060", justifyContent: 'center', alignItems: 'center',padding:5}} >
        {/* <Image source={require('../src/assets/signin.png')} style={styles.image} /> */}
        <Text style={styles.titleText}>Centers Results </Text>
      </View>


      
      <View style={{ flex: 2.5, backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 50,padding:20 }} >
        {/* <Text>CentersResults</Text> */}
        <FlatList style = {styles.flatlist}
        data={'hello'}
        renderItem ={({item}) =>(
          <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate('VaccineResults')}>
            <Text>
              {/* {item.Title} */}
            {'Hello'}
            </Text>
             
            <Text>
            {/* {item.desc} */}
            {'jdshjhsjf sjadhja jsadja'}
            </Text>
             
          </TouchableOpacity>
        )}

        />
              
         
      </View>
    </View>
    // </ScrollView>
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
    fontSize: 25,
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
  flatlist:{
    
    // margin: 30,
    // padding:10,
    // borderColor: black,

    // borderWidth:1,
  },
  item:{
   marginHorizontal:10,
   marginVertical:7,
   paddingHorizontal:10,
   
   padding:20,
   backgroundColor:'#fffff',
   justifyContent:'center',
   borderRadius:5,
   elevation:5,
  }

});



// import { NavigationContainer } from "@react-navigation/native";
// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   item
// } from "react-native";

// export class CentersResults extends Component({navigation}) {
//   onclick_item(key) {
//     switch (key) {
//       case "Devin":
//         navigation.navigate(Login);
//         break;
//       case "Jackson":
//         //navigate
//         break;
//       default:
//       //whatever you want
//     }
//   }

//   render() {
//     return (
//       <View>
//         <FlatList
//           data={[
//             { key: "Devin" },
//             { key: "Jackson" },
//             { key: "James" },
//             { key: "Joel" },
//             { key: "John" },
//             { key: "Jillian" },
//             { key: "Jimmy" },
//             { key: "Julie" }
//           ]}
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={item => this.onclick_item(item.key)}>
//               <Text>{item.key}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     );
//   }
// }

// export default CentersResults;


// import React, { useState } from "react";
// import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
// import Login from "./Login";

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "First Item",
//   },

// ];

// const Item = ({ item, onPress, backgroundColor, textColor }) => (
//   <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
//     <Text style={[styles.title, textColor]}>{item.title}</Text>
//   </TouchableOpacity>
// );

// const CentersResults = ({navigation}) => {
//   const [selectedId, setSelectedId] = useState(null);

//   const renderItem = ({ item }) => {
//     const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
//     const color = item.id === selectedId ? 'white' : 'black';

//     return (
//       <Item
//         item={item}
//         onPress={() => setSelectedId(item.id)}
//         backgroundColor={{ backgroundColor }}
//         textColor={{ color }}
//       />
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         extraData={selectedId}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });

// export default CentersResults;