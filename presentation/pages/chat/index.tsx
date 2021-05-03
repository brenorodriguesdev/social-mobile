import { EvilIcons, FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Dimensions, SafeAreaView } from "react-native";

export function Chat() {
    const [messages, setMessages] = useState([{
        text: "Oi tudo bem?",
        userSend: {
            _id: 1,
            name: 'Teste'
        },
        userReceive: {
            _id: 2,
            name: 'Teste2'
        },
    },
    {
        text: "Opa, tudo sim e com você?",
        userSend: {
            _id: 2,
            name: 'Teste'
        },
        userReceive: {
            _id: 2,
            name: 'Teste2'
        },
        createAt: new Date().toISOString()
    }]);

    const styles = StyleSheet.create({
        inputs: {
            borderColor: "#E0E0E0",
            borderWidth: 1,
            height: 40,
            borderRadius: 25,
            padding: 8,
            color: '#666',
            fontSize: 12,
        },
        chip: {
            backgroundColor: "#0050FF",
            padding: 8,
            borderRadius: 12
        }
    });

    const { inputs, chip } = styles;

    return (
        <SafeAreaView style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: 'white'
        }}>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{
                    flex: 1,
                    justifyContent: "flex-start",
                    marginBottom: 16,
                    paddingTop: 16,
                }}>
                    {messages.map((conversa, key) => (

                        (conversa.userSend._id != 1) ?
                            <View key={key} style={{ alignItems: "flex-start", marginTop: 12, marginLeft: 12 }}>
                                <View style={[chip, { marginLeft: 8 }]}>
                                    <EvilIcons name="user" size={36} color="#808080" style={{position:'absolute', top:-24,left:-24}} />
                                    <Text style={{ fontSize: 12, color: 'white' }}>{conversa.text}</Text>
                                </View>
                            </View>
                            :
                            <View key={key} style={{ alignItems: "flex-end", marginTop: 12, marginRight: 12 }}>
                                <View style={[chip, { backgroundColor: "#00000095", marginRight: 8 }]}>
                                    <EvilIcons name="user" size={36} color="#808080" style={{position:'absolute', top:-24,right:-24}} />
                                    <Text style={{ fontSize: 12, color: 'white' }}>{conversa.text}</Text>
                                </View>
                            </View>

                    ))}
                </View>
            </ScrollView>
            <View style={{ flexDirection: "row", flexWrap: "nowrap", justifyContent: "center", padding: 4 }}>
                <TextInput
                    style={[inputs, { flexWrap: "wrap", width: Dimensions.get('window').width * 95 / 100 }]}
                    placeholder="Digite sua mensagem"
                    placeholderTextColor="#666"
                    keyboardType="default"
                    multiline={true}
                />
                <TouchableOpacity style={{ position: 'absolute', top: 16, right: 24 }}>
                    <Text style={{ color: "#666" }}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}