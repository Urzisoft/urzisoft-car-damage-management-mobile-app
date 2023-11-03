import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.GREY,
    justifyContent: "flex-start",
  },
  container: {
    paddingTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  loginError: {
    color: Colors.RED,
    fontSize: 18,
    paddingBottom: 5,
  },
});

export default styles;
