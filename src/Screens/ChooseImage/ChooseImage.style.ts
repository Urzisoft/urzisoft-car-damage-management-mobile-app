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
});

export default styles;
