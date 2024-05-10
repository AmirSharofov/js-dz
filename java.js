// const firstName = prompt('Введите имя');
// const lastName = prompt('Введите фамилию');

// function generateEmail(firstName, lastName) {
//   const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
//   return email;
// }

// const userEmail = generateEmail(firstName, lastName);
// console.log(userEmail);

let alphabet = 'ABCDEFGHIKLMNOPQRSTVXYZ';

function randomID(letter, num) {
  let randomLetters = '';
  for (let i = 0; i < 2; i++) {
    randomLetters += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  const randomNumber = Math.floor(Math.random() * 10 ** num);

  return `${letter}${randomLetters}.${randomNumber}`;
}

console.log(randomID('', 7)); 