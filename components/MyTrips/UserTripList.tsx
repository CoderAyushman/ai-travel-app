import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment'
const UserTripList = ({ userTrips }) => {
    const LatestTrip = JSON.parse(userTrips[0].tripData)
    return (
        <View>
            <View className='mt-5'>
                <Image source={require('./../../assets/images/icon.png')} className='w-full h-[200px] rounded-xl ' />
                <View>
                    <Text style={{ fontFamily: 'outfit-medium' }} className='text-2xl mt-2'>{userTrips[0]?.tripPlan?.trip?.destination}</Text>
                    <Text style={{ fontFamily: 'outfit-medium' }} className='text-xl mt-2'>{moment(LatestTrip?.startDate).format('DD MMM yyy')}</Text>
                </View>
            </View>
        </View>
    )
}

export default UserTripList