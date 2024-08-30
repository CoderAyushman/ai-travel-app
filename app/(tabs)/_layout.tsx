
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#000'
        }}>
            <Tabs.Screen name='mytrip' options={
                {
                    tabBarLabel: 'My Trip',
                    tabBarIcon: ({ color }) => <FontAwesome6 name="location-dot" size={24} color={color} />
                }
            } />
            <Tabs.Screen name='discover' options={
                {
                    tabBarLabel: 'Discover',
                    tabBarIcon: ({ color }) => <Ionicons name="globe-outline" size={24} color={color} />
                }
            } />
            <Tabs.Screen name='profile' options={
                {
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />
                }
            } />
        </Tabs>
    )
}