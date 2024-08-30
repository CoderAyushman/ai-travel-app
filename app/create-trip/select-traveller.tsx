'use client'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from 'expo-router';
import { SelectTravelsList } from '@/constants/Option';
import OptionCard from '@/components/MyTrips/OptionCard';
import { CreateTripContext } from '@/context/MytripContext';


const Traveller = () => {
    const [selectedTraveller, setSelectedTraveller] = useState < any > ()
    const { tripData, setTripData } = useContext < any > (CreateTripContext)
    const navigation = useNavigation();
    useEffect(() => {
        setTripData(...tripData, { travellerCount: selectedTraveller })
    }, [selectedTraveller])
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
                {SelectTravelsList && <FlatList data={SelectTravelsList} renderItem={({ index, item }) =>
                    <TouchableOpacity onPress={() => { setSelectedTraveller(item) }}>
                        <OptionCard option={item} selectedTraveller={selectedTraveller} />
                    </TouchableOpacity>
                } />}
            </View>
        </View>
    )
}

export default Traveller