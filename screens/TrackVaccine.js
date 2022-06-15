import React,{useState} from "react";
import { Button, TextInput } from 'react-native-paper';
import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, Icon } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Picker } from "@react-native-picker/picker";
function TrackVaccine({navigation}){

  const [pickerValue, setPickerValue]=useState('Kandhkot');

    return(
        // <ScrollView>
              <View style={{flex:1,}}>
              <View style={{flex:1, backgroundColor: "#48A296", alignItems:"center", justifyContent: "center"}}> 
              {/* <Image style={{flex:1,height:400}} source={require('../src/assets/maps.png')} /> */}
              <MapView
              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={styles.map}
              region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
            </MapView>


              </View>


              <View style={{flex:2.5, backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 50}}>
              

                {/* <Text style={{fontSize: 20, textAlign: "center", fontWeight: "bold"}}>HELLO</Text> */}
                

                {/* tracking components */}
                <View style={{alignItems:'center', justifyContent:'center', marginTop:80}}>
               
               <Picker 
               style={styles.picker}
               selectedValue= {pickerValue}
               onValueChange ={ (itemValue)=>setPickerValue(itemValue)}
               >
                <Picker.Item label="Kandhkot" value="Kandhkot"/> 
                <Picker.Item label="Kashmore" value="Kashmore"/> 
                <Picker.Item label="Karachi" value="Karachi"/> 
               </Picker>

          <Button mode="contained"
            style={styles.ButtonStyle}
            theme={{ roundness: 10 }}  
            onPress={() => navigation.navigate('CentersResults')}
            contentStyle={{ justifyContent: 'center', fontWeight: 100,  }}>
           Track
          </Button>

          </View>

 

              </View>
              </View>

             
        // </ScrollView>
    );

}

export default TrackVaccine;





const styles = StyleSheet.create({
  ButtonStyle: {
    // flex: 1,
    backgroundColor:'#48A296',
    // color:'black',
    marginBottom: 55,
    width: 160,
    // height: 30
   
  },
  picker:{
    width:148,
    // borderRadius:40,
    borderWidth:4,
    // borderColor:'#48A296',
    // backgroundColor: '#48A296',
    marginBottom:10
  },
  map: {
    ...StyleSheet.absoluteFill,
  },
});
