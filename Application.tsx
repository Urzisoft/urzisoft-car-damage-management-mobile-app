import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "react-native-splash-screen";
import { useEffect } from "react";
import RoutesMapping from "./src/Routes/Navigator";
import { AuthProvider } from "./src/Hooks/useAuth";

const Application = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NavigationContainer>
      <AuthProvider>
        <RoutesMapping />
      </AuthProvider>
    </NavigationContainer>
  );
};
export default Application;
