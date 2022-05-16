import React, {useState} from 'react';
import {View} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default Submit = () => {

const [date, setDate] = useState(new Date());

const onChange = (event, selectedDate) => {
 const currentDate = selectedDate || date;
 setDate(currentDate);
};

 return(
   <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black'}}> 
       <DateTimePicker 
         value={date}
         onChange={onChange}
       />
   </View>
    
 )
}