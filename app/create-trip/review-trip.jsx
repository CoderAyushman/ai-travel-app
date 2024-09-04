import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'

const ReviewTrip = () => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ' '
        })
    }, [])

    return (
        <View className="h-full bg-white">
            <View className='mt-[100px] px-5 '>
                <Text style={{ fontFamily: 'outfit-bold' }} className='text-4xl'>Review your trip</Text>
                <Text style={{ fontFamily: 'outfit-bold' }} className='text-lg my-5'>Before generating your trip , please review your selection</Text>
                <View>
                    <View>
                        <Text>l</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ReviewTrip