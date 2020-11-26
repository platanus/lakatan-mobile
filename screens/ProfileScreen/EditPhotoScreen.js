/* eslint-disable max-statements */
import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import colors from '../../styles/colors';
import styles from '../../styles/ProfileScreen/ProfileScreen';
import BackButton from '../../components/LandingScreen/BackButton';
import {
  SEND_FILE_REQUEST,
} from '../../store/types';

const EditPhoto = (props) => {
  // const { id, name, mail } = props.route.params;
  const { token, email, imageProfile, loading } = useSelector((state) => state.authentication);
  const [image, setImage] = useState(imageProfile);
  const [selected, setSetelected] = useState(false);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     const refresh = props.navigation.addListener('focus', () => {
  //       dispatch({ type: CURRENT_TEAM_REQUEST, payload: { token, email, id } });
  //     });
  //     return refresh;
  //   }, [props.navigation]);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <BackButton navigation={props.navigation}/>
      ),
    });
  }, [props.navigation]);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setSetelected(true);
      // ImagePicker saves the taken photo to disk and returns a local URI to it
    }
  };
  const createRiteButtonDisable = () => (
    {
      ...styles.button,
      backgroundColor: selected ? colors.lightBlue : colors.gray,
    });

  const navigate = () => {
    const localUri = image;
    const filename = localUri.split('/').pop();

    // Infer the type of the image
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : 'image';

    // Upload the image using the fetch and FormData APIs
    // const data = new FormData();
    // Assume "photo" is the name of the form field the server expects
    const data = { uri: localUri, type };
    dispatch({ type: SEND_FILE_REQUEST, payload: { token, email, data } });
    if (!loading) {
      props.navigation.navigate('Profile');
    }
  };

  return (
    <View style={styles.buttonContainer}>
      <View>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
      <View style={styles.emailContainer}>
        <Text style={styles.name}>
            Subir foto:
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={pickImage}
        ><Text style={styles.buttonText}>
          Selecionar
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={createRiteButtonDisable()}
          onPress={() => navigate()}
          disabled={!(selected)}
        ><Text style={styles.buttonText}>
          Guardar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditPhoto;
