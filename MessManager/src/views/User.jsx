import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import Rating from '../components/Rating';
import { StatusBar } from 'expo-status-bar';
import { Avatar, Card, IconButton, Button } from 'react-native-paper';
import Modal from 'react-native-modal';
import { useState } from 'react';
import ModalContent from '../components/ModalContent';
import { LinearGradient } from 'expo-linear-gradient';
import MealCard from '../components/MealCard';
const User = () => {

  const CardHandler = (text) => {
    console.log(text);
    setHeading(text);
    showModal();
  }
  const [Heading, setHeading] = useState('Food');
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
  <>
    <StatusBar style="dark" backgroundColor='#FF971D' />
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={['#FF971D', '#FFC375']}
          style={{borderBottomLeftRadius: 40, borderBottomRightRadius: 40, elevation: 5}}
        >
        <View style={{padding: 10,height: 100, borderBottomRightRadius: 40, borderBottomLeftRadius: 40, paddingTop: 0,flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{color: 'white', fontWeight: '800', fontSize: 35, paddingLeft: 20,}}>Welcome,</Text>
            <Text style={{color: '#FCF296', fontWeight: '800', fontSize: 35, paddingLeft: 20,}}>Student</Text>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center', height: 100, }}>
            <Button 
              icon="timetable" 
              mode="contained-tonal" 
              onPress={() => console.log('Pressed')} 
              style={{ margin: 20, backgroundColor: '#FFF7C7', marginRight: 10}}
              textColor="#EF7F00"
              
            >
              Menu
            </Button>
          </View>
        </View>
        </LinearGradient>
        <ScrollView style={{flex: 1}}>
            <View style={styles.viewContainer}>
              <MealCard 
                title="Breakfast" 
                icon="food-outline" 
                onTouchStart={() => CardHandler('Breakfast')} 
                imgAddress={require("../../assets/food1.jpg")}
              />
              <MealCard 
                title="Lunch" 
                icon="food-variant" 
                onTouchStart={() => CardHandler('Lunch')} 
                imgAddress={require("../../assets/food2.jpg")}
              />
              <MealCard 
                title="Snacks" 
                icon="food-hot-dog" 
                onTouchStart={() => CardHandler('Snacks')} 
                imgAddress={require("../../assets/food3.jpg")}
              />
              <MealCard 
                title="Dinner" 
                icon="food-turkey" 
                onTouchStart={() => CardHandler('Dinner')} 
                imgAddress={require("../../assets/food4.jpg")}
              />
             
              {/* <Card style={{marginHorizontal: 10, marginVertical: 5}} onTouchStart={() => CardHandler('Breakfast')}>
                <Card.Title
                  title="Breakfast"
                  left={(props) => <Avatar.Icon {...props} icon="food-outline" />}
                  titleVariant="headlineSmall"
                />
              </Card> */}
            </View>
          </ScrollView>
        </View>
        <Modal
          isVisible={visible} 
          onSwipeComplete={hideModal}
          useNativeDriverForBackdrop
          swipeDirection={["down"]}
          style={{
            marginHorizontal: 0,
            marginBottom: 0,
            height: 400,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            justifyContent: 'flex-end'
          }}
          onBackButtonPress={hideModal}
          onBackdropPress={hideModal}
        >
          <ModalContent Heading={Heading}/>
        </Modal>
  </>
  );};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  rating: {
    paddingVertical: 10,
  },
  });
