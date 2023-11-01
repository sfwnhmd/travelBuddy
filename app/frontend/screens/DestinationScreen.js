import { SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'

import { useNavigation } from '@react-navigation/native'
import Swiper from 'react-native-deck-swiper'
import swipe from '../assets/swipe.png'
import { X, Check, MessageCircle, PlusCircle, ChevronRight, ChevronLeft } from "react-native-feather"
import Header from '../components/header'

const DestinationScreen = () => {

  const nav = useNavigation();

  useLayoutEffect(() => {
      nav.setOptions({
            headerShown: false,
      })
  }, [])

  const destinations = [
    {
      destination: "Kuala Lumpur",
      start: "2/2/2022",
      end: "2/2/2022",
      id: 123,
    },
    {
      destination: "Alor Setar",
      start: "2/2/2022",
      end: "2/2/2022",
      id: 124,
    },
    {
      destination: "Kangar",
      start: "2/2/2022",
      end: "2/2/2022",
      id: 125,
    },
    {
      destination: "Kangar",
      start: "2/2/2022",
      end: "2/2/2022",
      id: 126,
    },
    {
      destination: "Kangar",
      start: "2/2/2022",
      end: "2/2/2022",
      id: 127,
    },
    {
      destination: "Kangar",
      start: "2/2/2022",
      end: "2/2/2022",
      id: 128,
    },
]

  return (
    <SafeAreaView className="flex-1 bg-[#f2f2f2]">
      <View className="flex flex-row gap-x-4 px-8 py-12 items-center">
        <TouchableOpacity onPress={() => nav.navigate("MyProfile")}>
          <ChevronLeft stroke="#121212" fill="none" width={25} height={25} strokeWidth={2}/>
        </TouchableOpacity>
        <Text className="text-3xl font-bold">My Destination</Text>
      </View>
      <ScrollView>
      <View className='flex-1 gap-y-4'>
        <View className="flex px-4">
          <TouchableOpacity className="bg-[#121212] py-8 rounded-xl">
            <View className=" flex flex-row justify-center items-center gap-x-2">
            <PlusCircle stroke="#fff" fill="#121212" width={25} height={25} strokeWidth={2}/>
            <Text className="text-white">Add Your Destination</Text>
            </View>
          </TouchableOpacity>
        </View>
        {destinations.map(destination => (
          <View className="flex px-4">
            <TouchableOpacity className="bg-white py-8 rounded-xl">
              <View className=" flex flex-row justify-between items-center px-8">
                <View>
                  <Text className="text-[#121212] font-bold text-lg">{destination.destination}</Text>
                  <Text className="text-gray-400 text-xs">12/2/2022 - 1/3/2022</Text>
                </View>
              <ChevronRight stroke="#121212" fill="#fff" width={25} height={25} strokeWidth={2}/>
              </View>
            </TouchableOpacity>
          </View>
        ))

        }
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DestinationScreen