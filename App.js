// import { StatusBar } from 'expo-status-bar';
// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// // Import the wallet import function
// import { importWalletFromTestnetPrivateKey } from './stores/walletUtils';
// export default function App() {
//   const testnetPrivateKeyHex = '';
//   const [walletInfo, setWalletInfo] = useState(null);

//   useEffect(() => {
//     try {
//       // Attempt to import the wallet
//       const importedWallet = importWalletFromTestnetPrivateKey(testnetPrivateKeyHex);
//       setWalletInfo(importedWallet);
//     } catch (error) {
//       console.error('Error importing wallet:', error.message);
//     }
//   }, []); // Run this effect only once when the component mounts

//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       {walletInfo && (
//         <View>
//           <Text>Private Key: {walletInfo.privateKey}</Text>
//           <Text>Public Key: {walletInfo.publicKey}</Text>
//           <Text>Testnet Address: {walletInfo.address}</Text>
//         </View>
//       )}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



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
