let restore_time = true;

let video21 = document.querySelector(".vid");
var change_color = false;
video21.addEventListener("onclose", () => {
    localStorage.setItem("time", video21.currentTime);
});

const get_serie = new XMLHttpRequest();

const promesa = new Promise(function(res) {
    get_serie.onloadend = async function(dat) {
        dat = JSON.parse(this.responseText);
        res(dat);
    }

    get_serie.open("GET", "Requests.php?storage");
    get_serie.send();
})

promesa.then(function(value) {
    listeers(value);
})



function listeers(dat) {
    video21.addEventListener("pause", () => {
        localStorage.setItem(dat, video21.currentTime);
        return dat;
        
    });
    
  if (localStorage.getItem(dat) != undefined) {
        video21.addEventListener("canplay", () => {
            if (load == true) {
                video21.currentTime += localStorage.getItem(dat);
            } else { console.log(`var load is${load}`) }
        })
    }
    }
