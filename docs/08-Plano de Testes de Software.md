
# Plano de Testes de Software
###### Os testes funcionais a serem realizados no portal serão descritos a seguir:

##### Quadro – Casos de Testes


|  CASO DE TESTE |    CT-01 – Acesso a página de cadastro    |
|     :---:             |     :---:                                              |
| Requisito Associado | RF-01 Permitir ao usuário (Tutor e passeador) cadastrar uma conta.  |
|    Objetivo do Teste  | Assegurar que a funcionalidade de cadastro de conta permita aos usuários (Tutor e Passeador) criar uma conta de forma eficaz e conforme especificado no requisito.
|    Passos do Teste    | 1- Acesso à Página de Cadastro.<br> 2- Acesse a página inicial da aplicação ou tela de login.<br> 3-Início do Processo de Cadastro.<br> 4- Localize e clique na opção para cadastrar uma nova conta. <br>5 -Seleção do Tipo de Conta: Verifique se é possível selecionar entre as opções de conta para Tutor e Passeador.<br> 6- Selecione o tipo de conta desejado.<br> 7- Preenchimento dos Campos Obrigatórios:<br> -Preencha todos os campos obrigatórios do formulário de cadastro, incluindo nome, e-mail, senha, e quaisquer outros campos necessários. <br>8- Verifique se os campos específicos para cada tipo de conta são apresentados de acordo com o tipo selecionado. <br>9- Validação dos Dados: Tente submeter o formulário com dados válidos em todos os campos. Tente submeter o formulário com dados inválidos em um ou mais campos (por exemplo, e-mail inválido, senha fraca). <br>10- Verifique se mensagens de erro apropriadas são exibidas para campos preenchidos incorretamente.<br> 11- Confirmação do Cadastro: Após preencher todos os campos corretamente, clique na opção para confirmar o cadastro. <br>12- Verificação de Confirmação por E-mail (Opcional):Caso a aplicação exija confirmação por e-mail, verifique se um e-mail de confirmação é enviado para o endereço fornecido durante o cadastro.<br> 13-Confirme se o e-mail contém as instruções necessárias para confirmar o cadastro.     |
|    Critérios de Êxito |-Todos os campos obrigatórios do formulário de cadastro estão claramente identificados e funcionando corretamente. <br> - A aplicação valida os dados inseridos de forma adequada, fornecendo mensagens de erro claras para dados inválidos ou ausentes.<br>- Após o preenchimento correto do formulário e confirmação, a conta é criada com sucesso no sistema.<br>- Se houver confirmação por e-mail, o e-mail de confirmação é enviado e contém as instruções necessárias para confirmar o cadastro.      |



|  CASO DE TESTE |    CT-02 – Login Usuário    |
|     :---:             |     :---:                                              |
| Requisito Associado |RF-02 Permitir ao usuário (Tutor e passeador) fazer o login de sua conta.
|    Objetivo do Teste  | Garantir que os usuários (Tutor e Passeador) possam fazer login em suas contas de forma eficaz e conforme especificado no requisito.  |
|    Passos do Teste    |  1- Acesso à Página de Login: <br>- Acesse a página inicial da aplicação. <br>2- Localização da Opção de Login:<br>- Identifique e clique na opção de login, geralmente localizada na página inicial ou em um menu de navegação.<br> 3- Seleção do Tipo de Conta:<br>- Verifique se é possível selecionar o tipo de conta para Tutor ou Passeador.<br>- Selecione o tipo de conta correspondente à conta a ser acessada.<br> 4-Preenchimento dos Campos de Login:<br>- Insira o endereço de e-mail ou nome de usuário e a senha associada à conta.<br> 4-Confirme se os campos de login estão claramente identificados. <br>5 -Validação dos Dados:<br>- Tente submeter o formulário com dados válidos de login.<br> 6- Tente submeter o formulário com dados inválidos (por exemplo, senha incorreta, e-mail não registrado).<br> 7 -Verifique se mensagens de erro adequadas são exibidas para credenciais de login inválidas.<br> 8- Acesso à Conta Após Login Bem-sucedido: <br>- Após inserir credenciais válidas e submeter o formulário, confirme se o acesso à conta é concedido com sucesso.<br> 9- Verifique se a página é redirecionada para a área de perfil do usuário ou para a página inicial da aplicação, conforme esperado.  |
|    Critérios de Êxito |- Os campos de login estão claramente identificados e funcionam corretamente. <br>- A aplicação valida as credenciais de login inseridas, exibindo mensagens de erro claras para credenciais inválidas.<br>- Após o login bem-sucedido, o usuário é redirecionado para a área de perfil correspondente (Tutor ou Passeador) ou para a página inicial da aplicação.<br>- O processo de login é rápido e eficiente, proporcionando uma experiência de usuário positiva    |



|  CASO DE TESTE |    CT-03 – Pesquisa dos Passeadores   |
|     :---:             |     :---:                                              |
| Requisito Associado | RF-04 Permitir ao Tutor ter acesso às informações do Passeador. |
| Objetivo do Teste | Assegurar que os Tutores tenham acesso às informações relevantes do Passeador conforme especificado no requisito.|  
| Passos do Teste |  1- Login na Conta de Tutor: <br> -Acesse a aplicação como um Tutor registrado.<br>2-Localização das Informações do Passeador: <br>- Navegue para a seção ou página designada para visualização das informações do Passeador. <br> 3-Busca pelo Passeador:<br> - Utilize a função de busca para encontrar o Passeador desejado, se aplicável. <br> 4- Caso não haja uma função de busca, localize o <br> -Passeador na lista disponível.<br>  5- Visualização das Informações do Passeador:<br> - Verifique se as informações do Passeador estão claramente apresentadas, incluindo nome, foto, descrição, avaliações de outros Tutores, experiência com animais, entre outras informações relevantes. <br> 6 - Acesso Detalhado: <br> -Se houver opção para ver mais detalhes sobre o Passeador, clique nessa opção para acessar informações adicionais, como horários disponíveis, áreas de atuação, certificações, entre outros. <br>  6- Verificação de Acesso Restrito: <br> -Confirme se as informações sensíveis do Passeador, como informações de contato pessoal, são protegidas e não estão visíveis para o Tutor, a menos que expressamente autorizado pelo Passeador ou pela aplicação.|
| Critérios de Êxito | -As informações do Passeador estão facilmente acessíveis para os Tutores, conforme especificado.<br> -Todas as informações relevantes do Passeador são apresentadas de forma clara e organizada. <br> -O acesso às informações do Passeador é restrito apenas ao que é permitido pelo sistema, garantindo a privacidade e segurança das informações sensíveis.|



|  CASO DE TESTE |    CT-04 – Agendamentos  |
|     :---:             |     :---:                                              |
| Requisito Associado | RF-08 A aplicação deve permitir ao Tutor fazer agendamentos. |
| Objetivo do Teste  | Garantir que a funcionalidade de agendamento esteja disponível para os Tutores, permitindo que eles marquem passeios para seus animais de estimação de forma eficaz.   |
|    Passos do Teste | 1- Acesse a função de criação de perfil de usuário no sistema.<br> 2- Preencha os campos obrigatórios com informações válidas do usuário e do veículo associado.<br> 3- Garanta que o e-mail fornecido seja válido e único. 4- Submeta o formulário para criar o perfil.<br> 5- Validação de Associação:<br> - Após o cadastro, faça login no sistema usando o e-mail e a senha cadastrados.<br> 6-Verifique se o perfil recém-criado está associado corretamente ao veículo correspondente.<br> 7- Verificação de E-mail Único:<br> -Tente cadastrar um novo perfil com um e-mail que já está em uso por outro perfil. <br> -Certifique-se de que o sistema exiba uma mensagem de erro indicando que o e-mail já está em uso e instrua o usuário a escolher um e-mail diferente.   |
| Critérios de Êxito |- O sistema permite que o usuário crie um perfil inserindo informações válidas sobre si mesmo e o veículo associado.<br> -O e-mail fornecido durante o cadastro é único e válido.<br> -Após o cadastro, o usuário pode fazer login usando o e-mail e a senha cadastrados.<br> -O perfil criado está corretamente associado ao veículo correspondente.<br> -O sistema valida a unicidade do e-mail, impedindo que um e-mail já registrado seja usado para criar outro perfil. |



| CASO DE TESTE |    CT-05 – Ordem de solicitações  |
|     :---:             |     :---:                                              |
| Requisito Associado | RF-13 A aplicação deverá permitir que as solicitações sejam ordenadas por ordem de chegada. |
| Objetivo do Teste  | Verificar se os agendamentos estão sendo feitos seguindo a ordem de chegada.   |
| Passos do Teste | 1-Inserção de Solicitações:<br>- Adicione várias solicitações à aplicação em momentos diferentes, garantindo que cada solicitação tenha uma data e hora de chegada claramente registrada.<br>2- Acesso à Lista de Solicitações:<br>- Navegue até a lista de solicitações na interface da aplicação.<br> -Verificação da Ordem de Chegada:<br>- Verifique se as solicitações estão listadas na  ordem em que foram recebidas, com a mais antiga no topo e a mais recente na parte inferior.<br>3- Inserção de Nova Solicitação<br>- Adicione uma nova solicitação à aplicação após as existentes.<br> 4-Verifique se a nova solicitação é exibida no topo da lista, indicando que está na frente das outras solicitações em termos de ordem de chegada.<br> 5-Alteração de Data e Hora de Chegada:<br>- Edite a data e a hora de chegada de uma solicitação existente para uma data e hora anterior.<br>- Confirme se a solicitação editada é movida para o topo da lista, refletindo sua nova ordem de chegada.  |
| Critérios de Êxito | - As solicitações são listadas na ordem em que foram recebidas, com a mais antiga no topo e a mais recente na parte inferior.<br>- Quando uma nova solicitação é inserida, ela aparece no topo da lista, indicando que é a mais recente.<br>- Ao editar a data e a hora de chegada de uma solicitação existente para uma data e hora anterior, a solicitação é movida para o topo da lista, refletindo sua nova ordem de chegada |



|  CASO DE TESTE |    CT-06 – Aceitar Passeio   |
|     :---:             |     :---:                                              |
| Requisito Associado | RF-03 A aplicação deve permitir ao Passeador aceitar ou negar agendamento |
|    Objetivo do Teste  | Verificar se a aplicação permite ao Passeador aceitar ou negar agendamentos de forma eficaz e conforme especificado no requisito.  |
|    Passos do Teste    | 1. Acesso ao Sistema. 2. Acesse a aplicação como um Passeador registrado. 3. Visualização de Agendamentos Pendentes.4. Verifique se há uma seção clara na interface do Passeador que exibe os agendamentos pendentes, destacando aqueles que aguardam ação (aceitar ou negar). 5.  Aceitação de Agendamentos. 6.  Selecione um agendamento pendente. 7. Verifique se há uma opção clara para aceitar o agendamento. 8. Clique na opção de aceitar. 9. Confirme se o agendamento é confirmado no sistema e refletido no calendário do Passeador. |
|    Critérios de Êxito | Após aceitar ou negar um agendamento, as alterações devem ser refletidas imediatamente no sistema, incluindo no calendário do Passeador e no registro de agendamentos do cliente. |



  CASO DE TESTE |    CT-07 – Negar Passeio   |
|     :---:             |     :---:                                              |
| Requisito Associado | RF-03 A aplicação deve permitir ao Passeador aceitar ou negar agendamento |
|    Objetivo do Teste  | Verificar se a aplicação permite ao Passeador aceitar ou negar agendamentos de forma eficaz e conforme especificado no requisito.  |
|    Passos do Teste |  1.  Verifique se há uma opção clara para negar o agendamento. 2. Clique na opção de negar. 3. Confirme se o sistema registra o agendamento como negado e, se aplicável, fornece uma opção para adicionar uma nota explicativa. 4. Feedback e Comunicação. 5. Verifique se existe uma opção para enviar feedback ou comunicar-se com o cliente em caso de negação de agendamento. 6.Confirme se o sistema registra o feedback ou comunicação realizada.   |
|    Critérios de Êxito | Após aceitar ou negar um agendamento, as alterações devem ser refletidas imediatamente no sistema, incluindo no calendário do Passeador e no registro de agendamentos do cliente. |


###### Fonte: Desenvolvedores do Projeto.
