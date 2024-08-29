import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'

export default function SearchPlace() {
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
        <View className="h-full bg-white ">
            <Text className="p-10 mt-[100px]">SearchPlace</Text>
        </View>
    )
}