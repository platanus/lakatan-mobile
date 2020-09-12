import React from "react"
import { View, Text, StyleSheet, Button} from "react-native"

function Team ({route}) {
    const {name} = route.params
    return(
        <View style={styles.screen} >
            <View  style={styles.buttonContainer} >
                <Button style={styles.edit} title="Editar"/>
                
            </View>
            <View>
                <Text style={styles.title}>{name}</Text>
            </View>    
            <View style={styles.descriptionContainer}>
                <Text style={styles.description} >{route.params.description}</Text>
            </View>
            <View style={styles.list}>
                {route.params.members.map(member => <Text style={styles.items}>- {member}</Text>)}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 20,
        alignItems: "center",
    },
    buttonContainer:{
        paddingLeft: "85%",
        paddingRight: "10%",
        width: 500,
        alignItems: "stretch",
        alignContent: "flex-end"
        // flexDirection: 'row',
        // alignSelf: 'flex-end',
    },
    edit:{
        width:20,
        flexDirection: "row-reverse",
        alignSelf: "flex-end"
    },
    title: {
        fontSize: 40,
        padding: 10
    },
    list:{
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: "white",
        padding: 20,
        borderRadius:10,
        margin: 20
    },
    descriptionContainer:{
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: "white",
        padding: 20,
        borderRadius:10,
        margin: 20
    },
    description: {
        fontSize: 25

    },
    items: {
        fontSize: 22
    }
});

export default Team;