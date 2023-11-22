const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');


//A salt is a random value added to passwords to make them stronger
function signup(email, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const user = {email, passdowrd: `${salt}:${hashedPassword}`}
  
    users.push(user);

    return user
}

function login(email, password) {
    const user = users.find(v => v.email === email);
  
    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);
  
    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);
    
    if (match) {
        return 'login success!'
    } else {
        return 'login fail!'
    }
}


