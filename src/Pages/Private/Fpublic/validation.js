const regexEmail= /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;
const regexPassword= /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

export function validation(inputs){
    let errors = {};
if(!inputs.username) errors.username="El nombre de usuario es requerido";
else if(inputs.username.length > 35) 
    errors.username="El nombre de usuario es demasiado largo";
else if(!regexEmail.test(inputs.username)) 
    errors.username="El nombre de usuario debe ser un email";


    
if(inputs.password.length < 6)
    errors.password="La contraseña es demasiado corta";
else if(inputs.password.length >10)
    errors.password="La contraseña es demasiado larga";
else if(!regexPassword.test(inputs.password))
    errors.password="La contraseña debe tener al menos un numero";
    
return errors;
}