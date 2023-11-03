import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "react-native-splash-screen";
import React, { useEffect } from "react";
import RoutesMapping from "./src/Routes/Navigator";
import { AuthProvider } from "./src/Hooks/useAuth";
import { UpdatedProvider } from "./src/Context/UpdatedContext";

const Application = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NavigationContainer>
      <AuthProvider>
          <UpdatedProvider>
             <RoutesMapping />
          </UpdatedProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};
export default Application;
