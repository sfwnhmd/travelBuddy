import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, ImageBackground, Alert } from "react-native";
import React, { useLayoutEffect , useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import logo from "../assets/logoFull.png";
import login from "../assets/loginmail.png";
import bg from "../assets/bg-1.png";
import axios from 'axios';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { UserContext } from "../hooks/UserContext";

const LoginWithEmailScreen = () => {

  const {user, setUser} = useContext(UserContext);

  const nav = useNavigation();

  const [email, setEmail] = useState('');
  
  const [password, setPassword] = useState('');

  const [passError, setPassError] = useState("");

  const [emailError, setEmailError] = useState("");
  
  const submit = () => {
    // Send a POST request
    axios.post('https://5966-2001-e68-447f-20fd-fd9c-4bcf-b439-32ec.ngrok.io/api/login', {
      email: email,
      password: password,
  })
      .then(function (response) {
          console.log(response);
          const status = response.data.status;
          if(status == true){
            setUser(response.data.user);
            nav.navigate("Home");
          } else {
            setEmailError(response.data.message.email);
            setPassError(response.data.message.password);
          }
      })
      .catch(function (error) {
          console.log(error);
      });
  }
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);


  return (
      <ImageBackground source={bg} resizeMode="cover">
    <SafeAreaView className="h-screen">
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
      <View className="justify-center items-center">
        <Text className="text-center font-bold text-2xl leading-tight pb-2">Meet your {"\n"}<Text className="text-[#1BDFCB]">travel</Text><Text className="text-[#D69AF5]"> buddy</Text></Text>
        <Image 
          source={login}
          resizeMode="contain"
          style={{ width: 250, height: 180 }}
        />
      </View>
      <View className="items-center gap-y-4">
        <View className="justify-center px-12">
          <Text className="pb-2 text-md font-bold text-left">Email</Text>
          <TextInput 
            className="bg-white w-72 h-12 p-4 rounded-lg shadow-sm shadow-[#f0f0f0]"  placeholder="Enter your email" 
            onChangeText={setEmail}
            defaultValue={email}
          />
          {emailError ? <Text className="text-red-900 pt-4">{emailError}</Text> : <></>}
        </View>

        <View className="justify-center px-12">
          <Text className="pb-2 text-md font-bold text-left">Password</Text>
          <TextInput 
            className="bg-white w-72 h-12 p-4 rounded-lg shadow-sm shadow-[#f0f0f0]" placeholder="Enter your password" 
            secureTextEntry={true}
            onChangeText={setPassword}
            defaultValue={password}
            />
            {passError ? <Text className="text-red-900 pt-4">{passError}</Text> : <></>}
        </View>
        
        <View className="justify-center items-center gap-y-4">
        <TouchableOpacity className="pt-8" onPress={() => submit()}>
          <View className="justify-center items-center bg-[#121212] px-12 py-6 rounded-xl shadow-xl w-72">
            <Text className="font-bold text-white">Start Exploring!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {nav.navigate("Register")}}><Text>Create an account</Text></TouchableOpacity>
        </View>
      </View></KeyboardAwareScrollView>
    </SafeAreaView>
    </ImageBackground>
  );
};

export default LoginWithEmailScreen;
