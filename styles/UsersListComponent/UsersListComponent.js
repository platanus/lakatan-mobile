import { StyleSheet } from 'react-native';
import color from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  selectedItemContainer: {
    backgroundColor: color.lightBlue,
    borderRadius: 20,
    paddingHorizontal: 15,
    width: '100%',
    height: 50,
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  unselectedItemContainer: {
    backgroundColor: color.lightGray,
    borderRadius: 20,
    paddingHorizontal: 15,
    width: '100%',
    height: 50,
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedItemText: {
    fontSize: globalStyle.fontSizeSecondaryText,
    color: color.darkBlue,
    marginHorizontal: 10,
  },
  unselectedItemText: {
    fontSize: globalStyle.fontSizeSecondaryText,
    color: color.gray,
    marginHorizontal: 10,

  },
  picture: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  check: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
});

export default { ...styles };
