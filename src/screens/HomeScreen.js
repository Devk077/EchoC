import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";

const HomeScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  return (
    <View>
      <Text>Welcome to EchoC</Text>
      <Button title="View Portfolio" onPress={() => navigation.navigate("Portfolio")} />
      <Button title="Watchlist" onPress={() => navigation.navigate("Watchlist")} />
      <Button title="Trade" onPress={() => navigation.navigate("Trading")} />
      <Button title="Payments" onPress={() => navigation.navigate("Payment")} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
