import { SafeAreaView, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import styles from "./Login.style";
import { useAuth } from "../../Hooks/useAuth";
import Logo from "../../Assets/Logo.svg";
import ChooseImageButton from "../../Components/ChooseImageButton/ChooseImageButton";

const Login = () => {
  const { logUserIn, loginResponse } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

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

  useEffect(() => {
    if (loginResponse?.non_field_errors) {
      setLoginError("Invalid Credentials");
    }
  }, [loginResponse]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Logo height={200} />
        <LoginForm
          username={username}
          password={password}
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          handleDeleteUsername={handleDeleteUsername}
        />
        <Text style={styles.loginError}>{loginError}</Text>
        <ChooseImageButton title="Login" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
