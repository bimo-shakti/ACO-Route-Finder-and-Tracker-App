// screens/LoginScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TextInput } from 'react-native';
import Colors from '../../Utils/Colors';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

const firebaseConfig = {
  apiKey: "AIzaSyCmFJQSmTjhWcuVsgsqdo-dm_CRvB4setI",
  authDomain: "sign-in-route-finder.firebaseapp.com",
  projectId: "sign-in-route-finder",
  storageBucket: "sign-in-route-finder.appspot.com",
  messagingSenderId: "346143411697",
  appId: "1:346143411697:web:576dab060a1d33e5fac850"
};
const app = initializeApp(firebaseConfig);

const AuthScreen = ({ email, setEmail, password, setPassword, isLogin, setIsLogin, handleAuthentication }) => {
  return (
    <SafeAreaView>
      <View style={styles.authContainer}>
        <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <Button style={styles.buttonTitle} title={isLogin ? 'Sign In' : 'Sign Up'} onPress={handleAuthentication} color="#D1D8C5" />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Sign In'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        navigation.replace('Home');
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in successfully!');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('User created successfully!');
      }
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AuthScreen
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        handleAuthentication={handleAuthentication}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: Colors.PRIMARY,
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: Colors.GRAY,
    padding: 17,
    borderRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 23,
    color: Colors.BLACK,
    fontFamily: 'ReadexPro-medium',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    fontFamily: 'ReadexPro',
    height: 40,
    backgroundColor: Colors.BLUEGREEN,
    borderColor: Colors.BLUEGREEN,
    borderWidth: 2,
    marginBottom: 16,
    padding: 8,
    borderRadius: 99,
  },
  buttonContainer: {
    fontFamily: 'ReadexPro',
    color: Colors.BLACK,
    marginBottom: 3,
  },
  toggleText: {
    color: Colors.WHITE,
    fontFamily: 'ReadexPro-medium',
    textAlign: 'center',
  },
  bottomContainer: {
    marginTop: 20,
  },
  buttonTitle: {
    fontFamily: 'ReadexPro',
    fontSize: 18,
    color: Colors.BLACK,
  },
});

export default LoginScreen;
