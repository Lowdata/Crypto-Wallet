import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  // Dummy data for the profile
  const userProfile = {
    name: 'John Doe',
    walletBalance: '2.5 BTC', // Replace with actual wallet balance
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.profileInfo}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>{userProfile.name}</Text>

        <Text style={styles.label}>Wallet Balance:</Text>
        <Text style={styles.value}>{userProfile.walletBalance}</Text>
      </View>

      <View style={styles.actions}>
        {/* Button to navigate to Transaction Log */}
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Transaction Log</Text>
        </TouchableOpacity>

        {/* Button to navigate to Settings */}
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
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
  profileInfo: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    marginBottom: 16,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 8,
    margin: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;
