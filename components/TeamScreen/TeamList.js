import React from 'react';
import {
  View, FlatList, Text, TouchableWithoutFeedback,
} from 'react-native';
import stylesTeam from '../../styles/TeamScreen/TeamScreen';
import stylesUsers from '../../styles/UsersList/UsersList';

const User = (props) => {

  const {styles, member, inUserList} = props;
  let email;
  if (inUserList){
    email =member.item.attributes.email;
  } else{
    email = member.item.email
  }

  return (
    <TouchableWithoutFeedback onPress={() => {}}>
    <View style={styles.cardOfMember}>
      <Text style={styles.items}>{email}</Text>
    </View>
    </TouchableWithoutFeedback>   
  )
}

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
        renderItem={(member) => <User member={member} styles={styling} inUserList={inUserList}/>}
        keyExtractor={(member) => member.id.toString()}
      />
    </View>
  );
};

export default TeamList;
