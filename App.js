// import React, { Component } from "react";
// import { View, StyleSheet } from "react-native";
// import PlaceInput from "./src/components/PlaceInput/PlaceInput";
// import PlaceList from "./src/components/PlaceList/PlaceList";
// import PlaceDetails from "./src/components/PlaceDetails/PlaceDetails";
// import placeImage from "./src/assets/imgs/Bg.jpg";
// import { connect } from "react-redux";
// import {
//   addPlace,
//   deletePlace,
//   selectPlace,
//   deselectPlace
// } from "./src/store/actions";
// class App extends Component {
//   placeAddedHandler = placeName => {
//     this.props.onAddPlace(placeName);
//   };

//   // when item deleted
//   placeDeleteHandler = () => {
//     this.props.onDeletePlace();
//   };

//   // when Modal closed
//   modalClosedHandler = () => {
//     this.props.onDeselectPlace();
//   };

//   placeSelectedHandler = key => {
//     this.props.onSelectPlace(key);
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <PlaceDetails
//           selectedPlace={this.props.selectedPlace}
//           onItemDeleted={this.placeDeleteHandler}
//           onModalClosed={this.modalClosedHandler}
//         />
//         <PlaceInput onPlacedded={this.placeAddedHandler} />
//         <PlaceList
//           places={this.props.places}
//           onItemSelected={this.placeSelectedHandler}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 50,
//     backgroundColor: "white",
//     justifyContent: "flex-start",
//     alignItems: "center"
//   }
// });

// const mapStateToProps = state => {
//   return {
//     places: state.places.places,
//     selectedPlace: state.places.selectedPlace
//   };
// };

// const mopDispatchToProps = dispatch => {
//   return {
//     onAddPlace: name => {
//       dispatch(addPlace(name));
//     },
//     onDeletePlace: () => {
//       dispatch(deletePlace());
//     },
//     onSelectPlace: key => {
//       dispatch(selectPlace(key));
//     },
//     onDeselectPlace: () => {
//       dispatch(deselectPlace());
//     }
//   };
// };

// export default connect(
//   mapStateToProps,
//   mopDispatchToProps
// )(App);

// Navigation

import { Navigation } from "react-native-navigation";
import AuthScreen from "./src/screens/Auth/Auth";

// // Register screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "awesome-places.AuthScreen",
        title: "Login"
      }
    }
  });
});
