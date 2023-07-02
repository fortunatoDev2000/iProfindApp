import { StatusBar } from 'expo-status-bar';
import * as Device from 'expo-device';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [text, setText] = useState('');

  const handleChangeText = (inputText) => {
    setText(inputText);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="#d4d4d4" barStyle="default" />
    <View style={styles.container}>
      <View style={styles.barra}>
      <TouchableOpacity style={styles.button}>
      <ImageBackground
        source={require('./assets/abrirMenu.png')}
        style={styles.imageBackground}
        resizeMode="contain"
      />
      </TouchableOpacity>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={handleChangeText}
            placeholder="iProfind"
            textAlign="center"
            selectionColor="black"
            placeholderTextColor="black"
          />
      </View>
      <Text>iProfind</Text>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  
  },

  barra:{
    height: 55,
    backgroundColor: '#d4d4d4',
    width: Dimensions.get('window').width,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
},

input: {
  width: 250,
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  paddingHorizontal: 10,
  borderRadius: 20,
  bottom: 8,
  position: 'absolute',
  textAlign: 'center',
  fontSize: 16,
  fontWeight: '600',
},

imageBackground: {
  height: '100%',
  width: '100%',
},

button: {
  position: 'absolute',
  left: 22,
  width: 35,
  height: 35,
  justifyContent: 'center',
  alignItems: 'center',

},
});
