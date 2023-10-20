import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 12,
    color: Colors.WHITE,
    paddingBottom: 5,
  },
  inputContainer: {
    backgroundColor: Colors.RED,
    width: "85%",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    paddingRight: 10,
  },
  inputField: {
    padding: 14,
    fontSize: 18,
    width: "90%",
    color: Colors.BLACK,
  },
  inputPasswordField: {
    padding: 14,
    fontSize: 18,
    width: "90%",
    color: Colors.GREEN,
  },
});

export default styles;
