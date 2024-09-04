
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { BudgetList } from '@/constants/Option';
import OptionCard from '@/components/MyTrips/OptionCard';
import { CreateTripContext } from '@/context/MytripContext';


const SelectBudget = () => {
    const [selectedBudget, setSelectedBudget] = useState()
    const { tripData, setTripData } = useContext(CreateTripContext)
    const navigation = useNavigation();
    const router = useRouter();
    useEffect(() => {
        setTripData({ ...tripData, travellerBudget: selectedBudget })
    }, [selectedBudget])
    useEffect(() => {
        console.log(BudgetList)
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ' '

        })
    }, [])

    const handleOnPress = (value) => {

        setSelectedBudget(value)
        setTimeout(() => {
            router.push('/create-trip/review-trip')
        }, 200);
    }
    return (
        <View className="h-full bg-white ">
            <View className='mt-[100px] px-5 '>

                <Text style={{ fontFamily: 'outfit-bold' }} className='text-4xl'>Budget</Text>
                <Text style={{ fontFamily: 'outfit-bold' }} className='text-lg my-5'>Choose spending habits for your trip</Text>
                {BudgetList && (
                    <FlatList
                        data={BudgetList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleOnPress(item.title)}>
                                <OptionCard option={item} selectedTraveller={selectedBudget} />
                            </TouchableOpacity>
                        )}
                    />
                )}
            </View>
        </View>
    )
}

export default SelectBudget