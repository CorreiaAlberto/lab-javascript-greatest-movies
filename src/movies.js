/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)



function orderByYear(peliculas) {
    //copia array
    let orderedMovies = Array.from(peliculas).sort(function (a, b) {
        // comparador
        if (a.year > b.year) return 1;
        else return -1
    })
    return orderedMovies
}




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(peliculas) {
    function steven(movieobj) {
        if (movieobj.director === "Steven Spielberg" && movieobj.genre.includes("Drama")) {
            return true
        }
        return false
    }
    let stevenDramas = peliculas.filter(steven)

    return stevenDramas.length

}




// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(peliculas) {
    //copia array
    let orderedMovies = Array.from(peliculas).sort(function (a, b) {
        // comparador
        if (a.title > b.title) return 1;
        else return -1
    })
    return peliculas.splice(0, 20)
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage() {

}

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average