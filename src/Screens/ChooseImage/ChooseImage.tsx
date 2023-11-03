import React, { useCallback, useEffect, useState } from "react";
import { View, Image, TextInput } from "react-native";
import styles from "./ChooseImage.style";
import ImagePicker, {
  Image as ImageType,
} from "react-native-image-crop-picker";
import ChooseImageButton from "../../Components/ChooseImageButton/ChooseImageButton";
import usePostCustomFetch from "../../Hooks/usePostCustomFetch";
import useValidateUser from "../../Hooks/useValidateUser";
import requestUrls from "../../Backend/requestUrls";
import { useNavigation } from "@react-navigation/native";
import { RouterKey } from "../../Routes/Routes";
import { useUpdated } from "../../Context/UpdatedContext";
import Colors from "../../Utils/Colors";

const ChooseImage: React.FC = () => {
  const { setUpdated } = useUpdated();
  const navigation = useNavigation();
  const { token } = useValidateUser();
  const { response, fetcher: sendImagePayload } = usePostCustomFetch(
    requestUrls.sendCars
  );
  const [selectedImage, setSelectedImage] = useState<string | undefined>();
  const [licensePlate, setLicensePlate] = useState<string | undefined>();

  const handleLicensePlateChange = useCallback((text: string) => {
    setLicensePlate(text);
  }, []);

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
    formData.append("image_url", {
      uri: selectedImage,
      name: "image.jpg",
      type: "image/jpeg",
    });
    formData.append("license_plate", licensePlate);

    sendImagePayload(formData, token, true);
  };
  useEffect(() => {
    // @ts-ignore
    if (response?.damage_severity) {
      navigation.navigate(RouterKey.HOME_SCREEN as never);
      setUpdated(true);
      setSelectedImage("");
      setLicensePlate("");
    }
  }, [response]);

  return (
    <View style={styles.rootContainer}>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder={"License Plate"}
          placeholderTextColor={Colors.GREY}
          value={licensePlate}
          onChangeText={handleLicensePlateChange}
          secureTextEntry={false}
          autoCapitalize={"characters"}
        />
      </View>
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
