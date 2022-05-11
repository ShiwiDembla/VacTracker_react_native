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


import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput, Button} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const RequestVaccine = () => {
  const [currency, setCurrency] = useState('US Dollar');
  return (
    <View style={styles.container}>
      <Text style={styles.formLabel}> Request Vaccine </Text>
      <View>
      <Picker
          selectedValue={currency}
          onValueChange={currentCurrency => setCurrency(currentCurrency)}>
          <Picker.Item label="USD" value="US Dollars" />
          <Picker.Item label="EUR" value="Euro" />
          <Picker.Item label="NGN" value="Naira" />
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
          Vaccine: {currency}
        </Text>
        {/* <Button
          title="Submit"
          color="#fff"
          onPress={() => alert('Simple Button pressed')}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#356859',
    alignItems: 'center',
    justifyContent: 'center',
  },

  formLabel: {
    fontSize: 20,
    color: '#fff',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#b9e4c9',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default RequestVaccine;