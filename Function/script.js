


// var array=[12,13,14,15,16,17,18]
// var mdy=array.map(function(value,index,array){
//             // return  Math.random()
//             return index*index
// })

// console.log(mdy)
// console.log(array)

// function myMap(arr){
//     var newArry=[]
//     for(var i=0;i<arr.length;i++){
//         var temp=arr[i]*arr[i]
//         newArry.push(temp)
//     }
//     return newArry
// }
// var result=myMap
// console.log(result(array))
// console.log(array)

// var arry=[1,2,3,4,5,6,7,8,9,10]
// function myMap(arr,cb){
//     var newArray=[]
//     for(var i=0;i<arr.length;i++){
//         var temp=cb(arr[i])
//         newArray.push(temp)
//     }
//     return newArray
// }
//  function sqrt(a){
//      return a*a
//  }
//  var sqrtt=myMap(arry,sqrt)
//  console.log(sqrtt)
//  console.log(arry)

//  var qb=myMap(arry,function(asd){
//      return asd*asd*asd
//  })
//  console.log(qb)

// var arr=[1,2,3,4,5,6,7,8,9,23,12,43,11,71]

// var filter=arr.filter(function(value){
//     return value>10
// })
// console.log(filter)

    // var arr=[1,2,3,4,5,6,7,8,9,23,12,43,11,71]
    // function Filter(arr,cb){
    //     var newarray=[]
    //     for(var i=0;i<arr.length;i++){
    //         if(cb(arr[i]))
    //         newarray.push(arr[i])
    //     }
    //     return newarray

    // }


    //  function even(a){
    //      return a%2==0
    //  }
    
    //  var result1=Filter(arr,even)
    //  console.log(result1)
    //  var result2=Filter(arr,function(b){
    //      return b%2==1
    //  })
    //  console.log(result2)

    //  var result3=Filter(arr,function(c){
    //      return c>10
    //  })
    //  console.log(result3)

    // var arr=[1,2,3,4,5,6,7,8,9]
    // var sum=arr.reduce(function(pre,curr){
    //     return pre+curr
    // },100
    // )
    // console.log(sum)
     
    // var max=arr.reduce(function(prev,curr){
    //     return Math.max(prev,curr)
    // },0)
    // console.log(max)

    // var arr=[10,1,2,3,25,4,5,6,7,8,9]
    // function Reduce(arr,cb,acc){
    //     for(var i=0;i<arr.length;i++){
    //         acc=cb(acc,arr[i])
    //     }
    //     return acc
    // }

    // function sum(a,b){
    //     return a+b
    // }
    //  var summ=Reduce(arr,sum,0)
    //  console.log(summ)

    //  var maxx=Reduce(arr,function(acc,b){
    //      return Math.max(acc,b)
    //  },0)
    //  console.log(maxx)

    // var arr=[12,13,433,5464,1231,341,23,11,99]
    // var result=arr.find(function(as,bs){
    //     return as==11
    // })
    // console.log(result)
    // var resultt=arr.findIndex(function(jahid,tanjim){
    //     return jahid==1231
    // })
    // console.log(resultt)
    // console.log(arr)

    // var arr=[12,13,433,5464,1231,341,23,11,99]
    // function findd(arr,cb){
    //     for(var i=0;i<arr.length;i++){
    //         if(cb(arr[i])){
    //             return i
    //         }
    //     }
    // }
    // function fi(as){
    //     return as==5464
    // }
    // var f=findd(arr,fi)
    // var c=findd(arr,function(d){
    //     return d==99
    // })
    // console.log(f)
    // console.log(c)


    // var arr=[12,32,34,677,34,23,12,1,77,78,98,21,19,20]
    // var arrr=[
    //     {
    //         name:'jahid',
    //         age:22
    //     },
    //     {
    //         name:'tanjim',
    //         age:6
    //     },
    //     {
    //         name:'jahida',
    //         age:25
    //     },
    //     {
    //         name:'taslima',
    //         age:17
    //     }
    // ]

    // arr.sort()
    // console.log(arr)
    // arrr.sort()
    // console.log(arrr)

    // arr.sort(function(c,d){
    //     if(c>d)
    //     return 1
    //     else if(d>c)
    //     return -1
    //     else return 0
    // })
    // console.log(arr)
    // arrr.sort(function(a,b){
    //     if(a.age>b.age)
    //     return 1
    //     else if(b.age>a.age)
    //     return -1
    //     else return 0
    // })
    // console.log(arrr)





    // *********************************ajker class************************

    // var array=[12,13,14,15,16,17]
    // //console.log
    // var x=prompt('take a input')
    // var result=array.find(function(value){
    //     return value==x
    // })
    // console.log(result)

    // var arrr=[120,134,456,900,345]
    // var test=prompt('take input')
    // var ressult=arrr.findIndex(function(value){
    //     return value==test
    // })
    // console.log(ressult)


    //********************************sort *************************/


    // var arr=[12,34,10,9,78,99,100,23]
    // arr.sort()
    // console.log(arr)
    // arr.sort(function(as,bs){
    //     if(as>bs)
    //     return 1
    //     else if(as<bs)
    //     return -1
    //     else return 0

    // })
    // console.log(arr)
    // arr.sort(function(cd,df){
    //     if(cd>df)
    //     return -1
    //     else if(cd<df)
    //     return 1
    //     else return 0
    // })
    // console.log(arr)

    // var arrr=[12,34,55,30,45,67,78,53,234]
    // var result=arrr.every(function(a){
    //     return a%2==0
    // })

    // var asd=arrr.every(function(d){
    //     return d<500
    // })

    // console.log(result)
    // console.log(asd)
    // var rr=[12,34,56,78,89]
    // var result=rr.some(function(a){
    //     return a%2==0
    // })
    // console.log(result)
    // var str=[
    //     {
    //         name:'jahid',
    //         age:21

    //     },
    //     {
    //       name:'aminul',
    //       age:22
    //     }
    //     ,
    //     {
    //         name:'masum',
    //         age:24
    //     }
    // ]
    
    // str.sort(function(a,b){
    //     if(a.age<b.age)
    //     return 1
    //     else if (a.age<b.age)
    //     return -1
    //     else return 0


    // })
    // console.log(str)

    // function curring(a){
    //     return function(b){
    //         return function(c){
    //             return a+b+c
    //         }
    //     }
    // }

    // var result=curring(10)(20)(30)
    // console.log(result)

    function print(result) {
        console.log(result)
        
    }

    function multiply(asdf) {
        return asdf*100
        
    }
    function add(p,q) {
        return p+q
        
    }

    var value=print(multiply(add(10,20)))
    console.log(value)