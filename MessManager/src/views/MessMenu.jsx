import { Text, View, StyleSheet } from "react-native";
import { useRef, useState } from "react";
import Carousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { LinearGradient } from "expo-linear-gradient";

const CarouselItem = ({ item, index }) => {
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Title style={{fontWeight: '900', fontSize: 30, padding: 10, textAlign: 'center', paddingBottom: 0, color: 'white'}}>{item.dayName}</Title>
                <Card.Content style={{ margin: 8, borderRadius: 10, backgroundColor: '#FEEAB8'}}>
                    <Paragraph style={styles.heading}>Breakfast:</Paragraph>
                    <Paragraph style={styles.para}>{item.food1}</Paragraph>
                    <Paragraph style={styles.heading}>Lunch:</Paragraph>
                    <Paragraph style={styles.para}>{item.food2}</Paragraph>
                    <Paragraph style={styles.heading}>Snacks:</Paragraph>
                    <Paragraph style={styles.para}>{item.food3}</Paragraph>
                    <Paragraph style={styles.heading}>Dinner:</Paragraph>
                    <Paragraph style={styles.para}>{item.food4}</Paragraph>
                </Card.Content>
            </Card>
        </View>

      );
}

const windowWidth = Dimensions.get('window').width;

const MessMenu = () => {
    

    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);
    const carouselItems = [
        {
            dayName: 'Monday',
            food1: 'Idli, Vada, Tea/Coffee, Sambar, Chutney',
            food2: 'Rice, Dal, Sabji, Roti, Curd, Pickle',
            food3: 'Bread Pakora, Sauce, Tea/Coffee',
            food4: 'Rice',
        },
        {
            dayName: 'Tuesday',
            food1: 'Poha',
            food2: 'Rice',
            food3: 'Biscuits',
            food4: 'Rice',
        },
        {
            dayName: 'Wednesday',
            food1: 'Poha',
            food2: 'Rice',
            food3: 'Biscuits',
            food4: 'Rice',
        },
        {
            dayName: 'Thursday',
            food1: 'Poha',
            food2: 'Rice',
            food3: 'Biscuits',
            food4: 'Rice',
        },
        {
            dayName: 'Friday',
            food1: 'Poha',
            food2: 'Rice',
            food3: 'Biscuits',
            food4: 'Rice',
        },
        {
            dayName: 'Saturday',
            food1: 'Poha',
            food2: 'Rice',
            food3: 'Biscuits',
            food4: 'Rice',
        },
        {
            dayName: 'Sunday',
            food1: 'Poha, Jalebi',
            food2: 'Rice',
            food3: 'Biscuits',
            food4: 'Rice',
        },
      ]

      const handleSnapToItem = index => {
        setActiveIndex(index);
      };

  return (
    <View style={{ flex: 1 , backgroundColor: '#FFEED8'}}>
      <LinearGradient
          // Background Linear Gradient
          colors={["#FF971D", "#FFC375"]}
          style={{
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            elevation: 5,
            marginBottom: 30,
          }}
        >
          <View
            style={{
              padding: 10,
              height: 110,
              borderBottomRightRadius: 40,
              borderBottomLeftRadius: 40,
              paddingTop: 0,
              marginBottom: 10,
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
                This Week's
              </Text>
              <Text
                style={{
                  color: "#FCF296",
                  fontWeight: "800",
                  fontSize: 35,
                  paddingLeft: 20,
                }}
              >
                Menu Card
              </Text>
          </View>
        </LinearGradient>
      <View style={{ flex: 1,}}>
            <Carousel
              layout={"default"}
              ref={carouselRef}
              data={carouselItems}
              sliderWidth={windowWidth}
              itemWidth={windowWidth-75}
              renderItem={CarouselItem}
              onSnapToItem = { handleSnapToItem } 
            />
      </View>
    </View>
  );
};

export default MessMenu;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 15,
    },
    card: {
      borderRadius: 15,
      elevation: 5,
      backgroundColor: 'orange',
      paddingTop: 5
    },
    heading: {
      fontWeight: 'bold',
      marginTop: 30,
      marginBottom: 5,
      fontSize: 22,
      paddingTop: 10
    },
    para: {
      },
  });