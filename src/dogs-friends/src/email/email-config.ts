export class EmailConfig{
    from: string;
    password: string;
    service: string;
    port?: number = 25;
    secure?: boolean = false;
}

export enum SERVICE {
    GMAIL = 'gmail',
}

export const GMAIL_CONFIG: EmailConfig = {
    from: "",
    password: "",
    service: SERVICE.GMAIL
}    


