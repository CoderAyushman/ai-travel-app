import { View, Text, Image } from 'react-native'
import React from 'react'

const UserTripCard = ({ trip, key }) => {
    return (
        <View>
            <Image source={require('./../../assets/images/icon.png')} className='w-full h-[200px] rounded-xl ' />
            <View>
                <Text>{trip.tripPlan?.trip?.destination}</Text>
            </View>
        </View>
    )
}

export default UserTripCard