import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router';
import { SelectTravelsList } from '@/constants/Option';
import OptionCard from '@/components/MyTrips/OptionCard';


const Traveller = () => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ' '

        })
    }, [])

    return (
        <View className="h-full bg-white ">
            <View className='mt-[100px] px-5 '>

                <Text style={{ fontFamily: 'outfit-bold' }} className='text-4xl'>Who's Travelling</Text>
                <Text style={{ fontFamily: 'outfit-medium' }} className='text-2xl mt-5'>Choose your traveles</Text>
                <FlatList data={SelectTravelsList} renderItem={({ index, item }) =>
                    <View>
                        <OptionCard option={item} />
                    </View>
                } />
            </View>
        </View>
    )
}

export default Traveller