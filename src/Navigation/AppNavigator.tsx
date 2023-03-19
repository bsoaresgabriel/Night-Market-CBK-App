import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import LoginPage, { LoginPageProps } from '../../src/Pages/LoginPage';
import SignUpPage, { SignUpPageProps } from '../../src/Pages/SignUpPage';

export type RootStackParamList = {
  LoginPage: LoginPageProps;
  SignUpPage: SignUpPageProps;
};

const Stack = createStackNavigator<RootStackParamList>();

type AppNavigatorProps = {
  colorScheme: LoginPageProps['colorScheme'];
};

function AppNavigator({ colorScheme }: AppNavigatorProps) {
  const theme = colorScheme === 'dark' ? {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: '#000',
    },
  } : {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFF',
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen
          name="LoginPage"
          children={(props) => <LoginPage colorScheme={colorScheme} {...props} />}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUpPage"
          children={(props) => <SignUpPage colorScheme={colorScheme} {...props} />}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;