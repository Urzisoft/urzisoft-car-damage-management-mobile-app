import React, { useState } from "react";
import { View, Image } from "react-native";
import styles from "./ChooseImage.style";
import ImagePicker, {
  Image as ImageType,
} from "react-native-image-crop-picker";
import ChooseImageButton from "../../Components/ChooseImageButton/ChooseImageButton";

const ChooseImage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>();

  const handleImagePicker = () => {
    ImagePicker.openPicker({})
      .then((image: ImageType) => {
        setSelectedImage(image.path);
        console.log(image);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCameraPicker = () => {
    ImagePicker.openCamera({})
      .then((image: ImageType) => {
        setSelectedImage(image.path);
        console.log(image);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUpload = () => {
    //send image object to backend
  };

  return (
    <View style={styles.rootContainer}>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
      )}
      <ChooseImageButton
        title="Pick from Gallery"
        onPress={handleImagePicker}
      />
      <ChooseImageButton title={"Take a Photo"} onPress={handleCameraPicker} />
      <ChooseImageButton title={"Upload Photo"} onPress={handleUpload} />
    </View>
  );
};

export default ChooseImage;
