import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { Movie } from 'src/redux/movies/types';
import { DEFAULT_IMAGE } from './constants';
import { SCREENS } from '@utils';

interface MAListItemProps {
  item: Movie;
  index: number;
}

export const MAListItem: React.FC<MAListItemProps> = ({ item, index }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
      }}
      onPress={() => navigation.navigate(SCREENS.MOVIE, { index })}
      testID='movie-touchable'
    >
      <Image
        source={{ uri: item.img_poster ?? DEFAULT_IMAGE }}
        resizeMode='contain'
        style={styles.image }
        testID='movie-image'
      />
      <View style={styles.contentContainer}>
        <View style={{ paddingBottom: 10}}>
          <Text style={{fontSize: 23, fontWeight: '600'}}>{item.title}</Text>
        </View>
        <Text style={styles.text} numberOfLines={1}>Casts: {item.actors}</Text>
        <Text style={styles.text}>Year: {item.year}</Text>
        <Text style={styles.text}>Rank: {item.rank}</Text>
      </View>
    </TouchableOpacity>
  );
};
