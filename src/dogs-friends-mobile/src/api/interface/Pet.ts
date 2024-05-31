export interface Iimagem {
    id: string,
    url: string,
    petId: string
}

export interface IPet {   
    id: string,
    nome: string,
    idade: number,
    raca: string,
    peso: number,
    clienteId: string,
    imagens: Iimagem[]
}

