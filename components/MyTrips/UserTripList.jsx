import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment'
import UserTripCard from './UserTripCard'
const UserTripList = ({ userTrips }) => {
    const LatestTrip = JSON.parse(userTrips[0].tripData)
    console.log("big", JSON.stringify(userTrips[0]?.tripPlan?.trip?.image_url))
    return (
        <View>
            <View className='mt-5 '>
                <Image source={require('@/assets/images/icon.png')} className='w-full h-[200px] rounded-xl ' />
                {/* <Image source={{ uri: JSON.stringify(userTrips[0]?.tripPlan?.trip?.image_url) }} className='w-screen h-[200px] rounded-xl ' /> */}
                <Text style={{ fontFamily: 'outfit-medium' }} className='text-2xl mt-2'>{userTrips[0]?.tripPlan?.trip?.destination}</Text>
                <View>
                    <Text style={{ fontFamily: 'outfit-medium' }} className='text-lg text-gray-500'>{moment(LatestTrip?.startDate).format('DD MMM yyy')}</Text>
                    <Text className='text-lg'>{LatestTrip?.icon}</Text>

                </View>
                <View className='bg-black items-center mt-5 rounded-xl'>
                    <Text style={{ fontFamily: 'outfit-medium' }} className='text-white p-3'>See your plan</Text>
                </View>
                <View>
                    {
                        userTrips.map((trip, index) =>
                            <UserTripCard trip={trip} key={index} />
                        )
                    }
                </View>
            </View>
        </View>
    )
}

export default UserTripList