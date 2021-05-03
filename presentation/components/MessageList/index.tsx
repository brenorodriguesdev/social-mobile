import { ScrollView, View, Text } from "react-native"
import React from 'react';
import styles from './styles'

interface MessageListProps {
  messages: any[]
}

export function MessageList({ messages }: MessageListProps) {

  const { chip } = styles

  return (
    <ScrollView style={{ flex: 1, flexDirection: 'column-reverse' }}>
      <View style={{
        flex: 1,
        marginBottom: 16,
        paddingTop: 16,
        flexDirection: 'column-reverse'
      }}>
        {messages.map((conversa, key) => (

          !conversa.isMe ?
            <View key={key} style={{ alignItems: "flex-start", marginTop: 12, marginLeft: 12 }}>
              <View style={[chip, { marginLeft: 8 }]}>
                <Text style={{ fontSize: 12, color: 'white' }}>{conversa.text}</Text>
              </View>
            </View>
            :
            <View key={key} style={{ alignItems: "flex-end", marginTop: 12, marginRight: 12 }}>
              <View style={[chip, { backgroundColor: "#00000095", marginRight: 8 }]}>
                <Text style={{ fontSize: 12, color: 'white' }}>{conversa.text}</Text>
              </View>
            </View>

        ))}
      </View>
    </ScrollView>
  );
}