// ***************************Object in javascript**********
// ****************************lectur 52*********************


 //object is a objective data type as like array that can be created by primitive data type


 //we can declare object by two ways:

 // 01.literal way:
   
    // var obj={}  // this is aempty object
    // console.log(obj) // show output empty 
    // console.log(typeof obj) // variable ki typer ata show korbe,
   
    //  var obj2={
    //      x:20,
    //      y:40
    //  }
       // object declare with propertise and propertise value,,
       // here x and y called propertise, inside object after propertise mush use : 
       // 20 and 40  called propertise value
       // after written one propertise and his value then use , after that we can start second propertise


     //console.log(obj2)// show output of object

     // we can assign new propertise and value of that property out side of the object body by two ways
     // a.  use dot(.) notetion

    //  obj2.z=11 // z did not declare before,so it is new property
    //            // in this case we do not use (:) here ,we must use (=) 
    //  console.log(obj2) //
    //  obj2.x=88// previous property value can update in this system
    //  console.log(obj2)



//02.object declare with constructor 
    
    // var obj=Object()//declare object
    // obj.a=45 // assing value here
    // console.log(obj)

    // var obj2=new Object() // object declare  use extra new 
    // obj2.b=60
    // console.log(obj2)
    


    //there are two ways to access in object properise:

    // o1. dot notetion

    // var obj1={
    //     x:11,
    //     y:17,
    //     z:13
    // }
    

    // console.log(obj1.x) //access x
    // console.log(obj1.y)// first object name then use(.) then properties name
    // console.log(obj1.z)
    // console.log(obj1.x+obj1.y)// add two properties
    

    // 02.array notetion
            //  console.log(obj1['x'])// first object name then use square braket[] after that use property name in that braket as a string
            //  console.log(obj1['z'])


            //  var show='x' //assign string into show variable
            //  console.log(obj1[show])// output show 11
            // obj1['x']=19 //update properties value by array notetion
            // console.log(obj1['x'])
            // obj1['p']=29 // insert new properties by array notetion
            // console.log(obj1['p'])


    // ***********************remove object  properties*******************


        //   var obj={
        //       x:20,
        //       y:30,
        //       z:56,
        //       v:69
        //   }
        //   console.log(obj)
        //   delete obj.x // delete operatoe delete x property from the object
        //   delete obj['v'] //delete v property
        //   console.log(obj)
 

    //*****************************object comparision*************************** */


            //  var obj1={
            //      a:20,
            //      b:30
            //  }
             
            //  var obj2={
            //      a:20,
            //      b:30
            //  }

             //console.log(obj1==obj2) // show output false
             // 2 ti object jokon compare hoy tokon memory location niye compare kora hoy
             // ai jonno 2 ti object compare korar jonno protokta properties compare korte hobe

            //  if(obj1.a==obj2.a && obj1.b==obj2.b){
            //      console.log(true)
            //  }
            //  else {
            //      console.log(false)
            //  }

            //another easy way to compare two objects:
               // first 2 ti object er property ke srting e convert korte hobe
               // then object 2 tir string ke compare korte hobe
               //r object ke string e convert korar jonno[JSION.stringify[]] ata use korte hobe

             //  console.log(JSON.stringify(obj1)==JSON.stringify(obj2))// show output true


      // *******************************iterate object properties******************************

            //  var obj={
            //      x:20,
            //      y:30,
            //      z:78
            //  }

            //  console.log('x'in obj)//akane in operator check kore x property object er maje ase ki nai
            //  // thakle true show korbe ,r na thakte false show korbe
            //  console.log('p'in obj)
             //travel in object

            //  for(var i in obj){
            //      console.log(i)
            //      console.log(i+':'+obj[i])
            //  }
             // in operator i variale er maje obj er property rakbe r loop ti cholte thakbe





    //**********************************object methods**************************************



    //   var obj={
    //       x:20,
    //       y:40,
    //       z:67,
    //       p:66,
    //       q:87
    //   }

    //   console.log(Object.keys(obj))// akane keys method obj object er maje ki ki property ase segulo array akare show korabe
    //   console.log(Object.values(obj))// values method obj object er maje ki ki values ase segulo array akare show korabe
    //   console.log(Object.entries(obj))

    //   var obj2=obj  // obj copy kore obj2 te raka holo 
    //                 // but obj2 te kono property change korle obj teo automatic change hoye jabe
    //                 // ai jonno copy korar jonno (Object.assigned()) method use kora hoy
    //   obj2.x=190
    //   obj2.y=300
    //   console.log(obj)
    //   console.log(obj2)
    //  var obj2=Object.assign({},obj) // akn obj2 er property value change korleo obj er property value te kono effect porbe na

    //  obj2.x=300
    //  obj2.y=400
    //  console.log(obj)
    //  console.log(obj2)