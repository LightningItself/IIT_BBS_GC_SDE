import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { AirbnbRating } from '@rneui/themed';
import {Button, TextInput} from 'react-native-paper';
import { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
const Rating = () => {
  const ratingCompleted = (rating) => {
    console.log('Rating is: ' + rating);
  };

  const [rating, setRating] = useState(0);
  const [foodReview, setFoodReview] = useState('');
  const [tasteReview, setTasteReview] = useState('');
  const [suggestions, setSuggestions] = useState('');

  const handleSubmit = () => {
    console.log(`Rating: ${rating}`);
    console.log(`Taste Review: ${tasteReview}`);
    console.log(`Food Review: ${foodReview}`);
    console.log(`Suggestions: ${suggestions}`);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
          // Background Linear Gradient
          colors={["#FF971D", "#FFC375"]}
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
            }}
          >
            <Text
                style={{
                  color: "white",
                  fontWeight: "800",
                  fontSize: 35,
                  paddingLeft: 20,
                }}
              >
                How was the
              </Text>
              <Text
                style={{
                  color: "#FCF296",
                  fontWeight: "800",
                  fontSize: 35,
                  paddingLeft: 20,
                }}
              >
                Food?
              </Text>
          </View>
        </LinearGradient>
    <View style={styles.headingContainer}>
      <AirbnbRating
        count={5}
        reviews={['Terrible', 'Bad', 'OK', 'Good', 'Great']}
        defaultRating={0}
        size={40}
        onFinishRating={(value) => setRating(value)}
        reviewColor="#FF971D"
        selectedColor='#FF971D'
      />
    </View>
    <View style={styles.inputContainer}>
      <TextInput
        label="How was the taste?"
        value={tasteReview}
        onChangeText={(value) => setTasteReview(value)}
        style={styles.input}
        activeUnderlineColor="orange"
      />
      <TextInput
        label="How was the quality?"
        value={foodReview}
        onChangeText={(value) => setFoodReview(value)}
        style={styles.input}
        activeUnderlineColor="orange"
      />
      <TextInput
        label="What can we improve?"
        value={suggestions}
        onChangeText={(value) => setSuggestions(value)}
        style={styles.input}
        activeUnderlineColor="orange"
      />
    </View>
    <View style={styles.buttonContainer}>
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Submit
      </Button>
    </View>
  </View>
);};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF5EC',
  },
  headingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 40
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  input: {
    width: '100%',
    marginVertical: 15,
    backgroundColor: '#FFEDCA',
  },
  button: {
    width: '90%',
    marginTop: 20,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'orange',
  },
});