import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { AirbnbRating } from '@rneui/themed';

const Rating = () => {
  const ratingCompleted = (rating) => {
    console.log('Rating is: ' + rating);
  };

  return (<View style={styles.container}>
    <ScrollView style={styles.viewContainer}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AirbnbRating
          count={11}
          reviews={[
            'Terrible',
            'Bad',
            'Meh',
            'OK',
            'Good',
            'Hmm...',
            'Very Good',
            'Wow',
            'Amazing',
            'Unbelievable',
            'Extra Ordinary',
          ]}
          defaultRating={11}
          size={18}
        />
      </View>
    </ScrollView>
  </View>);
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  headingContainer: {
    paddingTop: 50,
  },
  viewContainer: {
    flex: 1,
  },
  rating: {
    paddingVertical: 10,
  },
  });
