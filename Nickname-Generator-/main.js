// Nickname Generator 


// Event Listeners 
document.getElementById("allN").addEventListener('click', allNicknamesGenerator); 
document.getElementById("randomN").addEventListener('click', randomNicknamesGenerator);


// Global Variables 
let nicknames; 
let div2El = document.getElementById('div2');
let firstnameEl = document.getElementById('firstname'); 
let lastnameEl = document.getElementById('lastname'); 

// Fetch nicknames from TXT file 
fetch("nicknames.txt").then(convertData).then(processData);

function convertData(rawData) {
  return rawData.text(); 
}

function processData(stringData) {
  nicknames = stringData.split(/\r?\n/);
}

// Display the nicknames 
function allNicknamesGenerator() {
  let firstname = firstnameEl.value;
  let lastname = lastnameEl.value;
  let divStr = ""; 
  for (let i = 0; i < nicknames.length; i++) {
    divStr += `<div> ${firstname} "${nicknames[i]}" ${lastname} </div>`;
  }
  div2El.innerHTML = divStr; 
}


function randomNicknamesGenerator () {
  let firstname = firstnameEl.value;
  let lastname = lastnameEl.value;
  div2El.innerHTML = `<div> ${firstname} "${randomElement(nicknames)}" ${lastname} </div>`; 
}

function randomElement(anArray) {
  return anArray[randomInt(0, anArray.length)]; 
}

// Display Random Nickname
function randomInt (low, high) {
  return Math.floor(Math.random () * (high - low) + low); 
}

                                                                  