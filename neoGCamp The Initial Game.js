var readlineSync = require('readline-sync')
var score = 0
var username = readlineSync.question('May I know your name ? ')
console.log("************Welcome "+username+" to the Quiz on How well do you know Nikhil*************")
console.log("\n##############################")
console.log("\n*******RULES******")
console.log('1. There will be 10 Questions \n2. Each Question will give you 5 points \n3. Each wrong answer will give you -2 points')
console.log("\n##############################")

var questionOne = {
  question : 'what is my Birth Place \n a. Chandrapur \n b. Nagpur \n c. Patna \n d. Ranchi \n',
  answer : 'a'
}

var questionTwo = {
  question : 'who was my First Class Teacher (in DAV) \n a. Usha Singh Ma\'am \n b. Rachana Tiwari Ma\'am \n c. Yogita Pachpore Ma\'am \n',
  answer : 'a'
}

var questionThree = {
  question : 'Which Quater did i live in in Bhallar \n a. C-28 \n b. B-1 \n c. C-15 \n d. C-11 \n',
  answer : 'c'
}
// console.log(questionOne,questionTwo)
var questionFour = {
  question : 'In which class did i Join Bhavan\'s \n a. 1st \n b. 8th \n c. 10th \n d. 6th \n',
  answer : 'd'
}

var questionFive = {
  question : 'My name was in Newspaper for my 10th Result \n a. True \n b. False \n',
  answer : 'a'
}

var questionSix = {
  question : 'I took a drop after 12th before joining Engineering College \n a. True \n b. False \n',
  answer : 'b'
}

var questionSeven = {
  question : 'In which city was my College Situated \n a. Banglore \n b. Pune \n c. Mumbai \n d. Amravati \n',
  answer : 'd'
}

var questionEight = {
  question : 'In which Year did i passout from College \n a. 2020 \n b. 2018 \n c. 2019 \n d. Still in College \n',
  answer : 'c'
}

var questionNine = {
  question : 'I am currently Working in \n a. PayPal \n b. Cognizant \n c. TCS \n d. Ford \n',
  answer : 'b'
}

var questionTen = {
  question : 'Where am i currently Deployed \n a. Chennai \n b. Banglore \n c. Pune \n d. Kolkata \n',
  answer : 'a'
}

var questionEleven = {
  question : 'What kind of person am I \n a. Adamant \n b. Angry \n c. Opinionated \n d. Understanding \n',
  answer : 'd'
}

var questionTwelve = {
  question : 'I am a big Fan of \n a. Bike Rides \n b. Train Travel \n c. Bus Travel \n',
  answer : 'a'
}

var questionThirteen = {
  question : 'Out of Pune and Nagpur which city is dearest to me? \n a. Pune \n b. Nagpur \n',
  answer : 'a' 
}

var questionFourteen = {
  question : 'What is my role in Software Industry? \n a. DBA \n b. Systems Admin \n c. Web Developer \n d. Backend Developer \n',
  answer : 'a'
}

var questionFifteen  = {
  question : 'where do I currently Live \n a. Ranchi \n b. Nagpur \n c. Pune \n d. Chennai \n',
  answer : 'a'
}


var questionArr = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen, questionEleven, questionTwelve, questionThirteen, questionFourteen, questionFifteen]

function checkAnswer(question, answer){
  var userAnswer = readlineSync.question(question).toLowerCase()
  if(userAnswer === answer){
    console.log('Correct Answer, Well Done!!!')
    score +=5
  }else{
    console.log('Incorrect Answer, Better Luck next Time :)')
    score -=2
  }
  console.log('Current Score '+score)
  console.log('--------------------------------------------------')
}

for(i =0; i<questionArr.length;i++){
  checkAnswer(questionArr[i].question, questionArr[i].answer)
}

var highScore  = 55;
console.log('Final Score '+score)
if(score>highScore){
  console.log('Congratulations, you have setup a new highScore '+score)
  console.log('Send a Screenshot to me to claim Prize')
}else{
  console.log('you were just '+ (highScore-score) +' away from making a highScore')
  console.log("Better Luck Next Time !!!")  
}
