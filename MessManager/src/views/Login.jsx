import { Text, View } from "react-native";
import { Button } from "@rneui/themed";
import { ThemeProvider } from "react-native-paper";

const Login = ({ navigation }) => {
  return (
    <View>
      <Button
        buttonStyle={{ marginHorizontal: 50, marginTop: 50 }}
        onPress={() => navigation.navigate("User")}
        title="Student Login"
      />
      <Button
        buttonStyle={{ margin: 50 }}
        onPress={() => navigation.navigate("Admin")}
        title="Server Login"
      />
    </View>
  );
};

export default Login;
