import { SafeAreaView, View, Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import bg from "../assets/LoginBG.png";
import logo from "../assets/logo.png";
import google from "../assets/google.png";
import mail from "../assets/mail.png";

const LoginScreen = () => {
  const nav = useNavigation();

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white">
        <ImageBackground source={bg} resizeMode="cover">
        <View className="flex h-screen justify-center items-center">
          <View className="bottom-24 justify-center items-center">
            <Image source={logo} />
          </View>
          <View className="w-5/6 pb-64">
            <Text className="text-5xl font-bold">Find Your {"\n"}Travel Buddy</Text>
          </View>
          <View className="gap-y-4">
          <TouchableOpacity className="flex flex-row justify-center bg-white px-12 py-6 rounded-xl shadow-xl" onPress={() => nav.navigate("LoginEmail")}>
          <Image 
              source={mail}
              style={{ 
                resizeMode: 'contain',
                width: 20,
                height: 20,
          }}
            />
            <Text className="font-bold pl-4">Sign In with Email</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-row justify-center bg-white px-12 py-6 rounded-xl shadow-xl">
            <Image 
              source={google}
              style={{ 
                resizeMode: 'contain',
                width: 20,
                height: 20,
          }}
            />
            <Text className="font-bold pl-4">Sign In with Gmail</Text>
          </TouchableOpacity>
          </View>
        </View>
    </ImageBackground>
      </SafeAreaView>
  );
};

export default LoginScreen;
