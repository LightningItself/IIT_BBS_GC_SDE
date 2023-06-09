import { StyleSheet, Text, View, Platform, ScrollView } from "react-native";
// import Rating from "../components/rating";
import { StatusBar } from "expo-status-bar";
import { Avatar, Card, IconButton, Button } from "react-native-paper";
import Modal from "react-native-modal";
import { useEffect, useState } from "react";
import ModalContent from "../components/ModalContent";
import { LinearGradient } from "expo-linear-gradient";
import MealCard from "../components/MealCard";
import { ref, set } from "firebase/database";
import { db } from "../../firebaseConfig";
import { randomUUID } from "expo-crypto";
import colors from "../constants/colors";
const User = ({ navigation, route }) => {
  const CardHandler = (text) => {
    console.log(text);
    setHeading(text);
    showModal();
  };

  const { email } = route.params;

  useEffect(() => {
    console.log("email" + email.split("@", 1)[0]);
    set(ref(db, "users/" + `${email.split("@", 1)[0]}`), {
      id: `${email.split("@", 1)[0]}/${id}`,
    });
    const unsub = navigation.addListener("beforeRemove", () => {
      set(ref(db, "users/" + `${email.split("@", 1)[0]}`), {
        id: null,
      });
    });
    return unsub;
  }, [navigation]);

  const [id, setId] = useState(randomUUID());
  const [Heading, setHeading] = useState("Food");

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onRateClick = () => {
    setVisible(false);
    navigation.navigate("Rate Food");
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor={colors.primary} />
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={[colors.primary, colors.secondary]}
          style={{
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            elevation: 5,
          }}
        >
          <View
            style={{
              padding: 10,
              height: 120,
              borderBottomRightRadius: 40,
              borderBottomLeftRadius: 40,
              paddingTop: 0,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  color: "white",
                  fontWeight: "800",
                  fontSize: 35,
                  paddingLeft: 20,
                }}
              >
                Welcome,
              </Text>
              <Text
                style={{
                  color: colors.tertiary,
                  fontWeight: "800",
                  fontSize: 35,
                  paddingLeft: 20,
                }}
              >
                Student
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 100,
              }}
            >
              <Button
                icon="timetable"
                mode="contained-tonal"
                onPress={() => navigation.navigate("MessMenu")}
                style={{
                  margin: 20,
                  backgroundColor: colors.tertiary,
                  marginRight: 10,
                }}
                textColor={colors.primary}
              >
                Menu
              </Button>
            </View>
          </View>
        </LinearGradient>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.viewContainer}>
            <MealCard
              title="Breakfast"
              icon="food-outline"
              onTouchStart={() => CardHandler("Breakfast")}
              imgAddress={require("../../assets/food1.jpg")}
            />
            <MealCard
              title="Lunch"
              icon="food-variant"
              onTouchStart={() => CardHandler("Lunch")}
              imgAddress={require("../../assets/food2.jpg")}
            />
            <MealCard
              title="Snacks"
              icon="food-hot-dog"
              onTouchStart={() => CardHandler("Snacks")}
              imgAddress={require("../../assets/food3.jpg")}
            />
            <MealCard
              title="Dinner"
              icon="food-turkey"
              onTouchStart={() => CardHandler("Dinner")}
              imgAddress={require("../../assets/food4.jpg")}
            />
            {/* <Card style={{marginHorizontal: 10, marginVertical: 5}} onTouchStart={() => CardHandler('Breakfast')}>
                <Card.Title
                  title="Breakfast"
                  left={(props) => <Avatar.Icon {...props} icon="food-outline" />}
                  titleVariant="headlineSmall"
                />
              </Card> */}
          </View>
        </ScrollView>
      </View>
      <Modal
        isVisible={visible}
        onSwipeComplete={hideModal}
        useNativeDriverForBackdrop
        swipeDirection={["down"]}
        style={{
          marginHorizontal: 0,
          marginBottom: 0,
          height: 400,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          justifyContent: "flex-end",
        }}
        onBackButtonPress={hideModal}
        onBackdropPress={hideModal}
      >
        <ModalContent
          Heading={Heading}
          id={`${email.split("@", 1)[0]}/${id}`}
          onRateClick={onRateClick}
        />
      </Modal>
    </>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.backdrop,
  },
  viewContainer: {
    flex: 1,
    justifyContent: "center",
  },
  rating: {
    paddingVertical: 10,
  },
});
