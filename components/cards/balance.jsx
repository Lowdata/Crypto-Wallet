import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { icons } from '../../constants';
import styles from './balance.cards';
import maticStore from '../../stores/maticTransactionstore';
import bitcoinStore from '../../stores/BTCtransaction.store'
import networkStore from '../../stores/network.store';

const BalanceCard = ({selectedNetwork, privateKey})=>{  
    const networkText = `${selectedNetwork}`;
    const [balance, setBalance] = useState(null);
    useEffect(()=>{
        const fetchBalance = async () => {
            try {
              if (selectedNetwork === 'Polygon') {
                const polygonBalance = await maticStore.handlePolygonBalances(privateKey);
                setBalance(polygonBalance);
              } else if (selectedNetwork === 'BTC') {
                // Fetch BTC balance using the appropriate function/method
                const btcBalance = await bitcoinStore.fetchBTCBalance(networkStore.savedAccounts.BTC);
                setBalance(btcBalance);
              }
            } catch (error) {
              console.error('Error fetching balance:', error);
            }
          };
        
          fetchBalance();
        }, [selectedNetwork, privateKey]);
    
    return(
        <View >
            <View style={  styles.card }>
                <Text style={styles.text}>{networkText}: {balance !== null ? balance : 'Loading...'} </Text>
            </View>
        </View>
    );
};

export default BalanceCard;