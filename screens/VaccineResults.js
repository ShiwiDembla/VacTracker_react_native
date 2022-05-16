
import React from "react";
import { Button, TextInput, Title } from 'react-native-paper';
import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, Icon, FlatList,TouchableOpacity } from 'react-native';
import { black } from "react-native-paper/lib/typescript/styles/colors";

export default VaccineResults = ({ navigation }) => {
  return (
    // <ScrollView>
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#306060", justifyContent: 'center', alignItems: 'center',padding:5}} >
        {/* <Image source={require('../src/assets/signin.png')} style={styles.image} /> */}
        <Text style={styles.titleText}>Vaccine Results </Text>
      </View>


      
      <View style={{ flex: 2.5, backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 50,padding:20 }} >
        {/* <Text>CentersResults</Text> */}
        <FlatList style = {styles.flatlist}
        data={'hello'}
        renderItem ={({item}) =>(
          <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate('BookSlot')}>
            <Text>
              {/* {item.Title} */}
            {'Hello2'}
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
    //  </ScrollView> 
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

