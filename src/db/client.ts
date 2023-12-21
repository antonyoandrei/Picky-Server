import { PrismaClient as MongoClient, Prisma } from "../../prisma/generated/mongodb_client";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgresql_client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export const DATA_SOURCE: string = process.env.DATA_SOURCE ?? "mongo";

type ClientMongo = MongoClient<never, DefaultArgs>
type ClientPostgres = PostgresClient<never, DefaultArgs>

export const mongoClient: ClientMongo = new MongoClient();
export const postgresClient: ClientPostgres = new PostgresClient();

export let prismaClient: ClientMongo | ClientPostgres;

if (DATA_SOURCE === 'postgres') {
    prismaClient = postgresClient;
} else {
    prismaClient = mongoClient;
}

export default prismaClient;
