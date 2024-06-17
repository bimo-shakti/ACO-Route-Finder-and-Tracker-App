import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../Utils/Colors';

export default function LoginScreen ({promptAsync}) {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Route Finder</Text>
      <Image source={require('./../../../assets/images/logo.png')} style={styles.logoImage} />
      <View style={styles.textContainer}>
        <Text style={styles.heading}>ACO-Based Route Finder</Text>
        <Text style={styles.subheading}>Find your best route using ACO Algorithm</Text>
        <Text style={styles.subheading2}>with your own device!</Text>
        <TouchableOpacity style={styles.button} 
        onPress={()=>promptAsync() }>
          <Text style={styles.buttonText}>Sign In With Google!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  logoImage: {
    width: 400,
    height: 300,
    objectFit: 'contain',
  },
  header: {
    fontSize: 33,
    fontFamily: 'ReadexPro-bold',
    textAlign: 'center',
    marginTop: 30,
  },
  textContainer: {
    padding: 0,
  },
  heading: {
    fontSize: 20,
    fontFamily: 'ReadexPro-bold',
    textAlign: 'center',
    marginTop: 0,
  },
  subheading: {
    fontSize: 13,
    fontFamily: 'ReadexPro',
    textAlign: 'center',
    marginTop: 5,
  },
  subheading2: {
    fontSize: 14,
    fontFamily: 'ReadexPro',
    textAlign: 'center',
    marginTop: 0,
    color: Colors.BLACK,
  },
  button: {
    backgroundColor: Colors.BLUEGREEN,
    padding: 14,
    display: 'flex',
    borderRadius: 99,
    marginTop: 20,
  },
  buttonText: {
    color: Colors.BLACK,
    textAlign: 'center',
    fontFamily: 'ReadexPro-medium',
    fontSize: 13,
  },
});
