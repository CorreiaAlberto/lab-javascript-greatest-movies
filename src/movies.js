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
    let orderedMovies = Array.from(peliculas);

    function comparador(a, b) {
        if (a.title < b.title) {
            return 1
        } else if (a.title > b.title) {
            return -1
        }
        return 0
    }
    let final20 = orderedMovies.sort(comparador).slice(0, 20)
    return final20
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(peliculas) {
    let averageRate = Array.from(peliculas)
    if (peliculas.length === 0) {
        return 0
    }

    function reduceRates(acc, pelicula) {
        if (pelicula.rate) {
            return acc + pelicula.rate;
        } else {
            return acc + 0;
        }
    }
    return Math.round(averageRate.reduce(reduceRates, 0) / averageRate.length * 100) / 100;
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(peliculas) {
    let dramaRateArr = Array.from(peliculas)

    function dramaRateFunc(dramaRateArr) {
        if (dramaRateArr.genre.includes("Drama")) {
            return true
        }
    }
    dramaRateArr = dramaRateArr.filter(dramaRateFunc)
    return ratesAverage(dramaRateArr)

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(peliculas) {


}
// BONUS Iteration: Best yearly rate average - Best yearly rate average