// Navigation.js
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/login'
import WalletScreen from '../components/wallet'; 
import SendScreen from '../components/Profile/send.page';
import ProfileScreen from '../components/Profile/profile.page';
import TransactionLogScreen from '../components/Profile/transaction.page';
import ReceiveScreen from '../components/Profile/recieve.page';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="Send" component={SendScreen} />
        <Stack.Screen name="Receive" component={ReceiveScreen} />
      <Stack.Screen name="TransactionLogs" component={TransactionLogScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    
  );
};

export default Navigation;
