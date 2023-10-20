import { Button, SafeAreaView, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import styles from "./Login.style";
import { useAuth } from "../../Hooks/useAuth";
import useValidateUser from "../../Hooks/useValidateUser";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const { logUserIn } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = useCallback((text: string) => {
    setUsername(text);
  }, []);

  const handlePasswordChange = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const handleDeleteUsername = useCallback(() => {
    setUsername("");
  }, []);

  const handleLogin = async () => {
    logUserIn(username, password);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <LoginForm
          username={username}
          password={password}
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          handleDeleteUsername={handleDeleteUsername}
        />
        <Button title={"Login"} onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
