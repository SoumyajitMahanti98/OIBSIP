// var screen= document.body.calc.top.value;
var screen=document.getElementById("scr");
// console.log(screen.value=9); 
// console.log(screen.innerHTML ); it is a string
// screen.value=9;
// screen.value=9+'+'+10;
// console.log(screen.value);
// console.log(eval((9+10)+(2*2)));
// let exp=9+'+'+10;
// console.log(eval(exp));

screen.value='';
 function operate(input) {
     
//     // var exp=1+'+'+2;
//     // console.log(eval(exp));
//     let btn=document.getElementsByClassName("btn");
//     // btn.value=10;
//     let exp=' ';
//     //console.log(btn.value);
      screen.value=screen.value+input;
     console.log(screen.value);
    
       
 }
 function equal() {
    screen.value=eval(screen.value);
    console.log(screen.value);
    
 }

 function allClear(){
    screen.value="";
 }
 function del(){
    let str=screen.value;
    // screen.value=str.pop(); pop() only used with array not str
    screen.value=str.slice(0,-1);
 }