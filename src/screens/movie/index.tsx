import React from 'react';
import { Image, Linking, ScrollView, Share, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useAppSelector } from 'src/redux/hooks';
import { MAButton, MAContainer, MATextButton, MATextInfo } from 'src/components';
import styles from './styles';
import { RootState } from 'src/redux/store';
import { getMovie } from 'src/redux/movies/selectors';
import { DEFAULT_IMAGE } from 'src/components/list/item/constants';

interface RouteParams {
  index: number;
}

export const MovieScreen: React.FC<{ navigation: any; route: { params: RouteParams } }> = ({ navigation, route }) => {
  const { index } = route.params;
  const movie = useAppSelector((state: RootState) => getMovie(state, index));

  const onShare = async () => {
    try {
      const result = await Share.share({
        url: movie?.imdb_url,
        message:
          'Send this movie info to your friends or save in your device',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('shared with activity type of result.activityType')
        } else {
          console.log('shared')
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('dismissed')
      }
    } catch (error) {
      console.log('error====>', error)
    }
  };

  return (
    <MAContainer style={styles.mainContainer}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Image
          resizeMode='contain'
          style={styles.image}
          source={{ uri: movie?.img_poster || DEFAULT_IMAGE }}
        />
        <View style={styles.contentContainer}>
          <MATextInfo label='Title: ' info={movie?.title} />
          <MATextInfo label='Year: ' info={movie?.year} />
          <MATextInfo label='Casts: ' info={movie?.actors} />
          <MATextInfo label='Rank: ' info={movie?.rank} />
          <MATextButton
            onPress={() => Linking.openURL(movie?.imdb_url ?? '')}
            title='Website'
          />
        </View>
        <MAButton onPress={onShare} title='SHARE' />
      </ScrollView>
    </MAContainer>
  );
};
