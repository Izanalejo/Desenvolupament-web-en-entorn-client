  const zona = document.getElementById("zona");
    const punts = document.getElementById("puntuacio");
    const barra = document.getElementById("progress-bar");
    const missatge = document.getElementById("missatge");
    let puntuacio = 0;
    const totalAccions = 9;
    const fets = {};

    function sumarPunts(id, valor) {
      if (!fets[id]) {
        fets[id] = true;
        puntuacio += valor;
        punts.textContent = puntuacio;
        document.getElementById(id).disabled = true;
        actualitzarBarra();
        if (Object.keys(fets).length === totalAccions) {
          missatge.textContent = "🏆 Enhorabona! Has completat totes les accions del DOM!";
          zona.style.background = "#eaffea";
        }
      }
    }

    function actualitzarBarra() {
      const percentatge = Math.round((Object.keys(fets).length / totalAccions) * 100);
      barra.style.width = percentatge + "%";
      barra.textContent = percentatge + "%";
      if (percentatge < 50) barra.style.background = "linear-gradient(90deg, #81c784, #66bb6a)";
      else if (percentatge < 80) barra.style.background = "linear-gradient(90deg, #4caf50, #2e7d32)";
      else barra.style.background = "linear-gradient(90deg, #388e3c, #1b5e20)";
    }

    // === BOTONS D’ACCIÓ ===
    document.getElementById("botoCrear").onclick = () => {
      let nouElement = document.createElement('div');
      nouElement.textContent = "Nou element";
      nouElement.classList.add("element");
      zona.appendChild(nouElement);
      sumarPunts("botoCrear", 1);
    };

    document.getElementById("botoAfegir").onclick = () => {
      nouElement = document.createElement('div');
      nouElement.textContent = "Afegit amb append";
      nouElement.classList.add("element");
      zona.append(nouElement);

      sumarPunts("botoAfegir", 1);
    };

    document.getElementById("botoPrepend").onclick = () => {
      nouElement = document.createElement('div');
      nouElement.textContent = "Afegit amb prepend";
      nouElement.classList.add("element");
      zona.prepend(nouElement);

      sumarPunts("botoPrepend", 1);
    };

    document.getElementById("botoAbans").onclick = () => {
      let primerElement = zona.firstChild;
      let elementAbans = document.createElement('div');
      elementAbans.textContent = "Abans del primer";
      elementAbans.classList.add("element");
      primerElement.before(elementAbans);

      sumarPunts("botoAbans", 1);
    };

    document.getElementById("botoDespres").onclick = () => {
      let ultimElement = zona.lastChild;
      let elementDespres = document.createElement('div');
      elementDespres.textContent = "Després de l'últim";
      elementDespres.classList.add("element");
      ultimElement.after(elementDespres);

      sumarPunts("botoDespres", 1);
    };

    document.getElementById("botoReemplaçar").onclick = () => {
      let elementReemplaçat = zona.firstChild;
      let reemplaç = document.createElement('div');
      reemplaç.textContent = "Element reemplaçat";
      reemplaç.classList.add("element");
      elementReemplaçat.replaceWith(reemplaç);
      
      sumarPunts("botoReemplaçar", 2);
    };

    document.getElementById("botoEliminar").onclick = () => {
      let elementEliminar = zona.lastChild;
      elementEliminar.remove();
      
      sumarPunts("botoEliminar", 1);    
    };

    document.getElementById("botoClonar").onclick = () => {
      let copia = zona.firstChild.cloneNode(true);
      zona.appendChild(copia);
      sumarPunts("botoClonar", 2);
    };

    document.getElementById("botoFragment").onclick = () => {
      let fragment = document.createDocumentFragment();
      for(let i = 1; i <=3; i++){
        let elements = document.createElement('div');
        elements.textContent = "Fragment " + i;
        elements.classList.add("element");
        fragment.append(elements);
      }
      zona.appendChild(fragment);
      
      sumarPunts("botoFragment", 3);
    };