import { View, Text } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import CalendarPicker from "react-native-calendar-picker";
import { useNavigation, useRouter } from 'expo-router';
import { CreateTripContext } from '@/context/MytripContext';
import { TouchableOpacity } from 'react-native';
import { ToastAndroid } from 'react-native';
import moment from 'moment';
const SelectDates = () => {
    const [startDate, setstartDate] = useState(null)
    const [endDate, setendDate] = useState(null)
    const { tripData, setTripData } = useContext(CreateTripContext)
    const navigation = useNavigation();
    const router = useRouter();
    useEffect(() => {

        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ' '

        })
    }, [])
    useEffect(() => {
        console.log(startDate, endDate)

    }, [startDate, endDate])

    const handleDateChange = (date, type) => {
        if (type === "END_DATE") {
            setendDate(moment(date));
        } else {
            setstartDate(moment(date));

        }

    }
    const handleOnPress = () => {
        if (!startDate && !endDate) {
            ToastAndroid.show("Please select Start Date and End Date", ToastAndroid.LONG);

        }
        else {
            const totalNoOfDate = endDate.diff(startDate, 'days') + 1;
            console.log(totalNoOfDate)
            setTripData({ ...tripData, startDate: startDate, endDate: endDate, totalNoOfDate: totalNoOfDate })
            console.log(tripData)
            router.push('/create-trip/select-budget');
        }
    }
    return (
        <View className="p-5 bg-white h-full ">
            <Text style={{ fontFamily: 'outfit-bold' }} className="mt-[80px] text-3xl">Travel Dates</Text>
            <View className="mt-5">
                <CalendarPicker minDate={new Date()} textStyle={{ fontFamily: 'outfit-medium' }} maxRangeDuration={5} selectedRangeStyle={{ backgroundColor: '#000' }} selectedDayTextStyle={{ color: '#fff' }} allowRangeSelection={true} onDateChange={(date, type) => handleDateChange(date, type)} />
            </View>
            <TouchableOpacity onPress={handleOnPress} className="bg-black p-3 items-center rounded-lg mt-10">
                <Text style={{ fontFamily: 'outfit-medium' }} className="text-white text-lg">Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SelectDates