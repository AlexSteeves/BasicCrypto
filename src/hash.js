
//require is Node.JS verison of include
const {createHash} =require('crypto')
// Compare two hashed passwords

function hash(input){
    return createHash('sha256').update(input).digest('hex');
}


let password = 'testPass';
const hash1 = hash(password);
console.log(hash1)

/// ... some time later

password = 'testPass';
const hash2 = hash(password);
const match = hash1 === hash2;

console.log(match ? '✔️  good password' : '❌  password does not match');

 