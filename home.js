var b = 'Ha Tu';
console.log(b);

var someNuber = 45;
console.log(someNuber);

/* document.getElementById('someText').innerHTML = 'Hey Tu';

var age = prompt('How age ?');

document.getElementById('age').innerHTML = age; */

// Number in Javascript
var num1 = 5.7;
num1 = num1 + 0.3;
num1++;
num1--;
console.log(5/10 + num1);

//function

// create
function fun() {
    alert('this is function');

}

// call
// fun();

// Test 
  function greeting() {
     var name = prompt('What is your name ?');
     var result = 'Hello' + ' ' + name;
     console.log(result);
 }

//  greeting();

//  var name = prompt('What is your name ?');
  function hello(yourName) {
      var result = 'Hello' + ' ' + yourName;
      console.log(result);
  }
   //hello(name);


// while , for
/* var num = 0;
while (num < 100) {
    num +=1;
    console.log(num);
} 
// giá trị num sau khi end While = 100 ;
console.log(num);
 */

/* var num = 0;
for (var num = num; num <= 100; num++) { 
    console.log(num);
}
// giá trị num sau khi end For = 101 ;
console.log(num);

 */

// Data types
let yourAge = 22; //number
let yourName = 'LewLew'; //string
let name = {first: 'Jane', last: 'Doe', age: 18}; // object
let categoris = ['Samsung', 'Apple', 'XiaoMi'];

for(let i = 0; i < categoris.length ; i++) {
    console.log(categoris[i]);
}

console.log('Hi' + ' ' + name.first + ' ' + name.last + ' ' + name.age);
var sound = document.getElementById("aiphi");
sound.volume = 0.3;

  //              //
 //  TUYẾT RƠI   //
//              //

// Set the number of snowflakes (more than 30 - 40 not recommended)
var snowmax=35

// Set the colors for the snow. Add as many colors as you like
var snowcolor=new Array("#aaaacc","#ddddff","#ccccdd","#f3f3f3","#f0ffff")

// Set the fonts, that create the snowflakes. Add as many fonts as you like
var snowtype=new Array("Times","Arial","Times","Verdana")

// Set the letter that creates your snowflake (recommended: * )
var snowletter1="*";
var snowletter2="*";


// Set the speed of sinking (recommended values range from 0.3 to 2)
var sinkspeed=0.9

// Set the maximum-size of your snowflakes
var snowmaxsize=37

// Set the minimal-size of your snowflakes
var snowminsize=5

// Set the snowing-zone
// Set 1 for all-over-snowing, set 2 for left-side-snowing
// Set 3 for center-snowing, set 4 for right-side-snowing
var snowingzone=1

///////////////////////////////////////////////////////////////////////////
// CONFIGURATION ENDS HERE
///////////////////////////////////////////////////////////////////////////


// Do not edit below this line
var snow=new Array()
var marginbottom
var marginright
var timer
var i_snow=0
var x_mv=new Array();
var crds=new Array();
var lftrght=new Array();
var browserinfos=navigator.userAgent
var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/)
var ns6=document.getElementById&&!document.all
var opera=browserinfos.match(/Opera/)
var browserok=ie5||ns6||opera

function randommaker(range) {
        rand=Math.floor(range*Math.random())
    return rand
}

function initsnow() {
        if (ie5 || opera) {
                marginbottom = document.body.scrollHeight
                marginright = document.body.clientWidth-15
        }
        else if (ns6) {
                marginbottom = document.body.scrollHeight
                marginright = window.innerWidth-15
        }
        var snowsizerange=snowmaxsize-snowminsize
        for (i=0;i<=snowmax;i++) {
                crds[i] = 0;
            lftrght[i] = Math.random()*15;
            x_mv[i] = 0.03 + Math.random()/10;
                snow[i]=document.getElementById("s"+i)
                snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)]
                snow[i].size=randommaker(snowsizerange)+snowminsize
                snow[i].style.fontSize=snow[i].size+'px';
                snow[i].style.color=snowcolor[randommaker(snowcolor.length)]
                snow[i].style.zIndex=1000
                snow[i].sink=sinkspeed*snow[i].size/5
                if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
                if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
                if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
                if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
                snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size)
                snow[i].style.left=snow[i].posx+'px';
                snow[i].style.top=snow[i].posy+'px';
        }
        movesnow()
}

function movesnow() {
        for (i=0;i<=snowmax;i++) {
                crds[i] += x_mv[i];
                snow[i].posy+=snow[i].sink
                snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(crds[i])+'px';
                snow[i].style.top=snow[i].posy+'px';

                if (snow[i].posy>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])){
                        if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
                        if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
                        if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
                        if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
                        snow[i].posy=0
                }
        }
        var timer=setTimeout("movesnow()",32)
}

for (i=0;i<=snowmax;i++) {
        document.write("<span id='s"+i+"' style='position:absolute;top:-"+snowmaxsize+"'>"+snowletter1+"</span>")
        document.write("<span id='s"+i+"' style='position:absolute;top:-"+snowmaxsize+"'>"+snowletter2+"</span>")
}
if (browserok) {
        window.onload=initsnow
}

