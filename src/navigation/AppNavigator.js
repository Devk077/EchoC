import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import WatchlistScreen from "../screens/WatchlistScreen";
import TradingScreen from "../screens/TradingScreen";

import { AuthContext } from "../context/AuthContext";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Portfolio" component={PortfolioScreen} />
            <Stack.Screen name="Watchlist" component={WatchlistScreen} />
            <Stack.Screen name="Trading" component={TradingScreen} />
            <Stack.Screen name="Payment" component={PaymentScreen} />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
