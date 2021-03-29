'use strict';


let userName = prompt('Hello, what\'s your name?')
alert('Lets be friends ' + userName + ', my name is Yahia and lives in Jordan, I will play a game with you about me, you should answer with either yes/y or no/n')

alert('Ready? Lets go ' + userName)



let myNationality = prompt('Do you think I am Jordanian?')
myNationality = myNationality.toLowerCase()
// console.log(myNationality)

if (myNationality === 'yes' || myNationality === 'y') {
    alert('No I am Palestanian, but sure I love Jordan and Jordanian people')
} else if (myNationality === 'no' || myNationality === 'n') {
    alert('That was right ' + userName)
} else {
    alert('I am Palestanian if you dont know')
}



let myBorn = prompt('Ok now do you think I was borned in Jordan?')
myBorn = myBorn.toLowerCase()
// console.log(myBorn)

if (myBorn === 'yes' || myBorn === 'y') {
    alert('Yeah thats right, ' + userName + '. In Amman')
} else if (myBorn === 'no' || myBorn === 'n') {
    alert('No, I was borned in Amman, Jordan')
} else {
    alert('I was borned in Amman, Jordan if you dont know')
}



let myEducation = prompt('Do you think I have a bachelor degree in software development?')
myEducation = myEducation.toLowerCase()
// console.log(myEducation)

if (myEducation === 'yes' || myEducation === 'y') {
    alert('Actually no, I have a bachelor degree in Architecture and learning about web development in LTUC these days')
} else if (myEducation === 'no' || myEducation === 'n') {
    alert('Yeah thats right, I have a bachelor degree in Architecture and learning about web development in LTUC these days')
} else {
    alert('I have a bachelor degree in Architecture and learning about web development in LTUC these days if you dont know')
}



let myWork = prompt('Ok we are almost done ' + userName + '. So, do you think I have been working before starting this course?')
myWork = myWork.toLowerCase()
// console.log(myWork)

if (myWork === 'yes' || myWork === 'y') {
    alert('Yeah thats right, I have worked for 5 months and then start this course')
} else if (myWork === 'no' || myWork === 'n') {
    alert('Actually I have worked for 5 months and then start this course')
} else {
    alert('I have worked for 5 months and then start this course')
}



let myInterest = prompt('This is the last question, Do you think I love video games?')
myInterest = myInterest.toLowerCase()
// console.log(myInterest)

if (myInterest === 'yes' || myInterest === 'y') {
    alert('Sure thats right ' + userName)
} else if (myInterest === 'no' || myInterest === 'n') {
    alert('No, sure I love video games')
} else {
    alert('I love video games sure')
}

alert('It was fun to play with you, ' + userName)

