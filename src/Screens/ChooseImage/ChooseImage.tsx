import React, { useCallback, useEffect, useState } from 'react';
import { View, Image, TextInput, ActivityIndicator, Text } from 'react-native';
import styles from './ChooseImage.style';
import ImagePicker, { Image as ImageType } from 'react-native-image-crop-picker';
import ChooseImageButton from '../../Components/ChooseImageButton/ChooseImageButton';
import usePostCustomFetch from '../../Hooks/usePostCustomFetch';
import useValidateUser from '../../Hooks/useValidateUser';
import requestUrls from '../../Backend/requestUrls';
import { useNavigation } from '@react-navigation/native';
import { RouterKey } from '../../Routes/Routes';
import { useUpdated } from '../../Context/UpdatedContext';
import Colors from '../../Utils/Colors';

const ChooseImage: React.FC = () => {
    const { setUpdated } = useUpdated();
    const navigation = useNavigation();
    const { token } = useValidateUser();
    const { response, fetcher: sendImagePayload, loading } = usePostCustomFetch(requestUrls.cars);
    const [selectedImage, setSelectedImage] = useState<string | undefined>();
    const [licensePlate, setLicensePlate] = useState<string | undefined>();
    const [imageError, setImageError] = useState<string | undefined>('');

    const handleLicensePlateChange = useCallback((text: string) => {
        setLicensePlate(text);
    }, []);

    const handleImagePickerTemplate = (
        pickerFunction: <O extends Record<string, any>>(options: O) => Promise<ImageType | ImageType[]>
    ) => {
        pickerFunction({})
            .then((image: ImageType | ImageType[]) => {
                setSelectedImage(Array.isArray(image) ? image[0].path : image.path);
            })
            .catch(error => {
                setImageError(error);
            });
    };

    const handleImagePicker = () => {
        handleImagePickerTemplate(ImagePicker.openPicker);
    };

    const handleCameraPicker = () => {
        handleImagePickerTemplate(ImagePicker.openCamera);
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('image_url', {
            uri: selectedImage,
            name: 'image.jpg',
            type: 'image/jpeg',
        });
        formData.append('license_plate', licensePlate);

        sendImagePayload(formData, token, true);
    };
    useEffect(() => {
        // @ts-ignore
        if (response?.damage_severity) {
            navigation.navigate(RouterKey.HOME_SCREEN as never);
            setUpdated(true);
            setSelectedImage('');
            setLicensePlate('');
        }
    }, [response]);

    return (
        <View style={styles.rootContainer}>
            {selectedImage && <Image source={{ uri: selectedImage }} style={styles.selectedImage} />}
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputField}
                    placeholder={'License Plate'}
                    placeholderTextColor={Colors.GREY}
                    value={licensePlate}
                    onChangeText={handleLicensePlateChange}
                    secureTextEntry={false}
                    autoCapitalize={'characters'}
                />
            </View>
            {loading && <ActivityIndicator size="small" color={Colors.RED} />}
            {imageError && <Text style={styles.errorText}>{imageError}</Text>}
            <ChooseImageButton title="Pick from Gallery" onPress={handleImagePicker} />
            <ChooseImageButton title={'Take a Photo'} onPress={handleCameraPicker} />
            <ChooseImageButton title={'Upload Photo'} onPress={handleUpload} />
        </View>
    );
};

export default ChooseImage;
