
# Justificativa das escolhas das Ferramentas Utilizadas.

Para o desenvolvimento da API, foi utilizado o framework NestJS, pelo fato de ser um framework rico de módulos e extensões que podem ser facilmente integrados aos projetos para adicionar funcionalidades extras, como autenticação, autorização, envio de emails, etc...
NestJS é um framework arquitetura modular e orientada a serviços, o que ajuda a manter o código organizado, fácil de escalar.

Para a integração com o banco de dados Mongodb, foi utilizado o ORM(Object-Relational Mapping) Prisma, pelo fato de facilitar a coneção e manipulação de instruções enviadas ao banco de dados.  

# Programação de Funcionalidades

### Cadastro de Usuário

Criar um novo usuário no sistema.
Deve ser enviado no corpo da requisição: Email, senha, nome, sobrenome e cpf
<table>
    <tr>
       <th>rota</th>
       <th>POST</th>
       <th>
       <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/auth/auth.service.ts">Link do Código Fonte</a></th>       
    </tr>
    <tr>
    <td width="300" >http://localhost:3000/auth/create</td>
     <td width="300" >
        Exemplo: {            
        "email": "mail@gmail.com",
        "senha": "123456",
        "nome": "nomeusuario",
        "sobrenome": "sobrenomesuario",
        "cpf": "123456789"
    }
</td>
<td width="300" >
<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/auth/auth.service.ts">Método create</a>
</td>

</tr>

</table>


### Login
Deve ser enviado no corpo da requisição: Email e senha
<table>
    <tr>
       <th>rota</th>
       <th>POST</th>
       <th>
       <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/auth/auth.service.ts">Link do Código Fonte</a></th>       
    </tr>
    <tr>
    <td width="300" >http://localhost:3000/auth/login</td>
     <td width="300" >
        Exemplo: {            
        "email": "mail@gmail.com",
        "senha": "123456",
    }
</td>
<td width="300" >
<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/auth/auth.service.ts">Metodo signin</a>
</td>

</tr>

</table>

### Obter dados do cliente
<table>
    <tr>
       <th>rota</th>
       <th>GET</th>
       <th>
       <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/cliente/cliente.controller.ts">Link do Código Fonte</a></th>       
    </tr>
    <tr>
    <td width="300" >http://localhost:3000/cliente/me</td>
     <td width="300" >
        Authorization Token 
</td>
<td width="300" >
<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/cliente/cliente.controller.ts">Metodo getMe</a>
</td>

</tr>

</table>

### Pesquisar por clientes que disponibilizam seus serviços - "passeadoes"
Deve ser enviado o estado e o termo de busca(term) obrigatoriamente. Os parametros limit e offset são usados para paginação, e são opcionais.   
<table>
    <tr>
       <th>rota</th>
       <th>GET</th>
       <th>
       <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/cliente/cliente.service.ts">Link do Código Fonte</a></th>       
    </tr>
    <tr>
    <td width="300" >http://localhost:3000/cliente/search?term=hori&estado=MG&limit=10&offset=0</td>
     <td width="300" >
       Exemplo: http://localhost:3000/cliente/search?term=horizonte&estado=MG&limit=10&offset=0
</td>
<td width="300" >
<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/cliente/cliente.service.ts">Metodo search</a>
</td>

</tr>

</table>

### Cadastrar Pet
Deve ser enviado no corpo da requisição: nome, idade, peso, raça, especie e o id do cliente, ao qual o pet pertence. 
<table>
    <tr>
       <th>rota</th>
       <th>POST</th>
       <th>
       <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/pet/services/pet.service.ts">Link do Código Fonte</a></th>       
    </tr>
    <tr>
    <td width="300" >http://localhost:3000/pet</td>
     <td width="300" >
        {
         "nome": "nomepet",
         "idade": 2,
         "peso": 5,
         "raca": "raça",
         "especie": "especie",
        "clienteId": "5f99f601-6cd0-4a61-a111-acdb26cbbf70"
}
</td>
<td width="300" >
<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/pet/services/pet.service.ts">Metodo create</a>
</td>

</tr>

</table>

### Cadastrar Endereço do cliente
Deve ser enviado no corpo da requisição: UF, cidade, bairro, logradouro, número e o id do cliente ao qual o endereço pertence.
<table>
    <tr>
       <th>rota</th>
       <th>POST</th>
       <th>
       <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/endereco/endereco.service.ts">Link do Código Fonte</a></th>       
    </tr>
    <tr>
    <td width="300" >http://localhost:3000/endereco</td>
     <td width="300" >
        {
        "uf": "MG",
        "cidade": "cidade cliente",
        "bairro": "bairro cliente",
        "logradouro": "Rua cliente",
        "numero": "456",
        "cep": "33200-124",
        "clienteId": "a6e439b8-a372-4fbd-933d-5b439e7b00be"
}
</td>
<td width="300" >
<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/endereco/endereco.service.ts">Metodo create</a>
</td>

</tr>

</table>

### Cliente("Passeador") adiciona datas e horarios disponiveis para requerimento do serviço.
<table>
    <tr>
       <th>rota</th>
       <th>POST</th>
       <th>
       <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/agenda-passeador/agenda-passeador.service.ts">Link do Código Fonte</a></th>       
    </tr>
    <tr>
    <td width="300" >http://localhost:3000/agenda-passeador</td>
     <td width="300" >
      Exemplo:  {
        "data": "12/05/2024",
        "hora": "08h00",
        "passeadorId": "7c0affdd-c1a5-40ba-8cf6-24246ba70803"    
    }
</td>
<td width="300" >
<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/agenda-passeador/agenda-passeador.service.ts">Metodo create</a>
</td>

</tr>

</table>

### Obter todos as datas e horários disponiveis de um passeador.

É necessario enviar o id do passeador como parametro na URL.

<table>
    <tr>
       <th>rota</th>
       <th>GET</th>
       <th>
       <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/agenda-passeador/agenda-passeador.service.ts">Link do Código Fonte</a>
       </th>       
    </tr>
    <tr>
    <td width="300" >http://localhost:3000/agenda-passeador/agenda/{:passeadorId}</td>
     <td width="300" >
    
</td>
<td width="300" >
<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/agenda-passeador/agenda-passeador.service.ts">Metodo getAll</a>
</td>

</tr>

</table>


### Obter um dia e horário disponivel de um passeador.
<table>
    <tr>
       <th>rota</th>
       <th>GET</th>
       <th>
       <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/agenda-passeador/agenda-passeador.service.ts">Link do Código Fonte</a></th>       
    </tr>
    <tr>
    <td width="300" >http://localhost:3000/agenda-passeador/{:id}</td>
     <td width="300" >Exemplo: http://localhost:3000/agenda-passeador/6ee6fe61-b954-4098-82af-3b8f962ce544
    
</td>
<td width="300" >
<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/agenda-passeador/agenda-passeador.service.ts">Metodo getOne</a>
</td>

</tr>

</table>


### Pedido de serviço de um cliente a um "passeador"
Serão geradas as tabelas passeio e pedido-pet, caso não existam no banco de dados mongodb. Ao criar um pedido, cada pet selecionado pelo cliente será relacionado ao pedido.  

<table>
    <tr>
       <th>rota</th>
       <th>POST</th>
       <th>
       <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/pedido/pedido.service.ts">Link do Código Fonte</a></th>       
    </tr>
    <tr>
    <td width="300" >http://localhost:3000/pedido</td>
     <td width="300" >
      Exemplo: {        
        "precoTotal": 80.00,
        "agendaPasseadorId": "388babfe-719d-4032-b284-a60c0e5f3d3f",
        "clienteId": "4882e1bf-73a5-4b53-bf04-a225077145f8",
        "passeadorId": "4882e1bf-73a5-4b53-bf04-a225077145f8",
        "pets": ["3440d851-d41b-4dbe-ae39-04f8bacd2b6f", "72110495-936a-4fb6-bd60-26bbbc2a2b32"]
        }
</td>
<td width="300" >
<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/pedido/pedido.service.ts">Metodo create</a>
</td>

</tr>

</table>

### Concluir Passeio
Ao concluir um serviço("passeio"), o campo realizado, no documento referente ao serviço, deverá ser alterado para true.
O id do documento referente ao passeio deverá ser enviado no corpo da requisição. 
<table>
    <tr>
       <th>rota</th>
       <th>POST</th>
       <th>
       <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/passeio/passeio.service.ts">Link do Código Fonte</a></th>       
    </tr>
    <tr>
    <td width="300" >http://localhost:3000/passeio/finish</td>
     <td width="300" >
     Exemplo: {
        "id": "89a3ff21-16e1-4291-845b-8900ebd4c4b5"
    }
</td>
<td width="300" >
<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/passeio/passeio.service.ts">Metodo finishPasseio</a>
</td>

</tr>

</table>

### Enviar Email
Um email será enviado ao cliente ao efetuar cadastro no sistema, agradecendo pelo cadastro. 
Um email será enviado ao cliente/passeador quando seus serviços forem solicitados.
<table>
    <tr>
       <th>rota</th>
       <th>
       <a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/email/email.service.ts">Link do Código Fonte</a></th>       
    </tr>
    <tr>
    <td width="300" >nenhuma</td>
    
<td width="300" >
<a href="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/blob/main/src/dogs-friends/src/email/email.service.ts">metodo sendEmail</a>
</td>

</tr>

</table>