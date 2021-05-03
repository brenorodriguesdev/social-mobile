import { View, TextInput, Text, TouchableOpacity, Dimensions, Keyboard } from "react-native"
import React, { useEffect, useState } from 'react';
import styles from './styles'

export function ChatInput() {

  const { inputs } = styles
  
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const _keyboardDidShow = () => setKeyboardStatus(true);
  const _keyboardDidHide = () => setKeyboardStatus(false);

    
  useEffect(() => {
      Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

      // cleanup function
      return () => {
          Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
          Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
      };
  }, []);
  
  return (
    <View style={[{ flexDirection: "row", flexWrap: "nowrap", justifyContent: "center", padding: 4 }, keyboardStatus && { marginBottom: 268 }]}>
      <TextInput
        style={[styles.inputs, { width: Dimensions.get('window').width * 95 / 100, textAlign: 'center', textAlignVertical: 'center' }]}
        placeholder="Digite sua mensagem"
        placeholderTextColor="#666"
        keyboardType="default"
      />
      <TouchableOpacity style={{ position: 'absolute', top: 16, right: 24 }}>
        <Text style={{ color: "#666" }}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}