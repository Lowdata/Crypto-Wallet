import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Clipboard } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const ReceiveScreen = () => {
  const [walletAddress, setWalletAddress] = useState('0xabcdef1234567890'); // Replace with your actual wallet address

  const handleCopyAddress = () => {
    Clipboard.setString(walletAddress);
    // Show a feedback message to the user
    alert('Wallet address copied to clipboard!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receive Crypto</Text>

      <QRCode value={walletAddress} size={200} />

      <Text style={styles.walletAddress}>{walletAddress}</Text>

      <TouchableOpacity style={styles.copyButton} onPress={handleCopyAddress}>
        <Text style={styles.buttonText}>Copy Address</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  walletAddress: {
    fontSize: 16,
    marginVertical: 16,
  },
  copyButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ReceiveScreen;
