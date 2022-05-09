import React from "react";
import {Button, Text, View, ScrollView, StyleSheet} from 'react-native';

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
