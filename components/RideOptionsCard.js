import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tailwind from 'twrnc'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'

const data = [
    {
        id: "Uber-X-123",
        title: "Uber X",
        multiplier: 1,
        image: require('../img/logo.png'),
    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: require('../img/logo.png'),
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: require('../img/logo.png'),
    },
];


const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView>
        <View>
            <TouchableOpacity 
                onPress={() => navigation.navigate('NavigateCard')}
                style={tailwind`absolute p-3 rounded-full top-5 left-5 z-50`}
            >
                <Icon name="chevron-left" type="font-awesome" size={14} />
            </TouchableOpacity>
            <Text style={tailwind`text-center text-xl py-5`}>Selecciona conductor - {travelTimeInformation?.distance.text}</Text>
        </View>
        <FlatList 
            data={data} 
            keyExtractor={(item) => item.id} 
            renderItem={({item: {id, title, multiplier, image}, item}) => (
                <TouchableOpacity
                    onPress={() => setSelected(item.id === selected ? null : item.id)}
                    style={[tailwind`flex-row justify-between items-center px-5`, item.id === selected && tailwind`bg-gray-200`]}
                >
                    <Image 
                        style={{
                            width: 70,
                            height: 70,
                            resizeMode: 'contain',
                        }}
                        source={item.image}
                    />
                    <View style={tailwind`-ml-4`}>
                        <Text style={tailwind`text-xl font-semibold`}>{title}</Text>
                        <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
                    </View>
                    <Text style={tailwind`text-xl`}>dasdas</Text>
                </TouchableOpacity>
            )}
        />
        <View>
            <TouchableOpacity style={tailwind`bg-black py-3 m-3`}>
                <Text style={tailwind`text-center text-white text-xl`}>
                    Choose {selected?.title}
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})