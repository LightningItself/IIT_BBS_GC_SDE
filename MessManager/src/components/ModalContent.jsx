import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  Image,
} from "react-native";
// import Rating from './Rating';
import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-paper";
import { useState } from "react";
import QRCode from "react-native-qrcode-svg";
import colors from "../constants/colors";
const ModalContent = (props) => {
  const imgAddress =
    props.Heading === "Breakfast"
      ? require("../../assets/food1.jpg")
      : props.Heading === "Lunch"
      ? require("../../assets/food2.jpg")
      : props.Heading === "Snacks"
      ? require("../../assets/food3.jpg")
      : props.Heading === "Dinner"
      ? require("../../assets/food4.jpg")
      : require("../../assets/food.jpg");

  let base64Logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..";

  const [QRClicked, setQRClicked] = useState(false);
  const QRCodeHandler = () => {
    setQRClicked(true);
    console.log("QR clicked");
  };
  const QRClose = () => {
    setQRClicked(false);
  };

  return (
    <View
      style={{
        backgroundColor: colors.backdrop,
        height: 600,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    >
      <View
        style={{
          alignContent: "stretch",
          overflow: "hidden",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <Image
          style={{
            alignContent: "stretch",
            alignSelf: "center",
            height: 200,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          source={imgAddress}
          resizeMode="contain"
        />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 32,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            textAlign: "center",
          }}
        >
          {props.Heading}
        </Text>
        <Text style={{ paddingTop: 10 }}>
          You can generate a QR Code for {props.Heading}, and rate the food
          after QR Scan.
        </Text>
      </View>
      <View
        style={{
          padding: 10,
          borderWidth: 2,
          margin: 20,
          height: 200,
          width: 200,
          alignSelf: "center",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          borderColor: colors.primary,
          backgroundColor: "#F4F0EB",
        }}
      >
        {!QRClicked && (
          <Button
            icon="qrcode"
            mode="contained"
            onPress={QRCodeHandler}
            buttonColor={colors.primary}
          >
            Generate QR
          </Button>
        )}
        {QRClicked && (
          <View
            style={{
              flex: 1,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <QRCode
              value={props.id}
              logo={{ uri: base64Logo }}
              logoSize={30}
              size={160}
              logoBackgroundColor="transparent"
            />
          </View>
        )}
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        {QRClicked && (
          <View style={{ alignItems: "center", marginRight: 10 }} >
            <Button
            icon="close-circle"
            mode="contained"
            onPress={QRClose}
            buttonColor={colors.primary}
          >
            Close
          </Button>
          </View>
        )}
        <Button
          icon="star-circle"
          mode="contained"
          onPress={props.onRateClick}
          buttonColor={colors.primary}
          style={{alignSelf:"center",}}
        >
          Rate {props.Heading}
        </Button>
      </View>
    </View>
  );
};

export default ModalContent;

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
