import React from 'react';
import {MovieList, MovieDetail, FavoriteMovies} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MovieList" component={MovieList} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
        <Stack.Screen name="FavoriteMovies" component={FavoriteMovies} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
