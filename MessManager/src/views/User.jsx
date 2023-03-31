import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import Rating from '../components/rating';
import { StatusBar } from 'expo-status-bar';
import { Avatar, Card, IconButton } from 'react-native-paper';
import Modal from 'react-native-modal';
import { useState } from 'react';
import ModalContent from '../components/ModalContent';
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
    <StatusBar style="dark" backgroundColor='orange'/>
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
            <View style={styles.viewContainer}>
              <Card style={{marginHorizontal: 10, marginVertical: 5}} onTouchStart={() => CardHandler('Breakfast')}>
                <Card.Title
                  title="Breakfast"
                  left={(props) => <Avatar.Icon {...props} icon="food-outline" />}
                  titleVariant="headlineSmall"
                />
              </Card>
              <Card style={{marginHorizontal: 10, marginVertical: 5}} onTouchStart={() => CardHandler('Lunch')}>
                <Card.Title
                  title="Lunch"
                  left={(props) => <Avatar.Icon {...props} icon="food-variant" />}
                  titleVariant="headlineSmall"
                />
              </Card>
              <Card style={{marginHorizontal: 10, marginVertical: 5}} onTouchStart={() => CardHandler('Snacks')}>
                <Card.Title
                  title="Snacks"
                  left={(props) => <Avatar.Icon {...props} icon="food-hot-dog" />}
                  titleVariant="headlineSmall"
                />
              </Card>
              <Card style={{marginHorizontal: 10, marginVertical: 5}} onTouchStart={() => CardHandler('Dinner')}>
                <Card.Title
                  title="Dinner"
                  left={(props) => <Avatar.Icon {...props} icon="food-turkey" />}
                  titleVariant="headlineSmall"
                />
              </Card>
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
