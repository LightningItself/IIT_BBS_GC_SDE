import {
  Text,
  SafeAreaView,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button } from "@rneui/themed";
import { ThemeProvider } from "react-native-paper";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { cloneElement, useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import colors from "../constants/colors";
WebBrowser.maybeCompleteAuthSession();

const Login = ({ navigation }) => {
  const [admin, setAdmin] = useState(false);
  const [email, setEmail] = useState("");

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "956284867954-rva1v9g09rg891to8fl5fkk7jpjlhu4v.apps.googleusercontent.com",
  });

  const googleLoginHandler = (adm) => {
    if (adm) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
    promptAsync();
  };

  const getEmail = (accessToken) => {
    fetch("https://www.googleapis.com/oauth2/v1/userinfo?alt=json", {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((email) => email.json())
      .then((emailJson) => {
        setEmail(emailJson.email);
        console.log(emailJson.email);
      });
  };

  useEffect(() => {
    if (response?.type === "success") {
      getEmail(response?.authentication?.accessToken);
      if (admin) {
        navigation.navigate("Admin");
      } else {
        navigation.navigate("User", { email: email });
      }
    }
  }, [response]);

  return (
    // <View>
    //
    //   <Button
    //     buttonStyle={{ marginHorizontal: 50, marginTop: 50 }}
    //     onPress={() => navigation.navigate("User")}
    //     title="Student Login"
    //   />
    //   <Button
    //     buttonStyle={{ margin: 50 }}
    //     onPress={() => navigation.navigate("Admin")}
    //     title="Server Login"
    //   />
    // </View>
    <SafeAreaView style={{ flex: 1, justifyContent: "center", backgroundColor: colors.backdrop }}>
      <View style={{ paddingHorizontal: 20, }}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/lunch.png")}
            style={{ height: 200, width: 200 }}
          />
        </View>
        <Text style={{ fontSize: 30, paddingBottom: 30 }}>Login</Text>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <MaterialIcon
            name="alternate-email"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          ></MaterialIcon>
          <TextInput
            placeholder="Email-ID"
            style={{ flex: 1, paddingVertical: 0 }}
            keyboardType="email-address"
          ></TextInput>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomColor: "#ccc",
            borderBottomWidth: 1,
            paddingBottom: 8,
            marginBottom: 25,
          }}
        >
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            placeholder="Password"
            style={{ flex: 1, paddingVertical: 0 }}
            secureTextEntry={true}
          ></TextInput>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: colors.primary, fontWeight: 700 }}>
              Forgot password
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("User")}
            style={{
              backgroundColor: colors.primary,
              padding: 20,
              borderRadius: 10,
              marginBottom: 25,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: 700,
                fontSize: 16,
                color: "#ffff",
              }}
            >
              LOGIN
            </Text>
          </TouchableOpacity>
          <Text
            style={{ textAlign: "center", color: "#666", marginBottom: 20 }}
          >
            {" "}
            Or login with...
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              onPress={googleLoginHandler.bind(this, false)}
              style={{
                borderColor: "#ddd",
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 100,
                paddingVertical: 10,
              }}
            >
              <Image
                source={require("../../assets/google.png")}
                style={{ height: 24, width: 24 }}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "flex-end",
            marginBottom: 0,
            marginTop: 60,
          }}
        >
          <Text>Admin </Text>
          <TouchableOpacity onPress={googleLoginHandler.bind(this, true)}>
            <Text style={{ color: colors.primary, fontWeight: 700 }}>
              Click Here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
