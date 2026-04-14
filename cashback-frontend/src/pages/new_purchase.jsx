import "../styles/new_purchase.css";
import { useState } from "react";
import { calculateCashback } from "../services/api";

function New_purchase() {
    const [value, setValue] = useState("");
    const [typeClient, setTypeClient] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!typeClient) {
            setError("Selecione o tipo de cliente");
            return;
        }

        try {
            setIsLoading(true)
    
            const response = await calculateCashback({
                type_client: typeClient,
                value_purchase: Number(value),
            });

            setResult(response.cashback);
            setError(null);

            setValue("");
            setTypeClient("normal");
        } catch (err) {
            console.log(err)

            const message =
                err.response?.data?.detail ||
                "Erro ao calcular cashback. Tente novamente."
    
            setError(message);
            setResult(null);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form className="new-purchase" onSubmit={handleSubmit}>
            <h1 className="new-purchase__title">
                Nova compra
            </h1>

            <h3 className="new-purchase__caption">Tipo de cliente</h3>
            <select
                className="new-purchase__select"
                value={typeClient}
                onChange={(e) => setTypeClient(e.target.value)}
            >
                <option value="">Selecionar</option>
                <option value="normal">Normal</option>
                <option value="vip">VIP</option>
            </select>
            
            <h3 className="new-purchase__caption">Valor da compra</h3>
            <div className="new-purchase__input-group">
                <span className="new-purchase__prefix">R$</span>

                <input
                    className="new-purchase__input"
                    type="number"
                    placeholder="0,00"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>

            <button className="new-purchase__button" type="submit">
                Calcular
            </button>

            {isLoading ? (
                <p className="new-purchase__result">
                    Carregando...
                </p>
            ) : error ? (
                <div className="new-purchase__divError">
                    <p className="new-purchase__error">
                        {error}
                    </p>
                </div>
            ) : result !== null ? (
                <div className="new-purchase__divResult">
                    <p className="new-purchase__result">
                        Cashback: R$ {result.toFixed(2)}
                    </p>
                </div>
            ) : null}
        </form>
    );
}

export default New_purchase;
