import { CreateUserService } from "../../../data/services/create-user";
import { Axios } from "../../../infra/axios";

export const makeCreateUserService = (): CreateUserService => {
    const axios = new Axios('signUp')
    return new CreateUserService(axios)
}