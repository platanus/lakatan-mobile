import React, { useState, useLayoutEffect, useEffect } from 'react';
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
import { interpolate } from 'react-native-reanimated';
import { DELETE_POLL_REQUEST,
  CREATE_POLL_REQUEST,
  CREATE_VOTE_REQUEST } from '../../store/types';

const results = [  {
    option: 'Opción A',
    percentage: '45%',
    votes: 45,
    id: 1,
    selected: true,
  },
  {
    option: 'Opción B',
    percentage: '65%',
    votes: 65,
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
  const { token, email, id } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const currentPoll = useSelector((state) => state.polls.currentPoll);
  const [voteResults, setVoteResults] = useState([]);
  const color = [colors.darkBlue];
  const keys = ['votes'];
  
  
  useEffect(() => {
    if (currentPoll) {
      setVoteResults(currentPoll.attributes.poll_options.map((item) => {
        const element = { ...item };
        element.selected = false;

        return element;
      }));}
  }, [currentPoll]);


  const createHandler = () => {
    const poll_option = voteResults.find((item) => item.selected === true);
    const poll_option_id = poll_option.id;
    dispatch({ type: CREATE_VOTE_REQUEST, payload: { token, email, "poll_id": currentPoll.id, poll_option_id, 'user_id': id } });
    navigation.goBack();
  };

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

  const deletePressHandler = () => {
    dispatch({ type: DELETE_POLL_REQUEST, payload: {token, email, "id": currentPoll.id } });
    navigation.goBack();
  }
  if (currentPoll && currentPoll.attributes.belongs) {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.infoContainer}>
            <Text style={styles.textHeader}>Propósito</Text>
            <Text>{purpose}</Text>
            <Text style={styles.newVotingText}>{nameVoting}</Text>
            {currentPoll.attributes.votes_remaining !== 0 && currentPoll.attributes.voted &&
              <View style={{ flexDirection: 'row' }}>
                <Text>Faltan {currentPoll.attributes.votes_remaining} votos • </Text>
                <TouchableOpacity onPress={deletePressHandler}><Text style={styles.deteleVoting}>
                  Eliminar votación</Text></TouchableOpacity>
              </View>
            }
            {currentPoll.attributes.votes_remaining === 0 && currentPoll.attributes.voted &&
              <TouchableOpacity>
                <Text style={styles.deteleVoting}>Eliminar votación</Text>
              </TouchableOpacity> }
            {currentPoll.attributes.voted ? (
              <View>
                <View style={{ flexDirection: 'row', marginVertical: '10%' }} >
                  <View>
                    {voteResults.map(item => (
                      <View style={{ marginTop: 8 }} key={item.name}>
                        <Text style={{ fontSize: 16, color: colors.darkBlue }}>{item.name}</Text>
                        <Text style={{ fontSize: 12, marginBottom: (-7 * voteResults.length / 2 + 58) }}>
                          {item.percentage} - {item.votes}</Text>
                      </View>
                    ))}
                  </View>
                  <View>
                    <StackedBarChart
                      style={{ marginLeft: '15%', height: 73 * voteResults.length, width: '80%' }}
                      keys={keys}
                      colors={color}
                      data={voteResults}
                      yAccessor={({ item }) => item}
                      showGrid={false}
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
                  <UsersListComponent selectedMembers={voteResults} vote={true} itemOnPressHandler={voteHandler}/>
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
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.textHeader}>Propósito</Text>
        <Text>{purpose}</Text>
        <Text style={styles.newVotingText}>{nameVoting}</Text>
        {currentPoll && currentPoll.attributes.votes_remaining !== 0 &&
          <View style={{ flexDirection: 'row' }}>
            <Text>Faltan {currentPoll && currentPoll.attributes.votes_remaining} votos • </Text>
          </View>
        }
        <View>
          <View style={{ flexDirection: 'row', marginVertical: '10%' }} >
            <View>
              {voteResults.map(item => (
                <View style={{ marginTop: 8 }}>
                  <Text style={{ fontSize: 16, color: colors.darkBlue }}>{item.option}</Text>
                  <Text style={{ fontSize: 12, marginBottom: (-7 * voteResults.length / 2 + 58) }}>{item.percentage} - {item.total}</Text>
                </View>
              ))}
            </View>
            <View>
              <StackedBarChart
                style={{ marginLeft: '15%', height: 73 * voteResults.length, width: '80%' }}
                keys={keys}
                colors={color}
                data={voteResults}
                yAccessor={({ item }) => item}
                showGrid={false}
                horizontal={true}
                spacingInner={0.6}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default VotingScreen;
