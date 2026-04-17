export async function buscarDadosClima(cidade) {
   
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${cidade}&count=1&language=pt&format=json`;

    const respostaGeo = await fetch(geoUrl);
    const dadosGeo = await respostaGeo.json();

    if (!dadosGeo.results) {
        throw new Error("Cidade não encontrada");
    }

    const { latitude, longitude, name } = dadosGeo.results[0];

    const climaUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    const respostaClima = await fetch(climaUrl);
    const dadosClima = await respostaClima.json();

    return {
        nome: name,
        temp: dadosClima.current_weather.temperature
    };
}