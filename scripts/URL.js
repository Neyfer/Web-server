//const btn = document.getElementById("sub");
let vid = document.querySelector(".vid");
var data;
const sub = document.getElementById('sub')
const ep = document.getElementById("ep");
const se = document.getElementById("se");
var load = false;
const request = new XMLHttpRequest();
const get_chapters = new XMLHttpRequest();
var button;
let define_Season = false;
let serie = document.getElementById("serie-t");
let season_name = document.querySelector(".seasons");
let season_on_screen = document.getElementById("title");
var number;

//escribir el nombre de la actual serie
const get_name2 = new XMLHttpRequest();
get_name2.onloadend = function() {
    dat = JSON.parse(this.responseText);
    number = dat.split('_')[1];
    dat = dat.split('_')[0];
    const data2 = dat.charAt(0).toUpperCase() + dat.slice(1)
    serie.innerHTML += data2;
    let ide4 = localStorage.getItem(serie.textContent + "b");
    if (ide4 != undefined) {
        getData(ide4);
        define_Season = true;
    }

}
get_name2.open("GET", "Requests.php?storage");
get_name2.send();


setTimeout(() => {
    crear_temporada();
}, 2000);


function crear_temporada() {
    const create_btn_seasons = new XMLHttpRequest();
    promise2 = new Promise(function(res) {
        create_btn_seasons.onloadend = function() {
            let data = JSON.parse(this.responseText);
            res(data);
        }
        create_btn_seasons.open("GET", `Requests.php?get_season_number=${serie.textContent}`);
        create_btn_seasons.send();
        define_Season = true;
    })

    //cuando el sevidor haya dado la cantidad de series
    promise2.then(function(value) {
        create_btn_season(value);
    })
}


//PEDIR LA CANTIDAD DE EPISODIOS DE LA SERIE
promesa = new Promise(function(resolve) {
    get_chapters.onloadend = function() {
        if (this.readyState == 4 && this.status == 200) {
            datos = this.response;
            if (datos == this.response) {
                resolve(datos)
            }
        }
    }
    get_chapters.open("POST", "Requests.php?x=");
    get_chapters.send();

});

//OBTENER LA URL PARA EL VIDEO
function getData(id) {
    request.onloadend = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
            vid.src = data;
            console.log(ide2)
            get_subs(id);
            localStorage.setItem(serie.textContent + "b", id);
            var ide2 = `c${localStorage.getItem(serie.textContent+"b")}`;
            document.getElementById(ide2).style.color = "red";
            var btn65 = document.getElementById(ide2)
                //analiza si reaunad el video o no
            if (localStorage.getItem(serie.textContent + "btn") == undefined) {
                console.log("indefinido");
                localStorage.setItem(serie.textContent + "btn", "c" + id);
            } else {
                if (btn65.id != localStorage.getItem(serie.textContent + "btn")) {
                    console.log("noup");
                    localStorage.setItem(serie.textContent + "btn", btn65.id);
                    load = false;
                } else {
                    console.log("yeaph")
                    load = true;
                }
            }

            btns.scrollLeft = document.getElementById(ide2).offsetLeft - 40;
            for (i = 1; i < localStorage.getItem(serie.textContent + "b"); i++) {
                document.getElementById(`c${i}`).style.color = "green";
            }

        }
        
    }
    request.open('GET', `Requests.php?q=${id}`);
    request.send();

}

function delete_Local(){
    let data1 = serie.textContent;
    let data2 = serie.textContent+"b";
    let data3 = serie.textContent+"btn";
    let data4 = serie.textContent+"_2";
    
    localStorage.removeItem(data1);
    console.log(data1);
    console.log(data2);
    console.log(data3);
    localStorage.removeItem(data2);
    localStorage.removeItem(data3);
    localStorage.removeItem(data4);
}


//CREA LOS BOTONES DE LAS TEMPORADAS 

function create_btn_season(data) {
    let nombre = data[0]["Nombre"];
    let html1 = `<a href="sreproduccion.php?series=${nombre}">
        <button class ="season" onclick="delete_Local()">season1</button>
</a>`;
    season_name.innerHTML += html1;
    if (number == undefined) {
        season_on_screen.textContent = "Season1";
    } else {
        season_on_screen.textContent = season_on_screen.textContent + number;
    }
    for (i = 2; i <= data[0]["seasons"]; i++) {
        nombre = data[0]["Nombre"] + `_` + [i];
        let html = `<a href="sreproduccion.php?series=${nombre}">
        <button onclick="delete_Local()" class ="season">season${i}</button>
</a>`;
        season_name.innerHTML += html;
    }
}


//OBTENER LOS SUBTITULOS PARA EL VIDEO
const subs = new XMLHttpRequest();

function get_subs(ident) {
    subs.onloadend = function() {
        subtitle = JSON.parse(this.responseText);
        sub.src = subtitle;
    }
    subs.open("GET", `Requests.php?id=${ident}`)
    subs.send();
}
let numbers = [];
let ids = [1, 2, 3, 4, 5, 6];
let vars = [];
//RECORRER LOS DATOS REFERENTES A LA CANTIDAD DE ARCHIVOS
function fillArray(data) {
    for (i = 1; i <= data; i++) {
        numbers.push(i);
        ids.push(i);
        console.log("aded");
    }
}

let btns = document.querySelector(".buttons");
let data_id = 1;

//EL SERIVIDOR RESPONDE CON LA URL
promesa.then(
    function(value) {
        fillArray(value);
        //get_Buttons(value);
        create_button(value);
    }
);


//CREAR LOS BOTONES QUE LLEVARAN A LOS DIFERENTES CAPITULOS
function create_button(data) {
    for (i = 0; i < data; i++) {
        let html = `<input type="button" onclick="getData(${numbers[i]})"value="Chapter${numbers[i]}" class="Chapter2" id="c${numbers[i]}">`;
        btns.innerHTML += html;

    }

}

const chapter = document.querySelector(".buttons")
const season = document.querySelector(".seasons")

ep.addEventListener("click", () => {
    chapter.hidden = false;
    season.hidden = true;
})

se.addEventListener("click", () => {
    chapter.hidden = true;
    season.hidden = false;
});