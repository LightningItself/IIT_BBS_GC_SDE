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
        <View style={{  }} />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              animation: "fade",
            }}
          >
            <Stack.Screen
             name="Login"
             component={Login}
             options={{
              headerShown: false,
             }}
            />
            <Stack.Screen 
              name="User" 
              component={User} 
              options={{ 
                title: "", 
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#FF971D',
                }, 
                headerTintColor: 'white',
                headerShadowVisible: false,
              }}

            />
            <Stack.Screen name="Admin" component={Admin} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </ThemeProvider>
  );
}
