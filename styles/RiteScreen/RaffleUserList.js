import { StyleSheet } from 'react-native';
import color from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  selectedItemContainer: {
    backgroundColor: color.lightBlue,
    borderRadius: 50,
    paddingHorizontal: 25,
    width: '100%',
    height: 45,
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  unselectedItemContainer: {
    backgroundColor: color.lightGray,
    borderRadius: 50,
    paddingHorizontal: 25,
    width: '100%',
    height: 45,
    marginVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedItemText: {
    fontSize: globalStyle.fontSizeSecondaryText,
    color: color.darkBlue,
    width: '90%',
  },
  unselectedItemText: {
    fontSize: globalStyle.fontSizeSecondaryText,
    color: color.gray,
    width: '90%',
  },
});

export default { ...styles };
