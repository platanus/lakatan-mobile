import React, { useState, useLayoutEffect } from 'react';
import {
  View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, FlatList,
} from 'react-native';
import { VictoryChart, VictoryBar, VictoryTheme } from 'victory';
import { useDispatch, useSelector } from 'react-redux';
import { StackedBarChart, YAxis } from 'react-native-svg-charts';
import styles from '../../styles/VotingScreen/VotingScreen';
import BackButton from '../../components/LandingScreen/BackButton';
import colors from '../../styles/colors';
import UsersListComponent from '../../components/UsersListComponent/UsersListComponent';

const results = [ // esto viene de Backend
  {
    option: 'Opción A',
    totalPercentage: '64%',
    total: 64,
    id: 1,
    selected: true,
  },
  {
    option: 'Opción B',
    totalPercentage: '32%',
    total: 32,
    id: 2,
    selected: false,
  },
  {
    option: 'Opción C',
    totalPercentage: '4%',
    total: 4,
    id: 3,
    selected: false,
  },
];

const OptionView = (props) => {
  const optionName = props.optionName.item;

  return (
    <View>
      <TouchableOpacity>
        <Text>{optionName}</Text>
      </TouchableOpacity>
    </View>
  );
};

// eslint-disable-next-line max-statements
const VotingScreen = ({
  navigation, route: {
    params: {
      nameVoting,
    },
  },
}) => {
  const { name, purpose } = useSelector((state) => state.teams.currentTeam);
  const { token, email } = useSelector((state) => state.authentication);
  const { id } = useSelector((state) => state.teams.currentTeam);
  const dispatch = useDispatch();

  const [voteResults, setVoteResults] = useState(results);
  const vote = false; // esto viene de backend
  const missingVotes = 2; // esto viene de backend
  const votingOptions = ['Opción A', 'Opción B', 'Opción C']; // esto viene de backend

  const color = [colors.darkBlue];
  const keys = ['total'];

  // const voteButtonDisable = () => (
  //   {
  //     ...styles.confirmButton,
  //     backgroundColor: vote ? colors.darkBlue : colors.gray,
  //   });

  const createHandler = () => {}; // RELLENAR CON REQUEST

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerLeft: () => (
        <BackButton navigation={navigation}/>
      ),
      headerTitle: () => (
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
        </View>
      ),
    });
  }, [name]);

  const voteHandler = (key) => {
    setVoteResults((prev) => {
      const newData = prev.map((item) => {
        if (item.id === key) {
          item.selected = true;
        } else {
          item.selected = false;
        }

        return item;
      });

      return newData;
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.textHeader}>Propósito</Text>
          <Text>{purpose}</Text>
          <Text style={styles.newVotingText}>{nameVoting}</Text>
          {missingVotes !== 0 && vote &&
            <View style={{ flexDirection: 'row' }}>
              <Text>Faltan {missingVotes} votos • </Text>
              <TouchableOpacity><Text style={styles.deteleVoting}>Eliminar votación</Text></TouchableOpacity>
            </View>
          }
          {missingVotes === 0 && vote &&
            <TouchableOpacity>
              <Text style={styles.deteleVoting}>Eliminar votación</Text>
            </TouchableOpacity>
          }
          {vote ? (
            <View>
              <View style={{ flexDirection: 'row', marginVertical: '10%' }} >
                <View>
                  {results.map(item => (
                    <View style={{ marginTop: 12 }}>
                      <Text style={{ fontSize: 16, color: colors.darkBlue }}>{item.option}</Text>
                      <Text style={{ fontSize: 12, marginBottom: 55 }}>{item.totalPercentage} - {item.total}</Text>
                    </View>
                  ))}
                </View>
                <View>
                  <StackedBarChart
                    style={{ marginLeft: '15%', height: 250, width: '80%' }}
                    keys={keys}
                    colors={color}
                    data={results}
                    yAccessor={({ item }) => item}
                    showGrid={false}
                    // contentInset={{ top: 30, bottom: 30 }}
                    horizontal={true}
                    spacingInner={0.6}
                  />
                </View>
              </View>
            </View>
          ) : (
            <View >
              <Text style={styles.optionsVote}>Opciones:</Text>
              <View>
                <UsersListComponent selectedMembers={results} vote={true} itemOnPressHandler={voteHandler}/>
              </View>
              <View style={styles.buttonContainer}>
                <View style={styles.confirmButton}>
                  <TouchableOpacity
                    onPress={() => createHandler()}
                    style={styles.applyButton}
                  >
                    <Text style={styles.textConfirmButton}>Votar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default VotingScreen;
