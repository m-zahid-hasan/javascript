//console.log('hello world')




//*****************************object litarel in javascript****************** */


// var react={
//     width:120,
//     height:70,
//     draw:function(){
//         console.log('i am calling here')
//         console.log('my width is '+this.width) // ak ne this keyword use na krle dekabe uncaught reference error
//         console.log('my height is '+this.height) // kono object er vitorer properties oi object er method er maje
//         // use korte caile this.property name use korlei kebol kaj korbe,
//     }
// }
// react.draw()
// react.height=100; // akane react object er height bahir theke change kora holo
// react.draw()


   // jokon kono object er maje propertir value hisabe kono function declare kora hoy tokon oi functuon 
   // ke bola hoy method ,, kinthiu abr jodi oi method er maje function declare kora hoy tokon seta 
   // function i hobe
   // jemon opore react object er maje draw: akta property
   // draw er value hisabe function raka hoyese ,tai tokon seiti method hisabe poricito hobe
   // ai draw method er maje jodi  abr kono function declare kori tokon seti function e thakbe




   //*************************************************this in opp*************************

   // jekono object er nijossho kono property ke bujanor jonno this keyword use kra hoy


//    function myfunc(){
//        console.log(this)
//    }

//    myfunc()

   // amora jani this hosse  object er sathe related,
   // kinthu akane function er maje this keyword use kora hoyese 
   // ai jonno kono object khuje pabe na bole javascript engine window object ke refer korbe
   // this kono object er sathe thakle sei object ke refer korbe
   // object er sathe na thakle window object ke refer korbe
   
   //new myfunc() // akane function ke call korar somoy function name er age new keyword use korar jonno
   // this keyword er window object ke refer korbe na 
   // tokon empty akta object ke refer korbe


//   var  obj={
//        width:80,
//        height:56,
//        draw:function(){
//            console.log('leanting about this')
//            this.print() // object er vitorer property print ke ai method er maje use korar jonno this keyword use 
           // kora hoyese ,karon objcect er method er majer kono property oi object er majer method er maje use korte 
           // caile this keyword use na korle uncaught reference error dekay

//            console.log(this) // obj object er maje ki ki property ase sugulo refer korbe
//        },
//        print:function () {
//            console.log('hwidth is '+this.width);
//            console.log('height is '+this.height);
           
//        }
//    }

   //obj.draw()
   // this kono object er maje use korle oi object kei this sobsomoy refer korbe



//    var  another={ /// akane aktu problem ase aro vlo kore bujte hobe
//        heightt:12,
//        widthh:17,
//        asd:obj.print()
//    }

//    another.asd



  //*************************************factory pattern in javascript*******************

  // class theke amora multiple object create korte pari
  // but javascript e kono class nai
  // javascript er factory pattern  r constructor pattern class er moto kaj kore


  //*******************************factory pattern***********************

  // factory pattern hosse akta function ja object create kore return korbe
  // example given bellow:

//   var createReact=function(width,height){
//       return {
//           width:width,
//           height:height,
//           draw:function(){
//               console.log('i am rectangle');
//               this.print();
//               console.log(this);
//           },
//           print:function () {
//               console.log(' width is '+this.width);
//               console.log('height is '+this.height);

              
//           }
//       }
//   }

//   var react1=createReact(12,13);
//   react1.draw();

//   var react2=createReact(123,234);
//   react2.draw()
  // akane function createReact theke ber ber object create kora jasse ,r function ti somoy  akta object return korbe
  // atai hosse factory pattern
   

// ***************************************create class with constructor pattern*****************

// constructor er fist letter ti sob somoy capital letter hote hobe


// var React=function(width,height){
//     this.width=width
//     this.height=height
//     this.draw=function(){
//         console.log('i am reactangle')
//         this.print()
//         console.log(this)
//     }
//     this.print=function(){
//         console.log('width is '+this.width)
//         console.log('height is '+this.height)
//     }
// }
// var react1=new React(12,13)
// react1.draw()
// var react2=new React(80,56)
// react2.draw()


// constructor er somoy function factory er moto object return korbe na
// constructor er somoy property er pore factory er moto (:)use na kore (=)ata use korte hobe
// akane proty method er age this keyword use korte hobe






//******************************************New keyword in javascript*******************************

// opp er constructructor functtion er age [new] keyword na dile ai function ti kaj kore na
// new keyword dile ai new keyword 4 ti kaj kore
    //01. new keyword akti empty object create kore
    // 02. ai new keyword create kora object er sathe constructor function er parameter this keyword 
    // sathe constructor er maje all code ke associted kore
    // 03.constructor er sathe je prototype gulo ase oi prototype gulo copy kore empty object er maje inherite kore dey
    //04.last e ai object ke return kore



   //  var React=function(width,height){
   //        this.width=width
   //        this.height=height
   //        this.draw=function(){
   //            console.log('i am reactangle')
   //            this.print()
   //            console.log(this)
   //        }
   //        this.print=function(){
   //            console.log('width is '+this.width)
   //            console.log('height is '+this.height)
   //        }
   //    }
      // var react1=new React(12,13)
      // react1.draw()
      // var react2=new React(80,56)
      // react2.draw()


     // function myNew(constructor){
       //  obj={} // akane akta empty object create kora holo
         //second kaj hoosse prototype gulo copy kore deya ,jodio akane kono protype nai
         // bewolw line code is set of protype
        // Object.setPrototypeOf(obj,constructor.prototype) // obj te protype set kora hosse ,contructor je protype gulo dhore raka
         // hoyese segulo copy kore obj object er maje protype set kora hosse

        // var agsarray=Array.prototype.slice.apply(arguments) // ai line ti akti array like data structure return korbe
         // jar maje thakbe appy () braket er maje use kora arguments er sob data ,ar ai return kora data gulo agsarray te thakbe
      //    constructor.apply(obj,agsarray.slice(1)) // agsarray te je data gulo ase segulo obj er 1 number index e set hobe
      //   return obj

      //}


      // var rect3=myNew(React,900,500)
      // rect3.draw()

      // akane my New  [new] keyword er moto kaj korse



      //*************************************constructor property in javascript*********************



      // jekono object er constructor hosse jei function ti beboher kre ai object ta create kora hosse ter reference
      // atar  jonnno cromer console giye uporer coder rect3.constructor dilei deka jabe ki ki property ase
      



     // ***************************************function are object in javascript****************************
      

   //   function test(){
   //      console.log('something')
   //   }
   //   test()


     // test function ti je object ta dekar jnno browser er console log e jete hobe
     // console test likhe enter korte hobe
     // typeof test likle output function dekabe
     // test.constructor likle dekabe function // test function er sathe je constructor ase seiti akta function
     // test. dile onek property deka jay ,ermane test akti object


   //   var Rect=new Function('width','height',` this.width=width
   //   this.height=height
   //   this.draw=function(){
   //       console.log('i am reactangle')
   //       this.print()
   //       console.log(this)
   //   }
   //   this.print=function(){
   //       console.log('width is '+this.width)
   //       console.log('height is '+this.height)
   //   }`)
   //   var rect5=new Rect(12,23)
   //   console.log(rect5)

     // akn console rect5.draw() method ke call korle ta output debe shotic vabe
     // object er belay amora jani object er property ke access korar jonno . notation dite hoy
     // rect5 silo akti function ,but rect5.draw() call korle ta thotic out put dey ,er mane ata buja jay
     // rect5 function er sathe sathe akta object o



     //***************************************Bind call object in javasript***********************************

     // function ke call korar somoy function er sathe parenthisic use kora hoy[ braker]
     // parenthesis sara o function ke call kora jay 
     // parenthesis sara call korar jonno appy,call ,bind method use kora hoy
     // normally akta function ke call korle function er body vitore executional context create hoy
     // function er maje this keyword use korle ta window object ke refer kore
     // onek situation ase jekane bahire theke bole dite hoy executional context kothay hobe
     // ai dhoroner situation handle normal function invoking korte pare na


    // function myfunc() {
       // console.log(this.a+this.b) // function this.a+this.b khuje na paowar jonno nan output dekabe

        // ai function er maje jodi console loger maje this diya hoy tahole ta window object ke refer korbe
        // ai function er maje bahir theke akta object suppy dite hobe
        // ai object supply diyar jonno 3 ta method ase 01.apply 02.call,03.bind
     //   console.log(this)


        
     //}


   //   myfunc() // myfunc er maje this keyword thakar jonno ata output window object ke reffer krbe
   //   myfunc.call({}) // myfunc er sathe call method . notation diye call korle first braket er maje 
      // akta object dite hobe ,function er output tokon ei object ke reffer korbe
      // ai object onojayi function tokon kaj korbe

    //myfunc.call({a:48,b:52}) // akn myfunc er this  braket er maje diye  diye object ke refer korbe
    // akn amora akti function multiply object er jonno use korte pari ,just sei object ti supply dite hobe
    //myfunc.call({a:400,b:500})



    // 02. apply method o call method er moto kaj kore 
    // but apply er somoy function er maje parameter diya jay ,
    // function ke call korar somoy parameter er argument value object er sathe diye jay
    // examply bellow

   //  function myfuncc(c,d){
   //     console.log(this.a+this.b+c+d)
   //     console.log(this)
   //  }

   // myfuncc.call({a:12,b:13},12,13) // call er somoy first argument hisabe object dite hoy,, then
    // create kora function eer parameter er agument dite hoy ,jemon akaane object er sathe 12,13 [c,d]
    // parameter jonno argument hisabe diye hoyse



    //myfuncc.apply({a:12,b:13},[50,50]) // aplly er somoy function er paramer er argument gulo 
    // array hisabe dite hobe ,na hole kaj korbe na

     // 03. bind method 
     // aplly method r call method method sathe sathe function take call kore dey 
     // but bind method sathe sathe function take call kore na
     // bind method object ta ke shudu function er sathe bind kore thake ,but call kore na
     // call korar jonno function take akta variable er maje store korte hobe
     // then sei variable ke call korte hobe
     // exam below


     
   //  function myfuncc(c,d){
   //    console.log(this.a+this.b+c+d)
   //    console.log(this)
   // }

   // var test=myfuncc.bind({a:3,b:7},12,24)
   // test()

   // var asd=myfuncc.bind({a:8,b:8})
   // asd(20,20) // function er agument akaneo diya jay



   //*******************************pass by value and pass by reference in javascript*************

   // ata primitive data and objective data ke distinguish kore thake


  //  var n=10
  //  function change(n){
  //     n=n+12
  //     console.log(n)
  //  }

  //  change()// show output 12
  //  console.log(n) // show output 10
   // kono akta function er vitore argument akara jodi amora akta primitive data send kori[number ,string....]
   // tahole function body kono vabei primitive datatype er value change korte parena 
   // jemon console.log(n) korle output 10 asbe ,no change n;
   // ai bisoy ta ke bole pass by value
   // var obj={
   //    a:12,
   //    b:13
   // }
   // function changeMe(obj){
   //    obj.a=obj.a+100
   //    obj.b=obj.b+100
   //    console.log(obj)
   // }
   // changeMe() // a=112,b=113
   // console.log(obj)// a=112,b=113

    // kono akta function er vitore argument akara jodi amora akta objective  data send kori[obj....]
   // tahole function body er vitore  objective  datatype er value change korle create kora obj er value change 
   // hoye jabe,ai jonno function call korle je out put asbe ,obj ke console e print korle same output asbe
  
   // ai bisoy ta ke bole pass by refference



   //****************************Abstraction in javasrcipt******************************

   // private propertise in javascript

  //  var reactangle=function(width,height){
  //    this.width=width
  //    this.height=height
  //    this.position={
  //      x:23,
  //      y:13
  //    }
  //    this.draw=function(){
  //      console.log('i am rectangle')
  //      this.print()
  //      console.log(this)
  //    }
  //    this.print(){
  //      console.log('width is '+this.width)
  //      console.log('height is '+this.height)
  //    }

  // }

   //var rec7=new reactangle(788,567)
   //javascript a kono data private hisabe declare korar jonno jake private hisabe declare korbo
   // tar name er age var dite hobe
   // uporer codde er print position ke private hisabe declare kore nise dekano holo

     
   var reactangle=function(width,height){
    this.width=width
    this.height=height
    var position={
      x:23,
      y:13
    }
    
    var print=function(){
      console.log('width is '+this.width)
      console.log('height is '+this.height)
    }.bind(this)
    this.draw=function(){
      console.log('i am rectangle')
      print()
      console.log('position: x= '+position.x+' y '+position.y)

    }

  }

  var rec78=new reactangle(123,100)
  rec78.draw()




  //****************************Getter and setter in javascript*************************

  // node pore korbo






  //************************************************inheritance in javascript***************************

  // javascript e inheritance 2 prokar 
  // protypical inheritance 
  //classical inhertance


  //***********************protypical inheritance in js*******************************

   
















   








