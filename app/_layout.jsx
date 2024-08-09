import { useEffect } from "react";
import { useFonts } from "expo-font";
import "react-native-url-polyfill/auto";
import { SplashScreen, Stack } from "expo-router";

import GlobalProvider from "../context/GlobalProvider";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "CircularStd-Black": require("../assets/fonts/circular/CircularStd-Black.ttf"),
    "CircularStd-Bold": require("../assets/fonts/circular/CircularStd-Bold.ttf"),
    "CircularStd-Book": require("../assets/fonts/circular/CircularStd-Book.ttf"),
    "CircularStd-Medium": require("../assets/fonts/circular/CircularStd-Medium.ttf"),
    "Outfit-Light": require("../assets/fonts/outfit/Outfit-Light.ttf"),
    "Outfit-Black": require("../assets/fonts/outfit/Outfit-Black.ttf"),
    "Outfit-Bold": require("../assets/fonts/outfit/Outfit-Bold.ttf"),
    "Outfit-Medium": require("../assets/fonts/outfit/Outfit-Medium.ttf"),
    "Outfit-Regular": require("../assets/fonts/outfit/Outfit-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(actions)" options={{ headerShown: false }} />
      </Stack>
    </GlobalProvider>
  );
};

export default RootLayout;
