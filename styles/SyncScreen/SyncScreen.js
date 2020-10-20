import { StyleSheet } from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingTop: '3%',
    paddingBottom: '1%',
    paddingHorizontal: '5%',
    flexDirection: 'column',
  },

  description: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 5,
  },
  textDescription: {
    fontSize: 10,
  },
  textWorkspace: {
    fontSize: 10,
    marginHorizontal: 3,
    color: colors.blue,
  },

  applyButton: {
    width: '100%',
    backgroundColor: colors.darkBlue,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    height: 55,
  },
  textApplyButton: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
  },

  itemsListContainer: {
    flex: 1,
    marginTop: 7,
  },

  reloadButton: {
    width: '100%',
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textReloadButton: {
    color: colors.darkBlue,
  },
});

export default { ...styles };
