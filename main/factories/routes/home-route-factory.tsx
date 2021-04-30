import React from 'react'
import { Home } from "../../../presentation/pages/home";
import { HomeProvider } from "../../../presentation/contexts/home";
import { makeGetInviteListService } from "../services/get-invite-list-service-factory";
import { makeSearchUserService } from '../services/search-user-service-factory';
import { makeGetCountNotificationService } from "../services/get-count-notification-service-factory";

export function makeHomeRoute(props: any) {
    return (
        <HomeProvider>
            <Home {...props} searchUserUseCase={makeSearchUserService()} getInviteListUseCase={makeGetInviteListService()} getCountNotificationUseCase={makeGetCountNotificationService()} />
        </HomeProvider>
    )
}