import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import firestore from "@react-native-firebase/firestore";

const LeaderboardScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const snapshot = await firestore().collection("users").orderBy("points", "desc").limit(10).get();
      setUsers(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchUsers();
  }, []);

  return (
    <View>
      <Text>Leaderboard</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Text>{index + 1}. {item.username} - {item.points} points</Text>
        )}
      />
    </View>
  );
};

export default LeaderboardScreen;
