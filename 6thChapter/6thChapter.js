//***************************Recursive function***************************
//recursive function nijei nijeke call kore,
// function recursive(n){
//     console.log(n)
//     if(n==0)
//     return 
//     else recursive(n-1)
// }

// recursive(10)


//recursive function to find random generate number ,


// function random(n,cnt){
//     var guss=Math.round(Math.random()*10)
//     if(guss==n){
//         console.log('hurrah! i find the number, you tried '+cnt)
//         return 
//     }
//     cnt++
//    console.log('try again,')
//     random(n,cnt)
// }
// random(4,1)



    // //**************************curring in javascipt**************
    // function add(a,b,c) {
    //     return a+b+c
        
    // }
    // console.log(add(2,3,5))

   

    // akti function onno akti function return korbe,onno function ti abr arekti function return korb


    // function curring(a) {
    //     return function(b){
    //         return function(c){
    //             return a+b+c
    //         }
    //     }
        
    // }
    // var rsl=curring(3)(4)(6)
    // console.log(rsl)


      //*********************************function compossion in javascript********* */

      // akti function output onno akti function er output hisabe use kora hole tokon take function compositon bole

    //   function printt(intput) {
    //       console.log(intput)
          
          
    //   }

    //   function multiply(nn) {
    //       return nn*10
          
    //   }
    //   function add(a,b) {
    //       return a+b
          
    //   }

    //   printt(multiply(add(1,4)))

      //akane print function er input hisabe multiple function er output use hobe
      // r add function er output multiply function er input hisabe use hobe
      // 



      //*****************************Scope And closure in javascript*****************

       // javascript engine : java script engine is another  program which can red ,understand and translate javascript code
       // there are many javascript engine in the world
       // such as:
                //a.v8 (google create this engine)
                //b.spider monkey //mojila firefox browser
                //c.chakra  //provdie microsoft  use in there browser internet       explorer
                //d.javascript core.
               
        //tjyoifdgfoid






  //*********************************execution context in javascript************ */
  // context as like a container 
  // global context: global context means a container where all code store            (not         include the code  of insite of a function)
  // global context a kono code  thakle take jekono jayga theke access kora jay
  // global context a  loop thakbe ,variable declaration thake,vaiable assign thake
  // console.log thakbe,function thakbe,


  // global context a ja kishu thakbe ,akta funtion er vitoreo same jinis thakbe
  // global context   ja kishu thakbe program execute hower somoy autometically segulo run hobe
  // but akta function er vitor jakishu thakbe ta autometically run hobe na
  // function er vitor er sob kishu run korar jonno function ke bahir theke call korte hobe
  // akta function create kora manei akta context create kora




  // function a() {
  //   b()
  //   console.log('i am function a')
    
  // }
  // function b() {
  //   d()
  //   console.log('i am function b')
    
  // }
  // function c() {
  //   console.log('i am function c')
    
  // }
  // function  d() {
  //   c()
  //   console.log('i am function d')
    
  // }

  // var x=10
 // a()  // global context execute hower agei akan theke a() function ti execute howa suru hobe
// a() function e call korar pore er niser line console.log execute hobe na,age a()function
// er vitorer sobkishu execute complte hobe then niser line e jabe
  //console.log('i am global function') // ai line e ase global context ses,,


  // fist global context execute start hobe
  // then jokon a() function ke call kora hoyese tokon ai function execution suru hobe,global context exection stop hobe

  // a( ) function er viotor abr b() function call hosse ,tokon b() function er nise console.log print hower agei b() execution start hobe,a() function er execution off hobe
  //b function execution suru hole tarmaje abr d() function ase ,tai b functioner execution off hoye jabe,then d() functioner execution suru hobe
  // avabei cholbe,jokon akta complete hobe ,tokon abr recursiv er moto back kore b function er execution complete hobe,then a () function complete hobe.finaly global context execution hobe

  

  // ******************************creation and execution of context******************

  // global context e first eta hobe
  // execution context 2 ta phase e (ghote) complete hoy


  //01.creation phase
  //02.executional phase
  // protiti executional context er nijossho kishu object ase,jemon variable gulo store 
  // korar jonno akta object thake
  // akta scope chain maintain korar jonno akta object thake

  // 01.
  //creational phase er kaj hosse kothay kothay variable r function declare kora
  // hoyese agulo khuje ber kora
  // creationla phase e function name akta jayga ney,r sathe functioner akta identity or reference rakhbe\
  //creational phase a shudu variable declare name ti store hobe
  // variale declare hower pore ter vitor undefined store kore but function er somoy reference store kore
  // variable assign if else loop agulo skip korbe


  // 02
  // executional phase e java engine undefinend variable er maje value assign er kaj korbe
  // kono function call kora hole tar kaj korbe
  // console log if else for loop agulor kaj korbe
  // function ke skip korbe jodi take call kora hoy tokon new context create hobe ,sekane abr new creational +execution hobe

  var a=10
  var b
  console.log(a)
  console.log(b)
  b=50
  console.log(c)
  var c=50
  

