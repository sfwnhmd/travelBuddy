import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, ImageBackground, Button, ScrollView } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import logo from "../assets/logoFull.png";
import img from "../assets/imgplaceholder.png";
import bg from "../assets/bg-1.png";
import { X, Check, MessageCircle } from "react-native-feather";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { UserContext } from "../hooks/UserContext";

const SetupProfileScreen = () => {
  const { user, setUser } = useContext(UserContext);

  const nav = useNavigation();

  const [image, setImage] = useState(null);

  const [countries, setCountries] = useState([]);

  const [myCountry, setMyCountry] = useState("");

  const [myInterest, setMyInterest] = useState("");

  const [interests, setInterests] = useState([]);

  const [errors, setErrors] = useState([]);

  const activities = [
    {
      name: "Camping",
      icon: "🏕️",
      id: 123,
    },
    {
      name: "Food Hunting",
      icon: "🍱",
      id: 124,
    },
    {
      name: "Hiking",
      icon: "🏔️",
      id: 125,
    },
    {
      name: "Cycling",
      icon: "🚴‍♂️",
      id: 126,
    },
    {
      name: "Coding",
      icon: "👨‍💻",
      id: 127,
    },
  ];

  useEffect(() => {
    axios.get("https://5966-2001-e68-447f-20fd-fd9c-4bcf-b439-32ec.ngrok.io/api/get-location").then(function (response) {
      console.log(response.data);
      setCountries(response.data);
    });
    axios.get("https://5966-2001-e68-447f-20fd-fd9c-4bcf-b439-32ec.ngrok.io/api/get-interest").then(function (response) {
      console.log(response.data);
      setInterests(response.data);
    });
  }, []);

  console.log(countries);
  const placeholder = {
    label: "Select location...",
    value: null,
    color: "#9EA0A4",
  };

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);

  const submit = async () => {
    await axios
      .post("https://5966-2001-e68-447f-20fd-fd9c-4bcf-b439-32ec.ngrok.io/api/setup-profile", {
        status: true,
        user: {
          id: user.id,
        },
        country: {
          id: myCountry,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });

    await axios
      .post("https://5966-2001-e68-447f-20fd-fd9c-4bcf-b439-32ec.ngrok.io/api/add-interest", {
        status: true,
        user: {
          id: user.id,
        },
        interest: {
          id: myInterest,
        },
      })
      .then(function (response) {
        console.log(response);
        nav.navigate("Home");
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
      


  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView className="h-screen bg-white">
      <ScrollView>
        <View className="justify-center items-center">
          <Image
            source={logo}
            style={{
              resizeMode: "contain",
              width: "50%",
            }}
          />
        </View>
        <View className="justify-center items-center">
          <Text className="text-center font-bold text-2xl leading-tight pb-2">Setup Your{"\n"}Profile</Text>
          <View className="py-6">
            {image ? <Image source={{ uri: image }} style={{ width: 200, height: 200, borderRadius: 15 }} /> : <Image source={img} resizeMode="contain" style={{ width: 250, height: 180 }} />}
            <View className="justify-center items-center bg-[#f2f2f2] py-4 rounded-lg mt-4">
              <TouchableOpacity onPress={pickImage}>
                <Text className="text-xs">Pick an image from camera roll</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="items-center gap-y-8">
          <View className="w-72">
            <Text className="pb-2 text-md font-bold text-left">Where are you from?</Text>
            <View className="bg-white h-12 p-4 rounded-lg shadow-sm shadow-[#f0f0f0]">
              <RNPickerSelect placeholder={placeholder} onValueChange={setMyCountry} items={countries.map((country) => ({ label: country.name, value: country.id }))} />
            </View>
          </View>

          <View className="w-72 ">
            <Text className="pb-2 text-md font-bold text-left">Pick your interest</Text>
            <ScrollView horizontal={true} snapToAlignment="center" showsHorizontalScrollIndicator={false} className="gap-x-4">
              {interests.map((interest) => (
                <View className="flex flex-row">
                  {interest.id == myInterest ? (
                    <TouchableOpacity className="bg-[#121212] py-8 rounded-xl w-40" onPress={() => setMyInterest(interest.id)}>
                      <View className=" flex flex-row justify-between items-center px-8">
                        <View>
                          <Text className="text-3xl text-white text-left mb-2">{interest.id}</Text>
                          <Text className="text-white font-bold text-lg">{interest.name}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity className="bg-[#f2f2f2] py-8 rounded-xl w-40" onPress={() => setMyInterest(interest.id)}>
                      <View className=" flex flex-row justify-between items-center px-8">
                        <View>
                          <Text className="text-3xl text-left mb-2">{interest.id}</Text>
                          <Text className="text-[#121212] font-bold text-lg">{interest.name}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <View className="justify-center items-center">
        <TouchableOpacity className="pt-8 pb-14" onPress={submit}>
          <View className={`justify-center items-center bg-[#121212] px-12 py-6 rounded-xl shadow-xl w-72`}>
            <Text className="font-bold text-white">LESSGO !</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SetupProfileScreen;
