export const CheckValidateFormData = (email,password)=>{

    //const isUsernameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(username)
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)


    if(!isEmailValid) return "Email is not Valid"

    if(!isPasswordValid) return "Password is not valid"

    return null;
}
