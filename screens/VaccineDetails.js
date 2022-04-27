import React from "react";
<<<<<<< HEAD
import {Button, Text, View, ScrollView, StyleSheet} from 'react-native';
=======
import {Button, Text, View, ScrollView} from 'react-native';
>>>>>>> 4fbd8f0143cba52a29b10bfcb7560befd67163b9

function VaccineDetails(){
    return(
         <ScrollView>        
             <View style={style.container}>
            <Text> VaccineDetails </Text>
        </View>
        </ScrollView>
    );

}

export default VaccineDetails;

const style = StyleSheet.create({
    container: { flex: 1, backgroundColor: "white", alignItems: 'center' },
   
});