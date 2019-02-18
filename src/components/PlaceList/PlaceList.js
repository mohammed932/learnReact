import React from "react";
import { ScrollView, StyleSheet, FlatList } from "react-native";
import ListItem from "../ListItem/ListItem";

const placeList = props => {
  return (
    <FlatList
      data={props.places}
      style={styles.listContainer}
      renderItem={({ item }) => (
        <ListItem
          placeImage={item.image}
          onItemPressed={() => props.onItemSelected(item.key)}
          placeName={item.name}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default placeList;
