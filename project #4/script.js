const apiUrlBase ="https://api.adviceslip.com/advice"

let btn = document.querySelector("button");

let advice;

btn.addEventListener('click', () => {
    let advice = document.getElementById("form");
    advice = data.slips[0].advice;
})

document.addEventListener('DOMContentLoaded', fetchAdvice);
function fetchAdvice() {

    console.log(advice)
    fetch(`https://api.adviceslip.com/advice/search/${advice}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('No connectionnnnn :(((((');
            }
            return response.json();
        })
        .then(data => {
            console.log(data.slips[0].advice)
           // console.log(data.slips[0].advice)
           // json objects use .
           // arrays use []
            displayAdvice(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });

}

function displayAdvice(advice) {
    const advice = document.getElementById('advice');
    adviceItem.innerHTML = `
        <h2>${advice}</h2>
    `;

    advice.appendChild(advice);
}
