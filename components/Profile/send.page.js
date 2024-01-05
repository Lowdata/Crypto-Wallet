import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import maticStore from '../../stores/maticTransactionstore';
import networkStore from '../../stores/network.store';
const SendScreen = () => {
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleSend = () => {
    const privateKey = networkStore.privateKeys[selectedNetwork];
    const transactionFunction =
    selectedNetwork === 'BTC'
      ? bitcoinStore.transaction
      : maticStore.sendMaticTransaction(privateKey)
    console.log(`Sending ${amount} to ${recipientAddress}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Crypto</Text>

      <TextInput
        style={styles.input}
        placeholder="Recipient Address"
        value={recipientAddress}
        onChangeText={(text) => setRecipientAddress(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={(text) => setAmount(text)}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.buttonText}>Send</Text>
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
  input: {
    width: '80%',
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 16,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#27ae60',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SendScreen;
