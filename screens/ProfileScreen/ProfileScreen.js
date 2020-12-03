/* eslint-disable max-statements */
import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  View, Text, TouchableOpacity, Image, TextInput,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import MenuButton from '../../components/LandingScreen/MenuButton';
import styles from '../../styles/ProfileScreen/ProfileScreen';
import {
  REFRESH_PROFILE_REQUEST, CHANGE_NAME_REQUEST, SEND_FILE_REQUEST,
} from '../../store/types';

const Profile = (props) => {
  // const { id, name, mail } = props.route.params;
  const { token, email, name, imageProfile, loading } = useSelector((state) => state.authentication);
  const [newName, setNewName] = useState(name);
  const [image, setImage] = useState(imageProfile);
  const [selected, setSetelected] = useState(false);
  const [info, setinfo] = useState(undefined);
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
        <MenuButton navigation={props.navigation}/>
      ),
      headerTitle: () => (
        <View style={styles.headerScreen}>
          <Text style={styles.titleScreen}>Editar perfil</Text>
        </View>
      ),
    });
  }, [props.navigation]);

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      dispatch({ type: REFRESH_PROFILE_REQUEST, payload: { token, email } });
    });
  }, [dispatch, props.navigation, email, token]);

  const navigate = () => {
    // props.navigation.navigate('Profile');
    dispatch({ type: CHANGE_NAME_REQUEST, payload: { token, email, name: newName } });

    const localUri = image;
    const filename = localUri.split('/').pop();

    // Infer the type of the image
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : 'image';

    // Upload the image using the fetch and FormData APIs
    // const data = new FormData();
    // Assume "photo" is the name of the form field the server expects
    const exten = type.split('/').pop();
    const namePicture = email.split('.')[0];
    const fileName = `${namePicture}.${exten}`;
    const data = { uri: localUri, type };
    const information = { size: info.height * info.width, filename: fileName };
    dispatch({ type: SEND_FILE_REQUEST, payload: { token, email, data, information } });
    dispatch({ type: REFRESH_PROFILE_REQUEST, payload: { token, email } });
    props.navigation.navigate('Profile');
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      setinfo(result);
      setSetelected(true);
      // ImagePicker saves the taken photo to disk and returns a local URI to it
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        {/* <Text style={styles.email} >{email}</Text> */}
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: imageProfile }}
        />
        <TouchableOpacity
          onPress={pickImage}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Elegir archivo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.profileContainer}>
        <Text style={styles.nameTag}>Nombre</Text>
        <TextInput
          style={styles.areaInput}
          value={newName}
          onChangeText={setNewName}
        />
      </View>
      

      {/* <View style={{}}>
        <Text style={styles.nameTag}>Nombre</Text>
      </View> */}

      {/* <View>
        <TextInput
          style={styles.areaInput}
          value={newName}
          onChangeText={setNewName}
        />
      </View> */}
      <View style={styles.buttonContainer}>
        <View style={styles.confirmButton}>
          <TouchableOpacity
            onPress={navigate}
            style={styles.applyButton}
          >
            <Text style={styles.textConfirmButton}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

export default Profile;
