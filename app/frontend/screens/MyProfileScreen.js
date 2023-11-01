import { SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect, useContext } from 'react'
import logo from '../assets/logoFull.png'
import { useNavigation } from '@react-navigation/native'
import Swiper from 'react-native-deck-swiper'
import swipe from '../assets/swipe.png'
import { Mail, ChevronRight, ChevronLeft, User, MapPin, Star, LogOut, Map } from "react-native-feather"
import { UserContext } from "../hooks/UserContext";

const MyProfileScreen = () => {
  const { user, setUser } = useContext(UserContext);
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
        <TouchableOpacity onPress={() => nav.navigate("Home")}>
          <ChevronLeft stroke="#121212" fill="none" width={25} height={25} strokeWidth={2}/>
        </TouchableOpacity>
        <Text className="text-3xl font-bold">My Profile</Text>
      </View>
      <ScrollView>
      <View className='flex-1 gap-y-4'>
        <View className="flex px-4">
        <TouchableOpacity className="justify-center items-center pb-6">
          <Image
            className="h-48 w-48 rounded-full"
            source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a5e8d0e-3a3a-4ef7-8c40-cd7e828e1e3b/dee83tf-4b831a16-cc6c-4c49-b1b8-16f7aed07852.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlhNWU4ZDBlLTNhM2EtNGVmNy04YzQwLWNkN2U4MjhlMWUzYlwvZGVlODN0Zi00YjgzMWExNi1jYzZjLTRjNDktYjFiOC0xNmY3YWVkMDc4NTIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EUJ5KLqieD2hQycoRkACzY8I91TxS-So_1eAzl2xYoc' }}
          />
        </TouchableOpacity>
        </View>
          <View className="flex px-4">
            <TouchableOpacity className="bg-white py-6 rounded-xl">
              <View className=" flex flex-row justify-between items-center px-8">
              <View className="flex flex-row gap-x-4 justify-center items-center">
              <User stroke="#121212" fill="#fff" width={25} height={25} strokeWidth={2}/>
              <View>
                  <Text className="text-[#121212] font-bold text-lg">{user.name}</Text>
                </View>
              </View>
              <ChevronRight stroke="#121212" fill="#fff" width={25} height={25} strokeWidth={2}/>
              </View>
            </TouchableOpacity>
          </View><View className="flex px-4">
            <TouchableOpacity className="bg-white py-6 rounded-xl">
              <View className=" flex flex-row justify-between items-center px-8">
              <View className="flex flex-row gap-x-4 justify-center items-center">
              <Mail stroke="#121212" fill="#fff" width={25} height={25} strokeWidth={2}/>
              <View>
                  <Text className="text-[#121212] font-bold text-lg">{user.email}</Text>
                </View>
              </View>
              <ChevronRight stroke="#121212" fill="#fff" width={25} height={25} strokeWidth={2}/>
              </View>
            </TouchableOpacity>
            </View>
          <View className="flex px-4">
            <TouchableOpacity className="bg-white py-6 rounded-xl">
              <View className=" flex flex-row justify-between items-center px-8">
              <View className="flex flex-row gap-x-4 justify-center items-center">
              <MapPin stroke="#121212" fill="#fff" width={25} height={25} strokeWidth={2}/>
              <View>
                  <Text className="text-[#121212] font-bold text-lg">Kuala Lumpur, MY</Text>
                </View>
              </View>
              <ChevronRight stroke="#121212" fill="#fff" width={25} height={25} strokeWidth={2}/>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex px-4">
            <TouchableOpacity className="bg-white py-6 rounded-xl">
              <View className=" flex flex-row justify-between items-center px-8">
              <View className="flex flex-row gap-x-4 justify-center items-center">
              <Star stroke="#121212" fill="#fff" width={25} height={25} strokeWidth={2}/>
              <View>
                  <Text className="text-[#121212] font-bold text-lg">Hiking, Swimming</Text>
                </View>
              </View>
              <ChevronRight stroke="#121212" fill="#fff" width={25} height={25} strokeWidth={2}/>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex px-4">
            <TouchableOpacity className="bg-white py-6 rounded-xl" onPress={() => nav.navigate("Destination")}>
              <View className=" flex flex-row justify-between items-center px-8">
              <View className="flex flex-row gap-x-4 justify-center items-center">
              <Map stroke="#121212" fill="#fff" width={25} height={25} strokeWidth={2}/>
              <View>
                  <Text className="text-[#121212] font-bold text-lg">My Destination</Text>
                </View>
              </View>
              <ChevronRight stroke="#121212" fill="#fff" width={25} height={25} strokeWidth={2}/>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex px-4">
            <TouchableOpacity className="bg-white py-6 rounded-xl" onPress={() => setUser("null")}>
              <View className=" flex flex-row justify-between items-center px-8">
              <View className="flex flex-row gap-x-4 justify-center items-center">
              <LogOut stroke="#121212" fill="#fff" width={25} height={25} strokeWidth={2}/>
              <View>
                  <Text className="text-[#121212] font-bold text-lg">Sign Out</Text>
                </View>
              </View>
              <ChevronRight stroke="#121212" fill="#fff" width={25} height={25} strokeWidth={2}/>
              </View>
            </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MyProfileScreen