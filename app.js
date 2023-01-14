
const result = document.querySelector(".result");
window.addEventListener("click", async () => {
    const res = await fetch("cars.json");
    const data = await res.json();
    console.log(data);

    let output = "";
    data.map(car => {

        output += `<div class="car">
        <h2>Márka: ${car.Márka}</h2>
        <h3>Típus: ${car.Típus}</h3>
        <h3>Évjárat: ${car.Évjárat}</h3>
        
                </div>
        `;
    })
result.innerHTML = output;

})
