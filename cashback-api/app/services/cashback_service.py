def calculate_cashback(type_client: str, value: float):
    if type_client == "premium":
        return value * 0.10
    elif type_client == "vip":
        return value * 0.15
    else:
        return value * 0.05
