import React, { useState } from "react";
import {View, Image, Button} from "react-native";
import styles from "./ChooseImage.style";
import ImagePicker, {
  Image as ImageType,
} from "react-native-image-crop-picker";
import ChooseImageButton from "../../Components/ChooseImageButton/ChooseImageButton";
import usePostCustomFetch from "../../Hooks/usePostCustomFetch";
import useValidateUser from "../../Hooks/useValidateUser";
import requestUrls from "../../Backend/requestUrls";
import {useAuth} from "../../Hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { RouterKey } from "../../Routes/Routes";
import { useUpdated } from "../../Context/UpdatedContext";

const ChooseImage: React.FC = () => {
    const { setUpdated } = useUpdated();
    const navigation = useNavigation();
    const { token } = useValidateUser();
    const { response,fetcher: sendImagePayload} = usePostCustomFetch(requestUrls.sendCars);
  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const { logUserOut} = useAuth();

  const handleImagePicker = () => {
    ImagePicker.openPicker({})
      .then((image: ImageType) => {
        setSelectedImage(image.path);

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
      const formData = new FormData();
      formData.append('image_url', {
          uri: selectedImage,
          name: 'image.jpg',
          type: 'image/jpeg',
      });
      formData.append('license_plate', "MM170SSB");

    sendImagePayload(formData,token,true);
    if(response == null) {
        navigation.navigate(RouterKey.HOME_SCREEN as never);
        setUpdated(true);
    }
  };

  const handleLogout = () => {
      logUserOut()
  }

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
        <Button title={"Logout"} onPress={handleLogout} />
    </View>
  );
};

export default ChooseImage;
function useNavigate() {
    throw new Error("Function not implemented.");
}

