import { CsvFileReader } from './CsvFileReader';
let csvFileReader = new CsvFileReader('football.csv');
csvFileReader.read();
let manUnitedWins = 0;

for (let match of csvFileReader.data) {
    if ((match[1] === 'Man United' && match[5] === 'H') || (match[2] === 'Man United' && match[5] === 'A')) {
        manUnitedWins++;
    }
}

console.log(manUnitedWins);
