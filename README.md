# Cash->back App

Aplicação full stack que calcula cashback com base no tipo de cliente e valor da compra.  
O sistema também registra todas as consultas por IP e exibe um histórico exclusivo para cada usuário.

---

## Funcionalidades

- Cálculo de cashback por tipo de cliente
- Registro de consultas por IP
- Histórico de operações por usuário (IP)
- API em Python para cálculo
- Frontend estático consumindo API

---

## Arquitetura do Projeto

```bash
cashback/
├── backend/        # API Python (cálculo + banco de dados)
├── frontend/       # Interface web (JavaScript/React)
└── README.md
```

---

## Como rodar o Backend

### 1. Acesse a pasta do backend

```bash
cd backend
```

### 2. Crie um ambiente virtual

```bash
python -m venv venv
```

### 2. Crie um ambiente virtual

```bash
python -m venv venv
```

Ative o ambiente:
**_Windows_**: venv\Scripts\activate -
**_Git Bash_**: source venv/Scripts/activate

### 3. Instale as dependências

```bash
pip install fastapi uvicorn sqlmodel python-dotenv psycopg2-binary
```

### 4. Configure o arquivo .env

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/seubanco
```

### 5. Execute o servidor

```bash
python -m uvicorn app.main:app --reload
```

## Como rodar o Frontend

OBS - deve ser realizada a configuração de variáveis de ambiente (.env) antes.

### 1. Acesse a pasta do frontend

```bash
cd frontend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o projeto

```bash
npm run dev
```

## Autor

Projeto desenvolvido por **_Isaque Pereira dos Santos_**.
