import React from 'react';
import {
  View, FlatList, Text, TouchableWithoutFeedback,
} from 'react-native';
import stylesTeam from '../../styles/TeamScreen/TeamScreen';
import stylesUsers from '../../styles/UsersList/UsersList';

const User = (props) => {
  const { styles } = props;
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.cardOfMember}>
        <Text style={styles.items}>{props.member.item.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const TeamList = ({ users, inUserList }) => {
  let styling;
  if (inUserList) {
    styling = stylesUsers;
  } else {
    styling = stylesTeam;
  }
  return (
    <View style={styling.listOfTeam}>
      <FlatList
        style={styling.cardOfMemberView}
        data={users}
        renderItem={(member) => <User member={member} styles={styling} />}
        keyExtractor={(member) => member.id.toString()}
      />
    </View>
  );
};

export default TeamList;
