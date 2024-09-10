import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import moment from 'moment'
const UserTripCard = ({ trip }: any) => {
    console.log("small", JSON.stringify(trip?.tripPlan?.trip?.image_url))
    return (
        <View className='flex-row items-center gap-5 mt-1'>
            {/* <Image source={{ uri: JSON.stringify(trip?.tripPlan?.trip?.image_url) }} className='w-[100px] h-[100px] rounded-xl ' /> */}
            <Image source={require('@/assets/images/login.png')} className='w-[100px] h-[100px] rounded-xl ' />
            <View >
                <Text style={{ fontFamily: 'outfit-medium' }} className='text-lg'>{trip.tripPlan?.trip?.destination}</Text>
                <Text style={{ fontFamily: 'outfit' }} className='text-md  text-gray-500'>{moment(JSON.parse(trip?.tripData)?.startDate).format('DD MMM yyy')}</Text>
                <Text style={{ fontFamily: 'outfit' }} className='text-md  text-gray-500'>Travelling {JSON.parse(trip?.tripData)?.whoTravel}</Text>
            </View>
        </View>
    )
}

export default UserTripCard;