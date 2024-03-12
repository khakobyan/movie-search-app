import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from 'src/helpers';

export default StyleSheet.create({
  container: {
    paddingTop: heightPercentageToDP('2'),
    paddingBottom: heightPercentageToDP('10'), 
  },
  emptyText: {
    marginTop: heightPercentageToDP('5'),
    alignSelf: 'center',
    textAlign: 'center',
    width: widthPercentageToDP('60')
  }
});
