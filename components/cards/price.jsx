import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { icons } from '../../constants';
import styles from './Pricecard.styles';
import { observer } from 'mobx-react-lite';


const PriceCard = observer(({ selectedNetwork, usdtPrice, btcPrice })=>{  
    const imageSource = selectedNetwork === 'BTC'? icons.bitcoin: icons.polygon

    return(
        <View style={styles.container}>
            <View style={  styles.card }>
            <Text style={styles.text}>
            {selectedNetwork === 'BTC' ? `BTC: ${btcPrice}$` : `USDT: ${usdtPrice}$`}
        </Text>
                <Image
                    source={imageSource}
                    style={styles.polygonImage}
                />
            </View>
        </View>
    );
});

export default PriceCard;