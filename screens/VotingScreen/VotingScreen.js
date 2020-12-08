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

const results2332 = [ // esto viene de Backend
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

const results = [ // esto viene de Backend
  {
    option: 'Opción A',
    totalPercentage: '10%',
    total: 10,
    id: 1,
    selected: true,
  },
  {
    option: 'Opción B',
    totalPercentage: '20%',
    total: 20,
    id: 2,
    selected: false,
  },
  {
    option: 'Opción C',
    totalPercentage: '30%',
    total: 30,
    id: 3,
    selected: false,
  },
  {
    option: 'Opción D',
    totalPercentage: '15%',
    total: 15,
    id: 4,
    selected: false,
  },
  {
    option: 'Opción E',
    totalPercentage: '25%',
    total: 25,
    id: 5,
    selected: false,
  },
];

const resultsasd3 = [ // esto viene de Backend
  {
    option: 'Opción A',
    totalPercentage: '10%',
    total: 10,
    id: 1,
    selected: true,
  },
  {
    option: 'Opción B',
    totalPercentage: '20%',
    total: 20,
    id: 2,
    selected: false,
  },
  {
    option: 'Opción C',
    totalPercentage: '30%',
    total: 30,
    id: 3,
    selected: false,
  },
  {
    option: 'Opción D',
    totalPercentage: '40%',
    total: 40,
    id: 4,
    selected: false,
  },
];

const results22 = [ // esto viene de Backend
  {
    option: 'Opción A',
    totalPercentage: '45%',
    total: 45,
    id: 1,
    selected: true,
  },
  {
    option: 'Opción B',
    totalPercentage: '65%',
    total: 65,
    id: 2,
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
  const vote = true; // esto viene de backend
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
                    <View style={{ marginTop: 8 }}>
                      <Text style={{ fontSize: 16, color: colors.darkBlue }}>{item.option}</Text>
                      <Text style={{ fontSize: 12, marginBottom: (-7*results.length/2 + 58) }}>{item.totalPercentage} - {item.total}</Text>
                    </View>
                  ))}
                </View>
                <View>
                  <StackedBarChart
                    style={{ marginLeft: '15%', height: 73*results.length, width: '80%' }}
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
