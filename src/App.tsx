import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { store } from './store/store';

import { routes } from './router/routes';
import Layout from './layout/Layout';

function App(): JSX.Element {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          {
            routes.map(({key, Component}) => (
              <Stack.Screen name={key}>
                 {() => (
                  <Layout>
                    <Component />
                  </Layout>
                 )}
              </Stack.Screen>
            ))
          }
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
