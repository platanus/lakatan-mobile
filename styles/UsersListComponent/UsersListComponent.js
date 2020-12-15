import { StyleSheet } from 'react-native';
import color from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  selectedItemContainer: {
    backgroundColor: color.lightBlue,
    paddingHorizontal: 15,
    width: '100%',
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  unselectedItemContainer: {
    backgroundColor: color.lightSoftGray,
    paddingHorizontal: 15,
    width: '100%',
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedItemText: {
    fontSize: globalStyle.fontSizePrincipalText,
    color: color.darkBlue,
    marginHorizontal: 10,
  },
  unselectedItemText: {
    fontSize: globalStyle.fontSizePrincipalText,
    color: color.gray,
    marginHorizontal: 10,
  },
  picture: {
    height: 45,
    width: 45,
    borderRadius: 50,
  },
  check: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
});

export default { ...styles };
