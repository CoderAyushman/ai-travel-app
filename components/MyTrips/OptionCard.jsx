import { View, Text } from 'react-native'
import React from 'react'

const OptionCard = ({ option, selectedTraveller }) => {
    return (
        <View className={`flex-row p-[20px] bg-gray-100 justify-between mt-5 rounded-lg items-center ${selectedTraveller == option?.title && 'border-2'}`} >
            <View>
                <Text style={{ fontFamily: 'outfit-bold' }} className='text-xl'>{option?.title}</Text>
                <Text style={{ fontFamily: 'outfit-bold' }} className='text-gray-400 pt-1'>{option?.desc}</Text>
            </View>
            <Text className='text-4xl'>{option?.icon}</Text>
        </View>
    )
}

export default OptionCard;