"use strict";
//Prova mia ->
// const sb = document.querySelector('#regione')
// btn.onchange = (event) => {
//     event.preventDefault();
// };

const regioni = ["1-Umbria","2-Lazio","3-Toscana","4-Marche","5-Abruzzo"];
const province = ["1-Perugia", "1-Terni","2-Roma","2-Viterbo", "2-Rieti", "2-Latina", "2-Frosinone","3-Fiuggi"];
const daticomune = [
    {"idRegione":1, "nomeProvincia":"Perugia", "comuni":["Gubbio", "Folignano"]},
    {"idRegione":1, "nomeProvincia":"Terni", "comuni":["Narni", "Folignano"]},
    {"idRegione":2, "nomeProvincia":"Roma", "comuni":["Grottaferrata", "Folignano"]},
    {"idRegione":2, "nomeProvincia":"Viterbo", "comuni":["Vetralla", "Folignano"]},
    {"idRegione":3, "nomeProvincia":"Firenze", "comuni":["Gubbio", "Folignano"]},
    {"idRegione":3, "nomeProvincia":"Livorno", "comuni":["Gubbio", "Folignano"]},
    {"idRegione":4, "nomeProvincia":"Ancona", "comuni":["Gubbio", "Folignano"]},
    {"idRegione":4, "nomeProvincia":"Ascoli Piceno", "comuni":["Gubbio", "Folignano"]},
];



function inizializzazione() {
    var comboRegione = document.getElementById("regione");
    var comboProvincia = document.getElementById("provincia");
    var comboComune = document.getElementById("comune");

    var datidtringajson = JSON.stringify(daticomune);
    var datiobjfromjsonstring = JSON.parse(datidtringajson);

    for ( var i= 0; i< datiobjfromjsonstring.lenght; i++){
        console.log("idRegione: " + datiobjfromjsonstring[i].idRegione);
        console.log("nomeProvincia: " + datiobjfromjsonstring[i].nomeProvincia);
        for(let j = 0; j < datiobjfromsonstring; i++){
            console.log("comuni: " + datiobjfromsonstring[j].comuni[j]);
        }
    }
}

function getProvincia(idRegione) {
    // const provincia = province.find(x => x.value.startsWith(idRegione));
    const provincia = [];
    for(let item of province) { 
        if(item.startsWith(idRegione)) {
                provincia.push(item);
        }
    } 
    // console.log(provincia[0]);
    var selProvincia = document.getElementById("provincia");

    removeOptions(selProvincia);
    
    for(var i = 0; i < provincia.length; i++) {
        var opt = provincia[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selProvincia.appendChild(el);
    }
}

function getComune(provincia) {
    console.log("getComune: provincia = " + provincia);
    // Tolto id-
    const after_ = provincia.substring(provincia.indexOf('-') + 1);
    provincia = after_;
    console.log("getComune: provincia after char - = " + provincia);
    const comune = [];
    for(let item of daticomune) { 
        if(item.nomeProvincia.startsWith(provincia)) {
            for(let itemComuni of item.comuni)
            {
                comune.push(itemComuni);
            }
        }
    } 
    var selComune = document.getElementById("comune");

    removeOptions(selComune);
    
    for(var i = 0; i < comune.length; i++) {
        var opt = comune[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selComune.appendChild(el);
    }
}

function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
        if(i > 0) {
            selectElement.remove(i);
        }
    }
}


//Serve a far vedere nell'HTML il risultato della Combobox 
function VisualizzaScelte(){
    var selRegione = document.getElementById("regione");
    var selProvincia = document.getElementById("provincia");
    var selComune = document.getElementById("comune");
    let scelte = 'Hai scelto: ' + selRegione.options[selRegione.selectedIndex].value + ' - ' + selProvincia.value + ' - ' +   selComune.value;
    console.log(scelte);
    var divp = document.getElementById("result");
    // x scrivere nella pagina html
    divp.innerText = scelte;
}

