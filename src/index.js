let username = prompt(`What's your name?`)
let age = prompt(`How old are you?`)
let email = prompt(`What's your Email address?`)
if (age < 12){
    alert(`Hi ${username}, you are ${age} years old and are to young to register. Sorry 😔😔 `)
} else if (age>=12 && age < 18){
    alert(`Hi ${username}, you are ${age} years old and have limited options to register for. We will keep in touch via ${email} 👋🏽👋🏽 .`)
} else if (age >= 18){ 
    alert(`Hi ${username}, you are ${age} years old and can register for any option of your choosing. We will keep in touch via ${email} 👋🏽👋🏽  .`)
} else {
    alert(`enter valid info`);
}