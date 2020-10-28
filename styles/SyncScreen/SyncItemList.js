import { StyleSheet } from 'react-native';
import colors from '../colors';

const itemStyles = StyleSheet.create({
  addItemContainer: {
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
  addActionTypeText: {
    fontSize: 12,
    color: colors.blue,
  },
  addActionNameText: {
    fontSize: 14,
    color: colors.darkBlue,
  },

  deleteItemContainer: {
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
  deleteActionTypeText: {
    fontSize: 12,
    color: colors.red,
  },
  deleteActionNameText: {
    fontSize: 14,
    color: colors.darkRed,
  },

  unselectedItemContainer: {
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
  unselectedActionTypeText: {
    fontSize: 12,
    color: colors.gray,
  },
  unselectedActionNameText: {
    fontSize: 14,
    color: colors.gray,
  },

  actionTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 35,
  },
});

export default { ...itemStyles };
