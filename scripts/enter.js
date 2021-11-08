const req = new XMLHttpRequest();


/*promesa = new Promise(function(res) {
req.onloadend = function() {
    data = JSON.parse(this.response);
    res(data);
}
req.open("GET", "Requests.php?list=");
req.send();
});

promesa.then(function(res) {
    var number = res.length;
    get_div(res, number);
})

var ids = Array();

function get_div(data, number) {
    for (i = 0; i < number; i++) {
        var div = document.getElementById(data[i]);
        ids.push(div.id);

    }
}*/

function entro(name) {
    const get_name = new XMLHttpRequest();
    get_name.onloadend = function() {
        var data = this.responseText;
        alert(name.id);
    }
    get_name.open("POST", `Requests.php?db=${name.id}`);
    get_name.send();

}