import React from 'react';
import {
  View, FlatList, Text, TouchableWithoutFeedback,
} from 'react-native';
import stylesTeam from '../../styles/TeamScreen/TeamScreen';
import stylesUsers from '../../styles/UsersList/UsersList';

const User = (props) => {

  const {styles, member, inUserList} = props;
  let name;
  if (inUserList){
    name =member.item.attributes.name;
  } else{
    name = member.item.name
  }

  return (
    <TouchableWithoutFeedback onPress={() => {}}>
    <View style={styles.cardOfMember}>
      <Text style={styles.items}>{name}</Text>
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
