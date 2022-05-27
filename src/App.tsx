import React from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import AppStack from '@core/navigation/AppStack';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <AppStack />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
