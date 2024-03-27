import { OnModuleInit } from "@nestjs/common";


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
}

