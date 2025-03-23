const baseURL = process.env.NEXT_PUBLIC_API_URL;

export async function httpGet(url: string) {
    // Garante que a URL seja normalizada antes de fazer a requisição
    const normalizedUrl = normalize(`${baseURL}/${url}`);
    console.log(normalizedUrl);

    try {
        const response = await fetch(normalizedUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

function normalize(url: string): string {
    if (!url) {
        throw new Error("Invalid URL provided");
    }

    // Substitui múltiplas barras consecutivas por uma única barra usando replace
    return url.replace(/([^:]\/)\/+/g, "$1");
}
