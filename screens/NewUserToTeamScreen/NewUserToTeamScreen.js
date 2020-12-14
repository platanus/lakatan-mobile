import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useLayoutEffect, useEffect } from 'react';
import {
  View, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import BackButton from '../../components/LandingScreen/BackButton';
import color from '../../styles/colors';
import styles from '../../styles/NewUserToTeamScreen/NewUserToTeamScreen';
import { USERS_REQUEST } from '../../store/types';
import UsersListComponent from '../../components/UsersListComponent/UsersListComponent';

// eslint-disable-next-line max-statements
const NewUserToTeamScreen = (props) => {
  const { members, name } = props.route.params;
  const [selectedItems, setSelectedItems] = useState(members);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const { id } = useSelector((state) => state.organizations.currentOrganization);
  const dispatch = useDispatch();
  const { token, email } = useSelector((state) => state.authentication);
  useEffect(() => {
    dispatch({ type: USERS_REQUEST, payload: { token, email, id } });
  }, [name]);

  const { users } = useSelector((state) => state.users);
  const dataHandler = (data) => {
    const aux = [];
    data.forEach((element) => {
      aux.push({
        id: element.id,
        name: element.attributes.name,
        picture: element.attributes.picture,
        selected: false });
    });

    return aux;
  };

  const availableUsers = dataHandler(users);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerLeft: () => (
        <BackButton navigation={props.navigation}/>
      ),
      headerTitle: () => (
        <View style={styles.header}>
          <Text style={styles.title}>Agregar usuarios</Text>
        </View>
      ),
    });
  }, [props.navigation]);

  const itemOnPressHandler = (id) => {
    setSelectedMembers((prevData) => {
      const newData = prevData.map((item) => {
        if (item.id === id) {
          item.selected = !item.selected;

          return item;
        }

        return item;
      });

      return newData;
    });
  };

  useEffect(() => {
    const list = [];
    selectedMembers.forEach((item) => {
      if (item.selected) {
        list.push(item.id);
      }
    });
    setSelectedItems(list);
  }, [selectedMembers]);

  useEffect(() => {
    setSelectedMembers(dataHandler(users));
  }, [users]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>

        <View style={styles.usersList}>
          <UsersListComponent
            selectedMembers={selectedMembers}
            itemOnPressHandler={itemOnPressHandler}
          />
        </View>

        {/* <View style={styles.multiselect}>
          <MultiSelect
            items={availableUsers}
            uniqueKey="id"
            alwaysShowSelectText
            onSelectedItemsChange={setSelectedItems}
            selectedItems={selectedItems}
            colors={{ primary: color.blue, success: color.blue, text: color.black }}
            confirmText="Confirmar"
            selectText="Elige usuarios"
            searchInputPlaceholderText="Elige un usuario a agregar..."
            tagRemoveIconColor={color.softGray}
            tagBorderColor={color.softGray}
            tagTextColor={color.black}
            selectedItemTextColor={color.blue}
            selectedItemIconColor={color.softGray}
            itemTextColor={color.black}
            displayKey="name"
            searchInputStyle={{ color: color.softGray }}
            submitButtonColor={color.blue}
            submitButtonText="Submit"
            button="40"
          />
        </View> */}
        <View style={styles.buttonContainer}>
          <View style={styles.confirmButton}>
            <TouchableOpacity
              style={
                { ...styles.applyButton,
                  backgroundColor: (selectedItems.length === 0 ? (color.softGray) : (color.darkBlue)) }
              }
              onPress={() => props.navigation.navigate('New Team', { name, members: selectedItems })}
              disabled={selectedItems.length === 0}
            >
              <Text style={styles.textConfirmButton}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewUserToTeamScreen;