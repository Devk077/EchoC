import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Button } from "react-native";
import firestore from "@react-native-firebase/firestore";

const WatchlistScreen = () => {
  const [watchlist, setWatchlist] = useState([]);
  const userId = "USER_ID"; // Replace with dynamic user ID

  useEffect(() => {
    const fetchWatchlist = async () => {
      const userDoc = await firestore().collection("users").doc(userId).get();
      setWatchlist(userDoc.data()?.watchlist || []);
    };

    fetchWatchlist();
  }, []);

  const removeFromWatchlist = async (crypto) => {
    await firestore().collection("users").doc(userId).update({
      watchlist: firestore.FieldValue.arrayRemove(crypto),
    });
    setWatchlist((prev) => prev.filter((item) => item !== crypto));
  };

  return (
    <View>
      <Text>Your Watchlist</Text>
      <FlatList
        data={watchlist}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View>
            <Text>{item}</Text>
            <Button title="Remove" onPress={() => removeFromWatchlist(item)} />
          </View>
        )}
      />
    </View>
  );
};

export default WatchlistScreen;
