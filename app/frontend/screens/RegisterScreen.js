import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useLayoutEffect, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import logo from "../assets/logoFull.png";
import axios from "axios";
import { UserContext } from "../hooks/UserContext";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const RegisterScreen = () => {
  const nav = useNavigation();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPass, setConfirmPass] = useState("");

  const [nameError, setNameError] = useState("");

  const [emailError, setEmailError] = useState("");

  const [passError, setPassError] = useState("");

  const { user, setUser } = useContext(UserContext);

  const submit = () => {
    // Send a POST request
    axios
      .post("https://5966-2001-e68-447f-20fd-fd9c-4bcf-b439-32ec.ngrok.io/api/register", {
        name: name,
        email: email,
        password: password,
        devicename: "iphone",
      })
      .then(function (response) {
        console.log(response);
        const validation = response.data.message;
        if (!response.data.message) {
          setUser(response.data.user);
          Alert.alert("Register Success", "Please update your profile", [{ text: "Awesome", onPress: () => console.log("OK Pressed") }]);
          nav.navigate("SetupProfile");
        } else {
          setNameError(response.data.message.name);
          setEmailError(response.data.message.email);
          setPassError(response.data.message.password);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <View className="justify-center items-center">
          <Image
            source={logo}
            style={{
              resizeMode: "contain",
              width: "50%",
            }}
          />
        </View>
        <View className="items-center gap-y-8">
          <View className="justify-center px-12">
            <Text className="pb-2 text-md font-bold text-left">Name</Text>
            <TextInput className="bg-white w-72 h-12 p-4 rounded-lg" placeholder="Enter your name" onChangeText={setName} defaultValue={name} />
            {nameError ? <Text className="text-red-900 pt-4">{nameError}</Text> : <></>}
          </View>

          <View className="justify-center px-12">
            <Text className="pb-2 text-md font-bold text-left">Email</Text>
            <TextInput className="bg-white w-72 h-12 p-4 rounded-lg" placeholder="Enter your email" onChangeText={setEmail} defaultValue={email} />
            {emailError ? <Text className="text-red-900 pt-4">{emailError}</Text> : <></>}
          </View>

          <View className="justify-center px-12">
            <Text className="pb-2 text-md font-bold text-left">Password</Text>
            <TextInput className="bg-white w-72 h-12 p-4 rounded-lg" placeholder="Enter your password" secureTextEntry={true} onChangeText={setPassword} defaultValue={password} />
            {passError ? <Text className="text-red-900 pt-4">{passError}</Text> : <></>}
          </View>

          {/* <View className="justify-center px-12">
            <Text className="pb-2 text-md font-bold text-left">Confirm Password</Text>
            <TextInput secureTextEntry={true} className="bg-white w-72 h-12 p-4 rounded-lg" placeholder="Enter your name" />
          </View> */}
          <TouchableOpacity className="pt-36" onPress={() => submit()}>
            <View className="justify-center items-center bg-[#121212] px-12 py-6 rounded-xl shadow-xl w-72">
              <Text className="font-bold text-white">Sign Up Now!</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              nav.navigate("LoginEmail");
            }}
          >
            <Text>Already have an account</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
