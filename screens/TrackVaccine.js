import React from "react";
<<<<<<< HEAD
import { Button, TextInput } from 'react-native-paper';
import { StyleSheet, ScrollView, SafeAreaView, Text, View, Image, Icon } from 'react-native';
import DropDown from "react-native-paper-dropdown";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function TrackVaccine({navigation}){
  const genderList = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Others",
      value: "others",
    },
  ];
  // const [gender, setGender] = useState < string > "";
    return(
        <ScrollView>
              <View style={{flex:1}}>
              <View style={{flex:1, backgroundColor: "#48A296", alignItems:"center", justifyContent: "center"}}> 
              <Image style={{flex:1,height:400}} source={require('../src/assets/maps.png')} />
              
              </View>


              <View style={{flex:2.5, backgroundColor: "#48A296", borderTopLeftRadius: 30, borderTopRightRadius: 50,height:250}}>
                {/* <Text style={{fontSize: 20, textAlign: "center", fontWeight: "bold"}}>HELLO</Text> */}
                
                <View style={{alignItems:'center', justifyContent:'center', marginTop:40}}>
                <DropDown
              label={"Gender"}
              mode={"outlined"}
              // visible={showDropDown}
              // showDropDown={() => setShowDropDown(true)}
              // onDismiss={() => setShowDropDown(false)}
              // value={gender}
              // setValue={setGender}
              list={genderList}
            />
          <Button mode="contained"
            style={styles.ButtonStyle}
            theme={{ roundness: 20 }}  
            onPress={() => navigation.navigate('Home')}
            contentStyle={{ justifyContent: 'center', fontWeight: 100,  }}>
           Track
          </Button>

          </View>



              </View>
              </View>

             
=======
import {Button, Text, View, ScrollView, StyleSheet} from 'react-native';

function TrackVaccine(){
    return(
        <ScrollView>
        <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "#48A296", justifyContent: 'center', alignItems: 'center' }} >
        <Text style={styles.titleText}>Welcome</Text>
      </View>


      <View style={{ flex: 2.5, backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 50 }} >

{/* 
          <View style={{alignItems:'center', justifyContent:'center', marginTop:40}}>
          <Button mode="contained"
            style={styles.ButtonStyle}
            theme={{ roundness: 20 }}  
            onPress={() => navigation.navigate('HomeScreen')}
            contentStyle={{ justifyContent: 'center', fontWeight: 100 }}>
            Login
          </Button>
          </View> */}


    
      </View>
    </View>
>>>>>>> 4fbd8f0143cba52a29b10bfcb7560befd67163b9
        </ScrollView>
    );

}

export default TrackVaccine;

<<<<<<< HEAD


{/* <View style={{flex:1, alignItems: "center", justifyContent: "center"}}>
<View style={{ flex: 1, backgroundColor: "#48A296", justifyContent: 'center', alignItems: 'center' }} >
<Image style={{width: 100, height: 100}} source={require('../src/assets/signin.png')} />

<Text>Welcome</Text>
</View>
<View style={{ flex: 2.5, backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 50 }} >
<Text>Hello</Text>
</View>
</View> */}


const styles = StyleSheet.create({
  ButtonStyle: {
    // flex: 1,
    backgroundColor:'black',
    // color:'black',
    marginBottom: 55,
    width: 148,
   
  }
});
//   container: {
//     flex: 1,
//     backgroundColor: '#48A296',
//     justifyContent:'center',
//     flexDirection: "column"
//   },

//   ButtonStyle: {
//     backgroundColor:'#48A296',
//     marginBottom: 55,
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
//     backgroundColor: '#48A296',
//     marginVertical: 5,
//   },
//   image: {
//     width: '40%',
//     height: '40%',
//   },
//   titleText: {
//     fontWeight: "bold",
//     color: 'white',
//     fontSize: 40,
//   },
 
//   colorstyle2: {
//     backgroundColor: '#48A296',
//     marginVertical: 5,
//     // fontWeight:"bold"
//   },
//   linkText: {
//     color: 'gray',
//     // textAlign: 'right'

//   }
//   });
=======
const styles = StyleSheet.create({
    container: {
      flex: 1,
      // padding: 20,
      backgroundColor: '#48A296',
      // alignItems:'center',
      justifyContent:'center',
      flexDirection: "column"
    },  
  });
>>>>>>> 4fbd8f0143cba52a29b10bfcb7560befd67163b9
