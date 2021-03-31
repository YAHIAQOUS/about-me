'use strict';


let userName = prompt('Hello, what\'s your name?');
alert('Lets be friends ' + userName + ', my name is Yahia and lives in Jordan, I will play a game with you about me, you should answer with either yes/y or no/n');

alert('Ready? Lets go ' + userName);

let userScore = 0



function question1 (){

// first question
let myNationality = prompt('Do you think I am Jordanian?');
myNationality = myNationality.toLowerCase();
// console.log(myNationality);

if (myNationality === 'yes' || myNationality === 'y') {
    alert('No I am Palestanian, but sure I love Jordan and Jordanian people')
} else if (myNationality === 'no' || myNationality === 'n') {
    alert('That was right ' + userName);
    userScore++;
} else {
    alert('you should answer with either yes/y or no/n next time');
}
}
question1();

// second question


function question2(){
let myBorn = prompt('Ok now do you think I was borned in Jordan?');
myBorn = myBorn.toLowerCase();
// console.log(myBorn);

if (myBorn === 'yes' || myBorn === 'y') {
    alert('Yeah thats right, ' + userName + '. In Amman')
    userScore++;
} else if (myBorn === 'no' || myBorn === 'n') {
    alert('No, I was borned in Amman, Jordan');
} else {
    alert('you should answer with either yes/y or no/n next time');
}

}
question2();


function question3(){
// third question
let myEducation = prompt('Do you think I have a bachelor degree in software development?');
myEducation = myEducation.toLowerCase();
// console.log(myEducation);

if (myEducation === 'yes' || myEducation === 'y') {
    alert('Actually no, I have a bachelor degree in Architecture and learning about web development in LTUC these days');
} else if (myEducation === 'no' || myEducation === 'n') {
    alert('Yeah thats right, I have a bachelor degree in Architecture and learning about web development in LTUC these days');
    userScore++;
} else {
    alert('you should answer with either yes/y or no/n next time');
}
}
question3();


function question4(){
// fourth question
let myWork = prompt('Do you think I have been working before starting this course?');
myWork = myWork.toLowerCase();
// console.log(myWork);

if (myWork === 'yes' || myWork === 'y') {
    alert('Yeah thats right, I have worked for 5 months and then start this course');
    userScore++;
} else if (myWork === 'no' || myWork === 'n') {
    alert('Actually I have worked for 5 months and then start this course');
} else {
    alert('you should answer with either yes/y or no/n next time');
}
}
question4();


// fifth question
let myInterest = prompt('Ok we are almost done ' + userName + '. Do you think I love video games?');
myInterest = myInterest.toLowerCase();
// console.log(myInterest);

if (myInterest === 'yes' || myInterest === 'y') {
    alert('Sure thats right ' + userName);
    userScore++;
} else if (myInterest === 'no' || myInterest === 'n') {
    alert('No, sure I love video games');
} else {
    alert('you should answer with either yes/y or no/n next time');
}


// sixth question
let number = prompt('If you combine my birthday date (day + month), you\'ll get a number between (0-20), you have only 4 opportunities to guess what is?');
// console.log(number);

for (let i = 1; i < 4 || number == 10; i++) {
    if (number == 10) {
        alert('that was right, ' + userName);
        userScore++;
        break;
    } else if (number > 10 && number <= 20) {
        number = prompt('too high number, choose lower');
    } else if (number < 10 && number >= 0) {
        number = prompt('too low number, choose higher');
    } else {
        number = prompt('choose only a number between (0-20)');
    }
}
if (number != 10) {
    alert('the correct answer is 10')
}


// seventh question
let favouriteAnimes = ['attack on titan','steins gate','psycho-pass','hunter x hunter','black clover']
let favouriteAnimesAnswer = prompt('guess one of my top five favourite anime, you have only 6 opportunities')
favouriteAnimesAnswer = favouriteAnimesAnswer.toLowerCase

for (let i = 1; i < 6 ; i++) {
    if (favouriteAnimesAnswer === favouriteAnimes[0] || favouriteAnimesAnswer === favouriteAnimes[1] || favouriteAnimesAnswer === favouriteAnimes[2] || favouriteAnimesAnswer === favouriteAnimes[3] || favouriteAnimesAnswer === favouriteAnimes[4]) {
        alert('that was right')
        userScore++;
        break;
    } else {
        favouriteAnimesAnswer = prompt ('it wasn\'t, think of another one')
    }
}




alert('It was fun to play with you, ' + userName + ' your score equal = ' + userScore + ' out of 7');
