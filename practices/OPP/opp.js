// console.log('hello world')


// var rect={
//     width:120,
//     height:60,
//     draw:function(){
//         console.log('i am a rectangle')
//         console.log('my width is '+this.width)
//         console.log('my height is '+this.height)
//     }
// }

// rect.draw()

// rect.height=90
// rect.draw()


// function myfunc(){
//     console.log(this)
// }

// myfunc()

// new myfunc()



// var rect={
//     width:80,
//     height:45,
//     draw:function(){
//         console.log('learing opp')
//         this.print()

//     },
//     print:function(){
//         console.log('my width is '+this.width)
//         console.log('my height is '+this .height)
//     }
// }

// rect.draw()

// var another={
//     height:30,
//     width:20,
//     asd:print()
// }

// another.asd



// var classs=function(width,height){
//     return {
//         width:width,
//         height:height,
//         draw:function(){
//             console.log('i am learning javasctipt')
//             this.print()
//         },
//         print:function(){
//             console.log('my width is '+this.width)
//             console.log('my height is '+this.height)
//         }
//     }
// }
// var obj1=classs(120,90)
// obj1.draw()
// var obj2=classs(80,40)
// obj2.draw()


var Classs=function(width,height){
    this.width=width
    this.height=height
    this.draw=function(){
        console.log('i am learning javasrcipt')
        this.print()
    }
    this.print=function(){
        console.log('my width is '+this.height)
        console.log('my height is '+this.height)
    }
}

var obj=new Classs(120,60)
obj.draw()
var obj2=new Classs(300,150)
obj2.draw()




