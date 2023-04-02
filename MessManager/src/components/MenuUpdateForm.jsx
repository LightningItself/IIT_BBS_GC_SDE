import DropDown from "react-native-paper-dropdown";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Icon from "@mdi/react";
import { mdiMenuDown } from "@mdi/js";
import colors from "../constants/colors";
import { collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Days = [
  {
    value: "Monday",
    label: "Monday",
  },
  {
    value: "Tuesday",
    label: "Tuesday",
  },
  {
    value: "Wednesday",
    label: "Wednesday",
  },
  {
    value: "Thursday",
    label: "Thursday",
  },
  {
    value: "Friday",
    label: "Friday",
  },
  {
    value: "Saturday",
    label: "Saturday",
  },
  {
    value: "Sunday",
    label: "Sunday",
  },
];

const Meals = [
  {
    value: "Breakfast",
    label: "Breakfast",
  },
  {
    value: "Lunch",
    label: "Lunch",
  },
  {
    value: "Snacks",
    label: "Snacks",
  },
  {
    value: "Dinner",
    label: "Dinner",
  },
];

const MenuUpdateForm = () => {
  const [showDays, setShowDays] = useState(false);
  const [showMeals, setShowMeals] = useState(false);

  const [day, setDay] = useState(null);
  const [meal, setMeal] = useState(null);
  const [menu, setMenu] = useState(null);

  const handleSubmit = () => {
    // const docRef = doc(db, `${day}`, `${meal}`);
    // updateDoc(docRef, {})
    console.log("updated");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Update</Text>
      <View style={styles.input}>
        <DropDown
          label={"Day"}
          mode={"outlined"}
          value={day}
          setValue={setDay}
          list={Days}
          visible={showDays}
          showDropDown={() => setShowDays(true)}
          onDismiss={() => setShowDays(false)}
          inputProps={{
            right: <Icon path={mdiMenuDown} size={1} color="black" />,
          }}
        />
      </View>
      <View style={styles.input}>
        <DropDown
          label={"Meal"}
          mode={"outlined"}
          value={meal}
          setValue={setMeal}
          list={Meals}
          visible={showMeals}
          showDropDown={() => setShowMeals(true)}
          onDismiss={() => setShowMeals(false)}
          inputProps={{
            right: <Icon path={mdiMenuDown} size={1} color="black" />,
          }}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          label="Menu"
          value={menu}
          mode="outlined"
          onChangeText={(text) => setMenu(text)}
          activeUnderlineColor= {colors.primary}
        />
      </View>
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backdrop,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    marginVertical: 30,
    marginHorizontal: 20,
    backgroundColor: colors.tertiary,
    height: 10,
  },
  button: {
    width: "50%",
    height: 40,
    marginTop: 60,
    textAlign: "center",
    backgroundColor: colors.primary,
  },
});

export default MenuUpdateForm;
