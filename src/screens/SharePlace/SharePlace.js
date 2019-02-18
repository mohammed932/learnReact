import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class SharePlaceScreen extends Component {
  static navigatorStyle = {
    navBarTitle: "Share Place",
    color: "#000"
  };
  //   constructor(props) {
  //     super(props);
  //     this.props.navigator.setTitle({ title: "My Title" });
  //   }
  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.txt}>on share place Screen.</Text>
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

export default SharePlaceScreen;
