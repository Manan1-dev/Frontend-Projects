export async function getQuote(url, element) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();
        console.log(data);
        element.textContent = `"${data.data.content}" — ${data.data.author}`;
    } catch (error) {
        element.textContent = "Stay positive. Keep moving forward 💪";
        console.error(error);
    }
}


