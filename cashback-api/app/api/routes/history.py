from fastapi import APIRouter, Request, HTTPException, status
from sqlmodel import Session, select

from app.database.connection import engine
from app.models.cashback import Cashback
from app.utils.validators import is_valid_ip

router = APIRouter()

@router.get("/history")
def get_history(request: Request):

    forwarded_for = request.headers.get("X-Forwarded-For")
    ip = forwarded_for.split(",")[0].strip() if forwarded_for else (request.client.host if request.client else None)

    if not ip or not is_valid_ip(ip):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="IP inválido"
        )

    try:
        with Session(engine) as session:
            statement = select(Cashback).where(Cashback.ip == ip)
            result = session.exec(statement).all()

            return result
        
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail="Erro ao buscar histórico"
        )
