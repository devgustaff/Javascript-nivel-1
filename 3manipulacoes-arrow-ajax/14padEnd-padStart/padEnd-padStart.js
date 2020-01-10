let telephone = "(41)";
console.log(telephone.padEnd(13, "*"));
console.log(telephone.padStart(13, "-"));

// exemplos reais de padStart() e padEnd()
let cartNumber = "1234123412341234";
let lastDigits = cartNumber.slice(-4);
let cartMask = lastDigits.padStart(cartNumber.length, "*");
console.log(cartMask);


let email = "gustaff.tech@gmail.com";
let emailDigits = email.slice(0, 2);
let emailMask = emailDigits.padEnd(email.length, "*");
console.log(emailMask);
