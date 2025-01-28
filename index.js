class ValidationError extends Error{
    constructor(message){
        super(message)
        this.name = ValidationError
    }
}

let usernameLength = 10

function validateUsername(username){
    if (username.length < usernameLength){
        throw new Error("This username isn't 10 characters long.");
    }
    return "Username is Valid.";
}

try{
    console.log(validateUsername("Bishoeri000"));
}catch(error){
    console.error(`${error.name}: ${error.message}`)
}