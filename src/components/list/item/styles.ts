import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'src/helpers';
import { colors } from 'src/utils';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: widthPercentageToDP('3'),
    marginVertical: heightPercentageToDP('1'),
    borderWidth: 2,
    borderRadius: 12,
    borderColor: colors.primary50,
  },
  image: {
    borderRadius: 12,
    width: 100,
    height: 100,
  },
  contentContainer: {
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: {
    textTransform: 'capitalize',
  },
});
