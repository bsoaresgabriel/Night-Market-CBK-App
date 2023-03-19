import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';

type LoginPageProps = {
    colorScheme: 'light' | 'dark';
  };

  const LoginPage: React.FC<LoginPageProps> = ({ colorScheme }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login:', { email, password });
  };

  const styles = createStyles(colorScheme);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cyberpunk RED Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor={colorScheme === 'dark' ? '#FFF' : '#000'}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
        placeholderTextColor={colorScheme === 'dark' ? '#FFF' : '#000'}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const createStyles = (colorScheme: 'light' | 'dark') =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colorScheme === 'dark' ? '#000' : '#FFF',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colorScheme === 'dark' ? '#FF5555' : '#FF0000',
      marginBottom: 24,
    },
    input: {
      width: '80%',
      height: 40,
      paddingHorizontal: 8,
      borderBottomColor: colorScheme === 'dark' ? '#FF5555' : '#FF0000',
      borderBottomWidth: 1,
      marginBottom: 16,
      color: colorScheme === 'dark' ? '#FFF' : '#000',
    },
    loginButton: {
      backgroundColor: colorScheme === 'dark' ? '#FF5555' : '#FF0000',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 4,
      marginTop: 16,
    },
    loginButtonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFF',
    },
  });

export default LoginPage;