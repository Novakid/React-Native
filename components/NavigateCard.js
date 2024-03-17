import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { setDestination } from '../slices/navSlice'
import { Icon } from 'react-native-elements'

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
  return (
    <SafeAreaView style={tailwind`bg-white flex-1`}>
      <Text style={tailwind`text-center py-5 text-xl`}>¡Tengamos un viaje!</Text>
      <View>
        <View>
            <GooglePlacesAutocomplete 
                placeholder='¿A donde vamos?'
                styles={toInputBoxStyles}
                fetchDetails={true}
                minLength = {3}
                onPress={(data, details = null) => {
                    dispatch(setDestination({
                            location: details.geometry.location,
                            description: data.description,
                        }),
                    );
                        
                    navigation.navigate("RideOptionsCard");
                }}
                enablePoweredByContainer={false}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'es',
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
            />
            <View style={tailwind`flex-row bg-white justify-evenly px-4 py-2 border-t border-gray-100 mt-auto`}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('RideOptionsCard')}
                    style={tailwind`flex flex-row w-24 justify-between bg-black px-4 py-3 rounded-full`}
                >
                    <Icon name="car" type="font-awesome" color="white" size={16} />
                    <Text style={tailwind`text-white text-center ml-3`}>Viaje</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#dddddf",
        borderRadius: 0,
        fontSize: 12,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
})