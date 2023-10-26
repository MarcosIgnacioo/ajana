let users =
    [
        { username: "alexelcapo", password: "evilafm" },
        { username: "chincheto", password: "hola123" },
        { username: "sarihna", password: "poptart" },
        { username: "lynxreviewer", password: "oreo" }
    ]
console.log("quepedo")
const username = document.querySelector("#username")
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");

submit?.addEventListener('click', register);
function register() {
    if (!userExists(username?.value)){
        registerNewUser(username?.value, password?.value);
    }
    else{
        if (userPassAuth(username?.value, password?.value)){
            alert("hola secreto")
        } 
    }
}
function registerNewUser(usernameRegistered, passwordRegistered) {
    users.push({ username: usernameRegistered, password: passwordRegistered })
}
function userExists(username) {
    for (let i = 0; i < users.length; i++) {
        if (username === users[i].username){
            return true;
        } 
    }
    return false;
}
function userPassAuth(username, password) {
   for (let i = 0; i < users.length; i++) {
        if (username === users[i].username && password == users[i].password){
            return true;
        } 
    }
   return false;
}