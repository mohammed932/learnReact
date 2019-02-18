import { Navigation } from "react-native-navigation";
import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";

const store = configureStore();
// Register screens
Navigation.registerComponent("AuthScreen", () => AuthScreen, store, Provider);
Navigation.registerComponent(
  "SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
);

// run app
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "AuthScreen",
              options: {
                topBar: {
                  title: {
                    text: "Login",
                    fontSize: 18,
                    color: "red"
                  }
                }
              }
            }
          }
        ]
      }
    }
  });
});
