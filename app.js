/*
CHAPTER # 21 - 25
TASK : 1
var a = prompt("Enter Your First Name");
var b = prompt("Enter Your Last Name");
var c = (a +" "+ b);

alert("Welcome Mr: " + c);
*/

/*
// TASK : 2
var model = prompt("Enter Your Favourite Phone Model");
var a = model.slice(0,1);
a = a.toUpperCase()
var b = model.slice(1)
b = b.toLowerCase()

var model = a+b;
console.log(model)

var value = 'Infinix S5 Lite Samsung S5 Edge Samsung Galaxy S6 Edge Plus';
var indxNum = value.indexOf('Samsung Galaxy S6 Edge Plus')
console.log(indxNum)

var arr = ['Infinix S5 Lite','Samsung S5 Edge','Samsung Galaxy S6 Edge Plus']
for (var i=0; i<arr.length; i++){
    if(arr[i] === model){
        alert('Your Favourite Cell Phone Model Found');
    }
    else{
        alert('Your Choice is not available');
    }
}
*/

//TASK : 3
/*
var pak = 'Pakistani';
var indxNum = pak.indexOf('n')
document.write("Pakistatani");
document.write("<br>"+"Index of 'n' is: "+ indxNum)
*/

//TASK : 4
/*
var world = 'Hello World';
var indxNum = world.lastIndexOf('l')
document.write("Hello World");
document.write("<br>"+"Index of 'l' is: "+ indxNum)
*/

// TASK : 5
/*
var paki = 'Pakistani';
var indxNum = paki.indexOf('i')
document.write("Pakistani");
document.write("<br>"+"Character at index "+ indxNum+ ": i")
*/

// Task : 6
/*
var a = prompt("Enter Your First Name");
var b = prompt("Enter Your Last Name");
var c = (a +" "+ b);

document.write("Welcome Mr: " + c);
*/

// TASK : 7  not working program
/*
var hyder = "Hyderabad";
var indexNum = hyder.indexOf('Hyder')
var firstText = hyder.slice(0,indexNum)
var replaceText = 'Islamabad';
var thirdText = hyder.slice(indexNum + 0)

document.write("City: "+firstText  + replaceText+  "<br>"+ thirdText);

*/

//TASK : 8
/*
var and = "Ali and Sami are best friends. They play cricket and football together.";
var value = and.replace(/and/g,"&");
console.log(value)
*/

//TASK : 9
/*
var a = ("472");
var b = a.replace("472",472);
document.write("value: "+a+ "<br>" +"Type: String"+ "<br>" + "Value: "+b+"<br>" + "Type: Number")
*/

//TASK : 10
/*
var up = prompt("Enter Your Choice Word");
var value = up.toUpperCase()
document.write(value);
*/

//TASK : 11
/*
var a = prompt("Enter Your Choiced Words");
var convert = a.slice(0,1);
convert = convert.toUpperCase()
var convert2 = a.slice(1);
convert2 = convert2.toLowerCase()

var a = convert + convert2 ;
document.write(a);
*/

// TASK : 12    Not Running Properly
/*
var a = "35.36";
var numInteger = Number(a);

document.write(numInteger);
*/

// TASK : 13



// TASK : 14
/*
var item = prompt('Welcome to AAMIR Bakery, What do you want to order sir/mam')

var arr = ['Cake','Apple pie','Cookie','Chips','Patties']
for (var i=0; i<arr.length; i++){
    if(arr[i] === item){
        alert('Item Has Found')
    }
    else{
        alert('We are sorry '+ item + ' is not available in our Bakery.')
    }
}
*/

// TASK : 16
/*  NOT PROPER RUN DON'T KNOW SPLIT METHOD
var arr = ["University of Karachi"]
for (var i=0; i<arr.length; i++){
    document.write(i);
}
*/

// TASK : 17
/*
var paki = 'Pakistan';
var indxNum = paki.lastIndexOf('n')
document.write("Pakistan");
documet.write(indxNum);
*/

/*==================================================*/

//CHAPTER # 26 - 30
//TASK : 1
/*
var a = 3.45214;
var b = 3;
var c = 3.2;

var round = Math.round(b)
var floor = Math.floor(b)
var ceil = Math.ceil(c)

document.write("Number: "+a+ "<br>")
document.write("Round of value: "+round+ "<br>")
document.write("Floor of value: "+floor+ "<br>")
document.write("Ceil of value: "+ceil+ "<br>")
*/

//TASK : 2
/*
var a = -2.673;
var b = -3;
var c = -2.9;

var round = Math.round(b)
var floor = Math.floor(b)
var ceil = Math.ceil(c)

document.write("Number: "+a+ "<br>")
document.write("Round of value: "+round+ "<br>")
document.write("Floor of value: "+floor+ "<br>")
document.write("Ceil of value: "+ceil+ "<br>")
*/

// TASK : 3

// TASK : 4
/*
var value1 = prompt("Try Your Dice");
var value2 = prompt("Try The Your Next Dice");
var a = Math.random() * 2;
var floor = Math.floor(a);
if(floor === 0){
    alert("Dice "+ value1 + " Win the Dice")
}
else{
    alert("Hurrah "+ value2 + " Win the Sixer")
}
*/

// TASK : 5
/*
var value1 = prompt("Try Your Chance");
var value2 = prompt("Second One Try The Your Chance");
var a = Math.random() * 2;
var floor = Math.floor(a);
if(floor === 0){
    document.write("Congrates "+ value1 + " Win the Head")
}
else{
    document.write("Hurrah "+ value2 + " Win the Tail")
}
*/

//TASK : 6

//TASK : 7
/*
var a = prompt("Enter Your Weight")
var round = Math.round(a)
alert(round)
*/

/*==================================================*/

//CHAPTER # 31-34
// TASK : 01
/*
var a = new Date();
document.write(a);
*/

//TASK : 02
/*
var a = new Date();
var month = a.getMonth()
document.write(month);
*/

//TASK : 03
/*
var a = new Date();
var b = a.toString();
var c = b.slice(0,3)
document.write(c);
*/

// TASK : 04


// TASK : 05

var a = new Date();
document.write(c)
