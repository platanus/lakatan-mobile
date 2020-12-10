import { StyleSheet } from 'react-native';
import colors from '../colors';
import color from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  selectedItemContainer: {
    backgroundColor: color.lightBlue,
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 20,
    width: '100%',
    height: 70,
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  unselectedItemContainer: {
    backgroundColor: color.lightSoftGray,
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 20,
    width: '100%',
    height: 70,
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
    color: color.darkGray,
    marginHorizontal: 10,
  },
  picture: {
    height: 55,
    width: 55,
    borderRadius: 80,
  },
  check: {
    flex: 1,
    flexDirection: 'row-reverse',
  },

  labelsView: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  selectedLabelsText: {
    color: '#4fb8e8',
    fontSize: 12,
  },
  unselectedLabelsText: {
    color: color.gray,
    fontSize: 12,
  },
});

export default { ...styles };
