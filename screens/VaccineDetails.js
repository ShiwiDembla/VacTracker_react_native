// import React from "react";
// import {Button, Text, View, ScrollView, StyleSheet} from 'react-native';

// export default class VaccineDetails extends React.Component{
// return(
  
// );
// constructor(props){
//      super(props);
//      this.state = {
//          isLoading: true,
//          dataSource: null,
//      }
// }
// componentDidMount(){
//     return fetch.
// }
// }

// const style = StyleSheet.create({
//     container: { flex: 1, backgroundColor: "white", alignItems: 'center' },
   
// });
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default VaccineDetails = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )}
    </View>
  )}