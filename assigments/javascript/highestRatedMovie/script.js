const container = document.querySelector('.container');
const card = document.querySelector('.card');
const buttons = document.querySelector('.buttons');

function loadMovies(choose){
    if(choose == 'mostRated') {
        const sorted = movies.sort((a,b) => a.rating - b.rating)[movies.length-1];
        container.innerHTML = '';
            container.innerHTML += `
                    <div class ="card">
                    <h1>Movie Name: ${sorted.name}</h1>
                    <h1>Release Year: ${sorted.releaseYear}</h1>
                    <h1>Rating: ${sorted.rating}</h1>
                    <h1>Main Actors: ${sorted.mainActors}</h1>
                    </div>
                `;
    }
    if(choose == 'lowestToHighest'){
        const lowestToHighest = movies.sort((a,b) => a.rating - b.rating);
        console.log(lowestToHighest)
        container.innerHTML = '';
        lowestToHighest.forEach(function(movie){
            container.innerHTML += `
             <div class="card">
             <h1>Movie Name: ${movie.name}</h1>
                    <h1>Release Year: ${movie.releaseYear}</h1>
                    <h1>Rating: ${movie.rating}</h1>
                    <h1>Main Actors: ${movie.mainActors}</h1>
                    </div>
            `;
        })
    }
   

}


 
