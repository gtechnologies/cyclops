/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {View, Button} from 'cyclops/native';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'red',
            alignItems: 'center',
          }}
          alignItemsH="center"
          alignItemsV="space-around">
          <View style={{width: 20, height: 20, backgroundColor: 'pink'}}></View>
          <View style={{width: 20, height: 20, backgroundColor: 'pink'}}></View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
