import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  item
} from "react-native";

export class Home extends Component {
  onclick_item(key) {
    switch (key) {
      case "Devin":
        navigation.navigate(Login)
        break;
      case "Jackson":
        //navigate
        break;
      default:
      //whatever you want
    }
  }

  render() {
    return (
      <View>
        <FlatList
          data={[
            { key: "Devin" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" }
          ]}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={item => this.onclick_item(item.key)}>
              <Text>{item.key}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

export default Home;