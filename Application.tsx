import BottomTabNavigator from "./src/Routes/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "react-native-splash-screen";
import { useEffect } from "react";

const Application = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
export default Application;
