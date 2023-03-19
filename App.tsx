import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, Text } from 'react-native';
import LoginPage from './src/Pages/LoginPage';

function App(): JSX.Element {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      <LoginPage colorScheme={colorScheme} />
      <TouchableOpacity style={styles.toggleButton} onPress={toggleColorScheme}>
        <Text style={styles.toggleButtonText}>Toggle {colorScheme === 'light' ? 'Dark' : 'Light'} Mode</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toggleButton: {
    backgroundColor: '#808080',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    position: 'absolute',
    top: 16,
    right: 16,
  },
  toggleButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

export default App;