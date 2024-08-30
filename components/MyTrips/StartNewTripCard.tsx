import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from 'expo-router';
export default function StartNewTripCard() {
    const router = useRouter()
    return (
        <View className="flex-col mt-[70px] items-center  ">


            <FontAwesome6 name="location-dot" size={24} color="black" />
            <Text style={{ fontFamily: 'outfit-medium' }} className="text-xl mt-5">No trips planned yet</Text>
            <Text style={{ fontFamily: 'outfit' }} className="text-xl text-gray-400 mt-5 text-center ">Looks like its time to plan a new travel experinece! Get Started below</Text>
            <TouchableOpacity onPress={() => router.push('/create-trip/search-place')}>
                <Text style={{ fontFamily: 'outfit-medium' }} className="text-white bg-black py-3 px-5 rounded-lg mt-5">Start a new trip</Text>
            </TouchableOpacity>


        </View>
    )
}