
const movieGernes = document.querySelector('.movieGernes');
const movieList = document.querySelector('.movielist');
const movieDetailsPage = document.querySelector('.movie-details-page');
const play = document.querySelector('.play-pause');

for(let i=0; i<allMovies.length; i++) {
    movieGernes.innerHTML += `
<option value="${i}">${allMovies[i].gerne}</option>
`
};

loadMovies(0);

function loadMovies(g) {
    movieList.innerHTML = '';

    let gerneMovies = allMovies[g].movies;
    for(let i=0; gerneMovies.length; i++) {
        movieList.innerHTML += `
    <li onclick="loadMoviesDetails(${g}, ${i}, this)">
                            <h4>${gerneMovies[i].title}</h4>
                            <img src="assets/img/${gerneMovies[i].thumb}" alt="Plane">
                            <p class="description">${gerneMovies[i].desc}</p>
                            <div class="row movie-stats m0 p0">
                                <div class="col m0 p0">Date: <span>${gerneMovies[i].date}</span> </div>
                                <div class="col m0 p0">Length: <span>${gerneMovies[i].length}</span> </div>
                            </div>
                        </li>
    `

    }
    
};

function loadMoviesDetails(g,m,selected) {
    let currentMovie = allMovies[g].movies[m];

    movieDetailsPage.innerHTML = `
     <h1>${currentMovie.title}</h1>
                            <h4>Date: ${currentMovie.date} | Length: ${currentMovie.length}</h4>
                            <div class="container">
                                ${currentMovie.trailer}
                            </div>

                            <h4>${currentMovie.actors}</h4>
                            <p>${currentMovie.desc}</p>
    `;

for(let i=0; i<allMovies[g].movies.length; i++) {
    movieList.children[i].classList.remove('selected-movie');
}

selected.classList.add('selected-movie');
}
