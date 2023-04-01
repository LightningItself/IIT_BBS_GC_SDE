import { Text, View } from "react-native";
import { Button } from "@rneui/themed";
import { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { IconButton } from "react-native-paper";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const CodeScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(
      `Bar code with type ${type} and data ${data} has been scanned!`
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      {/* {scanned ? <Text>Scanned</Text> : <Text>Not Scanned</Text>} */}
      <BarCodeScanner
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ flex: 1 }}
      />
      {/* {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )} */}
        <View
        style={{
          position: "absolute",
          alignItems: "center",
          bottom: 70,
          left: 0,
          right: 0,
        }}
      >
        <IconButton
          icon="qrcode"
          size={60}
          backgroundColor="#e3e3e3"
          onPress={() => setScanned(false)}
          // Style={{
          //   height: 60,
          //   width: 60,
          //   borderRadius: 30,
          //   alignItems: "center",
          //   justifyContent: "center",
          //   backgroundColour:"white"
          // }}

        />
      </View>
    </View>
  );
};
export default CodeScanner;
