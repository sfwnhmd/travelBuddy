import { View, Text } from "react-native";
import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginWithEmailScreen from "./screens/LoginWithEmailScreen";
import SetupProfileScreen from "./screens/SetupProfileScreen";
import DestinationScreen from "./screens/DestinationScreen";
import MyProfileScreen from "./screens/MyProfileScreen";
import ChatListScreen from "./screens/ChatListScreen";
import ChatScreen from "./screens/ChatScreen";
import MatchScreen from "./screens/MatchScreen";
import UserProfileScreen from "./screens/UserProfileScreen";
import { UserContext } from "./hooks/UserContext";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user != "null" ? (
        <>
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="MyProfile" component={MyProfileScreen} />
            <Stack.Screen name="Destination" component={DestinationScreen} />
            <Stack.Screen name="ChatList" component={ChatListScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="Match" component={MatchScreen} />
            <Stack.Screen name="UserProfile" component={UserProfileScreen} />
            <Stack.Screen name="SetupProfile" component={SetupProfileScreen} />
          </Stack.Group>
        </>
      ) : (
        <Stack.Group>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="LoginEmail" component={LoginWithEmailScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
