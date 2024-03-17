import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tailwind from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

const options = [
    {
        id: "1",
        title: "¿A donde vamos?",
        image: require('../img/Rutas.png'),
        screen: "MapScreen",
    },
];
/*
Aquí se va crear una lista donde consumiremos los datos declarados anterior menten en el objeto
lo cual se nos colocara de manera horizontal por el valor "horizontal"
rederizaremos los items a colocar para volverlos tocables con "TouchableOpacity" lo que le dara un
efecto de opacidad al momento de interactuar con el y por ultimo también utiliaremos tailwind de nuevo
para modificar el paddin de los objetos y agregarle un fondo de color gris.
*/
const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin)

  return (
    <FlatList
      data={options}
      horizontal
      keyExtractor={( item ) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity 
        style={[tailwind`p-4 pl-6 pb-8 pt-4 bg-gray-200`, !origin && tailwind`opacity-20`]}
        onPress={() => origin && navigation.navigate(item.screen)}
        disabled={!origin}
        >
                <View>
                <Image
                    style={{width: 120, height: 120, resizeMode: 'contain',}} 
                    source={item.image}
                />
                <Text style={tailwind `mt-2 text-sm font-semibold`}>{item.title}</Text>
                <Icon 
                    style={tailwind `p-2 bg-black w-10 mt-4 rounded-full`}
                    name='arrowright'
                    color='white'
                    type='antdesign'
                />
            </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavOptions