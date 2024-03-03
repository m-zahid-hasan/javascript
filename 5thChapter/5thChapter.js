


  //*****************************Map function in javascript*************
  

    // map function orginan array theke new akta array generate kore 
    // orginal arra te  kono change hobe na,
    // ai kajer jonno map function use kora hoy,map function orginal array fist index 
    // theke last index porjonto traves kore ,kisu element modify kore new array te return kore

     

    //example in built in method/function map


    // var arr=[3,5,7,9]  // orginal array
    // var sqrtArray=arr.map(function(value,index,arra){
    //     return  Math.random()*10 // this return value store in new sqrtArray
    //     // this function return value at the length of orginal array time
    // })

    // console.log(arr) //show output orginal array
    // console.log(sqrtArray) // modify array // here  no change occur  in orginal array
    

    // another example
    // var arr=[3,5,6,7,11]
    // var newarr=arr.map(function(value){
    //     return value*value
    // })
    
    // console.log(arr) //orginal array
    // console.log(newarr) //modify array

    //how can we  implemet map function behave is given below


    // var arr=[11,4,7,8,9,3]
    // function Mymap(brr){
    //     var newarr=[]
    //     for(var i=0;i<brr.length;i++){
    //         var temp=brr[i]*brr[i]
    //         newarr.push(temp)
    //     }

    //     return newarr
        
    // }
    // var result=Mymap(arr)
    // console.log(result)

    // if we want to do many task to get many modify array then we can use call back function
    // below some example with call back function

    // var arr=[1,2,3,4,5,6,7]
    // function Mymap(arrr,cb) {
    //     var newarray=[]
    //     for(var i=0;i<arrr.length;i++){
    //         var temp=cb(arrr[i],i,arrr)
    //         newarray.push(temp)
    //     }
    //     return newarray
        
    // }

    // function Random(as){
    //     return Math.random()*10
    // }

    // var result1=Mymap(arr,Random)
    // console.log(result1)

    // var arr=[12,13,15,22,67,31,75]
    // function Mymap(brr,cb){
    //     var newarray=[]
    //     for(var i=0;i<brr.length;i++){
    //         var temp=cb(brr[i],i,brr)
    //         newarray.push(temp)

    //     }
    //     return newarray
    // }

    // function qb(a) {
    //     return a*a*a
        
    // }
    // var result2=Mymap(arr,qb)
    // console.log(result2)

    // var result3=Mymap(arr,function(value) 
    // {
    //     return value*10
    // })
    // console.log(result3)

    // we create Mymap function only one time ,but we create 2 times ,it not nessesary
    //then what do we want to do ? this want we can implement in call back function
   
    

   // *****************************Filter function in javascript*******************

   // Filter function work depend on some logic,
   // if the orginal array element obey this logic then those element assign a new array
   // to do this task we can use built in functon or method filter or we can implement our own creat function
   // that work as like built in function filter


   // given example with built in function filter

//    var arr=[1,2,3,5,7,8,10,13,14,19,20]  // filter function as like map function cause they both no change in orginal array

//    var newarray=arr.filter(function(value){
//        return value%2==0 // true or false return korbe,true return korle value ti newarray te store hobe,false korte store hobe na
//    })

//    console.log(newarray)

//    // odd number 
//    var arr=[1,2,3,5,7,8,10,13,14,19,20] 
//    var newarray=arr.filter(function (asd) {
//        return asd%2!=0
       
//    })
//    console.log(newarray)
//    // greater then 10
//    var arr=[1,2,3,5,7,8,10,13,14,19,20] 
//    var newarray=arr.filter(function (asd) {
//        return asd>10
       
//    })
//    console.log(newarray)
   

 // implement filter function with call back function

//  var arr=[1,2,3,5,7,8,10,13,14,19,20]
//  function Filter(arrr,cb) {
//      var newarr=[]
//      for(var i=0;i<arrr.length;i++){
//         if(cb(arrr[i],i,arrr)){
//          newarr.push(arrr[i])
//         }
//      }
//      return newarr
     
//  }
//   function even(valuee){
//       return valuee%2==0
//   }
//   var result1=Filter(arr,even)
  

//   // odd
//   function odd(oddd) {
//       return oddd%2!=0
      
//   }
//   var result2=Filter(arr,odd)
  

//   // greater than 10
   
//   var result3=Filter(arr,function(value) {
//       return value>10
      
//   })

//   console.log(result1)
//   console.log(result2)
//   console.log(result3)



//**********************************Reduce function in javascript*******************

// reduce function akta array ba object er 2 ta value ba 2 ta element niye iterate kore (iterable bolte akta array ba object traves kora)akta result produce kore


// to calculate array element some with reduce method

// var arr=[12,13,14,17,19,20,33,4,7,9]
// var sum=arr.reduce(function (prev,curr) {
//     return prev+curr
    
// },200/* here we can say the initial value of sum, jodi initialize na kori tahole 0 dhore nebe*/)

// console.log(sum)

// // maximum value findout
// var max =arr.reduce(function (prev,curr) {
//     return Math.max(prev,curr)
    
// },0)

// console.log(max)


// implement reduce function
// var arr=[12,13,14,17,19,20,33,4,7,9]
// function Reducr(arrr,cb,acc) {
//     for(var i=0;i<arrr.length;i++){
//         acc=cb(acc,arrr[i])
//     }
//     return acc
    
// }

//  //calculate sum of array element
//  function sum(prev,curr){
//      return prev+curr
     
//  }
//  var summ=Reducr(arr,sum,0)
//  console.log(summ)

//  // find maximum element
//  function max(prev,curr) {
//      return Math.max(prev,curr)
     
//  }

//  var maxx=Reducr(arr,max,0)
//  console.log(maxx)

//  // minimum element of array
//  var minn=Reducr(arr,function(a,b) {
//      return Math.min(a,b)
     
//  },arr[0])
//  console.log(minn)



// *********************************find function in javascript**********

// find method array te kono element ase kina aita find kore dey,jodi thake tahole oi value ti return kore,index return kore na,r na thakte undefinded  return korbe

    // var arr=[1,2,3,4,5,6,7,8,91,11,22,44,49]
    // var search=arr.find(function (value) {
    //     return value==44
        
    // })
    // console.log(search)

// we can take input from user then find ,example below
    // var arr=[1,2,3,4,5,6,7,8,91,11,22,44,49]
    // var item=prompt('take a input')
    // var search=arr.find(function (asd) {
    //     return asd==item
        
    // })
   // console.log(search)


    //*************************index method****************

    //var arr=[1,2,3,4,5,6,7,8,91,11,22,44,49]  // value ti je index e ase sei index return korbe
    // var search=arr.findIndex(function (value) {
    //     return value==2
        
    // })
    // console.log(search)

            
        // we can take input from user then find ,example below
        //     var arr=[1,2,3,4,5,6,7,8,91,11,22,44,49]
        //     var item=prompt('take a input')
        //     var search=arr.findIndex(function (asd) {
        //         return asd==item
                
        //     })
        //    console.log(search)


// implementaton of find and findindex method 
        
//     var arr=[1,2,3,4,5,6,7,8,91,11,22,44,49]
//     function Find(arrr,cb) {
//         for(var i=0;i<arrr.length;i++){
//             if(cb(arr[i]))
//             return arr[i]  // akan theke jodi i return kore tahole seaching value index return hobe
//         }
        
//     }

//     function Findvalue(asd) {
//         return asd==44
        
//     }
//     var result1=Find(arr,Findvalue)
//     console.log(result1)

//   var result2=Find(arr,function(ff) {
//       return ff==3
      
//   })
//    console.log(result2)
 

        