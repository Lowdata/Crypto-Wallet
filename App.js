import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WalletScreen from './components/wallet';
import LoginScreen from './components/login'
import { NavigationContainer } from '@react-navigation/native';
import { COLORS } from './constants';
import Navigation from './Navigation/navigation';
import TransactionLogScreen from './components/Profile/transaction.page';
import ProfileScreen from './components/Profile/profile.page';
import SendScreen from './components/Profile/send.page';
import ReceiveScreen from './components/Profile/recieve.page';

const App = () =>{
return (
    <NavigationContainer> 
    <Navigation />
  </NavigationContainer>



);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark
  },
});



export default App;
