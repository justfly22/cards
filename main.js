


















let addCourse = document.getElementById('addCourse');
let courseDescription = document.getElementById('courseDescription');
let coursePrice = document.getElementById('coursePrice');
let addCourseBtn = document.getElementById('addCourseBtn');

function getTotal(){
let x='';
let y='';
let z= '';

outputName= addCourse.value;
outputDes= courseDescription.value;
outputPrice= coursePrice.value;

x += outputName;
y += outputDes;
z += outputPrice;

document.getElementById('outputName').innerHTML= x;
document.getElementById('outputDes').innerHTML= y;
document.getElementById('coursePrice').innerHTML= z;

   }



let adding= document.getElementById ('adding')
let student= document.getElementById ('student')
let instructor= document.getElementById ('instructor')


student.addEventListener('change', typeofUser);  // مش فاهمه اوي
instructor.addEventListener('change', typeofUser);

typeofUser();

function typeofUser(){
if( student.checked   ){
    adding.style.display="none"; 
}else{
    adding.style.display="block"; 

}
}
