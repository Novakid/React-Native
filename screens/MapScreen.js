import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tailwind from 'twrnc'
import Map from '../components/Map'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import MapView from 'react-native-maps';
import GlobalStyles from '../Styles/GlobalStyles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MapScreen = () => {
  const stack = createNativeStackNavigator();

  return (
    <View style={[GlobalStyles.droidSafeArea]}>
        <View style={tailwind`h-1/2`}>
          <Map />  
        </View>
        <View style={tailwind`h-1/2`}>
          <stack.Navigator>
            <stack.Screen 
              name='NavigateCard'
              component={NavigateCard}
              options={{
                headerShown: false,
              }}
            />
            <stack.Screen 
              name='RideOptionsCard'
              component={RideOptionsCard}
              options={{
                headerShown: false,
              }}
            />
          </stack.Navigator>
        </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})