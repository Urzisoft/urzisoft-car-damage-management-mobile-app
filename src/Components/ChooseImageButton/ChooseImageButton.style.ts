import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  btnContainerStyle: {
    backgroundColor: Colors.RED,
    paddingVertical: 15,
    width: width / 1.3,
    borderRadius: 5,
    marginVertical: 5,
  },
  btnTextStyle: {
    color: Colors.WHITE,
    fontSize: 16,
    textTransform: "uppercase",
    textAlign: "center",
    fontFamily: "Quicksand-Medium",
  },
});

export default styles;
