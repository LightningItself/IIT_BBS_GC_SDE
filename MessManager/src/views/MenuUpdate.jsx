import { Text, View, StyleSheet } from "react-native";
import { useRef, useState } from "react";
import Carousel from "react-native-snap-carousel";
import { Dimensions } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import MenuUpdateForm from "../components/MenuUpdateForm";

const MenuUpdate = () => {
  return (

      <MenuUpdateForm />

  );
};
export default MenuUpdate;
