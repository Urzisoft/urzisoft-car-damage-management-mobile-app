import React, { useState } from "react";
import { View, Button, Image } from "react-native";
import styles from "./ChooseImage.style";
import ImagePicker, {
  Image as ImageType,
} from "react-native-image-crop-picker";

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
      <View style={styles.chooseFromGalleryButtonContainer}>
        <Button title="Choose from Gallery" onPress={handleImagePicker} />
      </View>
      <View style={styles.takePhotoButtonContainer}>
        <Button title="Take a Photo" onPress={handleCameraPicker} />
      </View>
      <View style={styles.uploadPhotoButtonContainer}>
        <Button title="Upload Photo" onPress={handleUpload} />
      </View>
    </View>
  );
};

export default ChooseImage;
