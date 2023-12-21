import { PrismaClient as MongoClient } from "../../prisma/generated/mongodb_client";
import { PrismaClient as PostgresClient } from "../../prisma/generated/postgresql_client";
import { Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export const DATA_SOURCE: string = process.env.DATA_SOURCE ?? "mongo"

type ClientMongo = MongoClient<Prisma.PrismaClientOptions, never, DefaultArgs>
type ClientPostgres = PostgresClient<Prisma.PrismaClientOptions, never, DefaultArgs>

export const mongoClient: ClientMongo = new MongoClient();
export const postgresClient: ClientPostgres = new PostgresClient();

export let prismaClient: any

if (DATA_SOURCE === 'postgres') {
    prismaClient = postgresClient
} else {
    prismaClient = mongoClient
}
