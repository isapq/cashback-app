# **Cashback API**

API desenvolvida em Python com FastAPI para calcular cashback baseado no tipo de cliente e valor da compra.  
Cada requisição registra o IP do usuário.

## **Tecnologias (Stack tecnológica)**

| Tecnologia | Descrição                            |
| ---------- | ------------------------------------ |
| Python     | Linguagem principal do projeto       |
| FastAPI    | Framework para criação da API        |
| Uvicorn    | Servidor ASGI para rodar a aplicação |
| PostgreSQL | Banco de dados utilizado             |
| Pydantic   | Validação e tipagem dos dados        |

## **Funcionalidades**

- Cálculo de cashback por tipo de cliente
- Registro de IP do usuário
- API REST simples

### Exemplo de requisição:

**POST** `/cashback`

````json
{
  "type_client": "gold",
  "value_buy": 600
}

Resposta:
```json
{
  "cashback": 60
}

```md id="fix2"
---

## 👨‍💻 Autor

**Isaque Pereira dos Santos**
````
