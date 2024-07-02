function genaratePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
    const uppercaseChars = "A,B,C,D,E,F,,J,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
    const numberChars = "0,1,2,3,4,5,6,7,8,9";
    const symbolChars = "!,@,#,$,%,^,&,*,(,),-,+,=,-,<,>,/,.,.";


    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return '(password length must be at least 1)';
    }
    if(allowedChars.length === 0){
        return'(at least 1 set of character needs to be selected)';
    }

    for(let i=0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;

}


const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = false;
const includeSymbols = false;


const password = genaratePassword(passwordLength, 
                                 includeLowercase, 
                                 includeUppercase, 
                                 includeNumbers, 
                                 includeSymbols);

console.log('Genarate Password : ',(password));