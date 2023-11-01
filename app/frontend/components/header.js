import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { X, Check, MessageCircle, PlusCircle, ChevronRight } from "react-native-feather";
import logo from "../assets/logoFull.png";
import { useNavigation } from "@react-navigation/native";

const header = () => {
  const nav = useNavigation();

  return (
    <View className="flex flex-row justify-between px-8 items-center">
      <TouchableOpacity onPress={() => nav.navigate("MyProfile")}>
        <Image
          className="h-10 w-10 rounded-full"
          source={{
            uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a5e8d0e-3a3a-4ef7-8c40-cd7e828e1e3b/dee83tf-4b831a16-cc6c-4c49-b1b8-16f7aed07852.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlhNWU4ZDBlLTNhM2EtNGVmNy04YzQwLWNkN2U4MjhlMWUzYlwvZGVlODN0Zi00YjgzMWExNi1jYzZjLTRjNDktYjFiOC0xNmY3YWVkMDc4NTIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EUJ5KLqieD2hQycoRkACzY8I91TxS-So_1eAzl2xYoc",
          }}
        />
      </TouchableOpacity>
        <Image
          source={logo}
          style={{
            resizeMode: "contain",
            width: "50%",
          }}
        />
      <TouchableOpacity onPress={() => nav.navigate("ChatList")}>
        <MessageCircle stroke="#121212" fill="#fff" width={32} height={32} strokeWidth={2} />
      </TouchableOpacity>
    </View>
  );
};

export default header;
