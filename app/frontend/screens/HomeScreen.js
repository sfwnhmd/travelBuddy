import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useRef, useState, useContext } from "react";
import logo from "../assets/logoFull.png";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-deck-swiper";
import swipe from "../assets/swipe.png";
import { X, Check, Frown } from "react-native-feather";
import Header from "../components/header";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { UserContext } from "../hooks/UserContext";

const HomeScreen = () => {
  const nav = useNavigation();

  const { user, setUser } = useContext(UserContext);

  const swipeRef = useRef(null);

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

  const swipeRight = async (cardIndex) => {
    if (!profiles[cardIndex]) return;
    const userSwiped = profiles[cardIndex];
    console.log(`You swipe ${userSwiped.name} right`);
    axios
      .put("https://5966-2001-e68-447f-20fd-fd9c-4bcf-b439-32ec.ngrok.io/api/swipe", {
        user: user.id,
        match_id: userSwiped.id,
        match: 1,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  const swipeLeft = async (cardIndex) => {
    if (!profiles[cardIndex]) return;
    const userSwiped = profiles[cardIndex];
    console.log(`You swipe ${userSwiped.name} left`);
    axios
      .put("https://5966-2001-e68-447f-20fd-fd9c-4bcf-b439-32ec.ngrok.io/api/swipe", {
        user: user.id,
        match_id: userSwiped.id,
        match: 0,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  const images = [
    {
      pic: "https://i.pinimg.com/originals/48/d3/3d/48d33d6b4c71bed8f472f07f177a8e55.jpg",
      id: 0,
    },
    {
      pic: "https://images.squarespace-cdn.com/content/v1/59fb1473e5dd5b97dd802008/1509637290545-USJVIY37IIOK3UB88NMU/caseyneistat03.jpg",
      id: 1,
    },
    {
      pic: "https://manofmany.com/wp-content/uploads/2022/04/Hasbulla-feature-1200x900.png",
      id: 2,
    },
    {
      pic: "https://www.gedistatic.it/content/gnn/img/lastampa/2022/08/18/073913872-83cbd54a-bb4b-49c4-ae60-c15ec6d25213.jpg",
      id: 3,
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-[#f2f2f2]">
      <Header />
      <View className="flex-1 -mt-14">
        <Swiper
          ref={swipeRef}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={profiles}
          stackSeparation={0}
          stackSize={7}
          cardIndex={profiles.id}
          animateCardOpacity
          verticalSwipe={false}
          onSwipedLeft={(cardIndex) => swipeLeft(cardIndex)}
          onSwipedRight={(cardIndex) => swipeRight(cardIndex)}
          renderCard={(card) =>
            card ? (
              <TouchableOpacity activeOpacity={1} className="h-full" onPress={() => nav.navigate("UserProfile", { uid: card.id })}>
                <LinearGradient
                  // Background Linear Gradient
                  colors={["rgba(27,223,203,1)", "rgba(214,154,245,1)"]}
                  className="h-4/6 rounded-3xl p-3"
                >
                  <View key={card.id}>
                    <LinearGradient
                      // Background Linear Gradient
                      colors={["transparent", "rgba(0,0,0,0.8)"]}
                      className="absolute z-10 h-full w-full rounded-2xl object-center"
                    />
                    <Image className="h-full w-full rounded-2xl object-center shadow-lg" source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Vitalik_Buterin_TechCrunch_London_2015_%28cropped%29.jpg" }} />
                    <View className="absolute bottom-0 w-full justify-between px-6 py-12 z-50">
                      <View>
                        <Text className="font-bold text-3xl text-white">{card.name}</Text>
                        <Text className="text-xl text-white">{card.email}</Text>
                      </View>
                    </View>
                  </View>
                </LinearGradient>
              </TouchableOpacity>
            ) : (
              <View className="bg-[#e2e2e2] h-4/6 rounded-3xl p-3">
                <View className="w-full h-full justify-center items-center px-6 py-12 z-50">
                  <View className="justify-center items-center gap-y-8">
                    <Frown stroke="#CECECE" fill="transparent" width={110} height={110} strokeWidth={2} />
                    <Text className="font-bold text-3xl text-[#CECECE]">No more people</Text>
                  </View>
                </View>
              </View>
            )
          }
        />
      </View>
      <View className="flex flex-row justify-between px-6">
        <View className="flex flex-row pt-3.5 gap-x-2">
          <Image source={swipe} resizeMode="contain" style={{ width: 35, height: 35 }} />
          <Text className="text-2xl text-[#939393]">Swipe</Text>
          <Text className="text-lg text-[#939393] pl-4 pt-0.5">or</Text>
        </View>
        <View className="flex flex-row justify-evenly gap-x-4">
          <TouchableOpacity className="bg-white px-5 rounded-full justify-center h-16 mb-4 shadow-md shadow-gray-200" onPress={() => swipeRef.current.swipeLeft()}>
            <X stroke="#121212" fill="#fff" width={25} height={25} strokeWidth={4} />
          </TouchableOpacity>
          <TouchableOpacity className="bg-white px-5 rounded-full justify-center h-16 mb-4 shadow-md shadow-gray-200" onPress={() => swipeRef.current.swipeRight()}>
            <Check stroke="#121212" fill="#fff" width={25} height={25} strokeWidth={4} />
          </TouchableOpacity>
        </View>
      </View>
      {/* <Text>{user}</Text> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
