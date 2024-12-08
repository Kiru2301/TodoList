import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import TodoScreen from 'C:/Users/user/Desktop/Navacilla/FirstApp/src/screen/TodoScreen.js';  // Use relative path to TodoScreen

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,  // Ensures SafeAreaView takes full screen height
  },
  container: {
    flex: 1,  // Ensures View takes full screen height
    justifyContent: 'center',  // Centers TodoScreen vertically
    alignItems: 'center',  // Centers TodoScreen horizontally
  },
}); 