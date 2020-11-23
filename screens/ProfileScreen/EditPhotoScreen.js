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


const EditPhoto = (props) => {
  // const { id, name, mail } = props.route.params;
  const { token, email, imageProfile } = useSelector((state) => state.authentication);
  const [image, setImage] = useState(imageProfile);
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
      aspect: [1,1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const navigate = (name) => {
    props.navigation.navigate('Profile');
    // despachar la imagen
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
          style={styles.button}
          onPress={() => navigate()}
        ><Text style={styles.buttonText}>
          Guardar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditPhoto;
