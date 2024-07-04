import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';

export default function ProfileScreen ({ navigation }) {
    const auth = getAuth();
    const user = auth.currentUser;
  
    const handleSignOut = async () => {
      try {
        await signOut(auth);
        navigation.replace('SignIn');
      } catch (error) {
        console.error('Sign out error:', error.message);
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome, {user.email}!</Text>
        <Button title="Sign Out" onPress={handleSignOut} color="#e74c3c" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    welcome: {
      fontFamily: 'ReadexPro',
      fontSize: 20,
      marginBottom: 20,
    },
    button: {
      fontFamily: 'ReadexPro',
      borderRadius: 99
    }
  });