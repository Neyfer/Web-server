const button_number = document.getElementById("sub");
const number_chapters = document.getElementById("number");
const form = document.getElementById("form");
button_number.addEventListener("click", create);
let color = true;


function create() {
    let number = number_chapters.value;
    form.innerHTML += `
    <label for="serie">Serie</label>
    <input type="text" name="serie"><br><br>`

    form.innerHTML += `
    <label for="n_start">id_starter</label>
    <input type="number" name="n_start"><br><br>`
    for (i = 1; i <= number; i++) {
        let html =
            `<div class="u-container"><label for="txt${i}">link</label>
            <input type="text" name="txt" id="txt${i}" class="text">
            <label for="file${i}">subtitle</label>
            <input type="file" name="file${i}" id="file${i}"></div><br>`;
        form.innerHTML += html;
        document.getElementById(`file${i}`).style.color = "white";
        if(color == true){
        document.getElementById(`file${i}`).style.background = "blue";
        color = false
    }else{
         document.getElementById(`file${i}`).style.background = "green";
         color = true;
    }
    }
    
    
    
    form.innerHTML += `<input type="submit" value="Upload" id="Upload" name="Upload"><br>`
    Upload(number);

}

function Upload(n) {
    let btn = document.getElementById("Upload");
    let text = document.querySelectorAll(".text");
    const data = {
        link: [],
        sub: undefined
    };
    console.log(text);
    btn.addEventListener("click", (e) => {
        text.forEach(text2 => {
            data['link'].push(text2.value);
            link = JSON.stringify(data['link'])
        })

        fetch(`Requests.php?upload_linkv2=${link}`);
        fetch(`Requests.php?uploadv2_num=${n}`);
    })
}