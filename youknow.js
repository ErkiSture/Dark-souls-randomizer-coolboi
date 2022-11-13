/* let a;
let b;
let c; */

/* a = window.prompt("Enter sida A");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("side C:", c) */

/* document.getElementById("submitButton").onclick = function(){
    
    a = document.getElementById("aTextBox").value
    a = Number(a);

    b = document.getElementById("bTextBox").value
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "side C: " + c;
}  */

/* let count = 0;

document.getElementById("decreaseBtn").onclick = function(){
    count-=1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function(){
    count=0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function(){
    count+=1;
    document.getElementById("countLabel").innerHTML = count;
} */




/* let x;
let y;
let z;

document.getElementById("rollBtn").onclick = function(){

    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xLabel").innerHTML = x;
    document.getElementById("yLabel").innerHTML = y;
    document.getElementById("zLabel").innerHTML = z;

} */




/* let fullName = "Din mamma";
let firstName;
let lastName;

firtName = fullName.slice(0, fullName.indexOf(" "))
lastName = fullName.slice(fullName.indexOf(" ")+1);

console.log(firtName);
console.log(lastName); */




/* let age = 17;

if(age >= 18){
    console.log("you are an adult!");
}
else{
    console.log("schmooll");
}

let online = true
if(online){
    console.log("cool");
} */





/* document.getElementById("myBtn").onclick = function(){
const myCheckBox = document.getElementById("myCheckBox")
const visa = document.getElementById("visaBtn")
const mastercardBtn = document.getElementById("mastercardBtn")
const paypalBtn = document.getElementById("paypalBtn")


    if(myCheckBox.checked){
        console.log("okay")
    }
    else{
        console.log("not cool bro")
    }

    if(visaBtn.checked){
        console.log("you are paying with a Visa!");
    }

    else if(mastercardBtn.checked){
        console.log("you are paying with mastercard yeah boi")
        }

    else if(paypalBtn.checked){
            console.log("you are paying with paypal das raight")
        }
     else{
        console.log("you must select payment type");
    }
} */






/* let grade = "C";

switch(grade){
    case "A":
        console.log("you did great");
        break;
    case "B":
        console.log("You dig good");
            break;

     case "C":
        console.log("You did okay");
            break;
    case "D":
        console.log("You did well");
            break;      
    case "E":
        console.log("ver ygood actually");
            break;  
    default:
        console.log(grade, "is not a letter grade")
} */



/* let temp = 30;

if(temp <= 0 || temp > 30){
    console.log("yo mheom");
} */

/* let temp = 16;

if(!(temp > 15)){
    console.log("fem");
} */



/* let userName = "";

do{
    userName = window.prompt("enter your name")
}while(userName == "")
console.log("hello", userName) */



/* for(let i = 10; i > 0; i-=1){
    console.log(i)
}
console.log("HAPPY NEW YEAR!") */



/* for(let i = 1; i <=20; i+=1){
    if(i==13){
        break;
    }
    console.log(i);
} */


/* let rows = window.prompt("how many rows boi?");
let columns = window.prompt("how many coloumns ma boi?");

for(let i = 1; i <= rows; i+=1){
    for(let j = 1; j <= columns; j+=1){
        document.getElementById("myRectangle").innerHTML += 1;
    }
    document.getElementById("myRectangle").innerHTML += "<br>"
} */





/* let area;

let width = window.prompt("enter width");
let height = window.prompt("height enter");

area = getArea(width, height);

console.log("Area är", area);

function getArea(width, height){
    let result = width * height;
    return result;
} */


/* let adult = checkAge(17);
console.log(adult)


function checkAge(age){
    return age >= 18 ? true : "din mamma";
} */







/* const answer = Math.floor(Math.random()*10)+1;
let guesses = 0;


document.getElementById("submitButton").onclick = function(){

    let guess = document.getElementById("guessField").value;
    guesses+=1;

    if (guess == answer){
        alert(`${answer} is the number! It took ${guesses} guesses`);
    }
    else if(guess < answer){
        alert(`too low boi`);
    } 
    else{
        alert(`to big boi`);
    } 
} */




/* document.getElementById("submitBtn").onclick = function(){
    
    let temp;    

    if((document.getElementById("cBtn")).checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = Math.round((toCelsius(temp)*100))/100;
        document.getElementById("tempLabel").innerHTML = temp + "°C";
        }

    else if((document.getElementById("fBtn")).checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = Math.round((toFahrenheit(temp)*100))/100;
        document.getElementById("tempLabel").innerHTML = temp + "°F";

    }


    else{
        document.getElementById("tempLabel").innerHTML = "Select a unit"
    }
}

function toCelsius(temp){
    return ( (temp-32) * (5/9) )
}
function toFahrenheit(temp){
    return ( temp * (9/5) + 32 )
} */


/* document.getElementById("startBtn").onclick = function(){

    for(i = 1; i<=10; i+=1){
        
        let randomSiffra = Math.floor(Math.random()*10);
        console.log(randomSiffra)
        document.getElementById("sifferLabel").innerHTML = randomSiffra;

    }
}
 */








/* document.getElementById("startBtn").onclick = function(){
    
    setTimeout(firstNumber, 1000)
    setTimeout(secondNumber, 2000)
    setTimeout(thirdNumber, 3000)    
    setTimeout(fourthNumber, 4000)    
    setTimeout(reset, 5000)
}

function firstNumber(){
    let rng = randomSiffra();        
    console.log(rng)
    return document.getElementById("sifferLabel").innerHTML = rng;
}
function secondNumber(){
    let rng = randomSiffra();        
    console.log(rng)
    document.getElementById("sifferLabel").innerHTML = rng;
}
function thirdNumber(){
    let rng = randomSiffra();        
    console.log(rng)
    document.getElementById("sifferLabel").innerHTML = rng;
}    
function fourthNumber(){
    let rng = randomSiffra();        
    console.log(rng)
    document.getElementById("sifferLabel").innerHTML = rng;       
}
function randomSiffra(){
    return Math.floor(Math.random()*10);   
}
function reset(){
    document.getElementById("sifferLabel").innerHTML = "";
} */



/* let fruits = ["apple", "banana", "pear", "orange"]

fruits.push("kiwi");
fruits.pop();
fruits.unshift("mango");
fruits.shift();

let length = fruits.length;
let index = fruits.indexOf("apple")

console.log(index)
 */




/* let prices = [5, 10, 15, 20, 30];
 */
/* for(let i = prices.length - 1; i >= 0; i-=1){
    console.log(prices[i]);
}
 */

/* for(let price of prices){
    console.log(price)
} */





/* let fruits = ["apple", "banana", "pear", "orange"]

fruits = fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit)
} */





/* let fruits = ["apples", "oranges", "bananas"]
let vegetables = ["carrots", "onions", "potatoes"]
let meats = ["eggs", "chicken", "fish"]

let groceryList = [fruits, vegetables, meats]

groceryList[0][0] = "mangos"


for(let list of groceryList){
    for(let food of list){
        console.log(food)
    }
} */






/* let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let class1 = ["david", "krister", "erik"]
let class2 = ["brap", "plint", "oskar"]

class1.push(...class2);

console.log(...class1);
 */






/* let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, c, 8))

function sum(...numbers){
    let total = 0;
    for(let i of numbers){
        total +=i;
    }
    return total;
} */








/* let total = sum(2, 3)
displayDOM(total);

function sum(a, b){
    let result = a + b;
    return result;
}

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output;
} */










/* allStats.splice(3, 1)
console.log(...allStats)
*/





/* function randomizeStats(){
    let newArray = allStats
    for(i = 1; i <= 3; i += 1){
        mathRandom = Math.floor(Math.random()*allWeapons.length);
        let random = newArray[mathRandom];
        console.log(random);
    }
} */












/* grades = grades.sort(descendingSort);

function descendingSort(x, y){
    return y - x;
}

grades.forEach(print)

function print(element){
    console.log(element)
} */







/* function randomizeStats(arr, num) {
    const shuffled = [...allStats].sort(() => 0.5 - Math.random());
    
    return shuffled.slice(0, num);
}

const arr = ['b', 'c', 'a', 'd'];
console.log(...randomizeStats(arr, 3)); // 👉️ ['c', 'b', 'c'] */  


/* function cap(arr){
    return arr.map(element => element.slice(0, element.length-1) + element.charAt(element.length-1).toUpperCase())
} 
console.log(cap(['hello', 'world']));  */










//weapon randomizer

const daggers = ["Dagger", "Royal Dirk", "Black Flamestone Dagger", "Parrying Dagger", "Bandit's Knife", "Mytha's Bent Blade", "Shadow Dagger", "Thief Dagger", "Broken Thief Sword", "Manikin Knife", "Umbral Dagger", "Blue Dragon", "Retainer's Short Sword"]
const lances = ["Heide Lance", "Heide Greatlance", "Grand Lance", "Chariot Lance", "Rampart Golem Lance"];
const greatbows = ["Alonne Greatbow", "Dragonslayer Greatbow", "Possessed Armor Greatbow", "Twin-headed Greatbow"];
let allWeapons = [];

allWeapons.push(...daggers, ...lances, ...greatbows);

function randomizeWeapon(){
    //document.querySelector('#weaponLabel').style.color = '';
    let displayWeapon = allWeapons[Math.floor(Math.random()*allWeapons.length)];
    document.getElementById("weaponLabel").innerHTML = displayWeapon;
}


//stat randomizer
let allStats = ["vgr", "end", "vit", "adp", "str", "dex", "int", "fth", "atn"]

function randomizeStats(arr){
    var minValue = document.getElementById("numberTitle").innerHTML;
    var maxValue = document.getElementById("numberTitle2").innerHTML - minValue + 1;
    let howManyStats = Math.floor(Math.random()*(maxValue)) + +minValue;
    console.log(howManyStats)
    const shuffled = [...arr].sort((a, b) =>  0.5 - Math.random());
    document.getElementById("statLabel").innerHTML = shuffled.slice(0, howManyStats).join(" ");
    document.getElementById("statLabel").style.color = "rgb(222, 15, 91)";
    if(isNaN(minValue) == true || isNaN(maxValue) == true){
        document.getElementById("statLabel").innerHTML = "select limits";
        document.getElementById("statLabel").style.color = "rgb(146, 13, 60)";
    }
 }    


//select min limit, stat randomizer
function selectMin(number){
    var maxValue = document.getElementById("numberTitle");
    maxValue.innerHTML = number;
    document.getElementById("numberDropdownContent").style.display = "none";
}

const checkMouseOver = document.querySelector(".dropdown");
const checkMouseOut = document.querySelector(".dropdown")

checkMouseOver.addEventListener("mouseover", e => {
    document.getElementById("numberDropdownContent").style.display = "block";
})

checkMouseOut.addEventListener("mouseleave", e => {
    document.getElementById("numberDropdownContent").style.display = "none";
})

//select max limit, stat randomizer
function selectMax(number){
    var maxValue = document.getElementById("numberTitle2");
    maxValue.innerHTML = number;
    document.getElementById("numberDropdownContent2").style.display = "none";
}

var checkMouseOver2 = document.querySelector(".dropdown2");
var checkMouseOut2 = document.querySelector(".dropdown2")

checkMouseOver2.addEventListener("mouseover", e => {
    document.getElementById("numberDropdownContent2").style.display = "block";
})

checkMouseOut2.addEventListener("mouseleave", e => {
    document.getElementById("numberDropdownContent2").style.display = "none";
})