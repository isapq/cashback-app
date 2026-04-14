import "../styles/history.css";
import { useState, useEffect } from "react";
import { getHistory } from "../services/api";
import { getErrorMessage } from "../utils/errorHandler";

function History() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);

                const response = await getHistory();
                setData(response);
                setError(null);

            } catch (err) {
                console.log(err);

                const message = getErrorMessage(err);
                setError(message);

            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

  return (
    <section className="history">
      
      <h1 className="history__title">
        Histórico
      </h1>

      {loading && <p className="history__loading">Carregando...</p>}

      {error && (
        <div className="history__divError">
            <p className="history__error">{error}</p>
        </div>
      )}

        {data.length > 0 && (
            <ul className="history__list">

                <h3>IP: {data[0]?.ip}</h3>

                {data.map((item, index) => (
                    <li className="history__item" key={index}>

                        <div className="history__field">
                            <span className="history__label">Tipo de cliente: </span>
                            <span className="history__value">{item.type_client}</span>
                        </div>

                        <div className="history__field">
                            <span className="history__label">Valor da compra: </span>
                            <span className="history__valuePurchase">R$ {item.value_purchase.toFixed(2)}</span>
                        </div>

                        <div className="history__field">
                            <span className="history__label">Cashback obtido: </span>
                            <span className="history__valueCashback">R$ {item.cashback.toFixed(2)}</span>
                        </div>

                    </li>
                ))}

                <div className="history__total">
                    <h6 className="history__totalPurchases">
                        Total de compras: {data.length}
                    </h6>
                    <h6 className="history__totalPurchase">
                        Valor total de compras: R$ {data.reduce((acc, item) => acc + item.value_purchase, 0).toFixed(2)}
                    </h6>
                    <h6 className="history__totalCashback">
                        Valor total de cashback: R$ {data.reduce((acc, item) => acc + item.cashback, 0).toFixed(2)}
                    </h6>
                </div>
            </ul>
        )}

    </section>
  );
}

export default History;