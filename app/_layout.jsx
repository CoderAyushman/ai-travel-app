'use client'
import { CreateTripContext } from "@/context/MytripContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
export default function RootLayout() {
  const [tripData, setTripData] = useState([])
  const [fontsLoaded] = useFonts({
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      // Prevent auto-hiding the splash screen
      await SplashScreen.preventAutoHideAsync();

      // If fonts are loaded, hide the splash screen
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, [fontsLoaded]); // Only re-run when fontsLoaded changes

  if (!fontsLoaded) {
    return null; // Don't render anything until fonts are loaded
  }
  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>

      <Stack screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CreateTripContext.Provider>
  );
}
