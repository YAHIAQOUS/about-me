'use strict';


let userName = prompt('Hello, what\'s your name?');
alert('Lets be friends ' + userName + ', my name is Yahia and lives in Jordan \nI will play a game with you called "about me"');

alert('Ready? Lets go ' + userName);

let userScore = 0


// first question
function question1() {
    let myNationality = prompt('Do you think I am Jordanian? \nYou should answer with either yes/y or no/n');
    myNationality = myNationality.toLowerCase();
    // console.log(myNationality);

    if (myNationality === 'yes' || myNationality === 'y') {
        alert('No I am Palestanian, but sure I love Jordan and Jordanian people')
    } else if (myNationality === 'no' || myNationality === 'n') {
        alert('That was right ' + userName);
        userScore++;
    } else {
        alert('You should answer with either yes/y or no/n next time');
    }
}
question1();



// second question
function question2() {
    let myBorn = prompt('Ok now do you think I was borned in Jordan? \nYou should answer with either yes/y or no/n');
    myBorn = myBorn.toLowerCase();
    

    if (myBorn === 'yes' || myBorn === 'y') {
        alert('Yeah thats right, ' + userName + '. In Amman')
        userScore++;
    } else if (myBorn === 'no' || myBorn === 'n') {
        alert('No, I was borned in Amman, Jordan');
    } else {
        alert('You should answer with either yes/y or no/n next time');
    }

}
question2();


// third question
function question3() {
    let myEducation = prompt('Do you think I have a bachelor degree in software development? \nYou should answer with either yes/y or no/n');
    myEducation = myEducation.toLowerCase();


    if (myEducation === 'yes' || myEducation === 'y') {
        alert('Actually no, I have a bachelor degree in Architecture and learning about web development in LTUC these days');
    } else if (myEducation === 'no' || myEducation === 'n') {
        alert('Yeah thats right, I have a bachelor degree in Architecture and learning about web development in LTUC these days');
        userScore++;
    } else {
        alert('You should answer with either yes/y or no/n next time');
    }
}
question3();



// fourth question
function question4() {
    let myWork = prompt('Do you think I have been working before starting this course? \nYou should answer with either yes/y or no/n');
    myWork = myWork.toLowerCase();


    if (myWork === 'yes' || myWork === 'y') {
        alert('Yeah thats right, I have worked for 5 months and then start this course');
        userScore++;
    } else if (myWork === 'no' || myWork === 'n') {
        alert('Actually I have worked for 5 months and then start this course');
    } else {
        alert('You should answer with either yes/y or no/n next time');
    }
}
question4();



// fifth question
function question5() {
    let myInterest = prompt('Ok we are almost done ' + userName + '. Do you think I love video games? \nYou should answer with either yes/y or no/n');
    myInterest = myInterest.toLowerCase();


    if (myInterest === 'yes' || myInterest === 'y') {
        alert('Sure thats right ' + userName);
        userScore++;
    } else if (myInterest === 'no' || myInterest === 'n') {
        alert('No, sure I love video games');
    } else {
        alert('You should answer with either yes/y or no/n next time');
    }
}
question5();




// sixth question
function question6() {
    let attempts = 4
    let number = 0
    for (let i = attempts; i > 0; i--) {
        number = prompt(`If you combine my birthday date (day + month), you\'ll get a number between (0-20), you have only ${i} opportunities to guess what is?`);
        if (number == 10) {
            alert('That was right, ' + userName + ' I borned on 6/4');
            userScore++;
            break;
        } else if (number == 8 || number == 9 || number == 11 || number == 12) {
            if (i != 1) {
                alert('Too close number');
            } else {
                alert('You spent all the attempts');
            }
        } else if (number > 12 && number <= 20) {
            if (i != 1) {
                alert('Too high number, choose lower next time');
            } else {
                alert('You spent all the attempts');
            }
        } else if (number < 8 && number >= 0) {
            if (i != 1) {
                alert('Too low number, choose higher next time');
            } else {
                alert('You spent all the attempts');
            }
        } else {
            if (i != 1) {
                alert('Choose only a number between (0-20) next time');
            } else {
                alert('You spent all the attempts');
            }
        }
        if (number != 10 && i == 1) {
            alert('I borned on 6/4, the correct answer is 10')
        }
    }
}
question6();





// seventh question
function question7() {
    let favoriteAnimes = ['attack on titan', 'steins gate', 'psycho-pass', 'hunter x hunter', 'black clover'];

    let userAnswer = ''
    let attempts = 6

    for (let i = attempts; i > 0; i--) {
        userAnswer = prompt(`Guess one of my top five favourite anime? \nYou have only ${i} opportunities`);
        userAnswer = userAnswer.toLowerCase();


        for (let j = 0; j < 5; j++) {
            if (userAnswer === favoriteAnimes[j]) {
                alert('That was right, this is my favorite list: \n' + favoriteAnimes);
                userScore++;
                i = 0;
                break;
            } else if (j == 4 && i != 1) {
                alert('Wrong answer, think of another one');
            } else if (j == 4 && i == 1) {
                alert('Wrong answers, you spent all the attempts ' + userName + '\nThis is my favorite list: ' + favoriteAnimes);
            }
        }
    }
}
question7();



alert('It was fun to play with you, ' + userName + ' \nYour score = ' + userScore + ' out of 7');
