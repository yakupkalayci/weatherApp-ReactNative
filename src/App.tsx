// Import Rect
import React from 'react';

// Import Store
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

// Import React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routes } from './router/routes';

// Import Layout
import Layout from './layout/Layout';

function App(): JSX.Element {

  // Variables
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            {
              routes.map(({key, Component}) => (
                <Stack.Screen name={key} key={key}>
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
      </PersistGate>
    </Provider>
  );
}


export default App;
