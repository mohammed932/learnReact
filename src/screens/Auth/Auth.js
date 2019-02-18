import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import startTabs from "../MainTabs/StartMainTabs";

class AuthScreen extends Component {
  loginHandler = () => {
    startTabs();
  };

  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.authTxt}>Authentication Screen.</Text>
        <Button title="Login" style={styles.btn} onPress={this.loginHandler} />
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
  authTxt: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default AuthScreen;
