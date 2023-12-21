import { DATA_SOURCE, postgresClient } from "../db/client";

export const convertToType = (id: string) => {
    if (DATA_SOURCE === 'postgres') {
        return Number(id)
    } else {
        return id
    }
}

export const getClient = () => {
    if (DATA_SOURCE === 'postgres') {
        return postgresClient
    } else {
        return postgresClient
    }
}
