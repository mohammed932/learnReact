import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class FindPlaceScreen extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.txt}>on find place Screen.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default FindPlaceScreen;
