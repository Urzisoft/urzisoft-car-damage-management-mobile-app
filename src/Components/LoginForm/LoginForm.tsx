import { Text, TextInput, View } from "react-native";
import styles from "./LoginForm.style";
import Colors from "../../Utils/Colors";

export interface LoginFormProps {
  username: string;
  password: string;
  handleUsernameChange: (text: string) => void;
  handlePasswordChange: (text: string) => void;
  handleDeleteUsername: () => void;
}

const LoginForm = ({
  username,
  password,
  handleUsernameChange,
  handlePasswordChange,
}: LoginFormProps) => {
  return (
    <View>
      <Text style={styles.text}>Username</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder={"Username"}
          placeholderTextColor={Colors.GREY}
          value={username}
          autoCapitalize={"none"}
          onChangeText={handleUsernameChange}
        />
      </View>
      <Text style={styles.text}>Password</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputPasswordField}
          placeholder={"Password"}
          placeholderTextColor={Colors.GREY}
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry={false} //replace to true when done
        />
      </View>
    </View>
  );
};

export default LoginForm;
