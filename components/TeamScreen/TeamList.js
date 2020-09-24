import React from 'react'
import { View, FlatList, Text ,TouchableWithoutFeedback} from 'react-native'
import styles from '../../styles/TeamScreen/TeamScreen'

const User = (props) => {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
    <View style={styles.cardOfMember}>
      <Text style={styles.items}>{props.member.item.name}</Text>
    </View>
    </TouchableWithoutFeedback>   
  )
}

const TeamList = ({users}) => {
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




export default TeamList