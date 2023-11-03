import { Button, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { useAuth } from "../../Hooks/useAuth";
import Colors from "../../Utils/Colors";
import ChooseImageButton from "../../Components/ChooseImageButton/ChooseImageButton";

const Settings = () => {
  const { logUserOut } = useAuth();

  const handleLogout = () => {
    logUserOut();
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <ChooseImageButton title={"Logout"} onPress={handleLogout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: Colors.GREY,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Settings;
