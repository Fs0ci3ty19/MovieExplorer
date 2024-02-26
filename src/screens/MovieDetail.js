import {
  Animated,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon6 from 'react-native-vector-icons/FontAwesome6';

export const MovieDetail = ({navigation, route}) => {
  const movieData = route?.params;
  return (
    <>
      <View style={StyleSheet.absoluteFillObject}>
        <Animated.Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`,
          }}
          style={[StyleSheet.absoluteFillObject, {opacity: 0.7}]}
          blurRadius={10}
        />
      </View>

      <View
        style={{
          width: '100%',
          height: '100%',
          // backgroundColor: 'red',
          position: 'absolute',
        }}>
        <View
          style={{
            justifyContent: 'center',
            padding: 15,
          }}>
          <Pressable
            style={{flexDirection: 'row', justifyContent: 'space-between'}}
            onPress={() => navigation.goBack()}>
            <Icon6 name="chevron-left" size={30} />
            <Icon name="rocket" size={30} />
          </Pressable>
        </View>
        <View style={{flex: 1}}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`,
            }}
            height={300}
            width={200}
            style={{borderRadius: 10, alignSelf: 'center', marginTop: 20}}
            // blurRadius={10}
          />
          <Icon
            name="heart"
            size={30}
            color="red"
            style={{
              position: 'absolute',
              top: 30,
              right: 105,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              color: '#20262E',
              fontSize: 28,
              // backgroundColor: 'red',
              textAlign: 'center',
              fontFamily: 'Nunito-SemiBold',
              margin: 20,
            }}>
            {movieData?.title}
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});
