import React from 'react'
import { View, FlatList, Text } from 'react-native'
import styles from '../../styles/TeamScreen/TeamScreen'

const User = (props) => {
  return (
    <View style={styles.cardOfMember}>
      <Text style={styles.items}>{props.member.item.name}</Text>
    </View>   
  )
}

const TeamList = ({users}) => {
    return ( 
        <View style={styles.listOfTeam}>
          <FlatList
            style={styles.cardOfMember}
            data={users}
            renderItem={(member) => <User member={member} />}
            keyExtractor={(member) => member.id.toString()}
          />
        </View>
    )
}




export default TeamList