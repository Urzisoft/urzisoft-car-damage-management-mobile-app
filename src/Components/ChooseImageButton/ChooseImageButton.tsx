import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import styles from "./ChooseImageButton.style";

interface ChooseImageButtonProps extends TouchableOpacityProps {
  title: string;
}
const ChooseImageButton: React.FC<ChooseImageButtonProps> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnContainerStyle}>
        <Text style={styles.btnTextStyle}> {title} </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChooseImageButton;
