import StackNavigator from "./StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { UserContext } from "./hooks/UserContext";
import { useState } from "react";

export default function App() {

  const [user, setUser] = useState('null');

  return (
    <NavigationContainer>
      <UserContext.Provider value={{  user, setUser }}>
        <StackNavigator />
      </UserContext.Provider>
      <StatusBar barStyle="dark-content" />
    </NavigationContainer>
  );
}
