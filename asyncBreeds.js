console.clear()
const fs = require('fs');

const breedDetailsFromFile = function(breed) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log('data :>> ', data);
    //console.log("In readFile's Callback: it has the data.");
   
    if (!error) return data;
  });
  
};


const bombay = breedDetailsFromFile('Bombay');

console.log('Return Value: ', bombay); 