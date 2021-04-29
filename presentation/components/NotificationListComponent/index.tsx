import { Text, View, ScrollView, Dimensions } from "react-native"
import React from 'react';
import { InviteModel } from "../../../domain/models/invite";
import { NotificationComponent } from "../NotificationComponent";

interface NotificationListProps {
    invites: InviteModel[]
}

export function NotificationListComponent({ invites }: NotificationListProps) {
    return (
        <>
            <Text style={{ color: "black", fontSize: 24, fontWeight: 'bold', alignSelf: 'flex-start', marginLeft: 36, marginTop: 48 }}>Notificações</Text>

            <View style={{ height: Dimensions.get('window').height * 75 / 100 }}>
                <ScrollView>
                    {invites.map(invite => (<NotificationComponent invite={invite} />))}
                </ScrollView>
            </View>
        </>
    )
}