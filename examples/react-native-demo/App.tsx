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
import {SafeAreaView, StatusBar, View as RNView} from 'react-native';

import {Button, Card, TextInput, View} from 'cyclops/native';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>
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
        <View
          style={{
            height: 200,
            width: 200,
          }}
          alignItemsH={'center'}>
          <TextInput
            style={{width: '80%'}}
            placeholder="Hello"
            placeholderTextColor={'lightgray'}
            onChangeText={(text) => console.log(text)}></TextInput>
        </View>
        <Card style={{width: 200}}>
          <View
            style={{
              height: 200,
              backgroundColor: 'red',
              width: '100%',
            }}></View>
        </Card>
        <RNView
          style={{height: 100, backgroundColor: 'cyan', width: '50%'}}></RNView>
      </SafeAreaView>
    </>
  );
};

export default App;
