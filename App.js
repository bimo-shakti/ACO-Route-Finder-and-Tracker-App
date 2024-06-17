import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import LoginScreen from './App/Screen/LoginScreen/LoginScreen';
import Colors from './App/Utils/Colors';
import * as WebBrowser from 'expo-web-browser';
import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth';
import { auth } from './firebaseConfig';
import AsyncStorage from "@react-native-async-storage/async-storage";



// android 875717122798-1emv18n9sr8p57dg52p995bn2lp8f5ir.apps.googleusercontent.com
WebBrowser.maybeCompleteAuthSession();

SplashScreen.preventAutoHideAsync();

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

  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:"875717122798-1emv18n9sr8p57dg52p995bn2lp8f5ir.apps.googleusercontent.com"
  });

  React.useEffect(()=> {
    if (response?.type == "success"){
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  React.useEffect(()=> {
    const unsub = onAuthStateChanged(auth, async (user) =>{
      if (user) {
        console.log(JSON.stringify (user, null, 2));
      } else {
        console.log ("else");
      }
    })
  }, [])


  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
        <LoginScreen promptAsync={promptAsync}  />;
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.PRIMARY,
    paddingTop:60
  },
});
