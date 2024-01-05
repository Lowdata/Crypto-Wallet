import React, { useRef, useState } from 'react';
import { View, Text, TextInput,  Button, StyleSheet,Image } from 'react-native';
import styles from '../styles/login.styles';
import { TouchableOpacity } from 'react-native';
import { icons } from '../constants';
import { observer } from 'mobx-react-lite';
import networkStore from '../stores/network.store';
import { useNavigation } from '@react-navigation/native';




const LoginScreen = observer(() => {
  
    const [selectedNetwork, setSelectedNetwork] = useState('Polygon');
  const [privateKey, setPrivateKey] = useState('');
  const navigation = useNavigation();
  const handleNetworkChange = () => {
    const newNetwork = networkStore.toggleBTC();
    setSelectedNetwork(newNetwork ? 'BTC' : 'Polygon');
    alert(newNetwork ? 'BTC' : 'Polygon');
  };
  

  const handleSaveAccount = async () => {
    if (!privateKey) {
      alert('Error', 'Please enter a private key');
      return;
    }
  
    try {
      await networkStore.saveAccount(privateKey);
      navigation.navigate('Wallet');    
    } catch (error) {
      console.error('Error saving account:', error.message);
      alert('Error', 'An error occurred while saving the account. Please try again.');
    }
  };
  const handlePrivateKeyChange = (text) => {
    setPrivateKey(text);
  };

  return (
    <View style={styles.container}>
       
        <View style={styles.container}>
        <Text style={styles.heading}>Welcome!</Text>
      <Image
        source={icons.welcome}
        style={styles.welcomeImage}
      />
      <Text style={styles.welcomeMessage}>Choose Network:</Text>
      <View style={styles.toggleContainer}>
      <TouchableOpacity
          style={[styles.toggleButton, selectedNetwork === 'BTC' ? styles.activeToggle : null]}
          onPress={() => handleNetworkChange()}
        >
          <Image
            source={icons.btc}
            style={styles.polygonImage}
            />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, selectedNetwork === 'Polygon' ? styles.activeToggle : null]}
          onPress={() => handleNetworkChange()}
          
        >
            <Image
            source={icons.polygon}
            style={styles.polygonImage}
            />
        </TouchableOpacity>
      </View>
      <Text style={styles.welcomeMessage}>Enter Private Key:</Text>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
      <TextInput
        style={styles.searchInput}
        value={privateKey}
        onChangeText={(text) => handlePrivateKeyChange(text)}
        placeholder='Private Key'
      />
      </View>
      </View>
      
        <View style={styles.searchContainer}>
            <TouchableOpacity  
            style={styles.searchBtn} 
            onPress={handleSaveAccount}>
            <Text style={styles.btnMessage}>Save Account</Text>
            </TouchableOpacity>
        </View>
    </View>

 </View>
  );
});



export default LoginScreen;