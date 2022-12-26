export function validation(inputs){
    let errors = {};

    const regexEmail= /\S+@\S+\.\S+/;
    const regexPassw= new RegExp(
        "^(?=[A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]{6,10}$"
    );
    
if(!regexEmail.test(inputs.username)) errors.username="El nombre de usuario debe ser un email valido";
if(!inputs.username) errors.username="El nombre de usuario es requerido";
if(inputs.username.length > 35) errors.username="El nombre de usuario es demasiado largo";

if(!regexPassw.test(inputs.password)) errors.password="La contraseña debe tener al menos un numero";
if(inputs.password.length < 6) errors.password="La contraseña es demasiado corta";
else if(inputs.password.length >10) errors.password="La contraseña es demasiado larga";

return errors;
}