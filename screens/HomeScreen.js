import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import GlobalStyles from '../Styles/GlobalStyles';
import tailwind from 'twrnc';
import NavOptions from './NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { setDestination, setOrigin } from '../slices/navSlice';
import { useDispatch } from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[GlobalStyles.droidSafeArea, tailwind`bg-white h-full`]}>
      <View style={tailwind `p-5`}>
        <Image 
          style={{
            width: 100,
            height: 100,
            resizeMode: 'contain',
          }}
          source={require('../img/logo.png')}
        />

        <GooglePlacesAutocomplete
          placeholder='¿Buscar un lugar especifico?'
          styles={{
            container: {
              backgroundColor: 'white',
              flex: 0,
            },
            textInput: {
              backgroundColor: "#dddddf",
              borderRadius: 0,
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}

          fetchDetails = {true}
          returnKeyType = {"search"}
          enablePoweredByContainer = {false}
          minLength = {3}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "es",
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});