from sqlmodel import SQLModel, Field
from typing import Optional

class Cashback(SQLModel, table=True):
    __tablename__ = "cashbacks"

    id: Optional[int] = Field(default=None, primary_key=True)

    type_client: str
    value_purchase: float
    cashback: float

    ip: str
