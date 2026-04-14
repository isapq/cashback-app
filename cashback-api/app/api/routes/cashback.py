from fastapi import APIRouter, Request, HTTPException, status
from sqlmodel import Session

from app.database.connection import engine
from app.models.cashback import Cashback
from app.services.cashback_service import calculate_cashback

router = APIRouter()

@router.post("/cashback")
def criar_cashback(data: dict, request: Request):

    type_client = data.get("type_client")
    value = data.get("value_purchase")

    if type_client is None or value is None:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Campos obrigatórios não informados"
        )

    if type_client not in ("normal", "vip"):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Tipo de cliente inválido"
        )
    
    if not isinstance(value, (int, float)) or value <= 0:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Valor da compra inválido ou menor/igual a zero"
        )

    cashback = calculate_cashback(type_client, value)

    forwarded_for = request.headers.get("X-Forwarded-For")
    ip = forwarded_for.split(",")[0].strip() if forwarded_for else (request.client.host if request.client else "unknown")

    registration = Cashback(
        type_client=type_client,
        value_purchase=value,
        cashback=cashback,
        ip=ip
    )

    try:
        with Session(engine) as session:
            session.add(registration)
            session.commit()

    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Erro ao salvar no banco"
        )

    return {
        "type_client": type_client,
        "value_purchase": value,
        "cashback": cashback,
    }
