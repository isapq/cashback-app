# Frontend - Sistema de Cashback

Interface web desenvolvida para consumo da API de cashback, permitindo o cadastro de compras e visualização do histórico por IP.

## Tecnologias utilizadas

- React
- JavaScript (ES6+)
- CSS3
- Fetch API

## Funcionalidades

### Nova compra

- Seleção do tipo de cliente (Normal ou VIP)
- Inserção do valor da compra
- Cálculo automático do cashback
- Validação de campos obrigatórios
- Exibição de mensagens de erro tratadas

### Histórico

- Listagem de compras realizadas por IP
- Exibição de:
  - Tipo de cliente
  - Valor da compra
  - Cashback obtido

- Cálculo automático de:
  - Total de compras
  - Valor total gasto
  - Total de cashback acumulado

## Tratamento de erros

O sistema possui tratamento de erros tanto para:

- Erros da API (ex: validações do backend)
- Erros de conexão (ex: servidor offline)

As mensagens são padronizadas e exibidas de forma amigável ao usuário.

## Estados da aplicação

- **Loading:** exibição de "Carregando..." durante requisições
- **Erro:** mensagens amigáveis ao usuário
- **Sucesso:** exibição dos dados ou resultado do cashback

## Estrutura do projeto

```
src/
 ├── pages/
 │    ├── New_purchase.jsx
 │    └── History.jsx
 │
 ├── components/
 │    └── top_menu.jsx
 │
 ├── services/
 │    └── api.js
 │
 ├── utils/
 │    └── errorHandler.js
 │
 ├── styles/
 │
 ├── App.jsx
 └── main.jsx
```

## Boas práticas aplicadas

- Separação de responsabilidades (services, utils, components)
- Tratamento centralizado de erros
- Controle de estado com hooks (`useState`, `useEffect`)
- Renderização condicional (loading, erro, sucesso)
- Código reutilizável e organizado

---

## Autor

Desenvolvido por **Isaque Pereira dos Santos**
