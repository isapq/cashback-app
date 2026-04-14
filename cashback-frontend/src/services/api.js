const API_URL = import.meta.env.VITE_API_URL;

// Calcular cashback
export async function calculateCashback(data) {
    try {
        const response = await fetch(`${API_URL}/cashback`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
            throw { response: { data: result } };
        }

        return result;

    } catch (error) {
        console.error("Erro na API:", error);
        throw error;
    }
}

// Histórico
export async function getHistory() {
    try {
        const response = await fetch(`${API_URL}/history`);

        if (!response.ok) {
            throw new Error("Erro ao buscar histórico");
        }

        return await response.json();

    } catch (error) {
        console.error("Erro na API:", error);
        throw error;
    }
}
