// let data = {
//     nome: "Eduardo",
//     idade: 18,
//     isStudent: true,
// }

// fetch('https://webhook.site/0a5fcef8-67ef-499a-b450-b44ff44038c9', {
//     method: "POST",
//     body: JSON.stringify(data)
// })

function list(param) {
  let url = 'https://restcountries.com/v3.1/all'
  let get = document.getElementById('get').value
  if (param && get) {
    url = 'https://restcountries.com/v3.1/name/' + get
  }
  fetch(url)
    .then(json => json.json())
    .then(countries => {
      console.log(countries)

      let row = document.querySelector("#row")
      let countriesHtmlFinal = ""

      for (let index = 0; index < countries.length; index++) {
        const country = countries[index];

        countriesHtml = `
        <div class="col-4 mt-3">
          <div class="card" style="width: 18rem;">
            <img src="${country.flags.png}" class="card-img-top" alt="${country.flags.alt}">
            <div class="card-body">
              <h5 class="card-title">${country.translations.por.common}</h5>
              <p class="card-text">
              Região: ${country.region}
              </p>
            </div>
          </div>
        </div>
        `
        countriesHtmlFinal = countriesHtmlFinal + countriesHtml
      }
      row.innerHTML = countriesHtmlFinal
    })
}

list()

// console.log(country.translations.por.common)

//nome: country.translations.por.commo
//imagem: country.flags.png
//alt: country.flags.alt
//flag: country.flag
//regiao: country.region