import React, { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './App/Screen/LandingPage/LandingPage';
import LoginScreen from './App/Screen/LoginScreen/LoginScreen';
import Colors from './App/Utils/Colors';
import HomeScreen from './App/Screen/HomeScreen/HomeScreen';
import ProfileScreen from './App/Screen/ProfileScreen/ProfileScreen';

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'ReadexPro': require('./assets/fonts/ReadexPro-Regular.ttf'),
    'ReadexPro-medium': require('./assets/fonts/ReadexPro-SemiBold.ttf'),
    'ReadexPro-bold': require('./assets/fonts/ReadexPro-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Group>
            <Stack.Screen name="Home" component={LandingPage} options={{headerShown:false,}} />
            <Stack.Screen name="SignIn" component={LoginScreen} options={{headerShown:false}} />
            <Stack.Screen name="beranda" component={HomeScreen} />
            <Stack.Screen name="profile" component={ProfileScreen}/>
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    paddingTop: 60,
  },
});
