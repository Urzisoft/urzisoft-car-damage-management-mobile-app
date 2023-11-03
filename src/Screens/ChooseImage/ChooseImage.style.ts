import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.GREY,
  },
  selectedImage: {
    width: 300,
    height: 300,
    marginVertical: 20,
  },
  inputContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    width: "76%",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingRight: 10,
  },
  inputField: {
    padding: 14,
    fontSize: 18,
    width: "90%",
    color: Colors.BLACK,
  },
});

export default styles;
