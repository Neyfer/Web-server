let video = document.getElementById("capitulo");
var btn2 = document.getElementById("nxt");

document.getElementById("btn1").addEventListener("click", Cambiar);
document.getElementById("btn2").addEventListener("click", Cambiar1);
document.getElementById("btn3").addEventListener("click", Cambiar2);
document.getElementById("btn4").addEventListener("click", Cambiar3);
document.getElementById("btn5").addEventListener("click", Cambiar4);
document.getElementById("btn6").addEventListener("click", Cambiar5);
document.getElementById("nxt").addEventListener("click", next);

let c1 = "https://www.dropbox.com/s/93mi1cv2i53ml22/360.mp4.mp4?raw=1";
let c2 = "https://www.dropbox.com/s/6axk2doefpnw3cg/360.mp4%20%284%29.mp4?raw=1";
let c3 = "https://www.dropbox.com/s/r47s60t4ww1shdl/360.mp4%20%285%29.mp4?raw=1";
let c4 = "https://www.dropbox.com/s/zqud5xxrcocua4a/360.mp4%20%286%29.mp4?raw=1";
let c5 = "https://www.dropbox.com/s/6kdspc4qerzmnwf/360.mp4%20%287%29.mp4?raw=1";
let c6 = "https://www.dropbox.com/s/c8h3nlttex4szzn/360.mp4%20%288%29.mp4?raw=1";

var c7;
var c8;
var c9;
var c10;
var c11;
var c12;
var c13;
var c14;
var c15;
var c16;
var c17;
var c18;
var c19;
var c20;
var c21;
var c22;

FirstSeason();

function FirstSeason() {
    video.src = "https://www.dropbox.com/s/93mi1cv2i53ml22/360.mp4.mp4?raw=1";
}

function Cambiar() {
    video.src = c1;
}

function Cambiar1() {
    video.src = c2;
}

function Cambiar2() {
    video.src = c3;
}

function Cambiar3() {
    video.src = c4;
}

function Cambiar4() {
    video.src = c5;
}

function Cambiar5() {
    video.src = c6;
}

function Cambiar6() {
    video.src = c7;
}

function Cambiar7() {
    video.src = c8;
}

function Cambiar8() {
    video.src = c9;
}

function Cambiar9() {
    video.src = c10;
}

function Cambiar10() {
    video.src = c11;
}

function Cambiar11() {
    video.src = c12;
}

function Cambiar12() {
    video.src = c13;
}

function Cambiar13() {
    video.src = c14;
    s
}

function Cambiar14() {
    video.src = c15;
}

function Cambiar15() {
    video.src = c16;
}

function Cambiar16() {
    video.src = c17;
}

function Cambiar17() {
    video.src = c18;
}

function Cambiar18() {
    video.src = c19;
}

function Cambiar19() {
    video.src = c20;
}

function Cambiar20() {
    video.src = c21;
}

function Cambiar21() {
    video.src = c22;
}

function next() {
    window.scrollTo(0, 0);
    var titulo = document.getElementById("title");
    titulo.innerText = "Season2";
    video.src = "https://www.dropbox.com/s/honayhiqxsww2ql/360.mp4.mp4?raw=1";
    c1 = "https://www.dropbox.com/s/honayhiqxsww2ql/360.mp4.mp4?raw=1";
    c2 = "https://www.dropbox.com/s/46ktylyyri5dbwo/360.mp4%20%281%29.mp4?raw=1";
    c3 = "https://www.dropbox.com/s/kz48wm95ad0k6i3/360.mp4%20%282%29.mp4?raw=1";
    c4 = "https://www.dropbox.com/s/4a0r2wu0kc1m5ct/360.mp4%20%283%29.mp4?raw=1";
    c5 = "https://www.dropbox.com/s/ik7z6l4py53j5vj/360.mp4%20%284%29.mp4?raw=1";
    c6 = "https://www.dropbox.com/s/ik7z6l4py53j5vj/360.mp4%20%284%29.mp4?raw=1";
    c7 = "https://www.dropbox.com/s/immm56ivg2f4dfv/360.mp4%20%286%29.mp4?raw=1";
    c8 = "https://www.dropbox.com/s/v4kq9h1kc5g06ex/360.mp4%20%287%29.mp4?raw=1";
    c9 = "https://www.dropbox.com/s/mrm6ccipmofmtcn/360.mp4%20%288%29.mp4?raw=1";
    c10 = "https://www.dropbox.com/s/2yk6rr6eu73tpxe/360.mp4%20%289%29.mp4?raw=1";
    c11 = "https://www.dropbox.com/s/04v4v7tpgcabeal/360.mp4%20%2810%29.mp4?raw=1";
    c12 = "https://www.dropbox.com/s/04v4v7tpgcabeal/360.mp4%20%2810%29.mp4?raw=1";
    c13 = "https://www.dropbox.com/s/ary7naxkcv93r3g/360.mp4%20%2812%29.mp4?raw=1";
    c14 = "https://www.dropbox.com/s/k1msjv731soqbl0/360.mp4%20%2813%29.mp4?raw=1";

    btn2.remove();
    var buttons = [7, 8, 9, 10, 11, 12, 13, 14];
    var identificadores = [7, 8, 9, 10, 11, 12, 13, 14];
    for (i = 0; i < 8; i++) {
        const btn = document.createElement("button");
        btn.innerText = "Chapter" + buttons[i];
        document.getElementById("container").appendChild(btn);
        btn.classList.add("Chapter2");
        btn.id = "btn" + identificadores[i];
    }
    borrar();

    document.getElementById("btn7").addEventListener("click", Cambiar6);
    document.getElementById("btn8").addEventListener("click", Cambiar7);
    document.getElementById("btn9").addEventListener("click", Cambiar8);
    document.getElementById("btn10").addEventListener("click", Cambiar9);
    document.getElementById("btn11").addEventListener("click", Cambiar10);
    document.getElementById("btn12").addEventListener("click", Cambiar11);
    document.getElementById("btn13").addEventListener("click", Cambiar12);
    document.getElementById("btn14").addEventListener("click", Cambiar13);

}

function borrar() {
    btn2.remove();
    const next = document.createElement("button");
    next.innerText = "Season3";
    document.body.appendChild(next);
    next.classList.add("Chapter2");
    next.id = "season3";

    document.getElementById("season3").addEventListener("click", Season3);
}



var identificadores2 = [15, 16, 17, 18];
var buttons2 = [15, 16, 17, 18];

function Season3() {
    video.src = "https://www.dropbox.com/s/vtgew5oxkkf4jbl/360.mp4%20%280%29.mp4?raw=1";
    var titulo = document.getElementById("title");
    titulo.innerText = "Season3";
    window.scrollTo(0, 0);



    for (i = 0; i < 4; i++) {
        const nuevo = document.createElement("button");
        nuevo.innerText = "Chapter" + buttons2[i];
        document.getElementById("container").appendChild(nuevo);
        nuevo.classList.add("Chapter2");
        nuevo.id = "btn" + identificadores2[i];
    }

    document.getElementById("btn15").addEventListener("click", Cambiar14);
    document.getElementById("btn16").addEventListener("click", Cambiar15);
    document.getElementById("btn17").addEventListener("click", Cambiar16);
    document.getElementById("btn18").addEventListener("click", Cambiar17);

    c1 = "https://www.dropbox.com/s/vtgew5oxkkf4jbl/360.mp4%20%280%29.mp4?raw=1";
    c2 = "https://www.dropbox.com/s/zvuavgeovneibxy/360.mp4%20%281%29.mp4?raw=1";
    c3 = "https://www.dropbox.com/s/nhcu5zxjdio7zwf/360.mp4%20%282%29.mp4?raw=1";
    c4 = "https://www.dropbox.com/s/s6y7oaz3robm0pl/360.mp4%20%283%29.mp4?raw=1";
    c5 = "https://www.dropbox.com/s/etayygc3ar3dvpu/360.mp4%20%284%29.mp4?raw=1";
    c6 = "https://www.dropbox.com/s/3a0mtvavi5316vq/360.mp4%20%285%29.mp4?raw=1";
    c7 = "https://www.dropbox.com/s/n5ksdaht9rpnfbe/360.mp4%20%286%29.mp4?raw=1";
    c8 = "https://www.dropbox.com/s/1fggtqj6eeaxebl/360.mp4%20%287%29.mp4?raw=1";
    c9 = "https://www.dropbox.com/s/a0rt0948dc0rg9r/360.mp4%20%288%29.mp4?raw=1";
    c10 = "https://www.dropbox.com/s/05qij6jmhu6ln3u/360.mp4%20%289%29.mp4?raw=1";
    c11 = "https://www.dropbox.com/s/pl9v8ugey2nz35t/360.mp4%20%2810%29.mp4?raw=1";
    c12 = "https://www.dropbox.com/s/ukhy7i64z1j08d8/360.mp4%20%2811%29.mp4?raw=1";
    c13 = "https://www.dropbox.com/s/2e3brxohz4ztuxp/360.mp4%20%2812%29.mp4?raw=1";
    c14 = "https://www.dropbox.com/s/87vg6k9d86k0aia/360.mp4%20%2813%29.mp4?raw=1";
    c15 = "https://www.dropbox.com/s/2h3pbunzr4ii9yq/360.mp4%20%2814%29.mp4?raw=1";
    c16 = "https://www.dropbox.com/s/tj7sp1q0bgsmn8a/360.mp4%20%2815%29.mp4?raw=1";
    c17 = "https://www.dropbox.com/s/y3fryg1pejt9szv/360.mp4%20%2816%29.mp4?raw=1";
    c18 = "https://www.dropbox.com/s/80tfqcu9yzecrwl/360.mp4%20%2817%29.mp4?raw=1";
    borrar2();
}

function borrar2() {
    season3.remove();
    const next = document.createElement("button");
    next.innerText = "Season4";
    document.body.appendChild(next);
    next.classList.add("Chapter2");
    next.id = "season4";
    document.getElementById("season4").addEventListener("click", Season4);
}

function Season4() {
    video.src = "https://www.dropbox.com/s/ss7e9s0a1r4uko7/360.mp4%20%280%29.mp4?raw=1";
    let identificadores3 = [19, 20, 21, 22];
    let buttons3 = [19, 20, 21, 22];
    var titulo = document.getElementById("title");
    titulo.innerText = "Season4";
    window.scrollTo(0, 0);
    for (i = 0; i < 4; i++) {
        const nuevo = document.createElement("button");
        nuevo.innerText = "Chapter" + buttons3[i];
        document.getElementById("container").appendChild(nuevo);
        nuevo.classList.add("Chapter2");
        nuevo.id = "btn" + identificadores3[i];
    }

    document.getElementById("btn19").addEventListener("click", Cambiar18);
    document.getElementById("btn20").addEventListener("click", Cambiar19);
    document.getElementById("btn21").addEventListener("click", Cambiar20);
    document.getElementById("btn22").addEventListener("click", Cambiar21);

    c1 = "https://www.dropbox.com/s/ss7e9s0a1r4uko7/360.mp4%20%280%29.mp4?raw=1";
    c2 = "https://www.dropbox.com/s/kk9lffhklcu6eim/360.mp4%20%281%29.mp4?raw=1";
    c3 = "https://www.dropbox.com/s/o0zpkvhq761zae0/360.mp4%20%282%29.mp4?raw=1";
    c4 = "https://www.dropbox.com/s/m8q93vnzdgy5kfd/360.mp4%20%283%29.mp4?raw=1";
    c5 = "https://www.dropbox.com/s/ydn7hwfq096tppx/360.mp4%20%284%29.mp4?raw=1";
    c6 = "https://www.dropbox.com/s/fh3k528vt50b5f1/360.mp4%20%285%29.mp4?raw=1";
    c7 = "https://www.dropbox.com/s/mjdsfg5xyo38ve3/360.mp4%20%286%29.mp4?raw=1";
    c8 = "https://www.dropbox.com/s/j0ebf3tuexw2iua/360.mp4%20%287%29.mp4?raw=1";
    c9 = "https://www.dropbox.com/s/x813tm46d7b4fkz/360.mp4%20%288%29.mp4?raw=1";
    c10 = "https://www.dropbox.com/s/noolbx6zlft5h2l/360.mp4%20%289%29.mp4?raw=1";
    c11 = "https://www.dropbox.com/s/e51qsg4zhemu2pq/360.mp4%20%2810%29.mp4?raw=1";
    c12 = "https://www.dropbox.com/s/5j72nv1ahiydvrb/360.mp4%20%2811%29.mp4?raw=1";
    c13 = "https://www.dropbox.com/s/yws7u1dvzsugxsu/360.mp4%20%2812%29.mp4?raw=1";
    c14 = "https://www.dropbox.com/s/45rjlsvua0go1su/360.mp4%20%2813%29.mp4?raw=1";
    c15 = "https://www.dropbox.com/s/5j72nv1ahiydvrb/360.mp4%20%2811%29.mp4?raw=1";
    c16 = "https://www.dropbox.com/s/yws7u1dvzsugxsu/360.mp4%20%2812%29.mp4?raw=1";
    c17 = "https://www.dropbox.com/s/45rjlsvua0go1su/360.mp4%20%2813%29.mp4?raw=1";
    c18 = "https://www.dropbox.com/s/nh25eihernl9sjn/360.mp4%20%2814%29.mp4?raw=1";
    c19 = "https://www.dropbox.com/s/s1ikgbtmv3f8khv/360.mp4%20%2815%29.mp4?raw=1";
    c20 = "https://www.dropbox.com/s/cbqgkiahm0m2gh8/360.mp4%20%2816%29.mp4?raw=1";
    c21 = "https://www.dropbox.com/s/1ade6wkf6gzu4ng/360.mp4%20%2817%29.mp4?raw=1";
    c22 = "https://www.dropbox.com/s/2dwj4k24m29xp2a/360.mp4%20%2818%29.mp4?raw=1";

    titulo.remove();
}