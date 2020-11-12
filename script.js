// Console print check
console.log('Script loaded');

// Fetch with a limit of 10.000 lines to make the rendering faster
fetch('https://opendata.rdw.nl/resource/m9d7-ebf2.json?$limit=10000')
  .then(response => response.json())
  // .then(data => console.log(data)); // print the data

// Filter the "catalogusprijs" value of all the objects
let kolomNaam = "catalogusprijs"
let answers = []

for (answer of rdwData){
  answers.push(answer[kolomNaam])
}

console.log(answers);

// Ignore/delete the objects with empty values
// Turn strings intro numbers
// Sort everything between 0k and 50k, 50k and 100k, 100k and 200k of 200k+



//Sources
//line 10-13: livecoding data exploration, 2020-10-21, 00:42:00