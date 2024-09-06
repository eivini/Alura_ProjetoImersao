for(let dado of projeto){
    let header = document.getElementById("patrocinio")
    header.innerHTML += `
          <section class="patrocinio">
            <a href="${dado.linkAlura}" target="_blank">Alura</a>
            <a href="${dado.linkGemini}" target="_blank">Gemini</a>     
          </section>
          `
  }
  
  let header = document.getElementById("nomeProjeto");
  header.innerHTML = `
        <div>
          <a href="/" id="link-home"><h1>Halnimes</h1></a>
        </div>
        `
  
  let section = document.getElementById("buscar-txt")
  section.innerHTML =`
        <input type="text" placeholder="Digite o nome do anime" id="campo-busca">
        <button onclick="buscar()">Buscar</button>
  `
  
  function buscar() {
    let section = document.getElementById("resultados-busca");
    let campoBusca = document.getElementById("campo-busca").value;
    if(!campoBusca.trim()){
      section.innerHTML = "<p>Você precisa digitar o nome de um anime ou alguma tag referente para conseguir fazer a busca!</p>"
      return;
    }
  
    campoBusca = campoBusca.toLowerCase();
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
      if(titulo.includes(campoBusca) || descricao.includes(campoBusca) || tags.includes(campoBusca)){
        resultados += `
        <div class="item-resultado">
          <h3>
            <a href="${dado.link}" target="_blank">${dado.titulo}</a>
          </h3>
          <p class="descricao-meta">${dado.descricao}</p>
        </div>
        `;
      }
    }
  
    if(!resultados){
      resultados = "<p>Não conseguimos encontrar nada, poderia tentar digitar novamente?</p>"
    }
  
    section.innerHTML = resultados;
  }
  
  for(let dado of social){
    let footer = document.getElementById("rodape")
    footer.innerHTML += `
          <section class="rodape">
            <p>Projeto de Imersão Gemini</p>
            <p>|</p>
            <p>GitHub:</p>
            <a href=${dado.linkGit} target="_blank">@eivini</a>
            <p>|</p>
            <p>Insta:</p>
            <a href=${dado.linkInsta} target="_blank">@halphar</a>
          </section>
          `
  }
