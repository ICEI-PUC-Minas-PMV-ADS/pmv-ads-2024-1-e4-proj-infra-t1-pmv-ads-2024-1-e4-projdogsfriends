import { Passeio } from "../entities/passeio.entity";


export class UpdatePasseioDto extends Passeio {
    realizado?: boolean;
}
