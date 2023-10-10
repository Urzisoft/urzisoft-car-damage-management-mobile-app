import BottomTabNavigator from "./src/Routes/BottomTabNavigator";
import { NavigationContainer } from "@react-navigation/native";

const Application = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
export default Application;
