<<<<<<< HEAD
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import Rating from './Rating';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { useState } from 'react';
=======
import { StyleSheet, Text, View, Platform, ScrollView } from "react-native";
// import Rating from '../components/Rating';
import { Avatar, Card, IconButton } from "react-native-paper";
import { useState } from "react";
>>>>>>> cdb8eaffa943edbbc3a89f03e3eec41f69c48949
const MealCard = (props) => {
  return (
    <Card
      style={{
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 0,
        backgroundColor: "#FFF5EC",
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
            style={{ backgroundColor: "orange" }}
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
