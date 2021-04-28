import { View, TouchableOpacity, Dimensions } from "react-native"
import React, { useState } from 'react';
import { Entypo, MaterialIcons } from "@expo/vector-icons";


export function TabNavigation() {

    const [menuIndex, setMenuIndex] = useState(0)

    return (
        <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#FCFCFC', width: Dimensions.get('window').width, height: 64 }}>
            <TouchableOpacity onPress={() => setMenuIndex(0)} disabled={menuIndex === 0} style={{
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 12,
                marginTop: 12
            }}>
                <MaterialIcons name="home" size={20} color={menuIndex === 0 ? "#0080ff" : "#0080ff80"}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMenuIndex(1)} disabled={menuIndex === 1} style={{
                width: 50,
                height: 50,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 6,
                marginBottom: 12,
                marginTop: 12
            }}>
                <MaterialIcons name="settings" size={20} color={menuIndex === 1 ? "#0080ff" : "#0080ff80"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMenuIndex(2)} disabled={menuIndex === 2} style={{
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 6,
                marginBottom: 12,
                marginTop: 12
            }}>
                <Entypo name="chat" size={20} color={menuIndex === 2 ? "#0080ff" : "#0080ff80"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMenuIndex(3)} disabled={menuIndex === 3} style={{
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 6,
                marginBottom: 12,
                marginTop: 12
            }}>
                <MaterialIcons name="logout" size={20} color={menuIndex === 3 ? "#0080ff" : "#0080ff80"} />
            </TouchableOpacity>
        </View>
    )
}