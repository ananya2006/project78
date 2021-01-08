import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpLoginScreen from './screens/SignUpLoginScreen'
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
    <View>
      <WelcomeScreen/>
    </View>
  );
}



