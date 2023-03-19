import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Store/Store';
import AppNavigator from './src/Navigation/AppNavigator';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

function App(): JSX.Element {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  // Handle user state changes
  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (loading) {
      setLoading(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Provider store={Store}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
        <AppNavigator colorScheme={colorScheme} />
        <TouchableOpacity style={styles.toggleButton} onPress={toggleColorScheme}>
          <Text style={styles.toggleButtonText}>Toggle {colorScheme === 'light' ? 'Dark' : 'Light'} Mode</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Provider>
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