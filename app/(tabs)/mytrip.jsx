import { View, Text } from "react-native";
import React, { useState } from "react";
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);
  return (
    <View className="p-5 pt-[50px] h-[100vh] bg-white">
      <View className="flex-row justify-between items-center">

        <Text style={{
          fontFamily: 'outfit-bold'
        }} className="text-3xl">My Trips</Text>
        <Ionicons name="add-circle" size={45} color="black" />
      </View>
      {
        userTrips.length == 0 ? <StartNewTripCard /> : null
      }
    </View>
  );
}
