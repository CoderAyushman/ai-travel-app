import { View, Text, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CreateTripContext } from '@/context/MytripContext';

export default function SearchPlace() {
    const { tripData, setTripData } = useContext < any > (CreateTripContext)
    const [text, setText] = useState < string > (" ");
    const router = useRouter();
    useEffect(() => {
        console.log(tripData)
    }, [tripData])

    const handleOnpress = () => {
        if (text != "") {
            // console.log(tripData)
            setTripData({ place: text })
            router.push('/create-trip/select-traveller')
        }
        else {
            ToastAndroid.show("Please enter a valid location", ToastAndroid.LONG)
        }
    }
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions(
            {
                headerShown: true,
                headerTransparent: true,
                headerTitle: 'Search'

            }
        )
    }, [])

    return (
        <View className="h-full bg-white items-center">
            <View className="p-10 mt-[80px] ">
                <Text style={{ fontFamily: 'outfit-medium' }} className="text-2xl">Enter place name where you want to go:</Text>
                <TextInput style={{ fontFamily: 'outfit' }} onChangeText={(value) => { setText(value) }} placeholder='e.g. city, state, country' className="mt-2 text-lg border border-gray-300 p-2 rounded-xl" />
            </View>
            <TouchableOpacity className="rounded-md  bg-black items-center max-w-[200px] px-[50px]" onPress={handleOnpress}>
                <Text style={{ fontFamily: 'outfit-medium' }} className="py-3 text-white text-lg">Next</Text>
            </TouchableOpacity>

            {/* <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
                    language: 'en',
                }}
            /> */}
        </View>
    )
}