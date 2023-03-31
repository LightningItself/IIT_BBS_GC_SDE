import { ThemeProvider } from "@rneui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import Login from "./src/views/Login";
import User from "./src/views/User";
import theme from "./theme";
import Admin from "./src/views/Admin";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }}>
        <View style={{ height: 40 }} />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
              animation: "fade",
            }}
          >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="Admin" component={Admin} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ThemeProvider>
  );
}
