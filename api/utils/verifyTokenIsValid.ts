import { decode } from "jsonwebtoken"

const verifyTokenIsValid = (token: string) => { 
    if(decode(token)){
        return true;
    }else{
        return false;
    }
}

export {verifyTokenIsValid}