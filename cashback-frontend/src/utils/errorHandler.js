export function getErrorMessage(err) {
    if (err.response?.data?.detail) {
        return err.response.data.detail;
    }

    if (err.message?.includes("fetch")) {
        return "Erro de conexão com o servidor.";
    }

    if (err.message?.includes("Network")) {
        return "Problema de rede. Verifique sua conexão.";
    }

    return "Erro inesperado. Tente novamente.";
}
