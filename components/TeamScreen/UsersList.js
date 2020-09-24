import React from 'react'
import { View, FlatList, Text ,TouchableWithoutFeedback, Dimensions} from 'react-native'
import styles from '../../styles/UsersList/UsersList'

const User = (props) => {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
    <View style={styles.cardOfMember}>
      <Text style={styles.items}>{props.member.item.name}</Text>
    </View>
    </TouchableWithoutFeedback>   
  )
}

const UsersList = ({users}) => {

    return ( 
        <View style={styles.listOfTeam}>
          <FlatList
            style={styles.cardOfMemberView}
            data={users}
            renderItem={(member) => <User member={member} />}
            keyExtractor={(member) => member.id.toString()}
          />
        </View>
    )
}




export default UsersList