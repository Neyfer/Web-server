let video = document.querySelector(".vid");
let subs = document.getElementById("sub");

const get_movie = new XMLHttpRequest();

get_movie.onreadystatechange = function() {
       data = JSON.parse(this.responseText);
       console.log(data);
       video.src = data[0]['link'];
       subs.src = data[0]['subtitulos'];
}

get_movie.open("GET", "Requests.php?get_movie");
get_movie.send()

