import { StyleSheet } from 'react-native';
import color from '../../styles/colors';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: color.white,
    padding: '5%',
  },

  itemsListContainer: {
    width: '100%',
    height: '95%',
    // flex: 1,
  },
  listItems: {},
  itemButton: {},
  textContainer: {
    backgroundColor: '#e6f7ff',
    borderRadius: 50,
    paddingLeft: '3%',
    paddingRight: '5%',
    width: '100%',
    height: 55,
    marginVertical: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
  itemText: {
    fontSize: 16,
    color: '#0050b3',
  },
});

export default { ...styles };
