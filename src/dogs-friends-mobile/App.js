import React, { useCallback } from 'react'
import 'react-native-gesture-handler';
import {useFonts} from "expo-font"
import { AuthProvider } from './src/context/AuthContext'
import { StartNavigation } from './src/navigation/StartNavigation'
import { NavigationContainer } from '@react-navigation/native';
import * as SplacshScreen from "expo-splash-screen";


const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });
  
  const onLayoutRootView = useCallback(async() => {
    if(fontsLoaded){
      await SplacshScreen.hideAsync();
    }
  },[fontsLoaded, fontError])
  
  if(!fontsLoaded) return null;
  
  return (
    <AuthProvider>
      <NavigationContainer>
         <StartNavigation />
      </NavigationContainer>
    </AuthProvider>
  )
}

export default App