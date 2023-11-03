import { Button, SafeAreaView, View } from "react-native";
import React, { useCallback, useState } from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import styles from "./Login.style";
import { useAuth } from "../../Hooks/useAuth";
import Logo from "../../Assets/Logo.svg";

const Login = () => {
  const { logUserIn, logUserOut } = useAuth();
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
        <Logo height={200}/>
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
