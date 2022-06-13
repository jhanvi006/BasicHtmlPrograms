const username = document.querySelector('#uname');
const nameError = document.querySelector('.name-error');
username.addEventListener('input', function(){
    let nameRegex = RegExp('^[A-Z]{1}[A-Za-z\\s]{2,}$');
    if(nameRegex.test(username.value))
        nameError.textContent = "";
    else nameError.textContent = "Name is incorrect";
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function(){
    let emailRegex = RegExp('^[a-z]{3}[a-zA-Z0-9.-._+]*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$');
    if(emailRegex.test(email.value))
        emailError.textContent = "";
    else emailError.textContent = "Email is incorrect";
});

var currentYear = (new Date).getFullYear();
var currentMonth = (new Date).getMonth();
var currentDay = (new Date).getDate();

// $('#dob').datepicker({
// minDate: new Date((currentYear - 1), 12, 1),
// dateFormat: 'dd/mm/yy',
// maxDate: new Date(currentYear, currentMonth, currentDay)
// });

// const dob = document.querySelector('#dob');
// const dobError = document.querySelector('.dob-error');
// const date = Date.now().toLocaleString();
// document.querySelector('#dob').setAttribute('max', date);
// console.log(date);
// if(dob.value <= date)
//     dobError.textContent = "";
// else dobError.textContent = "Date of birth is incorrect!";

const mobileNo = document.querySelector('#mobileNo');
const mobileNoError = document.querySelector('.mob-error');
mobileNo.addEventListener('input', function(){
    let mobileRegex = RegExp('^[0-9]{2}\\s{0,1}[1-9]{1}[0-9]{9}$');
    if(mobileRegex.test(mobileNo.value))
        mobileNoError.textContent = "";
    else mobileNoError.textContent = "Mobile No. Is Incorrect";
});