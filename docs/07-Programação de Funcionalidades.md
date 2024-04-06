# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo

# Sumário

- [Implementação da API](#implementação-da-api)
  - [Artefatos criados:](#artefatos-criados)
  - [Instruções para acesso e verificação:](#instruções-para-acesso-e-verificação)
    - [Exemplos de Requisições para cada Endpoint:](#exemplos-de-requisições-para-cada-endpoint)
      - [1. Cadastro de Usuário (POST /auth/create):](#1-cadastro-de-usuário-post-authcreate)
      - [2. Login (POST /auth/login):](#2-login-post-authlogin)
      - [3. Novo endereço (POST /endereco):](#3-novo-endereço-post-endereco)
      - [4. Dados do usuario logado (GET /cliente/me):](#4-dados-do-usuario-logado-get-clienteme)
      - [5. Adicionar Pet (POST /pet):](#5-adicionar-pet-post-pet)
      - [5. Pesquisar por passeador, no estado, por cidade ou bairro (GET /cliente/search):](#5-pesquisar-por-passeador-no-estado-por-cidade-ou-bairro-get-clientesearch)
      - [6. Pedido de serviço do cliente ao passeador (POST /pedido):](#6-pedido-de-serviço-do-cliente-ao-passeador-post-pedido)
      - [7. Review de um passeador (POST /review):](#7-review-de-um-passeador-post-review)
    - [Esquema do Banco de Dados](#esquema-do-banco-de-dados)
        - [Modelos de Dados](#modelos-de-dados)
- [Auth](#auth)
    - [auth.controller.ts](#authcontrollerts)
    - [auth.module.ts](#authmodulets)
    - [auth.service.ts](#authservicets)
- [Introdução aos DTOs](#introdução-aos-dtos)
    - [O que são DTOs?](#o-que-são-dtos)
    - [Por que usar DTOs?](#por-que-usar-dtos)
    - [Como usar DTOs?](#como-usar-dtos)
        - [auth.dto.ts (Exemplo de DTO para autenticação)](#authdto-ts-exemplo-de-dto-para-autenticação)
        - [endereco.dto.ts (Exemplo de DTO para endereço)](#enderecodto-ts-exemplo-de-dto-para-endereço)
        - [index.ts (Exemplo de DTO para index)](#indexts-exemplo-de-dto-para-index)
        - [login.dto.ts (Exemplo de DTO para login)](#logindto-ts-exemplo-de-dto-para-login)
        - [telefone.dto.ts (Exemplo de DTO para telefone)](#telefonedto-ts-exemplo-de-dto-para-telefone)
- [Guards](#guards)
    - [index.ts (Exemplo de Guard)](#indexts-exemplo-de-guard)
    - [jwt.guard.ts (Exemplo de Guard JWT)](#jwtguardts-exemplo-de-guard-jwt)
- [Strategy](#strategy)
    - [index.ts (Exemplo de Strategy)](#indexts-exemplo-de-strategy)
    - [jwt.strategy.ts (Exemplo de Strategy JWT)](#jwtstrategyts-exemplo-de-strategy-jwt)
- [Cliente](#cliente)
    - [cliente.controller.ts](#clientecontrollerts)
    - [cliente.module.ts](#clientemodulets)
    - [cliente.service.ts](#clienteservicets)
    - [edit-cliente.dto.ts](#edit-clientedto-ts)
- [Pet](#pet)
    - [pet.controller.ts](#petcontrollerts)
    - [pet.module.ts](#petmodulets)
    - [pet.service.ts](#petservicets)
    - [edit-pet.dto.ts](#edit-petdto-ts)
    




# Implementação da API

## Artefatos criados:

- Código fonte da API, incluindo todos os endpoints e funcionalidades implementadas.

- Banco de dados: Estrutura de dados utilizada para armazenar informações dos usuários, pets, agendamentos, etc.

## Instruções para acesso e verificação:

1. Faça requisições HTTP para os endpoints da API utilizando ferramentas como cURL, Postman ou Insomnia.
2. Utilize os métodos HTTP corretos (GET, POST, PUT, DELETE) para interagir com os recursos da API.
3. Verifique os dados retornados pelas requisições para garantir que estão corretos e de acordo com o esperado.
4. Certifique-se de utilizar os cabeçalhos de autenticação necessários (por exemplo, token JWT) para acessar endpoints protegidos.

### Exemplos de Requisições para cada Endpoint:

#### 1. Cadastro de Usuário (POST /auth/create):

- `/auth/create` - Cria um novo usuário no sistema.

Cria um novo usuário no sistema com os dados fornecidos no corpo da requisição.

```json
post: http://localhost:3000/auth/create
{
    "email": "mail@gmail.com",
    "senha": "123456",
    "nome": "JOSE",
    "sobrenome": "JOSE",
    "cpf": "123456789",
    "isPasseador": true
}
```

Exemplo de url para requisição:

    POST http://localhost:3000/auth/create?email=mail%40gmail.com&senha=123456&nome=JOSE&sobrenome=SILVA&cpf=12345678901&isPasseador=true

Exemplo de resposta:

```json
{
  "id": "a6e439b8-a372-4fbd-933d-5b439e7b00be",
  "email": "mail@gmail.com",
  "nome": "JOSE",
  "sobrenome": "SILVA",
  "cpf": "12345678901",
  "isPasseador": true
}
```

### 2. Login (POST /auth/login):

- `/auth/login` - Realiza o login de um usuário e retorna um token JWT.

```json
post: http://localhost:3000/auth/login
{
    "email": "mail@gmail.com",
    "senha": "123456"
}
```

Exemplo de url para requisição:

    POST http://localhost:3000/auth/login?email=mail%40gmail.com&senha=123456

Exemplo de resposta:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1haWxAZ21haWwuY29tIiwiaWF0IjoxNTE2MjM5MDIyfQ.0v7c1i5uZIY0q3rWV8Q7U2p2Qy6jv0S6l3RzHcPv1qA"
}
```

### 3. Novo endereço (POST /endereco):

- `/endereco/` - Cria um novo endereço para um usuário.

```json
post: http://localhost:3000/endereco/
{
    "uf": "MG",
    "cidade": "Nova cidade Teste",
    "bairro": "Novo bairro do teste",
    "logradouro": "Rua tal",
    "numero": "456",
    "cep": "33200-124",
    "clienteId": "a6e439b8-a372-4fbd-933d-5b439e7b00be"

}
```

Exemplo de url para requisição:

    POST http://localhost:3000/endereco/?uf=MG&cidade=Nova%20cidade%20Teste&bairro=Novo%20bairro%20do%20teste&logradouro=Rua%20tal&numero=456&cep=33200-124&clienteId=a6e439b8-a372-4fbd-933d-5b439e7b00be

Exemplo de resposta:

```json
{
  "id": "a6e439b8-a372-4fbd-933d-5b439e7b00be",
  "uf": "MG",
  "cidade": "Nova cidade Teste",
  "bairro": "Novo bairro do teste",
  "logradouro": "Rua tal",
  "numero": "456",
  "cep": "33200-124",
  "clienteId": "a6e439b8-a372-4fbd-933d-5b439e7b00be"
}
```

### 4. Dados do usuario logado (GET /cliente/me):

_com bearer token_

- `/cliente/me` - Retorna os dados do usuário logado.

```json
get: http://localhost:3000/cliente/me
{
    "email": "mail@gmail.com"
}
```

Exemplo de url para requisição:

    GET http://localhost:3000/cliente/me?email=mail%40gmail.com

Exemplo de resposta:

```json
{
  "id": "a6e439b8-a372-4fbd-933d-5b439e7b00be",
  "email": "mail@gmail.com",
  "nome": "JOSE",
  "sobrenome": "SILVA",
  "cpf": "12345678901",
  "isPasseador": true
}
```

### 5. Adicionar Pet (POST /pet):

- `/pet/` - Cria um novo pet para um usuário.

```json
post: http://localhost:3000/pet/
{
   "nome": "nomepet",
   "idade": 2,
   "peso": 5,
    "raca": "vira lata",
    "especie": "vira lata",
    "clienteId": "5f99f601-6cd0-4a61-a111-acdb26cbbf70"
}
```

Exemplo de url para requisição:

    POST http://localhost:3000/pet/?nome=nomepet&idade=2&peso=5&raca=vira%20lata&especie=vira%20lata&clienteId=5f99f601-6cd0-4a61-a111-acdb26cbbf70

Exemplo de resposta:

```json
{
  "id": "5f99f601-6cd0-4a61-a111-acdb26cbbf70",
  "nome": "nomepet",
  "idade": 2,
  "peso": 5,
  "raca": "vira lata",
  "especie": "vira lata",
  "clienteId": "5f99f601-6cd0-4a61-a111-acdb26cbbf70"
}
```

### 5. Pesquisar por passeador, no estado, por cidade ou bairro (GET /cliente/search):

- `/cliente/search` - Pesquisa por passeadores com base em um termo, estado, cidade ou bairro.

Exemplo de url para requisição:

    GET http://localhost:3000/cliente/search?term=hori&estado=MG&limit=10&offset=0

Exemplo de resposta:

```json
[
  {
    "id": "a6e439b8-a372-4fbd-933d-5b439e7b00be",
    "email": "mail@gmail.com",
    "nome": "JOSE",
    "sobrenome": "SILVA",
    "cpf": "12345678901",
    "isPasseador": true
  }
]
```

### 6. Pedido de serviço do cliente ao passeador (POST /pedido):

- `/pedido/` - Cria um novo pedido de serviço de um cliente para um passeador.

```json
post: http://localhost:3000/pedido/
{
 "precoTotal": 80.00,
 "agendaPasseadorId": "388babfe-719d-4032-b284-a60c0e5f3d3f",
 "clienteId": "4882e1bf-73a5-4b53-bf04-a225077145f8",
 "passeadorId": "4882e1bf-73a5-4b53-bf04-a225077145f8",
 "pets": ["3440d851-d41b-4dbe-ae39-04f8bacd2b6f", "72110495-936a-4fb6-bd60-26bbbc2a2b32"]
}
```

Exemplo de url para requisição:

    POST http://localhost:3000/pedido/?precoTotal=80.00&agendaPasseadorId=388babfe-719d-4032-b284-a60c0e5f3d3f&clienteId=4882e1bf-73a5-4b53-bf04-a225077145f8&passeadorId=4882e1bf-73a5-4b53-bf04-a225077145f8&pets=3440d851-d41b-4dbe-ae39-04f8bacd2b6f,72110495-936a-4fb6-bd60-26bbbc2a2b32

Exemplo de resposta:

```json
{
  "id": "f1671577-6578-444c-a817-f2fd0b78f18c",
  "precoTotal": 80.0,
  "agendaPasseadorId": "388babfe-719d-4032-b284-a60c0e5f3d3f",
  "clienteId": "4882e1bf-73a5-4b53-bf04-a225077145f8",
  "passeadorId": "4882e1bf-73a5-4b53-bf04-a225077145f8",
  "pets": [
    "3440d851-d41b-4dbe-ae39-04f8bacd2b6f",
    "72110495-936a-4fb6-bd60-26bbbc2a2b32"
  ]
}
```

### 7. Review de um passeador (POST /review):

- `/review` - Cria uma nova avaliação de um passeador.

```json
post: http://localhost:3000/review
{
 "nota": 5,
 "descricao": "muito bom, adorei!",
  "passeadorId": "4882e1bf-73a5-4b53-bf04-a225077145f8",
  "passeioId": "f1671577-6578-444c-a817-f2fd0b78f18c"
}
```

Exemplo de url para requisição:

    POST http://localhost:3000/review/?nota=5&descricao=muito%20bom,%20adorei!&passeadorId=4882e1bf-73a5-4b53-bf04-a225077145f8&passeioId=f1671577-6578-444c-a817-f2fd0b78f18c

Exemplo de resposta:

```json
{
    "id": "f1671577-6578-444c-a817-f2fd0b78f18c",
    "nota": 5,
    "descricao": "muito bom, adorei!",
    "passeadorId": "4882e1bf-73a5-4b53-bf04-a225077145f8",
    "passeioId": "f1671577-6578-444c-a817-f2fd0b78f18c"
}
```


## Esquema do Banco de Dados
A seguir está o esquema do banco de dados usado na nossa aplicação. Este esquema foi definido utilizando o Prisma e representa a estrutura dos dados utilizados no sistema.

### Modelos de Dados
O esquema inclui modelos de dados para representar clientes, endereços, telefones, passeios, pets, pedidos e imagens. Cada modelo possui seus próprios campos que capturam informações relevantes para a funcionalidade da aplicação.

Veja abaixo o código do esquema do banco de dados:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

// Table representing Clients
model Cliente {
  id          String     @id @default(uuid()) @map("_id")
  nome        String
  sobrenome   String
  cpf         String @unique
  email       String @unique  
  senha       String 
  fotoPerfil  String?
  isPasseador Boolean?
  telefones   Telefone[]
  passeios    Passeio[]
  pets        Pet[]
  pedidos     Pedido[]
  enderecos   Endereco[] 
 

  @@map("Cliente")
}

model Endereco{
  id          String  @id @default(uuid()) @map("_id")
  uf          String
  cidade      String
  bairro      String
  logradouro  String
  numero      String
  cep         String
  clienteId   String
  clientes    Cliente @relation(fields: [clienteId], references: [id])
  @@map("Endereco")
}

// Table representing Telefones
model Telefone {
  id        String  @id @default(uuid()) @map("_id")
  codigo    String
  numero    String
  clienteId String
  clientes  Cliente @relation(fields: [clienteId], references: [id])

   @@map("Telefone")
}

// Table representing Passeios
model Passeio {
  id          String   @id @default(uuid()) @map("_id")
  data        DateTime
  hora        DateTime
  observacoes String
  clienteId   String   
  passeadorId String   
  pedidoId    String  
  petId       String  
  clientes    Cliente  @relation(fields: [clienteId], references: [id])
  pedidos     Pedido   @relation(fields: [pedidoId], references: [id])
  pets        Pet      @relation(fields: [petId], references: [id])

  @@map("Passeio")
}

// Table representing Pets
model Pet {
  id          String    @id @default(uuid()) @map("_id")
  nome        String
  idade       Int
  peso        Float
  raca        String
  especie     String
  clienteId   String?
  passeadorId String?
  pedidoId    String?
  clientes    Cliente?  @relation(fields: [clienteId], references: [id])
  passeios    Passeio[]
  pedidos     Pedido?   @relation(fields: [pedidoId], references: [id])
  imagens     Imagem[]

  @@map("Pets")
}

// Table representing Pedidos
model Pedido {
  id            String    @id @default(uuid()) @map("_id")
  precoTotal    Float
  estagioPedido Int
  clienteId     String
  passeadorId   String
  agendamentoId String
  petId         String
  clientes      Cliente   @relation(fields: [clienteId], references: [id])
  passeios      Passeio[]
  pets          Pet[]

  @@map("Pedidos")
}

// Table representing Imagens
model Imagem {
  id    String  @id @default(uuid()) @map("_id")
  url   String
  petId String?
  pets  Pet?    @relation(fields: [petId], references: [id])

  @@map("Imagens")
}
```

# Auth

Em nosso projeto, a autenticação é feita por meio de um token JWT (JSON Web Token). O token JWT é gerado quando um usuário faz login com sucesso e é utilizado para autenticar requisições subsequentes ao servidor. O token JWT contém informações sobre o usuário autenticado e é assinado com uma chave secreta para garantir sua autenticidade.

## auth.controller.ts

Aqui está o controlador de autenticação que define os endpoints para criar um novo usuário e fazer login. O controlador utiliza o serviço de autenticação para processar as requisições e retornar as respostas apropriadas.

```typescript
import { Body, Controller, Post } from "@nestjs/common";
import { AuthDto } from "./dto";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Post('create')
    create(@Body() authDto: AuthDto) {
        return this.authService.create(authDto);
    }

    @Post('login')
    signin(@Body() dto: LoginDto) {

        return this.authService.signin(dto);
    }
}
```

## auth.module.ts

Aqui está o módulo de autenticação que define o controlador, o serviço e a estratégia JWT utilizados para autenticar usuários.

```typescript
import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { JwtModule } from "@nestjs/jwt";

@Module({

    imports:[JwtModule.register({})],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy]
    
})

export class Authmodule{}
```

## auth.service.ts

Aqui está o serviço de autenticação que processa as requisições de criação de usuários e login. O serviço utiliza o Prisma para interagir com o banco de dados e o argon2 para criptografar senhas.

```typescript
import { PrismaService } from "src/prisma/service/prisma.service";
import { AuthDto } from "./dto";
import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import * as argon from 'argon2';
import { ConfigService } from "@nestjs/config";
import { LoginDto } from "./dto/login.dto";
import { JwtService } from "@nestjs/jwt";
@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private config: ConfigService,  private jwt:JwtService) { }




    async create(dto: AuthDto) {


        const senha = await argon.hash(dto.senha)

        try {



            const cliente = await this.prisma.cliente.create({

                data: {
                    email: dto.email,
                    senha,
                    nome: dto.nome,
                    sobrenome: dto.sobrenome,
                    cpf: dto.cpf,
                    fotoPerfil: dto.fotoPerfil,
                    isPasseador: dto.isPasseador,
                    enderecos: {
                        create: {

                            logradouro: dto.enderecos.logradouro,
                            numero: dto.enderecos.numero,
                            bairro: dto.enderecos.bairro,
                            cidade: dto.enderecos.cidade,
                            uf: dto.enderecos.uf,
                            cep: dto.enderecos.cep
                        }
                    },
                    telefones: {
                        create: {
                           codigo: dto.telefones.codigo,
                            numero: dto.telefones.numero
                        }
                    }




                },
                select: {

                    email: true,
                }

            })




            return cliente

        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Email já cadastrado')
                }
            } throw error
        }

    }

    async signin(dto: LoginDto) {

        //find user by email
        const user =
            await this.prisma.cliente.findUnique({
                where: {
                    email: dto.email,
                },

            });

        //if user does not exist, throw an error
        if (!user)
            throw new ForbiddenException('Credentials not valid');
        //compare password
        const pwMatches = await argon.verify(user.senha, dto.senha);
        if (!pwMatches)
            throw new ForbiddenException('Credentials not valid');
        //return a message



        delete user.senha
        return this.signToken(user.id, user.email);

    }

    async signToken(
        clienteId: string,
        email: string,
    ): Promise<{ access_token: string }> {
        const payload = {
            sub: clienteId,
            email,
        };

        const secret = this.config.get('JWT_SECRET');

        const token = await this.jwt.signAsync(
            payload, {
            expiresIn: '15m',
            secret: secret,
        })



        return {

            access_token: token
        }

    }


    }
```

# Introdução aos DTOs
Nesta seção, exploraremos os DTOs (Data Transfer Objects), um conceito fundamental na arquitetura de software, especialmente em sistemas que envolvem comunicação entre diferentes camadas ou componentes. Os DTOs desempenham um papel crucial na transferência eficiente de dados entre diferentes partes de um sistema, ajudando a garantir a coesão, a modularidade e a clareza do código.

## O que são DTOs?
Os Data Transfer Objects (DTOs) são objetos simples que transportam dados entre diferentes partes de um sistema. Eles servem como estruturas de dados que encapsulam informações específicas e as tornam disponíveis para serem transferidas entre diferentes camadas ou sistemas.

## Por que usar DTOs?
O uso de DTOs oferece várias vantagens em um sistema de software:

- __Encapsulação de dados__: Os DTOs permitem encapsular dados relacionados em uma única estrutura, facilitando a manipulação e o transporte desses dados.

- __Redução da acoplamento__: Ao usar DTOs, é possível reduzir o acoplamento entre diferentes partes do sistema, pois as camadas podem se comunicar apenas por meio de interfaces bem definidas.

- __Aumento da clareza e legibilidade__: DTOs ajudam a aumentar a clareza e a legibilidade do código, pois fornecem uma representação clara e estruturada dos dados transferidos.

## Como usar DTOs?
No contexto deste projeto, os DTOs são utilizados para definir a estrutura dos dados transferidos entre o cliente e o servidor. Eles desempenham um papel fundamental na definição dos contratos de comunicação entre os diferentes componentes do sistema.

Nas seções a seguir, serão apresentados os DTOs específicos utilizados neste projeto, juntamente com suas definições e implementações.

### auth.dto.ts (Exemplo de DTO para autenticação)

```typescript
import { EnderecoDto } from "./endereco.dto";
import { Endereco, Telefone } from "@prisma/client";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { TelefoneDto } from "./telefone.dto";

export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    senha: string;

    @IsString()
    @IsNotEmpty()
    nome?: string;

    @IsString()
    @IsNotEmpty()
    sobrenome?: string;

    @IsString()
    cpf?: string

    @IsOptional()
    fotoPerfil?: string


    @IsNotEmpty()
    isPasseador?: boolean

  
   

   
    @IsNotEmpty()
    enderecos?: EnderecoDto 

    @IsNotEmpty()
    telefones?: TelefoneDto

}
```

### endereco.dto.ts (Exemplo de DTO para endereço)

```typescript

export class EnderecoDto {
        id: string
        uf: string
        cidade: string
        bairro: string
        logradouro: string
        numero: string
        cep: string   
        

    
}
```

### index.ts (Exemplo de DTO para index)

```typescript
export * from './auth.dto';
export * from './endereco.dto';
export * from './telefone.dto';
```


### login.dto.ts (Exemplo de DTO para login)

```typescript
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    senha: string;
}
```

### telefone.dto.ts (Exemplo de DTO para telefone)

```typescript
import { IsEmpty, IsInt, IsString } from "class-validator";

export class TelefoneDto{
    
    id: string;
    
    @IsEmpty()
    @IsString()
    codigo: string;
    
    @IsEmpty()
    @IsString()
    numero: string;

}
```

## Guards

Em nosso projeto, utilizamos Guards para proteger rotas e endpoints específicos, garantindo que apenas usuários autenticados e autorizados possam acessá-los. Os Guards são interceptadores que podem ser usados para adicionar lógica de autorização a rotas específicas.

Veja abaixo um exemplo de Guard JWT que protege rotas autenticadas:

### index.ts (Exemplo de Guard)

```typescript
export * from './jwt.guard';
```

### jwt.guard.ts (Exemplo de Guard JWT)

```typescript
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
```

## Strategy

Em nosso projeto, utilizamos Strategies para autenticar usuários e validar tokens JWT. As Strategies são responsáveis por implementar a lógica de autenticação e validação de tokens, permitindo que os usuários sejam autenticados com base em diferentes métodos.

### index.ts (Exemplo de Strategy)

```typescript	
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
```

### jwt.strategy.ts (Exemplo de Strategy JWT)

```typescript
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/service/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(
  Strategy,
  'jwt',
) {
  constructor(
    config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest:
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get('JWT_SECRET'),
      ignoreExpiration: true,
    });
    
  }
 
  

  async validate(payload: {
    clienteId: string;
    email: string;
  }) {
    const user =
      await this.prisma.cliente.findUnique({
        where: {
            email:payload.email,
        },
      });
    delete user.senha;
    return user;
  }
 
}
```

## Cliente

### cliente.controller.ts

```typescript
import { Body, Controller, Get, Put, UseGuards } from "@nestjs/common";
import { ClienteService } from "./cliente.service";
import { EditClienteDto } from "./dto";
import { GetUser } from "src/decorador";
import { Cliente } from "@prisma/client";
import { JwtGuard } from "src/auth/guard";

@UseGuards(JwtGuard)
@Controller('cliente')
export class ClienteController {
    constructor(private  clienteService: ClienteService) {}

    @Put('edit')
    editUser(
      @GetUser('id') clienteId: string,
      @Body() dto: EditClienteDto,
    ) {
      return this.clienteService.editCliente(clienteId, dto);
    }

    @Get('all')
    getUsers(@GetUser()cliente){

    return  this.clienteService.findAll();
  }

  @Get('me')
    getMe(@GetUser()cliente: Cliente){
        return cliente;
    }
  
 


    
}
```

### cliente.module.ts

```typescript
import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';



@Module({
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class ClienteModule {}
```

### cliente.service.ts

```typescript
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/service/prisma.service";
import { EditClienteDto } from "./dto";


@Injectable()
export class ClienteService {
    constructor(private prisma: PrismaService) { }

    async editCliente(
        clienteId: string,
        dto: EditClienteDto,
    ) {
        const user = await this.prisma.cliente.update({
            where: {
                id: clienteId,
            },
            data: {
                email: dto.email,                
                nome: dto.nome,
                sobrenome: dto.sobrenome,
                cpf: dto.cpf,
                fotoPerfil: dto.fotoPerfil,
                isPasseador: dto.isPasseador,
                enderecos: {
                    create: {

                        logradouro: dto.enderecos.logradouro,
                        numero: dto.enderecos.numero,
                        bairro: dto.enderecos.bairro,
                        cidade: dto.enderecos.cidade,
                        uf: dto.enderecos.uf,
                        cep: dto.enderecos.cep
                    }

                   
                },
                telefones: {
                    create: {
                        codigo: dto.telefones.codigo,
                        numero: dto.telefones.numero
                    }
                }



            },
        });

        delete user.senha;

        return user;
    }
    async findAll() {
        return this.prisma.cliente.findMany({
          select:{
            id:true,
            email:true,
            nome:true,
            sobrenome:true,
          }
        });
      }


}
```

### edit-cliente.dto.ts

```typescript
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { EditEnderecoDto } from "./edit-endereco.dto";
import { EnderecoDto, TelefoneDto } from "src/auth/dto";

export class EditClienteDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    senha: string;

    @IsString()
    @IsNotEmpty()
    nome?: string;

    @IsString()
    @IsNotEmpty()
    sobrenome?: string;

    @IsString()
    cpf?: string

    @IsOptional()
    fotoPerfil?: string


    @IsNotEmpty()
    isPasseador?: boolean

     
    @IsNotEmpty()
    enderecos: EnderecoDto 

    @IsNotEmpty()
    telefones: TelefoneDto

}
```

### edit-endereco.dto.ts

```typescript

export class EditEnderecoDto {

    id: string
    uf: string
    cidade: string
    bairro: string
    logradouro: string
    numero: string
    cep: string

}
```

### index.ts

```typescript
export * from './edit-cliente.dto'
export * from './edit-endereco.dto'
```

## Decorador

### get-user.decorator.ts

```typescript
import {
    createParamDecorator,
    ExecutionContext,
  } from '@nestjs/common';
  
  export const GetUser = createParamDecorator(
    (
      data: string | undefined,
      ctx: ExecutionContext,
    ) => {
      const request: Express.Request = ctx
        .switchToHttp()
        .getRequest();
      if (data) {
        return request.user[data];
      }
      return request.user;
    },
  );
```

### index.ts

```typescript
export * from './get-user.decorador'
```

## Pets

### pet.module.ts

```typescript
import { Module } from '@nestjs/common';
import { PetRepository } from './repositories/PetRepository';
import { PetService } from './services/pet.service';
import { PrismaService } from 'src/prisma/service/prisma.service';
import { PetController } from './controllers/pet.controller';

@Module({ providers: [PetRepository, PetService, PrismaService,], controllers: [PetController] })
export class PetModule { }
```

### pet.controller.ts

```typescript
import { Body, Controller, Post } from "@nestjs/common";
import { PetDto } from "../dtos/pet.dto";
import { PetService } from "../services/pet.service";

@Controller('pet')
export class PetController {

  constructor(private readonly petService: PetService) { }

  @Post()
  async create(@Body() petdto: PetDto): Promise<any> {
    return this.petService.create(petdto);
  }

}
```

### pet.dto.ts

```typescriptexport interface PetDto {
  nome: string;
  idade: number;
  peso: number;
  raca: string;
  especie: string;
  clienteId: string;
  passeadorId: string;
  pedidoId: string;
}
```

### pet.entity.ts

```typescript
import { Pet } from "@prisma/client";

export class PetEntity implements Pet {
  id: string;
  nome: string;
  idade: number;
  peso: number;
  raca: string;
  especie: string;
  clienteId: string;
  passeadorId: string;
  pedidoId: string;
}
```

### pet.repository.ts

```typescript
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/service/prisma.service";
import { PetDto } from "../dtos/pet.dto";
import { PetEntity } from "../entities/pet.entity";


@Injectable()
export class PetRepository {
  constructor(private readonly prisma: PrismaService) { }

  async create(petDto: PetDto): Promise<any> {
    return this.prisma.pet.create({
      data: petDto
    })
  }

  async findOne(id: string) {
    return this.prisma.pet.findFirst({
      where: {
        id
      }
    });
  }
}
```

### pet.service.ts

```typescript
import { Injectable } from "@nestjs/common";
import { PetDto } from "../dtos/pet.dto";
import { PetEntity } from "../entities/pet.entity";
import { PetRepository } from "../repositories/PetRepository";

@Injectable()
export class PetService {
  constructor(private readonly petRepository: PetRepository) { }
  async create(petdto: PetDto): Promise<PetEntity> {
    return this.petRepository.create(petdto);
  }
}
```



---

> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)
