document.getElementById("fetch-nz").addEventListener("click", () => {
    fetchCountryData("New Zealand");
});

document.getElementById("country-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const countryName = document.getElementById("country-input").value;
    fetchCountryData(countryName);
});

async function fetchCountryData(country) {
    const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status}`);
        }
        const data = await response.json();
        
        // Display the country's name and capital
        const countryInfo = document.getElementById("country-info");
        countryInfo.innerHTML = `
            <h3>${data[0].name.common}</h3>
            <p>Capital: ${data[0].capital[0]}</p>
        `;
    } catch (error) {
        console.error(error);
        alert("Failed to fetch country data. Please try again.");
    }
}
