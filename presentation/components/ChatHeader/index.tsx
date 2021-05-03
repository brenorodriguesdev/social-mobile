import { View, Text, TouchableOpacity } from "react-native"
import React from 'react';
import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";

interface ChatHeaderProps {
  name: string
}

export function ChatHeader({ name }: ChatHeaderProps) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: '#E0E0E0', borderWidth: 1, paddingTop: 32, backgroundColor: '#F0F0F095', paddingBottom: 8 }}>
      <TouchableOpacity style={{ position: 'absolute', left: 15, top: 35 }} >
        <MaterialCommunityIcons name="arrow-left" size={26} color="#666" />
      </TouchableOpacity>
      <EvilIcons name="user" size={36} color="#666" />
      <Text style={{ fontWeight: 'bold', color: '#666', fontSize: 12 }}>{name}</Text>
    </View>
  );
}