import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { CreateTripContext } from './../../context/MytripContext';
import moment from 'moment';


const ReviewTrip = () => {
    const { tripData } = useContext(CreateTripContext)
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ' '
        })
    }, [])
    const handleOnPress = () => {
        console.log('hello')
    }
    return (
        <View className="h-full bg-white">
            <View className='mt-[100px] px-5'>
                <Text style={{ fontFamily: 'outfit-bold' }} className='text-4xl'>Review your trip</Text>
                <Text style={{ fontFamily: 'outfit-bold' }} className='text-lg my-2 '>Before generating your trip , please review your selection</Text>
                <View>
                    <View className='flex-row items-center gap-2 mt-1'>
                        <Text className='text-3xl p-2'>📍</Text>
                        <View>
                            <Text style={{ fontFamily: 'outfit-medium' }} className='text-xl text-gray-400'>Destination</Text>
                            <Text style={{ fontFamily: 'outfit-medium' }} className='text-xl '>{tripData?.place}</Text>
                        </View>
                    </View>
                    <View className='flex-row items-center gap-2 mt-1'>
                        <Text className='text-3xl p-2'>📆</Text>
                        <View>
                            <Text style={{ fontFamily: 'outfit-medium' }} className='text-xl text-gray-400'>Travel Date</Text>
                            <Text style={{ fontFamily: 'outfit-medium' }} className='text-xl '>{moment(tripData?.startDate).format('DD MMM') + " To " + moment(tripData?.endDate).format('DD MMM')} ({tripData?.totalNoOfDate} days)</Text>
                        </View>
                    </View>
                    <View className='flex-row items-center gap-2 mt-1'>
                        <Text className='text-3xl p-2'>✈️</Text>
                        <View>
                            <Text style={{ fontFamily: 'outfit-medium' }} className='text-xl text-gray-400'>Who is travelling</Text>
                            <Text style={{ fontFamily: 'outfit-medium' }} className='text-xl '>{tripData?.whoTravel}</Text>
                        </View>
                    </View>
                    <View className='flex-row items-center gap-2 mt-1'>
                        <Text className='text-3xl p-2'>💰</Text>
                        <View>
                            <Text style={{ fontFamily: 'outfit-medium' }} className='text-xl text-gray-400'>Budget</Text>
                            <Text style={{ fontFamily: 'outfit-medium' }} className='text-xl '>{tripData?.travellerBudget}</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={handleOnPress} className="bg-black p-3 items-center rounded-lg mt-12">
                    <Text style={{ fontFamily: 'outfit-medium' }} className="text-white text-lg">Build My Trip</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ReviewTrip