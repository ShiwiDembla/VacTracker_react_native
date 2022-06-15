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


// import React, { useEffect, useState } from 'react';
// import { ActivityIndicator, FlatList, Text, View } from 'react-native';

// export default VaccineDetails = () => {
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);

//   const getMovies = async () => {
//      try {
//       const response = await fetch('https://reactnative.dev/movies.json');
//       const json = await response.json();
//       setData(json.movies);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     getMovies();
//   }, []);

//   return (
//     <View style={{ flex: 1, padding: 24 }}>
//       {isLoading ? <ActivityIndicator/> : (
//         <FlatList
//           data={data}
//           keyExtractor={({ id }, index) => id}
//           renderItem={({ item }) => (
//             <Text>{item.title}, {item.releaseYear}</Text>
//           )}
//         />
//       )}
//     </View>
//   )}






// import React, { Component } from "react";
// import {
//   View,
//   ImageBackground,
//   Dimensions,
//   Text,
//   Animated,
//   Easing,
//   StyleSheet,
// } from "react-native";
// // import {  } from "react-native";


// // import {styles} from "../styles/CardStyles"
// import { FlatList } from "react-native-gesture-handler";
// import card from "../src/components/card";

// const { width, height } = Dimensions.get("screen");

// export default class VaccineDetails extends Component {
//   state = {
//     alignment: new Animated.Value(height),
//     cardAlignment: new Animated.Value(400),
//     cards: [
//       {
//         title: "Treasure Island",
//         location: "Cocoa Land - Maldives",
//         description: "Amongst The Many Stunning Lands in Maldives",
//         image: require("../src/assets/images/2.jpg"),
//       },
//       {
//         title: "Like Heaven",
//         location: "Yosemite National Park - California",
//         image: require("../src/assets/images/3.jpg"),
//       },
//       {
//         title: "Sweet Paradise",
//         description: "The Place For Photography, Calm!",
//         image: require("../src/assets/images/1.jpg"),
//       },
//       {
//         title: "Paradise On Earth",
//         location: "Jammu And Kashmir - India",
//         description: "Exciting Views of Snow Capped Mountains",
//         image: require("../src/assets/images/4.jpg"),
//       },
//     ],
//   };

//   AnimateUI = () => {
//     Animated.sequence([
//       Animated.timing(this.state.alignment, {
//         toValue: height / 3,
//         duration: 800,
//         easing: Easing.back(),
//         useNativeDriver: true,
//       }),
//       Animated.timing(this.state.cardAlignment, {
//         toValue: 0,
//         duration: 700,
//         easing: Easing.ease,
//         useNativeDriver: true,
//       }),
//     ]).start();
//   };

//   componentDidMount() {
//     this.AnimateUI();
//   }

//   handlePress = (id) => {
//     // Find The Item By ID
//     const card = this.state.cards.find((item) => item.id === id);

//     // Navigate To Details Screen With The Card Data

//     this.props.navigation.navigate("Details", { card });
//   };

//   render() {
//     const AnimatedBackground = {
//       height: this.state.alignment,
//     };

//     const AnimatedCards = {
//       transform: [
//         {
//           translateX: this.state.cardAlignment,
//         },
//       ],
//     };

//     return (
//       <View>
//         <Animated.View style={[{ width: width }, AnimatedBackground]}>
//           <ImageBackground
//             source={require("../src/assets/images/1.jpg")}
//             style={styles.backgroundImage}
//           >
//             <View style={styles.textView}>
//               <Text style={styles.title}>Luxury</Text>
//               <Text style={styles.description}>Stunning Places</Text>
//             </View>
//           </ImageBackground>
//         </Animated.View>
//         <Animated.View style={[styles.cardView, AnimatedCards]}>
//           <FlatList
//             data={this.state.cards}
//             renderItem={({ item }) => (
//               <Card
//                 title={item.title}
//                 image={item.image}
//                 location={item.location}
//                 description={item.description}
//                 onPress={() => this.handlePress(item.id)}
//               />
//             )}
//           />
//         </Animated.View>
//       </View>
//     );
//   }
// }


//  const styles = StyleSheet.create({
//   backgroundImage: {
//     width: "100%",
//     height: "100%",
//   },
//   textView: {
//     position: "absolute",
//     left: width / 10,
//     bottom: height / 40,
//   },
//   title: {
//     color: "white",
//     fontSize: 40,
//     fontWeight: "bold",
//   },
//   description: {
//     color: "white",
//     marginVertical: 10,
//   },
//   cardView: {
//     height: height,
//     width: width,
//   },
  
// });

import React, { Component } from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import DetailsCards from '../src/components/DetailsCards'


export default VaccineDetails =()=>{
  return(
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Vaccine Details</Text>
      <DetailsCards/>
      <DetailsCards/>
      <DetailsCards/>
      <DetailsCards/>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize:30,
    color: '#48A296',
    fontWeight:'bold'
  }
});