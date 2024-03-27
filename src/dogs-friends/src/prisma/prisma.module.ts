import { Module } from "@nestjs/common";
import { PrismaService } from "./service/PrismaService";

@Module({ providers: [PrismaService] })
export class PrismaModule { }
