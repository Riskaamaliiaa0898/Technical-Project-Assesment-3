function Fetchdata() {
  let search_key = document.getElementById("search").value;
  let containerMovie = document.getElementById("container-Movie");

  fetch("https://api.themoviedb.org/3/discover/movie?api_key=e4a33009a004033b495b421870079bf6&sort_by=popularity.desc")
    .then((response) => response.json())
    .then((data) => {
      let movies = data.results;
      movies.forEach((movie) => {
        console.log(movie);
        var html = "";
        html += '<div class="col-lg-3 col-sm-4 mb-3">';
        html += '<div class="card h-100">';
        html += '<img src="https://image.tmdb.org/t/p/w500' + movie.poster_path + '" class="card-img-top" alt="...">';
        html += '<div class="card-body">';
        html += '<h5 class="card-title">' + movie.title + "</h5>";
        html += '<h6 class="card-retting" style="text-align: right; color: rgb(38, 38, 226)">' + movie.vote_average + "</h6>";
        html += '<p class="card-text">' + movie.release_date + "</p>";
        html += "</div>";
        html += "</div>";
        html += "</div>";
        containerMovie.innerHTML += html;
      });
    })
    .catch((error) => console.log(error));
}
Fetchdata();
