const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod=require("zod")


const emailsChema=zod.string().email()
const pwd =zod.string().min(6)

function signJwt(username, password) {
    const usernmaeScheme= emailsChema.safeParse(username)
    const pwdScheme=pwd.safeParse(password)
  if(!usernmaeScheme.success || !pwdScheme.success){
    return null
   }
   const token = jwt.sign({username},jwtPassword)
   return token

}


function verifyJwt(token) {
    let ans=true
    try{
        const qw=jwt.verify(token,jwtPassword)
        
    }catch(e){
        ans= false
    }
   
    return ans
}


function decodeJwt(token) {

    const decoded = jwt.decode(token);
   if(decoded){
        return true
   }else{
    return false
   }

}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};


