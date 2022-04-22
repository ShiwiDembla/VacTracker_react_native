import React from "react";
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
        </ScrollView>
    );

}

export default TrackVaccine;

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