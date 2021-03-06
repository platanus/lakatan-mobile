/* eslint-disable max-statements */
import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  View, Text, TouchableOpacity, Image, TextInput, ActivityIndicator, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import MenuButton from '../../components/LandingScreen/MenuButton';
import styles from '../../styles/ProfileScreen/ProfileScreen';
import {
  REFRESH_PROFILE_REQUEST,
  CHANGE_NAME_REQUEST,
  SEND_FILE_REQUEST,
  CLEAR_AUTH_SUCCESS,
  GET_ALL_LABELS_REQUEST,
  GET_USER_LABELS_REQUEST,
  DELETE_USER_LABEL_REQUEST,
  POST_USER_LABEL_REQUEST,
} from '../../store/types';
import colors from '../../styles/colors';

const Profile = (props) => {


  // const { id, name, mail } = props.route.params;
  const { token, email, name, imageProfile, id, loading, success } = useSelector((state) => state.authentication);
  const { currentOrganization } = useSelector((state) => state.organizations);

  const { allLabels, userLabels } = useSelector((state) => state.labels);

  const [newName, setNewName] = useState(name);
  const [image, setImage] = useState(imageProfile);
  const [selected, setSetelected] = useState(false);
  const [info, setinfo] = useState(undefined);
  const [selectedLabel, setSelectedLabel] = useState('');
  const dispatch = useDispatch();

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
      if (currentOrganization.id) {

        dispatch({ type: GET_ALL_LABELS_REQUEST, payload: { token, email, orga_id: currentOrganization.id } });
        dispatch({ type: GET_USER_LABELS_REQUEST, payload: { user_id: id, token, email, orga_id: currentOrganization.id } });
      }
      setImage(imageProfile);
      setSetelected(false);
      setNewName(name);
    });
  }, [dispatch, props.navigation, email, token, imageProfile, id, name, currentOrganization.id]);

  const navigate = () => {
    setSetelected(false);

    if (name !== newName) {
      dispatch({ type: CHANGE_NAME_REQUEST, payload: { token, email, name: newName } });
    }

    if (selected) {
      const localUri = image;
      const filename = localUri.split('/').pop();

      // Infer the type of the image
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : 'image';

      // Upload the image using the fetch and FormData APIs
      // Assume "photo" is the name of the form field the server expects
      const exten = type.split('/').pop();
      const namePicture = email.split('.')[0];
      const fileName = `${namePicture}.${exten}`;
      const data = { uri: localUri, type };
      const information = { size: info.height * info.width, filename: fileName };
      dispatch({ type: SEND_FILE_REQUEST, payload: { token, email, data, information } });
    }

    if (selectedLabel) {
      dispatch({ type: POST_USER_LABEL_REQUEST, payload: { token, email, label_id: selectedLabel, user_id: id, orga_id: currentOrganization.id  } });
      setSelectedLabel('');
    }
  };

  const deleteLabelHandler = (label_id) => {
    dispatch({ type: DELETE_USER_LABEL_REQUEST, payload: { token, email, label_id, user_id: id, orga_id: currentOrganization.id  } });
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

  useEffect(() => {
    if (props.navigation.isFocused() && success && !loading) {
      dispatch({ type: CLEAR_AUTH_SUCCESS });

      dispatch({ type: REFRESH_PROFILE_REQUEST, payload: { token, email } });
    }
  }, [dispatch, email, loading, props.navigation, success, token]);

  useEffect(() => {
    setImage(imageProfile);
  }, [imageProfile]);

  useEffect(() => {
    setNewName(name);
  }, [name]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: image }}
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

        { currentOrganization.id &&
        <View style={styles.profileContainer}>
          <Text style={styles.nameTag}>
            Etiquetas
          </Text>

          {userLabels.length > 0 &&
          <View style={styles.labelsContainer}>
            {(userLabels.map((label) =>
              <View style={styles.labelView} key={label.id}>
                <Text style={styles.labelText}>
                  {label.attributes.name}
                </Text>
                <TouchableOpacity
                  onPress={() => deleteLabelHandler(label.id)}>
                  <Icon
                    name="times"
                    size={14}
                    color={colors.white}
                  />
                </TouchableOpacity>
              </View>,
            ))}
          </View>
          }

          <View style={styles.pickerContainer}>
            <RNPickerSelect
              value={selectedLabel}
              onValueChange={setSelectedLabel}
              placeholder={{ label: 'Agregar etiqueta', color: colors.black, value: null }}
              items={allLabels.filter((label) =>
                (!(userLabels.find(lab => lab.id === label.id)))).map((label) =>
                ({ label: label.attributes.name, value: label.id, key: label.id }),
              )}
              style={ {
                inputIOS: {
                  color: colors.black,
                  paddingTop: 13,
                  paddingHorizontal: 10,
                  paddingBottom: 12,
                },
                inputAndroid: {
                  color: colors.black,
                },
                placeholder: { color: colors.black, fontSize: 14 },
              } }
            />
          </View>
        </View>
        }
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

        <View style={{ flex: 1 }}></View>
        <View style={styles.buttonContainer}>
          <View style={{ ...styles.confirmButton, backgroundColor:
           (loading || (!selected && (name === newName) && !selectedLabel)) ?
             colors.gray : colors.darkBlue }}>
            <TouchableOpacity
              onPress={navigate}
              style={styles.applyButton}
              disabled={loading || (!selected && (name === newName) && !selectedLabel)}
            >
              { loading ? (<ActivityIndicator size='large' style={{ flex: 1 }}/>) :
                (<Text style={styles.textConfirmButton}>Guardar</Text>)}
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
};

export default Profile;
