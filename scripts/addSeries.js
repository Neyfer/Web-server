const serie_name = document.getElementById('SN');
const serie_img = document.getElementById("SImg");
const btn = document.getElementById('btn2');
const selected_serie = document.getElementById("lista");
const selected_serie2 = document.getElementById("lista2");
var select = document.getElementById("select");
const btn1 = document.getElementById("sub");
const addSe = document.getElementById("add_season");
const NumSe = document.getElementById("season_number");
const season_num = document.getElementById("num_seasons2");
var name_final;

function recorrerdata(datos) {
    for (i = 0; i < datos.length; i++) {
        var html = `<option>${datos[i]}</option>`;
        selected_serie.innerHTML += html;
        selected_serie2.innerHTML += html;
    }
}

btn.addEventListener('click', () => {
    if (serie_name.value != '' || serie_img.value != '') {
        var q = confirm(`SEGURO QUE QUIERE AGREGAR SERIE ${serie_name.value}`);
        if (q == true) {
            container.innerHTML += html_code;
        } else {
            alert('el proceso ha sido detenido');
        }
    }
})

const lista2 = new XMLHttpRequest();

promesa = new Promise(function(res) {
    lista2.onloadend = function() {
        if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        res(data)
    }
    }

    lista2.open("POST", "Requests.php?get_List_235")
    lista2.send();
})

promesa.then(function(value) {
    recorrerdata(value);  
    get_seasons_number()
})

function create_Seasons(num) {
   let num2 = parseInt(num);
    console.log(num2)
    /*for (i = 1; i <= num2; i++) {
        let html = `<option>${i}</option>`
        season_num.innerHTML += html;
    }*/

}

const num_seasons = new XMLHttpRequest();

function get_seasons_number(){
    num_seasons.onloadend = function() {
        if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        
        console.log(data)
        create_Seasons(data);
        console.log(data);
    }}
    let serie = selected_serie.value;
    
    num_seasons.open("GET", `Requests.php?serie2=${serie}`);
    num_seasons.send()
}

let final_serie_name;

function mostrardata2(){
    final_serie_name = selected_serie2.value+ "_" + NumSe.value;
        alert(selected_serie2.value);
          alert(NumSe.value);
          alert(final_serie_name);}

btn1.addEventListener('click', (e) => {
    const req = new XMLHttpRequest();
    req.onloadend = function() {}
    
     if (season_num.value == 1) {
          final_serie_name = selected_serie.value;
        console.log(name_final);
     }else{
          final_serie_name = selected_serie.value+ "_" + season_num.value;
     }
    req.open("GET", `Requests.php?sname=${final_serie_name}`);
    req.send();
});

addSe.addEventListener('click', (e) => {
    const season = new XMLHttpRequest();
    season.onloadend = function() {}
    if (NumSe.value == 1) {
        name_final = selected_serie2.value;
        console.log(name_final);
    } else {
        name_final = selected_serie2.value + "_" + NumSe.value;
        console.log(name_final);
    }
    console.log(name_final);
    season.open("GET", `Requests.php?season=${name_final}`);
    season.send();
    
    fetch(`Requests.php?serie_root=${selected_serie2.value}`)

});

