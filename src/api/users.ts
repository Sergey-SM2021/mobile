import axioslib from 'axios';
import {IUser} from "../Types/entity";

const axios = axioslib.create({
    baseURL: "https://63443a5fdcae733e8fdab410.mockapi.io/"
})

export const users = async () => (await axios.get<IUser>("users")).data