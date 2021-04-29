import { Profile } from "../../../presentation/pages/profile";
import React from 'react'
import { makeGetFriendListService } from "../services/get-friend-list-service-factory";

export function makeProfileRoute(props: any) {
    return (
        <Profile {...props} getFriendListUseCase={makeGetFriendListService()} />
    )
}