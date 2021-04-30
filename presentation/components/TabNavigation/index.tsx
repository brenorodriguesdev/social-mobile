import { View, TouchableOpacity, Dimensions, Text } from "react-native"
import React, { useContext, useEffect, useState } from 'react';
import { Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { HomeContext } from "../../contexts/home";


export function TabNavigation({ navigation }: any) {

    const { menuIndex, setMenuIndex, countNotification } = useContext(HomeContext)

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
                <MaterialIcons name="home" size={24} color={menuIndex === 0 ? "#0080ff" : "#0080ff80"} />
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
                <MaterialIcons name="settings" size={24} color={menuIndex === 1 ? "#0080ff" : "#0080ff80"} />
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
                <Ionicons name="notifications" size={24} color={menuIndex === 3 ? "#0080ff" : "#0080ff80"} />
                {countNotification > 0 && <View style={{ width: 15, height: 15, borderRadius: 7.5, backgroundColor: 'red', position: 'absolute', top: 8, left: 28, justifyContent: "center", alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 10 }}>{countNotification}</Text>
                </View>}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setMenuIndex(4); navigation.navigate('SignIn') }} disabled={menuIndex === 4} style={{
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 6,
                marginBottom: 12,
                marginTop: 12
            }}>
                <MaterialIcons name="logout" size={24} color={menuIndex === 4 ? "#0080ff" : "#0080ff80"} />
            </TouchableOpacity>
        </View>
    )
}