import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import Rating from '../components/rating';
import { StatusBar } from 'expo-status-bar';
import { Avatar, Card, IconButton } from 'react-native-paper';
const User = () => {

  const CardHandler = (text) => {
    console.log(text);
  }

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
