
//*************************string declare in Es6********************88
// Es6 e string template manei bactrik sign ditein hobe


// var str=`jahid hasan

//   department of computer science and engineering 
  
//        university of rajshahi` //(``) ai symbol ke bolr baptik sign ,Es6 er version e string ke baptik sign er maje jevabe raka hobe souce code run korle same structur e output debe
//  console.log(str)

// var name='jahid hasan'
// var age=21
// console.log('my name is '+name +' i am '+age +' years old')// ai souce code es5 version er ,ata es6 er ceye kotin mone raka

//  var age=21
 //var name='jahid hasan'
//  console.log(`my name is ${name} and i am ${age} years old`) // Es6 code 
//  //dolar sign er pore second braket dite hobe, braket er maje akti single statement use kora jabe,

//  console.log(`i am ${age>18?'':not}adult`) //baket er maje ternay conditional logic use kora hoyese

//console.log(name.padStart(15))// string er total length hobe 15,jodi string er      length 15 na hoy tahole white space niye 15 fillup korbe,ar white space gulo samne theke print korbe


//console.log(name.padEnd(15))//age name er string print korbe ,then 15 ti chacter ceye kom character thakte name er pore 15 ti chacter length korte je koyti white space lage sei koyti white space print korbe


//console.log(name.padStart(15,'m'))// akane white space er jaygay m print korbe 15 length fillup korar jonno
//console.log(name.padEnd(15,'j'))// abr string er length 15 korar jonno je koyti baki thake sei koy j print hobe name string er pore
// console.log('s'.repeat(15))// akane s character ti 15 ber print hobe
// console.log(name.repeat(5))





    //*****************************var vs let vs const***************************

    // cons dara  variable declare kore pore value assign korle pore ai variable er 
    // value r change kora jabe na,change korle error throw korbe


    // const a=100 // ai value er fixed ,jodi change kora hoy tahole error dekabe
    // console.log(a)
    // //a=20 // akane const variable a er value change kora hoyese ,tai error throw korbe
    // console.log(a) 
    

    //  var a=10
    //  function add(b){
    //      var c=b
    //      console.log(c)
    //  }
    //  add(a)
    // // console.log(c)// akane c variable ke access kora jabe na,cause c variable function er maje block hoye 
    //                // thakbe
    // for(var i=1;i<10;i++){

    // }
    // console.log(i) // but akane i ke bahire theke access kora jabe,for loop function er moto block creat kore na
    // var c=10
    // if(true){
    //     var d=100
    // }
    //  console.log(d) // if else er body o function er moto block create kore na
    //                // tai er maje kono variable var key word diye korleo take if else er body er bahirea thekeo acces kora jabe


    // but amora jodi kono variable for loop or if else body era maje let key word dara declare kori tahole 
    // take habirea theke r access kora jabe na
    // example below

    // if(true){
    //     let a=100
    //     console.log(a)

    // }

    // console.log(a) // a variable let dara if er body te declare kora hoyese tai a ke bajire theke access 
    //kora jabe na ,akane block hisabe thakbe a variable let dara declare korar joonno



    //*******************************************Arrow function********************************

    // function 2 vabe declare kor jay 
    // 01. function declaretion
    // 02.function expression
    

    // Arrow function declare korar somoy must be function expression declaraation way use korte hobe
    

     // function declaretion
    // function add(a,b){
    //     return a+b
    // }
    //console.log(add(12,13))



    //function expression
    // let sum=function(a,b){
    //     return a+b
    // }

    //console.log(sum(24,25))


    // arrow function declaretion below
    // let arrowfunction=(a,b) =>{
    //     return a+b
    // }



   // arrow function er maje jodi single line statement thake tahole second braket na use korleo cholbe
   // single line statement hole return b*c er poriborte shudu b*c dilei correct output asbe

//   console.log(arrowfunction(12,13)) 
//   let multiply=(b,c)=> b*c
//   console.log(multiply(12,12))



    // jodi arrow function er argument akti hoy tokon second braket na use korleo output thikthak asbe
    // example below:

    //   let sqr=x=>x*x
    //   console.log(sqr(50))



   // **********************************arrow function this keyword******************************

   // arrow function er maje this keyword  ter parent function ba object ke refer kore


//    let obj={
//        x:20,
//        print:()=>{
//            console.log(this) // ai arrow function er this keyword window object ke reffer korbe
//        }
//    }

//    obj.print()// window object return korbe

// function testMe(){
//     console.log(this);
// }
// testMe();//this winwod object ke refer korbe

// let obj={
//     name:'jahid hasan',
//     printt:function () {
//         console.log(this) // obj object ke refer korbe
        
//     }

// }

// obj.printt();



// let obj={
//     name:'jahid hasan',
//     printt: ()=> {
//         console.log(this) // arrow function er majer this window object ke refer korse
//         // arrow function er majer this create korar kono capacity nai
//         // ai jonno window object ke refer korse
//         // arrow function er majer this sobsmoy window object ke refer korb

        
//     }

// }

// obj.printt();


//**********************************default parameter in javascript******************** */


// function sqr(n) {
//     return n*n;
    
// }
// console.log(sqr()) // akane kono parameter pass kora hoyni ai jonno n=undefined hobe
// undefined*undefined=nan


// solution for this problem
// function sqr(n){
//     if(!n){
//         n=1;
//     }
//     return n*n;
// }
// console.log(sqr());

// another solution

// function sqr(n){
//     n=n||1
//     return n*n;
// }
// console.log(sqr());


//another solution
// function sqr(n=1){
 
//     return n*n;
// }
// console.log(sqr());//  if we donot give some value then default value 1 assign in n

// function sqr(n=1){
   
//     return n*n;
// }
// console.log(sqr(5));// out put show 25

// function greet(name,msg) {
//     console.log(`${msg} ! ${name}`);
    
// }
// greet('jahid hasan','hello')

//********************iterable object in javascript******************

// let obj={
//     start:1,
//     end:10,
//     [Symbol.iterator]:function () {
//         let currentValue=this.start;
//         const self=this;
//         return {
//             next(){
//                 return {
//                     done:currentValue>self.end,
//                     value:currentValue++
//                 }
//             }
//         }
        
//     }
// }
// for(let v of obj){
//     console.log(v);
// }



//********************************Rest and spread operator ****************************


// (...) ai 3 ti dot kokono rest oprator abr kokono spread operator hisabe kaj kore
// jodi function er parameter er maje use korle tokon aiti rest operator hisabe kaj korbe
//  others onno sob jaygay use korle tokon spread operator hisabe kaj korbe


// function sum(){
//     let sum=0;
//     for(let i=0;i<arguments.length;i++)
//     sum+=arguments[i];
//     return sum;
// }
// console.log(sum(1,2,3,4,5));

// above code implement by rest operator given below

// function sum(...rest) {
//     // rest operator er pore ar kono perameter pass kora jabe na
//     // rest er age sob parameter pass korte hobe

//     return rest.reduce((a,b)=>a+b);

    
// }

// console.log(sum(1,2,3,4,5));

// let arr=[1,2,3,4,5,6];
// console.log(arr);
// // array ke singular data  te convert korar jonno spreed operator use kora hoy
// console.log(...arr)

// let obj={
//     a:12,
//     b:14,
//     c:45,
//     d:67
// }
// //console.log(obj);
// let obj2={
//     ...obj
// }
// console.log(obj2);




//***********************************destructing in javascript*******************

// let person={
//     name:'jahid hasan',
//     email:'maaazahidhasan@gmail.com',
    

// }
// let {name,email}=person
// console.log(name,email);


// let person={
//     name:'jahid hasan',
//     email:'maaazahidhasan@gmail.com',
//     address:{
//         city:'dhaka',
//         country:'bangladesh'
//     }

// }
// let {name,email,address,address:{city,country}}=person
// console.log(name,email,city,country)





// //**************************************object from entrise***************
// let obj={
//     a:12,
//     b:32
// }
// console.log(Object.entries(obj))//object ke array te convert korbe


// let objArr=[
//     ['a',12],
//     ['b',34]
// ]
// console.log(Object.fromEntrise(objArr))// array ke object e convert korbe


//******************************symbol in javascript************ */

// let s1=Symbol();
// let s2=Symbol('my name is jahid')
// console.log(s1)
// console.log(s2)
// console.log(s1===s2) // false output ,2 ta symbol kokono same hote pare na




//**********************************iterator***************************

// count korai hosse iterator
// traviling in array is a iterator ,it is a basic iterator
 
// const arr=[1,2,3,4,5,6,7,8,9];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }



// je object er opor iterate gotabe sei object ke iterable hote hobe
// array akta iterable object
//string akta iterable object
// set map iterable object
// agulor maje iterable interface add kora ase
// iterator nothing but a object
// protita iterator er akta next method ase ,ai next method ke call korar sathe sathe 
// se current value ta dey ,r iteratr kora hbe kina sei bisoy ta represent kore

// 


// simplest iterator
// akta function create korte hobe
// function ti akta object return korbe
// sei object er maje  akta next name method thakbe
// next methhod akta object ke return korbe
// sei object ar maje 2 ta property thakbe


// const arr=[1,2,3,4,5,6,7,8,9];
// function createIterator(collector){
//     let i=0
//     return {
//         next(){
//             return {
//                 done:i>=collector.length,
//                 value:collector[i++]
//             }
//         }
//     }
// }
// let iterate=createIterator(arr);
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

//**************************iterator with symbol in javascript*********************
// jodi kono object er maje jodi symbol.iterator property ti thake tahole sei object
// ke iterator object bole



// const arr=[1,2,3,4,5,6,7,8];
//console.log(arr[Symbol.iterator])// array ti iterable kina ta check kore
// output akta function asle buja jabe array tir maje iterable property ase
//console.log('sadfa'[Symbol.iterator])// string iterable kina ta check korbe


// const arr=[1,2,3,4,5,6,7,8];
// let iterate=arr[Symbol.iterator]();
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())
// console.log(iterate.next())

// string iterator

// let str='hsjdfja';
// let textIterate=str[Symbol.iterator]();
// console.log(textIterate.next());
// console.log(textIterate.next());
// console.log(textIterate.next());
// console.log(textIterate.next());
// console.log(textIterate.next());
// console.log(textIterate.next());
// console.log(textIterate.next());
// console.log(textIterate.next());
// console.log(textIterate.next());
// console.log(textIterate.next());
// console.log(textIterate.next());
// console.log(textIterate.next());
// console.log(textIterate.next());
// console.log(textIterate.next());
// console.log(textIterate.next());





//***********************for of loop es6************************************
// for of loop kaj korar jonno obosoi obosoi sei object ke iterable hote hobe


// const arr=[1,2,3,4,5,6,7]
// for(let v of arr){
//     console.log(v);
// }


// const str='sjfhalhasdf';
// for(let v of str){
//     console.log(v);
// }

// let obj={
//     a:12,
//     b:234,
//     c:325
// }
// for(let v of obj){
//     console.log(v)// object er maje iterrable property nei
//     // tai object er somoy for of loop kaj korbe na
// }

//*****************************generator in javascript*************************
// generator hosse akta system
// jekono kishu ke iterator banano ba jekono kishu theke iterator object return korar jonno
//generator use kra hoy
// kono function er sathe akta * sign dile seiti generator hoye jay


// let obj={
//     start:1,
//     end:5,
//     [Symbol.iterator]:function*(){
//         let currentValue=this.start;
//         while(currentValue<this.end){
//             yield currentValue++;
//         }
//     }
// }

// let iterate=obj[Symbol.iterator]();
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// generator amn akti function je er maje jai dei na kno ata sobsomoy akta iterator return kore







//********************************set datastructure in javascript**********************


// let set =new Set([1,2,3,4,5,6,7]); // set declare with initializw
// console.log(set);
// set.add(12);
// set.add(34);
// set.add(56);
// console.log(set);

//set datastructure er maje kono data duplicat diye jay na.
// means ,akoi value 2 ber raka jay na,rakleo consolo log korle double dekabe na
let set=new Set([1,2,3,4,5])
set.add(3);
set.add(5);
set.add(2);
set.add(23);
set.add(45);

//console.log(set); // output: 1,2,3,4,5
// kono data double hoy ni
// kono set er vitore jodi duplicat data provided kori set segulo skip korbe
//console.log(set.size);

//some method of set
// set.clear(); // set e  ar kono element thakbe na
// console.log(set);

set.delete(3)// unique  1 ta element delete korbe
console.log(set);
console.log(set.has(4));//  4 element set a thakle true return korbe ,na thakle false return korbe
console.log(set.keys())
console.log(set.values());
let iterate=set.values()
console.log(iterate.next());// set iterable



