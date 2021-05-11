console.log(" devine providence");
console.log("devine love and wisdom");


console.log("spirituality,civility and morality");

let myname = "Success"
let myname1 = 'Oppong'

let myage = 23;
let myage1 = 22;
let userverified = true;
let usersignedin = false;

var username = "akoko";

var items = 20
var answer = true
var answer2 = false
var statement = "i am a web developer"
var user_age = "23"

const userpassword = 5731;

const password = "2222"
const title = "Delivery services"
const delete_item = false

let somevariable2;
let somevariable;

console.log(myname);
console.log(myage);
console.log(myage1);
console.log(answer2);
console.log(myname1);
console.log(user_age);
console.log(statement);

let student_names= ["Grace", "Firdaus", "Latifa", "processor"];
var ages= [21,23,20,21];
let myarray = ["kofi",577,false,{name:"samuel",age:45}]
let student1 = {name: "samuel", age:43, location: "kumasi"}

console.log(student1.location)

var myarray = [21,"Grace", true,false,3.5, "blue"];

console.log(myarray);
console.log(student_names)

console.log()


function deliveritem () {
    console.log("is this item yours")
}

deliveritem()

function addamount() {
    var sum = 5 + 4 + 16
    console.log(sum);
}

addamount();

const additems = () => {
    var num1  = 20
    var num2 = 34
    var ans = num1 + num2
    console.log(ans);
}

additems();

function addnumbers(a,b) {
    var sum = a + b 
    console.log(sum);
}

addnumbers (4,5)

function mulnum(a,b,c) {
 var mul = a*b*c
 console.log(mul);
}

mulnum (2,3,4);

function showmyname ( myname){
    console.log (myname)
}
showmyname("success")

var statement1 = "my age is"
var statement2 = 34
console.log(statement1 + " " + statement2)

console.log(`${statement1} ${statement2}`)

// return
function bottle(){
    var sum = 1+5
    return sum;
}
var cup = bottle()
console.log(cup)

// if statement

var mylaptop = "macbook"
if (mylaptop == "macbook"){
    console.log("you are right")
}else{
    console.log("you are wrong")
}

var num = 56
if ( num == 56){
    console.log("you are right")
}else{
    console.log("you are wrong")
}

var num = 56
if ( num == "56"){
    console.log("you are right")
}else{
    console.log("you are wrong")
}

var num = 56
if ( num === "56"){
    console.log("you are right")
}else{
    console.log("you are wrong")
}

// ternary operator
num == "56" ? console.log("true") : console.log("false")

var condition1 = "above 18"
var condition2 = "should be a ghanaian"
    
if ( (condition1 == "above 18") && (condition2 == "should be a ghanaian")){
    console.log("you can vote")
}else{
    console.log("you cant vote")
}

var condition1 = "above 18"
var condition2 = "should be a ghanaian"

if ( (condition1 == "above  18") || (condition2 == "should not be a ghanaian")){
    console.log("you can vote")
}else{
    console.log("you cant vote")
}

// for loops

for (var loop = 0; loop < 5; loop++){
    console.log(loop);
}

var counter = 0;
counter = counter + 1
  function addcounter(){
      for (var loop = 0; loop < 6; loop++){
          counter = counter + 1
          console.log(`counter is : ${counter}`)
      }
  }
  addcounter() 

  const scope = () => {
      var item1 = "mango"
      let item2 = "mango"
      const item3 = "pawpaw"

      item1 = 23
      item2 = "amaa"
    //   item3 = "pawpaw"

      console.log(item1);
      console.log(item2);
      console.log(item3);

    
  }
  scope();