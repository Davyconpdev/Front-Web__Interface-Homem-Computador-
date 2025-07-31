const frmPesquisa = document.querySelector("form");
const pesquisa = document.querySelector("#Pesquisa");

frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault();
    pesq = pesquisa.value

    const apiKey = '9973257d'

    if (pesquisa == "") {
        alert('preencha o campo!');
        return;
    }
    fetch(`https://www.omdbapi.com/?s=${pesq}&apikey=${apiKey}`)
        .then(result => result.json())
        .then(json => carregalista(json));
}
   const carregalista = (json) => {
      const lista = document.querySelector(".lista");
      lista.innerHTML = "";
     
      if (json.Response == 'False') {
        alert('Nenhum filme encontrado');
      }

      json.Search.forEach(element => {
        console.log(Element);

        let item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `<img src="${element.Poster}" /><h2>${element.Title}</h2>`

        lista.appendChild(item);
      })
   }