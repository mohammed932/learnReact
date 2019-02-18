import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

placeDetails = props => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        <Image style={styles.placeImage} source={props.selectedPlace.image} />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    );
  }
  return (
    <Modal visible={props.selectedPlace != null} animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" onPress={props.onItemDeleted} color="red" />
          <Button title="Close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    padding: 40
  },
  placeName: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    marginTop: 5
  },
  placeImage: {
    width: "100%",
    height: 300
  }
});

export default placeDetails;
