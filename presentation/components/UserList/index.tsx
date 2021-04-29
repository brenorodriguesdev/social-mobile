import { Text, View, Dimensions } from "react-native"
import React from 'react';
import { UserRow } from "../UserRow";
import { ScrollView } from "react-native-gesture-handler";

interface User {
    id: number
    name: string
}

interface UserListProps {
    users: User[]
    navigation: any
}

export function UserList({ users, navigation }: UserListProps) {
    return (
        <>
            <Text style={{ color: "black", fontSize: 24, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: 36 }}>Resultados</Text>
            <View style={{ height: Dimensions.get('window').height * 60 / 100 }}>
                <ScrollView>
                    {users.map(user => <UserRow key={user.id} name={user.name} navigation={navigation} />)}
                </ScrollView>
            </View>
        </>
    );

}