const mockAuth = {
    onAuthStateChanged: jest.fn(),
    currentUser: {
      uid: '12345',
      displayName: 'Test User',
      email: 'test@example.com',
    },
  };
  
  export default () => mockAuth;