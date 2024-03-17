import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
/*
Proyecto realizado en un sistema operativo Windows y Android.
Puede cambiar muchas cosas al realziar dependiendo si usas Mac e iOs
Primer paso.- Instalar reduxToolkit   -   npm install @reduxjs/toolkit
Segundo paso.- Instalar también  redux   -   npm install react-redux
Tercer paso.- Crear el Archivo store para el Provider
Cuarto paso.- Crear el HomeScreen e importarlo en este archivo
Quinto paso.- Instalar tailwind    -    npm install twrnc
Sexto paso.- Instalar React navigation  -  npm install @react-navigation/native
 -   npx expo install react-native-screens react-native-safe-area-context
 -   npm install @react-navigation/native-stack
*/
export default function App() {
  const createStack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1 }}
              keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}>
            <createStack.Navigator>
              <createStack.Screen 
                name= "HomeScreen"
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <createStack.Screen 
                name= "MapScreen"
                component={MapScreen}
                options={{
                  headerShown: false,
                }}
              />
            </createStack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}