import { SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-deck-swiper";
import swipe from "../assets/swipe.png";
import { X, Check, MessageCircle, PlusCircle, ChevronRight, ChevronLeft } from "react-native-feather";
import Header from "../components/header";

const ChatListScreen = () => {
  const [input, setInput] = useState("");

  const nav = useNavigation();

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);

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
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#f2f2f2]">
      <View className="flex flex-row gap-x-2 px-8 py-8 items-center">
        <TouchableOpacity onPress={() => nav.navigate("Home")}>
          <ChevronLeft stroke="#121212" fill="none" width={25} height={25} strokeWidth={2} />
        </TouchableOpacity>
        <View className="flex flex-row justify-center items-center gap-x-4">
          <Image
            className="h-10 w-10 rounded-full"
            source={{
              uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a5e8d0e-3a3a-4ef7-8c40-cd7e828e1e3b/dee83tf-4b831a16-cc6c-4c49-b1b8-16f7aed07852.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlhNWU4ZDBlLTNhM2EtNGVmNy04YzQwLWNkN2U4MjhlMWUzYlwvZGVlODN0Zi00YjgzMWExNi1jYzZjLTRjNDktYjFiOC0xNmY3YWVkMDc4NTIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EUJ5KLqieD2hQycoRkACzY8I91TxS-So_1eAzl2xYoc",
            }}
          />
          <Text className="text-xl font-bold">Salman Razak</Text>
        </View>
      </View>
      <ScrollView>
        <View className="relative gap-y-4 px-4">
          <View className="relative bg-white p-4 rounded-xl">
            <Text className="text-[#121212] text-sm">Salam bro</Text>
          </View>
          <Text className="text-gray-400 text-xs text-right">18:04</Text>
        </View>
      </ScrollView>
        <View className="flex-row justify-between items-center border-t border-gray-200 px-5 py-2">
          <TextInput className="h-10 text-lg" placeholder="Type anything .." value={input} />
          <TouchableOpacity className="bg-[#121212] px-8 py-4 rounded-lg">
            <Text className="font-bold text-white">SEND</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default ChatListScreen;
