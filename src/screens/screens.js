import { Navigation } from "react-native-navigation";
import AuthScreen from "./Auth/Auth";

/* Register screens */

export function registerScreens() {
  Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);
}
