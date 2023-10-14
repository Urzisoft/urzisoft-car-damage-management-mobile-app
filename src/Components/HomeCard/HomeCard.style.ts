import { StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: 6,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: Colors.WHITE,
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: Colors.BLACK,
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardLabel: {
    color: Colors.BLACK,
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: Colors.GREY,
    fontSize: 12,
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: Colors.BLACK,
  },
});

export default styles;
