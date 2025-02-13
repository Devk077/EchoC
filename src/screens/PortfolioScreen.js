import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import firestore from "@react-native-firebase/firestore";

const PortfolioScreen = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      const snapshot = await firestore().collection("users").doc("USER_ID").get();
      setPortfolio(snapshot.data()?.portfolio || []);
    };

    fetchPortfolio();
  }, []);

  return (
    <View>
      <Text>Your Portfolio</Text>
      <FlatList
        data={portfolio}
        keyExtractor={(item) => item.crypto}
        renderItem={({ item }) => <Text>{item.crypto}: {item.amount}</Text>}
      />
    </View>
  );
};

export default PortfolioScreen;
