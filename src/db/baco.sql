CREATE TABLE Clientes(
	[ClientId] [uniqueidentifier] NOT NULL,
	[Nome] [nvarchar](60) NOT NULL,
	[Sobrenome] [nvarchar](120) NOT NULL,
	[CPF] [nvarchar](17) NOT NULL,
	[email] [nvarchar](60) NOT NULL,
	[Senha] [nvarchar](256) NOT NULL,
	[FotoPefil] [nvarchar](500) NOT NULL,
	[UF] [nvarchar](30) NOT NULL,
	[Cidade] [nvarchar](50) NOT NULL,
	[Bairro] [nvarchar](50) NOT NULL,
	[Logradouro] [nvarchar](150) NOT NULL,
	[Numero] [int] NOT NULL,
	[isPasseador] [int] NOT NULL,
 );

CREATE TABLE Telefones(
	[TelefoneId] [uniqueidentifier] NOT NULL,
	[Codigo] [int] NOT NULL,
	[Numero] [nvarchar](max) NOT NULL,
	[ClienteClientId] [uniqueidentifier] NOT NULL,
);

CREATE TABLE Passeios(
	[PasseioId] [uniqueidentifier] NOT NULL,
	[Data] [datetime2](7) NOT NULL,
	[Hora] [datetime2](7) NOT NULL,
	[Observacoes] [nvarchar](max) NOT NULL,
	[ClienteId] [uniqueidentifier] NOT NULL,
	[PasseadorId] [uniqueidentifier] NOT NULL,
	[PedidoId] [uniqueidentifier] NOT NULL,
	[PetId] [uniqueidentifier] NOT NULL,
);

CREATE TABLE Pets(
	[PetId] [uniqueidentifier] NOT NULL,
	[Nome] [nvarchar](max) NOT NULL,
	[Idade] [int] NOT NULL,
	[Peso] [real] NOT NULL,
	[ClienteClientId] [uniqueidentifier] NOT NULL,
);

CREATE TABLE Pedidos(
	[PedidoId] [uniqueidentifier] NOT NULL,
	[PrecoTotal] [decimal](10, 2) NOT NULL,
	[EstagioPedido] [int] NOT NULL,
	[ClienteId] [uniqueidentifier] NOT NULL,
	[PasseadorId] [uniqueidentifier] NOT NULL,
	[AgendamentoId] [uniqueidentifier] NOT NULL,
	[PetId] [uniqueidentifier] NOT NULL,
);

CREATE TABLE Imagens(
	[ImagemId] [uniqueidentifier] NOT NULL,
	[Url] [nvarchar](max) NOT NULL,
	[PetId] [uniqueidentifier] NULL,
);

