import { StyleSheet } from 'react-native';
import colors from '../colors';

const ItemStyles = StyleSheet.create({
  newItemContainer: {
    backgroundColor: colors.lightBlue,
    borderRadius: 50,
    paddingHorizontal: 25,
    width: '100%',
    height: 55,
    marginVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  newTextItemTitle: {
    fontSize: 12,
    color: colors.blue,
  },
  newTextItemDescription: {
    fontSize: 14,
    color: colors.darkBlue,
  },

  eliminatedItemContainer: {
    backgroundColor: colors.lightRed,
    borderRadius: 50,
    paddingHorizontal: 25,
    width: '100%',
    height: 55,
    marginVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eliminatedTextItemTitle: {
    fontSize: 12,
    color: colors.red,
  },
  eliminatedTextItemDescription: {
    fontSize: 14,
    color: colors.darkRed,
  },

  notSelectedItemContainer: {
    backgroundColor: colors.lightGray,
    borderRadius: 50,
    paddingHorizontal: 25,
    width: '100%',
    height: 55,
    marginVertical: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notSelectedTextItemTitle: {
    fontSize: 12,
    color: colors.gray,
  },
  notSelectedTextItemDescription: {
    fontSize: 14,
    color: colors.gray,
  },

  textsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 35,
  },
});

export default { ...ItemStyles };
