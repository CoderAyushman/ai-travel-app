import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { AI_PROMPT } from './../../constants/Option'
import { CreateTripContext } from './../../context/MytripContext';
import { chatSession } from './../../config/AiModel'
import { auth, db } from './../../config/FirebaseConfig'
import { doc, setDoc } from "firebase/firestore";
const GenarateTrip = () => {
    const { tripData, serTripDate } = useContext(CreateTripContext)
    const [loading, setloading] = useState(true)
    const router = useRouter()
    const user = auth.currentUser;
    useEffect(() => {
        GenerateAiTrip()
    }, [])
    const GenerateAiTrip = async () => {
        setloading(true)
        const FINAL_PROMPT = AI_PROMPT
            .replace('{location}', tripData?.place)
            .replace('{totalDays}', tripData?.totalNoOfDays)
            .replace('{totalNight}', tripData?.totalNoOfDays - 1)
            .replace('{traveller}', tripData?.whoTravel)
            .replace('{budget}', tripData?.travellerBudget)
            .replace('{totalNight}', tripData?.totalNoOfDays - 1)
            .replace('{totalDays}', tripData?.totalNoOfDays)

        console.log(FINAL_PROMPT)
        const result = await chatSession.sendMessage(FINAL_PROMPT);
        console.log(result.response.text());
        setloading(false)
        const docId = (Date.now()).toString();
        const tripRes = JSON.parse(result.response.text());
        await setDoc(doc(db, "UserTrips", docId), {
            userEmail: user.email,
            tripData: JSON.stringify(tripData),
            tripPlan: tripRes,
            docId: docId
        });
        router.push('/(tabs)/mytrip')
    }
    return (
        <View className='bg-white h-full'>
            <View className='mt-[100px] items-center '>
                <Text style={{ fontFamily: 'outfit-bold' }} className='text-3xl'>Please Wait...</Text>
                <Text style={{ fontFamily: 'outfit-bold' }} className='text-xl text-center mt-7'>We are working to generate your dream trip</Text>
                <Image source={require('./../../assets/images/plane-gif.gif')} className='h-[200px] w-[200px] mt-5' />
                <Text style={{ fontFamily: 'outfit-bold' }} className='mt-7 text-xl text-gray-500'>Do not Go Back</Text>
            </View>
        </View>
    )
}

export default GenarateTrip;

