import { Home } from "../../../presentation/pages/home";
import { makeSearchUserService } from '../services/search-user-service-factory';
import React from 'react'
import { makeGetInviteListService } from "../services/get-invite-list-service-factory";

export function makeHomeRoute(props: any) {
    return (
        <Home {...props} searchUserUseCase={makeSearchUserService()} getInviteListUseCase={makeGetInviteListService()} />
    )
}