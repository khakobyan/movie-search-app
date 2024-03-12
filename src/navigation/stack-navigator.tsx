import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors, SCREENS } from 'src/utils';
import * as screens from 'src/screens';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.MOVIES}
    >
      <Stack.Screen
        name={SCREENS.MOVIES}
        component={screens.MoviesScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREENS.MOVIE}
        component={screens.MovieScreen}
        options={{
          headerStyle: {
            backgroundColor: colors.primary40,
          },
          headerTitleAlign: 'center',
          headerTitle: 'Information About Movie',
          headerTitleStyle: {
            color: colors.white,
          },
          headerTintColor: colors.white,
        }}
      />
      {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name={SCREENS.AUTHOR}
          component={screens.AuthorScreen}
          options={{
            headerStyle: {
              backgroundColor: colors.GREEN,
            },
            headerTitleAlign: 'center',
            headerTitle: 'Information About Author',
            headerTitleStyle: {
              color: colors.WHITE,
            },
            headerTintColor: colors.WHITE,
          }}
        />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};
