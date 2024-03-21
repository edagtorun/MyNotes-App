import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/rootNavigator';
import Provider from './src/context/provider';

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <RootNavigator></RootNavigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
