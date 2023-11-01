import { View, Text, TouchableOpacity } from "react-native";
import React, { Profiler, useEffect, useState, useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MapPin, Star, Mail } from "react-native-feather";
import { UserContext } from "../hooks/UserContext";
import axios from "axios";
const UserProfileScreen = () => {
  const nav = useNavigation();
  const route = useRoute();
  const { user, setUser } = useContext(UserContext);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
      axios
        .post("https://5966-2001-e68-447f-20fd-fd9c-4bcf-b439-32ec.ngrok.io/api/get-matches", {
          user: {
            id: user.id,
          },
        })
        .then(function (response) {
          setProfiles(response.data);
        })
        .catch(function (error) {
          console.log(error.response.data);
        });
    }, []);

  return (
    <View className="flex-1 pt-12 px-8 bg-white">
      {profiles.map((profile) =>
        route.params.uid == profile.id ? (
          <View>
            <Text className="text-[#121212] font-bold text-5xl py-10">{profile.name}</Text>
            <View className="gap-y-6">
            <TouchableOpacity activeOpacity={1} className="bg-[#f8f8f8] py-8 rounded-xl gap-2 px-8">
              <Mail stroke="#f8f8f8" fill="#121212" width={25} height={25} strokeWidth={2} />
              <View className="flex flex-row">
                <Text className="text-[#121212] font-semibold text-lg">{profile.email}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} className="bg-[#f8f8f8] py-8 rounded-xl gap-2 px-8">
              <Star stroke="transparent" fill="#121212" width={25} height={25} strokeWidth={2} />
              <View className="flex flex-row">
                <Text className="text-[#121212] font-semibold text-lg"></Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} className="bg-[#f8f8f8] py-8 rounded-xl gap-2 px-8">
              <MapPin stroke="#121212" fill="#fff" width={25} height={25} strokeWidth={2} />
              <View className="flex flex-row">
                <Text className="text-[#121212] font-bold text-lg"></Text>
              </View>
            </TouchableOpacity>
            </View>
          </View>
        ) : (
          <></>
        )
      )}
    </View>
  );
};

export default UserProfileScreen;
