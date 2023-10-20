import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.GREY,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: Colors.RED,
    marginBottom: 10,
  },
});

export default styles;
