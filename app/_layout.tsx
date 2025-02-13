// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { View, ActivityIndicator } from "react-native";
// import AppNavigator from "../src/navigation/AppNavigator";
// import { AuthContext } from "../src/context/AuthContext";
// // import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
// import { auth } from "../src/config/firebase";

// const Layout = () => {
//   const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = auth().onAuthStateChanged((user) => {
//       setUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </View>
//     );
//   }

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       <AppNavigator />
//     </AuthContext.Provider>
//   );
// };

// export default Layout;



