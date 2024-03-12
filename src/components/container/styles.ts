import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '@helpers';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: heightPercentageToDP('2'),
    paddingHorizontal: widthPercentageToDP('4'),
  },
});
