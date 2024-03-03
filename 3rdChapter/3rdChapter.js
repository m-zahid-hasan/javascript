



//***********************************Function***************************


   //function declare
  // first use function keyword then use your function name (){}

  //function functionName(){

 // } 
         // empty function
         // jokon amader function er vitorer kaj gulo execute korar dhokar hobe tokon amora shudu function er name ke call korbo
         // name ke call korle function er body er vitor e ja thakbe sei  code gulo execute hobe


        //  function add(){
        //      var a=10
        //      var b=20
        //      var c=a+b
        //      console.log(c)
        //  }
 
        //  add()

        //  function sub(){
        //      var a=40
        //      var b=30
        //      var c=a-b
        //      console.log(c)
        //  }

        //  sub()


    
    // *******************function invoking******************


      //when a function is called or when a function is used then that function is called invok/invoking
    //   function multiply(){
    //       var a=20
    //       var c=50
    //       var b=a*c
    //       console.log(b)
    //   }

    //   multiply() // akane function multiply ke call kora hoyese 
                 // r function call kora manei function ke invoking kora hoyese



   //**********************************function arguments and parameter */



    //  function add (a,b) {
    //      var result=a+b
    //      console.log(result)

    //  }

     //a,b add function a input ,
     // a and b ke add function er vitor var diye declare kora jabe na
     // java autometic variable hisabe dhore nebe

    //  add(10,20) 
    //  add(3,7)
    //  add(100,300)



    //  var arr1=[1,2,3,4,5,6,7,8]
    //  var arr2=[2,4,6,8,10]
    //  var arr3=[3,6, 9,12,15]

    //  function arraySum(arr){
    //      var sum=0
    //      for(var i=0;i<arr.length;i++)
    //        {
    //            sum+=arr[i]
    //        }
    //        console.log(sum)
    //  }


    //  arraySum(arr1)  // je array  ke add korbo oi array ke function nema er maje argument hisabe dite hobe
    //                  // ar function name er majje paremeter hisabe akta kishu rakte hobe ja value jukto array er sob element ke access korte parbe
    //  arraySum(arr2)  //function declare korar somoy function name er maje je variable declare kora hoy segulo param, jemon parameter hosse:arr ,a,b
    //  arraySum(arr3)  //r jokon function call kora hoy tokon function name er maje je valu gulo diya hoy segulo hosse argument ,jemon akane argument hosse:arr1,arr2,arr3,10,20


// **************************************Argument object in javascript*************************
      

    //    function test(a,b,c){
    //        console.log(arguments)
    //    }
          // argument hosse akti object 
          // jokon amora function declare korbo tokon sathe sathe akta argument peye jabo
          // argument js er akta keyword
          

    //    test()

    //    function test(a,b,c){
    //     console.log(arguments)
    // }

    // test(12,23,45)// argument dekte array er moto ,kinthu ata array noy


    // function test(a,b,c){
    //    for(var i=0;i<arguments.length;i++){
    //        console.log(arguments[i])
    //    }
    // }


    // test(123,345,567) // akane argument array er moto kaj korbe
     
  
    // function test(){
    //     for(var i=0;i<arguments.length;i++){
    //         console.log(arguments[i])
    //     }
    //  }

    //  test(264,567,6786) //akanee test() ar maje kono parameter diyahoy ni ,but terporeo aguments object er karone bahire theke provide kora argument 
    //                     // gulo function body te access niya jabe



    //  ******************************************return something from a function************************


      // jokon kono value amora kono function theke return korbo tokonoi kebol amora oi return kora value ke kno
      // variavle er maje store kore rakte parbo 


    //   function addAll(){
    //       var sum=0
    //       for(var i=0;i<arguments.length;i++){
    //           sum+=arguments[i]
    //       }
    //       return sum
    //   }
    //       // return as like a output of any function

    //   var result=addAll(12,13,14,15,15,16) // akane amora return kora sum ke variable result er maje store koresi,
    //   console.log(result)


    // function person(name,email){
    //     return {
    //         name:name,
    //         email:email
    //     }
    // }


    // var person1=person('jahid hasan','maaazahidhasan@gmail.com')
    // console.log(person1)  //person function theke akta object return hoye person1 name variable er maje store hobe




    // ************************************function expression************************************************
       


    //    function add(a,b){
    //        return a+b
    //    }
    //   console.log(add(30,20))
                // oporer function ti shudu akti function statement
     

     // amora function declare korar somoy function ke akta variable er maje rakte pari ,ar ai bisoy ta hosse function expression
     // exam below
    //  var addition=function add(a,b){
    //      return a+b
    //  }

    //  console.log(addition(12,13))

     // amora akane function keyword er pore add function name diyesi
     //function keyword er pore function name use na korleo kono problem hobe na
     // jodi function keyword er pore function name na diya hoy tokon oi function ke annonimous function bole
    //  // exampla given below
    //  var Addition=function(a,b){
    //      return a+b
    //  }
    //  console.log(Addition(34,36))



// annonymous function exam with built in method

//    setTimeout(function(){
//        console.log('i will call after 5 second')
       
//    }, 5000);


    // var Addition=function(a,b){
    //     return a+b
    // }
   
    
    //  var another=Addition //function  Addition ke onno akti variable er maje pass korte pari
    //  console.log(another) // another akn akta function hoye jabe
    //  console.log(another(12,12))



   // ****************************Inner function************************
    // inner function means nested function
    // function er maje function


    // function something(greet,name){
    //       function sayHi(){
    //           console.log(greet,name)
    //       }
    //       sayHi()
    // }

        // kono function ke call na kora porjonto ter body er akta line o execute hobe na
        // oporer sayHi function ke bahire theke call korle   function er body execute hobe  na
        // kono function ke kebol matrro terager function theke call korlei kaj korbe,na hole korbe na


//   something('Good morning','jahid hasan')


//     function someThing(greet,name){
//         function getFirstName(){
//             if(name){
//                 return name.split(' ')[0] // name jodi thake tahole splite fist name ke word akara array te rakbe and [0] index er word return korbe
//             }
//         }
//         var messege=greet+' '+getFirstName()
//         console.log(messege)
//     }

//     someThing('Good morning','jahid hasan')

    