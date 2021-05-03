import { Text, View, Dimensions } from "react-native"
import React from 'react';
import { EvilIcons } from "@expo/vector-icons";
import { AddButton, BlockButton } from "..";
import { UserModel } from "../../../domain/models/user";
import { makeSendInviteService } from "../../../main/factories/services/send-invite-service-factory";
import { ChatButton } from "../ChatButton";

interface ProfileHeader {
    user: UserModel
}

export function ProfileHeader({ user}: ProfileHeader) {
    return (
        <View style={{ alignItems: 'center', marginTop: 48, width: Dimensions.get('window').width * 90 / 100, height: 256, marginBottom: 12, borderColor: 'transparent', borderBottomColor: '#F0F0F0', borderWidth: 2 }}>
            <EvilIcons name="user" size={128} />
            <Text style={{ fontWeight: 'bold', marginTop: 12 }}>{user.name}</Text>

            <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center', width: Dimensions.get('window').width * 75 / 100, height: Dimensions.get('window').height * 15 / 100 }}>

                { user.isFriend ? <ChatButton /> : <AddButton id={user.id} sendInviteUseCase={makeSendInviteService()}/> }

                <BlockButton />

            </View>

        </View>
    )
}