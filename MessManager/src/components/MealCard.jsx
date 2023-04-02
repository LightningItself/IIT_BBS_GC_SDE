import { StyleSheet, Text, View, Platform, ScrollView } from "react-native";
//import Rating from './Rating';
import { Avatar, Card, IconButton } from "react-native-paper";
import { useState } from "react";
import colors from "../constants/colors";
const MealCard = (props) => {
  return (
    <Card
      style={{
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 0,
        backgroundColor: colors.tertiary,
      }}
      onTouchEndCapture={props.onTouchStart}
    >
      <Card.Cover source={props.imgAddress} style={{ height: 80 }} />
      <Card.Title
        title={props.title}
        left={(Iconprops) => (
          <Avatar.Icon
            {...Iconprops}
            icon={props.icon}
            style={{ backgroundColor: colors.primary }}
            color="white"
          />
        )}
        titleVariant="headlineSmall"
        titleStyle={{ fontSize: 24, fontWeight: "bold" }}
        style={{ padding: 0, margin: 0 }}
      />
    </Card>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  viewContainer: {
    flex: 1,
    justifyContent: "center",
  },
  rating: {
    paddingVertical: 10,
  },
});
