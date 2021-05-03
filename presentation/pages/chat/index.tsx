import { EvilIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Dimensions, SafeAreaView, StatusBar, Keyboard } from "react-native";

export function Chat() {
    const [messages, setMessages] = useState([
        {
            text: "Opa, tudo sim e com você?",
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
            text: "Oi tudo bem?",
            userSend: {
                _id: 2,
                name: 'Teste'
            },
            userReceive: {
                _id: 1,
                name: 'Teste2'
            },
        }
    ]);


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
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: 'white'
        }}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: '#E0E0E0', borderWidth: 1, paddingTop: 32, backgroundColor: '#F0F0F095', paddingBottom: 8 }}>
                <TouchableOpacity style={{ position: 'absolute', left: 15, top: 35 }} >
                    <MaterialCommunityIcons name="arrow-left" size={26} color="#666" />
                </TouchableOpacity>
                <EvilIcons name="user" size={36} color="#666" />
                <Text style={{ fontWeight: 'bold', color: '#666', fontSize: 12 }}>Breno Rodrigues</Text>
            </View>
            <ScrollView style={{ flex: 1, flexDirection: 'column-reverse' }}>
                <View style={{
                    flex: 1,
                    marginBottom: 16,
                    paddingTop: 16,
                    flexDirection: 'column-reverse'
                }}>
                    {messages.map((conversa, key) => (

                        (conversa.userSend._id != 1) ?
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
            <View style={[{ flexDirection: "row", flexWrap: "nowrap", justifyContent: "center", padding: 4 }, keyboardStatus && { marginBottom: 268}]}>
                <TextInput
                    style={[inputs, { width: Dimensions.get('window').width * 95 / 100, textAlign:'center', textAlignVertical:'center' }]}
                    placeholder="Digite sua mensagem"
                    placeholderTextColor="#666"
                    keyboardType="default"
                />
                <TouchableOpacity style={{ position: 'absolute', top: 16, right: 24 }}>
                    <Text style={{ color: "#666" }}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}