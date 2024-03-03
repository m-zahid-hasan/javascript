// console.log("hello world")
// console.log('i love bangladesh')
// console.log(87)
// console.log(89.09)


// console.log('my favorite number '+11)
// //console log er vitore string er sathe kono
// //+operator diye print korle string+number=all part string hoye 
// console.log(10+20)//output=30
// console.log('99'+1) //output 991 [ string+number=string]






//lectur 06:variable declare


// var str='jahid jasan' // string variable
// console.log('i am '+str)  //output : i am jahid hasan
// var a=23
// var n=949.4032
// console.log(a)
// console.log(n)
// // console.log( 'the number is '+n)   //string+number=string





//lecture 08 data typese


//two kinds of data type
//   1. primitive data types [javascript defined this data type]
         // a.number  [12,13 ,178,189]
         // b. strimg  ['jahid hasan']
         // c.boolean [ true,false]
         // d.undefined
         // e.null


//   2.object data types
        //a.array
        //b.funcion
        //c.object

    
        
 //lecture 09 Number
     
    //  var a=102      //variable declare by litaral
    //  var b=234.421
     
    //  console.log(a)
    //  console.log(b)

    //  var nn=Number(345) //variable declare by constructor
    //  console.log(nn)
      
    //  var bb=Number('9039')  //string transform into number because use of Number constructor
    //  console.log(bb)

    //  console.log(Number.parseInt(b)) // float number ke intejar a convert kora hoy, output:234
    //  console.log(12/0)  //show output:infinity
    //  console.log('ads'*12) // show Nan ,cause string cannot multiply by number



     //************lecture 10*/********* */ 
     //*************string************** */
        
        //string declaration ways:
        // var str1="jahid hasan"
        // var str2='jahid hasan' // literal declaration
        // var str3=`jahid hasan`
  
        // //string declaration with constructor
        // var str4=String('tanjim hasan')
        // var str5=String(2342) //number convert to string
        // var str6=String(849.9834)
        // console.log(str1,str2,str3,str4,str5,str6)


        // **********lecture 11************
        // **********boolean***************
        // var a=true  //litaral way
        // var b=false
       

        // var c=Boolean(true)
        // var d=Boolean(false) // decalere with constructor
        // console.log(c,d)
      

        // ************leecture 12*************
        // ************ undefined ,null********
         
        // we declare a variable but if we do not assinged any value in those variable then this varivale assinged undefined
        // automically
        // var e
        // var b=null

        // console.log(b)    //output =null
        // console.log(e)  //output=undefined
   


        // ****************lecture 13**************
        // *****************type conersion*********


    //     var str='100'
    //     var b=12  
    //     console.log(str*b)             /*
    //                          here we multiple string and number ,string is automatic 
    //                          conert to number because string is digit*/
    //       console.log(str+b) //in this case cannot convert string in number automatically
    //                          // so the output show :10012 [string +number=string]

    //     var str2='sfdsg'
    //     var c=12
    //     console.log(str2*c) // canton multiply string and  number.show output =Nan

    //     console.log(Number(str)) // string convert into number
    //     console.log(Number.parseInt(str)) // another way to convert string into number
    //     console.log(c.toString())  //convert number into string


    //    // falsy value
    //    // 1.null
    //    // 2.undefined
    //    // 3.Nan
    //    // 4.0
    //    // 5.''
    //   //below example
    //   console.log(Boolean('')) //false
    //   console.log(Boolean('addf')) //true
    //   console.log(Boolean(null))  // false
    //   console.log(Boolean(undefined)) //false
    //   console.log(Boolean(NaN))  // false
    //   console.log(Boolean(0))  //false
    //   console.log(Boolean(343))  //true


    //  var hexa=0xffff // declare hexadecimal number. to declare hexadecimal first use zero(0) and x ,then use dexadecimal umber
    //   console.log(hexa)  //output show in decimal
    //   var oct=0776 //  declare octal number ,to declare a octal number ,first use a zero(0) ,then use octal number
    //   console.log(oct) //show output in decimal



    // ****************lecture 15****************
    // ***************js operator****************
     



    // 1. Arithmetric operator 
       //[+,-,*,/,%,++,--]


    //    var a=12
    //    var b=13
    //    console.log(a++)// output=12  cause:post increment
    //    console.log(a) // output=13
    //    var d=15
    //    console.log(++d) //output:16 cause preincrement
    
    // // 2. Assingment operator
    //    //[==]

    //    var e=12
    //    var f=14
    //    var g
    //    g=e+f
    //    console.log(g)
    
    // // 3.comparision operator
    //     //[==]
    //     var t=14
    //     var y=34
    //     console.log(t==y) //output show:false
    //     console.log(t!=y) //output show:true
    //     console.log(t>y) // false show
    //     console.log(t<y) //show true
    //     console.log(t>=y) //false
    //     console.log(t<=y) //show true
   



    // 4. logical operator
      //[&&,||]


    //   *************lecture 17***********
    //   **************js math function*****


    // math funcstion is a object of javascript

    // console.log(Math.E) //show exponencial value
    // console.log(Math.PI) // show pi value
    // var n=6.345
    // console.log(Math.abs(n))// show absolute value
    // console.log(Math.floor(n)) //show only integer part
    // console.log(Math.ceil(n)) // first increment one in integer value then show
    // console.log(Math.round(n))// jodi doshomiker porer digit 4 er ceye boro hoy tahole integer er sathe 1 add hoye show korbe



    // console.log(Math.max(200,300,700))  // show big number
    // console.log(Math.min(340,95,323,234))  // show min number
    // console.log(Math.pow(2,4))//show output=16

    // console.log(Math.sqrt(100))  //show 10
    // console.log(Math.random())// show random number


    // ************lecture 18***********
    // ************js date function*****
     


    //  var date=new Date() // new date present time generete kore date variable er maje store kore rakbe

    //  console.log(date)
    //  console.log(date.toDateString())// 
    //  console.log(date.toTimeString())
    //  console.log(date.toLocaleDateString())

    //  console.log(date.getFullYear())
    //  console.log(date.getHours())
    //  console.log(date.getMinutes())
    //  console.log(date.getHours())
    //  console.log(date.getDate())
     

    // *************lecture 21***********
    // *************js conditional operator if,else ******

    // var a=100
    // var b=200
    // if(a>b){
    //     console.log('A is greater than B')
    // }
    // else console.log('B is greater than A')

    // var n=19
    // if(n%2==0){
    //     console.log(n+' is even number')
    // }
    // else console.log(n+' is odd number')
  

    // // *********for loop***********
    // var i
    // for(i=0;i<10;i++)
    // {
    //     console.log(i+1)
    // }

    // // **********while loop*******
    // var i=0;
    // while(i<10){
    //     console.log(i+1)
    //     i++
    // }



    // ***************break**************
    // var i=0
    // for(i=0;i<10000;i++){
    //     if(i>10)
    //     break
    //     console.log(i+1)
       
    // }
    // **************continue********

   //  var i
   //  for(i=1;i<=20;i++){
   //      if(i%2!=0)
   //      continue
   //      console.log(i)
   //  }


   //   ******************lecture 38********
   //   ******************String************


   // var str='jahid hasan' //declaretion of string in litarel way
   // var str2=String('tanjim hasan') //string declaretion with constructor way
   // console.log(str2)

   // //number conert into string
   // var n=189
   // var str=n+''
   // console.log(str)
   // var str2=n.toString()
   // console.log(str2)
   // var str3=String(n) // this way convert is used string constructor
   // console.log(str3)


   

   // **************string excape notetion***********
   // var str='this is string' //if we want a substring replace with a queation thenwe need ecape notetion
   // var str="this is 'string'" // this is a one way for quertation but this way can not 
   // //work if we declare string in a single queration
   // console.log(str)
   // var str2='this is \'string\'' // this is another way
   // console.log(str2)
   // var str3='this is  \nsting' //new line excape notation
   // console.log(str3)
   // var str4='this is a\tstring' //tab excape notation
   // console.log(str4)
   // var str5='this is a\\string' //backslach notation
   // console.log(str5)
 

   // ***********string comparision************


  //  var str1='abcd'
  //  var str2='bcda'
  //  console.log(str1==str2) //false
  //  console.log(str1>str2) //false
  //  console.log(str1<str2) //true


   // //lexicographic system is used to compare to sring


   // // *******************string method***************
  //  var str1='i am jahid hasan '
  //  var str='i am a student'
  //  var str2=str1.concat(str)
  //  console.log(str2)

  //  var str3=str2.substr(5)// 6 number index theke last index porjonto all charectar str3 te substring hisabe asn hobe
  //  console.log(str3)

  //  var str4=str2.substr(5,5)// 5 number character theke start hobe and then 5 ta character niye str4 e store kore rakbe
  //  console.log(str4)
   

   // console.log(str2.charAt(5)) //n number index e ki character ase aita dekar jonno ai method use kora hoy
   

   // // console.log(str2.startsWith('j')) // str2 string j chactacter dara start hoyese kina aita check korar jonno ai method use kora hoy
   // // console.log(str2.startsWith('i am'))// ai word ba character dara start hole true output dekabe, r na hole false dekabe
   // // console.log(str2.endsWith('student'))// last word ba character ai word ba character dara ses hoyese kina aita check kora hoy
   // // console.log(str2.endsWith('studentnn'))// ouput false

   // console.log(str1.toUpperCase()) //convert string character into uppercharacter
   // console.log(str.toLowerCase())//convert string character into lowercharacter
   // console.log('            sdahkfjhsdjkfh     '.trim())//this method deete the space front and back of the string
   // console.log(str3.split(' '))//this method split the string into word 
   



   //   *********************Array*********************
   //   *********************Array declaretion*********

   // there are two ways to declare a array


   // 1. litaral way

      //  var array=[] //empty array
      //  var array=[12,14,15,16,98,90]
      //  array[6]=11 //assign value
      //  array[1]=58 //array override
      //  array[13]=17 //majer index gulo empty thakbe, undefined 
      //  console.log(array)
      //  console.log(array[2])
      //  console.log(array[5])
      //  console.log(array)
      //  console.log(array[8]) // show undefined
      //  console.log(array.length) //last index 13 ,tai length hobe last index+1


   // 2.declare array with constructor
       
      //  var arry=Array() //empty array
      //  console.log(arry)// output empty
      //  var arry=Array(1,2,34,4,5,6) //array initialize
      //  console.log(arry)



      // ***********array travesing************
       


      // var arry=[1,2,3,4,5,6,7,8,9,12,2,3,234,345,56,4]
      // for(var i=0;i<arry.length;i++){
      //    console.log(arry[i])
      // }



      //*****************insert and remove array elememt */

    //  var arry=[12,13,14,15,16,17,18,19,20]
      //inser 9 at index 4
     // arry[4]=9 //previous element 16 lost
     // console.log(arry)

     // arry[4]=16//asign previous value

     // arry.push(9)// array er last index e  giye 9 value assign hobe
     // console.log(arry)
   //   arry.unshift(9)//first index e giye 9 assing hobbe
   //   console.log(arry)
  // arry.splice(4,0,9) //first value 4 means index number where we want to assign new value
   // second value 0 indicate we do not want to remove any element from array
   // last value 9 means we want to assign 9 in the array
   // console.log(arry)

   // arry.splice(4,0,9,100)
   // console.log(arry)
   // arry.pop() //last element remove korbe
   // arry.shift() //first element remove korbe
   // arry.splice(2,1) //2 index theke suru hobe remove ,1 mane 1 ta element remove korbe


  // ********************multidimentional arry*******************

   var arry=[

      [12,13,14,15],
      [21,22,23,24],
      [31,32,33,34]
  ]
  //  console.log(arry)
  //  console.log(arry[0])
  //  console.log(arry[1])

  //  console.log(arry[0][0])
  //  console.log(arry[1][2])

  //  for(var i=0;i<arry.length;i++){
  //     for(var j=0;j<arry[i].length;j++){
  //        console.log(arry[i][j])
  //     }
  //  }



   //*******************array methods***********
//    var arry=[12,13,14,15,16,17]
//    console.log(arry)
//   console.log(arry.join(',')) //proti ta element koma dara seperate hobe and string return korbe
//   console.log(arry.join(' '))// seperate by space
//   console.log(arry.join('|'))
//  arry.fill(0) //all element replace by zero
//   console.log(arry)
// arry.fill(true)//all element replace by true
// console.log(arry)

//  var arr=[12,13,14,15,16,17]
//  var arry=[45,56,67,45,343]
//  var arr3=arr.concat(arry)
//  console.log(arr3)