import { heightPercentageToDP } from '@helpers';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    marginTop: heightPercentageToDP('-6'), 
  },
  container: {
    marginTop: heightPercentageToDP('1'),
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 12,
  },
  contentContainer: {
    marginTop: 20,
  },
});
