import { View, Text, ActivityIndicator, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "@/config/FirebaseConfig";
import UserTripList from "@/components/MyTrips/UserTripList";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setloading] = useState(false)
  const router = useRouter()
  const user = auth.currentUser

  useEffect(() => {
    setloading(true)
    user && GetMyTrips();

  }, [user])

  const GetMyTrips = async () => {
    setUserTrips([]);
    const q = query(collection(db, 'UserTrips'), where('userEmail', '==', user?.email))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setUserTrips((prev) => [...prev, doc.data()])
    });
    setloading(false)
  }
  return (
    <View className="p-5 pt-[50px] h-[100vh] bg-white">
      <View className="flex-row justify-between items-center">
        <Text style={{
          fontFamily: 'outfit-bold'
        }} className="text-3xl">My Trips</Text>
        <TouchableOpacity onPress={() => router.push('/create-trip/search-place')}>
          <Ionicons name="add-circle" size={45} color="black" />
        </TouchableOpacity>
      </View>
      <ScrollView>

        {loading && <ActivityIndicator size={'large'} color={'#000'} />}
        {
          userTrips.length == 0 ? <StartNewTripCard /> : <UserTripList userTrips={userTrips} />
        }
      </ScrollView>
    </View>
  );
}
