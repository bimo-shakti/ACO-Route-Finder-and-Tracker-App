import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FinderScreen from '../FinderScreen/FinderScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';

const Stack = createStackNavigator ();
const Tab = createBottomTabNavigator ();

export default function HomeScreen () {
  
    return (
      <Tab.Navigator
      initialRouteName='homescreen'
      screenOptions={{headerShown: false}}
      >
      <Tab.Screen
      name='finder'
      component={FinderScreen}
      options={{ title: 'Finder'}}
      />
      <Tab.Screen
      name='Profile'
      component={ProfileScreen}
      options={{ title: 'Profile Settings'}}  
      />
        
      </Tab.Navigator>
    )
  }