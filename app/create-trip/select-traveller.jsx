
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { SelectTravelsList } from '@/constants/Option';
import OptionCard from '@/components/MyTrips/OptionCard';
import { CreateTripContext } from '@/context/MytripContext';


const Traveller = () => {
    const [selectedTraveller, setSelectedTraveller] = useState()
    const [selectedWhoTravel, setSelectedWhoTravel] = useState()
    const [selectedId, setSelectedId] = useState()
    const [icon, seticon] = useState()
    const { tripData, setTripData } = useContext(CreateTripContext)
    const navigation = useNavigation();
    const router = useRouter();
    useEffect(() => {
        setTripData({ ...tripData, travellerCount: selectedTraveller, whoTravel: selectedWhoTravel, icon: icon })
    }, [selectedTraveller])
    useEffect(() => {
        console.log(SelectTravelsList)
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ' '

        })
    }, [])

    const handleOnPress = (value) => {

        setSelectedTraveller(value.people)
        setSelectedId(value.id)
        setSelectedWhoTravel(value.title)
        seticon(value.icon)
        setTimeout(() => {
            router.push('/create-trip/selected-dates')
        }, 200);
    }
    return (
        <View className="h-full bg-white ">
            <View className='mt-[100px] px-5 '>

                <Text style={{ fontFamily: 'outfit-bold' }} className='text-4xl'>Who's Travelling</Text>
                <Text style={{ fontFamily: 'outfit-medium' }} className='text-2xl mt-5'>Choose your traveles</Text>
                {SelectTravelsList && (
                    <FlatList
                        data={SelectTravelsList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleOnPress(item)}>
                                <OptionCard option={item} selectedTraveller={selectedId} />
                            </TouchableOpacity>
                        )}
                    />
                )}
            </View>
        </View>
    )
}

export default Traveller