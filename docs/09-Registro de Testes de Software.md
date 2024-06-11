# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>



| **Caso de Teste** 	| **CT-01 – Acesso a página de cadastro** 	|
|:---:	|:---:	|
|	Requisito Associado 	|  RF-01 Permitir ao usuário (Tutor e passeador) cadastrar uma conta. | 
|Registro de evidência   |  [<img width="193" alt="1 0 Tela inicial do aplicativo" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/assets/81536287/b61d53cf-1d6b-42f6-ba58-200d44ff1b8f">](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/issues/67#issue-2345071539)" 



| **Caso de Teste** 	| **CT-02 – Login Usuário** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-02 Permitir ao usuário (Tutor e passeador) fazer o login de sua conta. |
|Registro de evidência | <img width="191" alt="1 2 tela de login" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/assets/81536287/d58309d8-1b96-4e08-a745-2f3f7425be87">

| **Caso de Teste** 	| **CT-03 – Pesquisa dos Passeadores** 	|
|:---:	|:---:	|
|	Requisito Associado 	|RF-04 Permitir ao Tutor ter acesso às informações do Passeador. |
|Registro de evidência | <img width="205" alt="3 1 lista de alguns passeadores, lista de pets cadastrados e passeadores favoritos" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/assets/81536287/0d983c13-1251-48f6-b1c3-07004afc7630">


| **Caso de Teste** 	| **CT-04 – Agendamentos** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-08 A aplicação deve permitir ao Tutor fazer agendamentos. |
|Registro de evidência | <img width="182" alt="8 3 ´Pedido feito com sucesso´" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/assets/81536287/f89a09a7-6488-4571-953a-3f13a08789e8">


| **Caso de Teste** 	| **CT-05 – Ordem de solicitações** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-13 A aplicação deverá permitir que as solicitações sejam ordenadas por ordem de chegada. |
|Registro de evidência | <img width="187" alt="7 0 lista de pedidos" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/assets/81536287/7cd3d083-713f-40f9-af4d-bf7d148ddeba">

| **Caso de Teste** 	| **CT-06 – Aceitar Passeio** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-03 A aplicação deve permitir ao Passeador aceitar ou negar agendamento |
|Registro de evidência |  <img width="194" alt="8 1 Responder Solicitação" src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e4-proj-infra-t1-pmv-ads-2024-1-e4-projdogsfriends/assets/81536287/9ef71e45-4b6d-4536-afa6-f87aa695826c">




## Avaliação



O teste de exibição da página inicial (CT-01) foi bem-sucedido, permitindo o acesso ao login e possibilitando que o usuário (tutor e passeador) cadastre uma conta. Da mesma forma, o teste de pesquisa de passeadores (CT-02), que permite ao usuário (tutor e passeador) fazer o login de sua conta, exibindo as informações de login na mesma página e permitindo a aplicação de filtros, foi realizado com sucesso. Pesquisa dos Passeadores (CT-03) foi realizada com êxito, apresentando as informações dos passeadores disponíveis. O teste de permitir ao tutor ter acesso às informações do passeador (CT-04) também foi bem-sucedido. Além disso, a aplicação foi capaz de permitir que as solicitações fossem ordenadas por ordem de chegada (CT-05), demonstrando eficiência nesse aspecto. Quanto ao armazenamento das informações (CT-06), a aplicação foi capaz de permitir que o passeador aceitasse ou negasse agendamentos, além de armazenar essas informações no banco de dados MSSQL. Por fim, o teste de cadastro de passeadores também foi bem-sucedido, demonstrando acesso à página inicial e armazenamento adequado do cadastro para validação pelo administrador da aplicação.
