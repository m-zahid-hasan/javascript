

// function generator (a,b,cb){

//     var c=a+b
//     var d =a-b
//     var result=cb(c,d)
//         return result
    
// }

// var sum=generator(12,14,function(c,d){
//     return c+d
// })
// console.log(sum)

// var sub=generator(15,20,function(c,d){
//     return c-d
// })
// console.log(sub)

// function mul(x,y){
//     return x*y
// }
// console.log(generator(10,12,mul))


// var sum=0
// var array=[1,21,13,14,15,5,33]
// array.forEach(function(v,i,a){
//     console.log(a,i,v)
//     sum+=v
// })
// console.log(sum)

// var array=[1,21,13,14,15,5,33]
// function forreach(array){
//     for(var i=0;i<array.length;i++)
//     console.log(array[i],i,array)
// }

// forreach(array)



    // var array=[1,21,13,14,15,5,33]
    // function forreach(array,cb){
    //     for(var i=0;i<array.length;i++)
    //     cb(array[i],i,array)
    // }

    // forreach(array,function(asd,b,c){
    //   console.log(b)
      
    // })





  //************************************functional programming********************

    // three main terms of functional programming:
       //01.pure function
       //02.first class function
       //03.higher order function


    // 01.pure function:
      // it returns the same result if given the same argument
      // example below:
      // function sqr(n){
      //   return n*n
      // }

      // console.log(sqr(2)) //argument 2
      // console.log(sqr(2)) // argument 2
      // console.log(sqr(2)) // argument 2
      // we send same argument 2 again and again so the sqr function show result 4 everytime ,so sqr is the pure function


       // 02.pure function does not cause any obserable side effects

      //  var n=10
      //  function change(){
      //    n=100
      //  }
      //  change()
      //  console.log(n)   // change function dose not pure cause when  this function is called 
       // it change the value of variable of n=100, so change is not a pure function

      //  var obj={
      //    x:10,
      //    y:20

      //  }

        // function another(ss){
        //   ss.x=100
        //   ss.y=300
        //   console.log(ss)
        // }

        // another(obj) // here another function reapedly show same result ,but it change the value of obj object ,it is side effect 
         // so another is not a pure function




        // ***************************first class function******************************
     // there are some feature of first class function
     // when a fuunction obey these rules ,then we can call the function as a first class function
    
       // 01.A function can be store a variable:
        // function  add(a,b){
        //   return  a+b
        // }

        // var sum=add // add function ti variable sum er maje  store kora jasse so add function ti first class function
        // console.log(sum(2,3))
        // console.log(typeof(sum)) //out put show function

        //02.A function can be store in an array as an element
        // function addd(w,v){
        //   return w+v
        // }

        // var arr=[]   // array declare 
        // arr.push(addd) // addd function ke arr array te push kora holo
        // console.log(arr) // arr array er elemet  print hobe
        // console.log(arr[0](10,20)) //arr[0] te addd function ase ,atake akane call kora hoyese,sathe argument hisabe 10and 20 pass kora hoyese

    //03. A function can be store in an object 

    //  function addd(k,l){
    //    return k*l
    //  }

    // var obj={
    //    sum:addd  //sum is a property ,addd is a value of the property  as a function value

    // }
    // console.log(obj) // output of object
    // console.log(obj.sum(12,12))

  // 04.we can creat function as we need
  //  setTimeout(function()  {
  //    console.log('i have call timeout method')
             //method er maje function creat kora hoyese
  //  }, 100);



   // *********************Higher order function*****************

   // akta function theke jokon amora onno akta function ke return korte pari ba
   // ba akta function er vitore onno akta function ke argument akare pass korte pari
   // tokon sei function ke bola hobe higher order function



    // function add(a,b){
    //   return a+b
    // }

    // function Manipulate(p,q,f){         //return one function to anoner function
    //   var d=p+q
    //   var e=p-q
    //   function multiply(){
    //     var m=f(p,q)
    //     return m*d*e
    //   }
    //   return multiply
    // }

    // var result=Manipulate(10,20,add)
    // console.log(result())



  //******************************closur in javascript**************

  // jodi kono functioner sckope er vitore bahirer kono sckop ba function er data ba value ase kono argument use na
  // korei tokon take closur bole
  //  var a=100
  //  function asd(){
  //    console.log(a) // a ke access kora jasse asd er maje kono argument use na korei
  //  }
  //  asd()

  //another example
  //  var a=200
  //  function asd(){
  //    var x=1000
  //   return  function(){
  //      console.log(x)
  //    }
  //  }

  //  var consoll=asd()
  //  console.log(consoll)

 // *********************callback function***************
     
    //  function sample(a,b,cb){
    //    var c=a+b
    //    var d=a-b
    //    var result=cb(c,d)
    //    console.log(result)
      
    //  }

    //  function sum(a,b){
    //    return a+b
    //  }

    //  sample(12,13,sum)

    //  function sub(a,b){
    //    return a-b
    //  }
    // sample(12,13,sub)
    // sample(1,2,function(c,d){
    //   return c*d
    // })

   // **************************foreach function***************


  //  var array=[12,13,14,15,16,17,18,19]
  //  array.forEach(function(a,b,c){
  //    console.log(b,c,a)
  //  })
  //  var sum=0
  //   var array=[12,13,14,15,16,17,18,19]
  //   array.forEach(function(a,b,c){
  //     sum+=a
  //   })
  // console.log(sum)
  // var array=[12,13,14,15,16,17,18,19]
  // function traves(arr,cb){
  //   for(var i=0;i<arr.length;i++){
  //     cb(arr[i],i,arr)
  //   }
  // }
  // traves(array,function(a,b,c){
  //   console.log(a,c,b)
  // })
  