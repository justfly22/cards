
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let password = document.getElementById('password');



data=[];


function submitInfo(){
const user ={
   fname: fname.value,
   lname: lname.value,
   email: email.value,
   password: password.value,
}

data.push(user)

fname.value = '';
lname.value = '';
email.value = '';
password.value = '';

localStorage.setItem('users', JSON.stringify(user));
}






let loginEmail = document.getElementById('loginEmail');
let loginPassword = document.getElementById('loginPassword');
let loginBtn = document.getElementById('loginBtn');


function verify(){
   const storedUser = JSON.parse(localStorage.getItem('user'));

if (storedUser != 0){
if (loginEmail.value === storedUser.email && loginPassword.value === storedUser.password){
   console.log("welcome to ur page")
} else  {
   console.log('invalid information')
} 

}
}

loginBtn.addEventListener("click", verify)
