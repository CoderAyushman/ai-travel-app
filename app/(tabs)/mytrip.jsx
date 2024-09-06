import { View, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "@/config/FirebaseConfig";
import UserTripList from "@/components/MyTrips/UserTripList";
export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setloading] = useState(false)
  const user = auth.currentUser
  useEffect(() => {
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
  }
  return (
    <View className="p-5 pt-[50px] h-[100vh] bg-white">
      <View className="flex-row justify-between items-center">

        <Text style={{
          fontFamily: 'outfit-bold'
        }} className="text-3xl">My Trips</Text>
        <Ionicons name="add-circle" size={45} color="black" />
      </View>
      {loading && <ActivityIndicator size={'large'} color={'#fff'} />}
      {
        userTrips.length == 0 ? <StartNewTripCard /> : <UserTripList userTrips={userTrips} />
      }
    </View>
  );
}
