import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import CodeScanner from "../components/CodeScanner";
import { IconButton } from "react-native-paper";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomBar from "../components/BottomBar";
const Tab = createBottomTabNavigator();
const Admin = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <CodeScanner /> */}
      <BottomBar></BottomBar>
    
    </View>
  );
};

export default Admin;
