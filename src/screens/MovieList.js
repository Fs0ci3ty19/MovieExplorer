import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchMovies} from '../redux/slices/movieSlice';
import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

export const MovieList = ({navigation}) => {
  const dispatch = useDispatch();
  const error = useSelector(state => state?.movies?.error);
  const loading = useSelector(state => state?.movies?.loading);
  const movies = useSelector(state => state?.movies);
  const width = useWindowDimensions().width;

  useEffect(() => {
    // console.log('Working?');

    dispatch(fetchMovies());
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={'#8E7AB5'} />
      <View
        style={{
          height: 50,
          backgroundColor: '#8E7AB5',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 18,
            fontFamily: 'Nunito-Bold',
          }}>
          Movie Explorer
        </Text>
      </View>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        style={{backgroundColor: 'rgba(142, 122, 181,0.8)'}}
        numColumns={2}
        contentContainerStyle={{padding: 10}}
        columnWrapperStyle={{gap: 10}}
        renderItem={({item}) => (
          <View
            style={{
              alignItems: 'center',
              marginBottom: 10,
              flexGrow: 1,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MovieDetail', item)}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                }}
                resizeMode="stretch"
                height={250}
                width={width / 2.17}
              />
            </TouchableOpacity>
            {/* <Text style={{width: 80}}>{item.title}</Text> */}
          </View>
        )}
      />
    </View>
  );
};
