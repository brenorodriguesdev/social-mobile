import { Text, View, ScrollView, TouchableOpacity, Dimensions } from "react-native"
import React, { useContext } from 'react';
import { EvilIcons, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { InviteModel } from "../../../domain/models/invite";
import { HomeContext } from "../../contexts/home";
import { AcceptInviteUseCase } from "../../../domain/models/accept-invite";

interface NotificationComponentProps {
    invite: InviteModel,
    acceptInviteUseCase: AcceptInviteUseCase
}

export function NotificationComponent({ invite, acceptInviteUseCase }: NotificationComponentProps) {

    const { removeInvite } = useContext(HomeContext)

    const acceptInvite = async () => { try { await acceptInviteUseCase.accept(invite.id); removeInvite(invite.id) } catch (error) { } }

    return (

        <View style={{ flexDirection: 'column', width: Dimensions.get('window').width, marginBottom: 12, alignItems: 'center', justifyContent: 'space-around', borderColor: 'transparent', borderBottomColor: '#F0F0F0', borderWidth: 1, paddingBottom: 12 }}>

            <Text style={{ fontSize: 10, marginBottom: 18 }}>Enviou uma solicitação de amizade para você</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', borderColor: 'transparent', borderRightColor: '#F0F0F0', borderWidth: 1, paddingRight: 12, width: Dimensions.get('window').width * 35 / 100 }}>
                    <EvilIcons name="user" size={48} />
                    <Text style={{ fontWeight: 'bold', fontSize: 10 }}>{invite.name}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: Dimensions.get('window').width * 50 / 100 }} >
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 24 }} onPress={() => acceptInvite()}>
                        <AntDesign name="adduser" size={18} />
                        <Text style={{ fontWeight: 'bold', fontSize: 8 }}>Aceitar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 60 }} onPress={() => removeInvite(invite.id)}>
                        <MaterialCommunityIcons name="cancel" size={18} />
                        <Text style={{ fontWeight: 'bold', fontSize: 8 }}>Recusar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    )
}