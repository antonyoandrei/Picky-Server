import { PrismaClient as PostgresClient } from "../../prisma/generated/postgresql_client";
import { DefaultArgs, PrismaClientOptions } from "@prisma/client/runtime/library";

export const DATA_SOURCE: string = process.env.DATA_SOURCE ?? "mongo";

type ClientPostgres = PostgresClient<PrismaClientOptions, never, DefaultArgs>;

export const postgresClient: ClientPostgres = new PostgresClient();

export let prismaClient: ClientPostgres; 

if (DATA_SOURCE === 'postgres') {
    prismaClient = postgresClient;
} else {
    prismaClient = postgresClient;
}
