import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import firestore from "@react-native-firebase/firestore";

const TradingScreen = () => {
  const [crypto, setCrypto] = useState("");
  const [amount, setAmount] = useState("");
  const userId = "USER_ID"; // Replace dynamically

  const handleTrade = async (type) => {
    const userRef = firestore().collection("users").doc(userId);
    const userData = (await userRef.get()).data();
    const portfolio = userData.portfolio || {};
    const points = userData.points || 0;
    const pricePerUnit = 500; // Simulated price

    if (type === "buy" && points >= amount * pricePerUnit) {
      portfolio[crypto] = (portfolio[crypto] || 0) + parseInt(amount);
      await userRef.update({
        portfolio,
        points: points - amount * pricePerUnit,
      });
    } else if (type === "sell" && (portfolio[crypto] || 0) >= amount) {
      portfolio[crypto] -= parseInt(amount);
      await userRef.update({
        portfolio,
        points: points + amount * pricePerUnit,
      });
    }
  };

  return (
    <View>
      <Text>Trade Cryptocurrency</Text>
      <TextInput placeholder="Crypto (e.g., BTC)" value={crypto} onChangeText={setCrypto} />
      <TextInput placeholder="Amount" value={amount} onChangeText={setAmount} keyboardType="numeric" />
      <Button title="Buy" onPress={() => handleTrade("buy")} />
      <Button title="Sell" onPress={() => handleTrade("sell")} />
    </View>
  );
};

export default TradingScreen;
