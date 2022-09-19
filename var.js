

// function with arguments
function fraction(a,b) {
  a>b?console.log("A is largest: ",a):console.log("B is largest : ",b);

}
// var firstvar = 3/2;
// var second = 2/3;
fraction(3/2,2/3);

// console.log("first number : ",firstvar);
// console.log("second number : ",second);
// return value from function

function multiplication(x,y){
  var result;
  result=[x*y];
  return result;
}

console.log("result of multiplication : ",multiplication(2,2));



// anonumous function
var p=2;
var q=1;
var    divide = function (p,q) {
  var div;
  div=[p/q];
console.log("result of division: ",div);
}
divide(20,2);

// console.log(divide);

// immediately invoke function
var val1=10;
var val2=20;
var compare =( function ( val11, val22) {
  var result;
  val1>=val2?result=val1:result=val2;
  return result;
}(val1,val2))
console.log("result of comparision : ", compare);

// global variable
var str ="Priti";
function localscope(){
  var str1="khaire";
  console.log("Local variable: ",str1);
  console.log("global variable: ",str);
  // let variables
  if(str){
    let str1="dddddd";
    console.log("this variable define let : ",str);
  }
}
localscope();
console.log("global variable : ",str);

// Object

var student = new Object();
student.firstname ="Priti";
student.lastname ="Khaire";
student.age=22;
// student["updateage.function()"];
//   // return ++student.age;
student.collage = "scoe";


console.log(student);
function updateage() {
  return ++student.page;

}
console.log(student.age);
// student[updateage:function ()] ;
console.log(student.age);


// Object

var course={
  title:"javascript",
  level:1,
  totalmodule:10,
  updateresult:function () {
    return ++course.totalmodule;
  }

}
console.log(course);
console.log(course.totalmodule);
course.updateresult();
console.log(course.totalmodule);

// object constrocture

function objconst(course,year,location,) {
    this.course1=  course;
    this.year1=year;
    this.location1=location
    this.update1=function () {
      return this.year1++;
    }

}

var objconst1 =new objconst("JS",2022,"mumbai");
console.log(objconst1);
console.log(objconst1.update1());
console.log(objconst1.year1);


var obj= [
    new objconst("node js ",2021,"pune"),
    new objconst("db",2011,"mumbai")
];
console.log(obj);


// closure

function sum(a){

  function secondvar() {
    var b=10;
    return a+b;
  }
  return secondvar;
}
var aa = sum(10);
var bb = sum(20);
console.log("first sum: ",aa());
console.log("second sum : ",bb());


// for loop

  var a;
  a=10;
  for(var i =1;i<=a;i++){
    console.log("hello!!!!!");
  }
