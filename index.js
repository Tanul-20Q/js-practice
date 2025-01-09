// Movie Analysis
console.log("Movie Analysis");
console.log("--------------------");

// Movie names
let movie1 = "3 Idiots";
let movie2 = "Gangs of Wasseypur";
let movie3 = "The Godfather";

// Movie ratings
let ratings1 = 8.4;
let ratings2 = 8.1;
let ratings3 = 9.2;

// Movie durations (in minutes)
let duration1 = 170;
let duration2 = 319;
let duration3 = 175;

// Movie genres
let genre1 = "Comedy";
let genre2 = "Drama";
let genre3 = "Action";

// Boolean variables to determine if the movie is "long"
let isMovieOneLong = true; // Default: Not long
let isMovieTwoLong = true; // Default: Not long
let isMovieThreeLong = true; // Default: Not long

// Check if Movie 1 is long (duration > 190 minutes and genre is Drama)
if (duration1 > 190 && genre1 === "Drama") {
  isMovieOneLong = true; // Assign true if conditions are met
} else {
  isMovieOneLong = false; // Assign false otherwise
}

// Check if Movie 2 is long (duration > 190 minutes and genre is Drama)
if (duration2 > 190 && genre2 === "Drama") {
  isMovieTwoLong = true; // Assign true if conditions are met
} else {
  isMovieTwoLong = false; // Assign false otherwise
}

// Check if Movie 3 is long (duration > 190 minutes and genre is Drama)
if (duration3 > 190 && genre3 === "Drama") {
  isMovieThreeLong = true; // Assign true if conditions are met
} else {
  isMovieThreeLong = false; // Assign false otherwise
}

// Movie 1 details
console.log("Movie Details:");
console.log("--------------------");
console.log(`Movie: ${movie1}`);
console.log(`Duration: ${duration1} minutes`);
console.log(`Rating: ${ratings1}`);
console.log(`Genre: ${genre1}`);
console.log(`Is the movie long?: ${isMovieOneLong}\n`);

// Movie 2 details
console.log(`Movie: ${movie2}`);
console.log(`Duration: ${duration2} minutes`);
console.log(`Rating: ${ratings2}`);
console.log(`Genre: ${genre2}`);
console.log(`Is the movie long?: ${isMovieTwoLong}\n`);

// Movie 3 details
console.log(`Movie: ${movie3}`);
console.log(`Duration: ${duration3} minutes`);
console.log(`Rating: ${ratings3}`);
console.log(`Genre: ${genre3}`);
console.log(`Is the movie long?: ${isMovieThreeLong}\n`);

// Calculate and display the average rating of all movies
let averageRating = (ratings1 + ratings2 + ratings3) / 3;
console.log(`Average Rating of All Movies: ${averageRating}`);
