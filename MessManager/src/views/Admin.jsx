import { Text, View } from "react-native";
import { Button } from "@rneui/themed";
import CodeScanner from "../components/CodeScanner";

const Admin = () => {
  return (
    <View style={{ flex: 1 }}>
      <CodeScanner />
    </View>
  );
};

export default Admin;
