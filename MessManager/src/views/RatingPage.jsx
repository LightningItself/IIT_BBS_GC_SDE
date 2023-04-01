import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import Rating from "../components/Rating";
const RatingPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <Rating />
    </View>
  );
};

export default RatingPage;
