import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import styles from '../styles/wallet.styles';
import { TouchableOpacity } from 'react-native';
import { icons } from '../constants';
import PriceCard from './cards/price';
import BalanceCard from './cards/balance';
import networkStore from '../stores/network.store';
import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';



const WalletScreen = observer(() => {

    const navigation = useNavigation();

    const handleNavigate = (screenName) => {
      navigation.navigate(screenName);
    };

  const handleNetworkChange = (network) => {
    const hasSavedAccount = networkStore.savedAccounts[network] !== '';
    if(!hasSavedAccount) {
        alert(`No Saved Accounts for ${network} Please Log-In` )
        handleNavigate('Login')
    }
    networkStore.setSelectedNetwork(network);
  };
    
  return (
    
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerTitle}>CryptoXpress</Text>
        </View>
        <View style={styles.chooseNetworkContainer}>
        <Text style={styles.welcomeMessage}>Switch Network:</Text>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, networkStore.selectedNetwork === 'BTC' ? styles.activeToggle : null]}
          onPress={() => handleNetworkChange('BTC')}
        >
          <Image
            source={icons.btc}
            style={styles.polygonImage}
            />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, networkStore.selectedNetwork === 'Polygon' ? styles.activeToggle : null]}
          onPress={() => handleNetworkChange('Polygon')}
        >
            <Image
            source={icons.polygon}
            style={styles.polygonImage}
            />
        </TouchableOpacity>
        
        </View>
        <Text style={styles.balanceText}>Your Balance</Text>
       
        <BalanceCard selectedNetwork={networkStore.selectedNetwork} privateKey={networkStore.setPrivateKeys(networkStore.selectedNetwork)} />
       
        <View style={styles.btnContainer}>
        

        <TouchableOpacity style={styles.circleButton} onPress={()=>{handleNavigate('Send')}}>
        <Image
          source={icons.arrow}
          style={styles.sendImage}
        />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.circleButton} onPress={() => { handleNavigate('Receive') }}>
      <Image
          source={icons.arrow}
          style={styles.recieveImage}
        />
      </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
        <Text style={styles.text}>             Send     Recieve</Text>
      </View>
      <View>
         <PriceCard 
         selectedNetwork={networkStore.selectedNetwork} 
         usdtPrice={networkStore.usdtPrice} btcPrice={networkStore.btcPrice}
         />
         {/* <TransactionPopup/> */}
         </View>
         
      </View>
         <TouchableOpacity style={styles.profileButton} onPress={()=>{handleNavigate('Profile')}}>
           <Image
             source={icons.profile}
             style={styles.profileImage}
           />
         </TouchableOpacity>
        
         <TouchableOpacity style={[styles.logsButton, {position:'absolute'}, {bottom:0},{right:0}]} onPress={() => handleNavigate('TransactionLogs')}>
           <Image
             source={icons.txs}
             style={styles.profileImage}
           />
           
         </TouchableOpacity>
         {/* </View> */}

    </View>
  );
});



export default WalletScreen;