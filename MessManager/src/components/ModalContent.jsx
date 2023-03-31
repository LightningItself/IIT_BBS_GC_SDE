import { StyleSheet, Text, View, Platform, ScrollView, Image } from 'react-native';
import Rating from '../components/rating';
import { StatusBar } from 'expo-status-bar';
import { Avatar, Card, IconButton } from 'react-native-paper';
import Modal from 'react-native-modal';
import { useState } from 'react';
const ModalContent = (props) => {
  return (
    <View 
        style={{backgroundColor: 'white', height: 600, borderTopLeftRadius: 20, borderTopRightRadius: 20}}
    >
        <View style={{alignContent: 'stretch', overflow: 'hidden', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
            <Image
            style={{ alignContent: 'stretch', alignSelf: 'center', height: 200, borderTopLeftRadius: 20, borderTopRightRadius: 20}}
            source={require('../../assets/food1.jpg')}
            resizeMode="contain"
            />
        </View>
        <View style={{paddingVertical: 20, paddingHorizontal: 10}}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 24}}>{props.Heading}</Text>
            <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </View>
    </View>
  );};

export default ModalContent;

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
