import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Movie as MovieType } from 'src/redux/movies/types';
import {  SCREENS } from 'src/utils';

export type RootStackParamList = {
  Home: undefined;
  Movie: { index: number };
};

export interface MAListItemProps {
  item: MovieType;
  index: number;
  navigation: StackNavigationProp<RootStackParamList, 'Movie'>;
}

export interface MovieScreenProps {
  route: RouteProp<RootStackParamList, 'Movie'>;
}
