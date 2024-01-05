import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const TransactionLogScreen = ({ navigation }) => {
  const data = [
    { id: '1', text: 'Transaction 1', link: 'https://example.com/transaction/1' },
    { id: '2', text: 'Transaction 2', link: 'https://example.com/transaction/2' },
    { id: '3', text: 'Transaction 3', link: 'https://example.com/transaction/3' },
    // Add more items as needed
  ];

  const handleItemPress = (link) => {
    // Perform navigation or any action when an item is pressed
    // For navigation, you can use React Navigation's navigation.navigate
    navigation.navigate('TransactionDetails', { link });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item.link)}>
      <View style={styles.item}>
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:COLORS.dark
  },
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
});

export default TransactionLogScreen;
