/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

// Mock the Firebase module
jest.mock('@react-native-firebase/auth');

it('renders correctly', () => {
  renderer.create(<App />);
});
