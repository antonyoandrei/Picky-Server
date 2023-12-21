import prismaClient from "../db/client";
import DATA_SOURCE from "../db/client";

export const convertToType = (id: string) => {
    if (DATA_SOURCE === 'postgres') {
        return Number(id)
    } else {
        return id
    }
}

export const getClient = () => {
    if (DATA_SOURCE === 'postgres') {
        return null
    } else {
        return prismaClient
    }
}
