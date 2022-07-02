const mail = document.getElementById(`mail`);
const password = document.getElementById(`password`);
const nick = document.getElementById (`name`);
const age = document.getElementById (`age`)
const done = document.getElementById(`done`);
//_______________________________________________________________________________________________________________________________//
const bansNames = ["píto"]

const base = [
    users = [
        {mail: "etx", password: x},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
    ]
];
//_______________________________________________________________________________________________________________________________//
function ConstructorUsers (nick, age, password, mail) {
    this.nick = nick;
    this.age = age;
    this.password = password;
    this.mail = mail;
}
//_______________________________________________________________________________________________________________________________//
done.addEventListener("click", (e) => {
    e.preventDefault();
    let error = verify();
    if (verifyAge () === ("error") || verifyMail () === ("error") || verifyPassword () === ("error") || verifyName () === ("error")) {
        return ("error");
    } else if (verifyAge () === ("ok") && verifyMail () === ("ok") && verifyPassword () === ("ok") && verifyName () === ("ok")) {
        return login ();
    }
})
//________________________________________________________________________________________________________________________________//

//________________________________________________________________________________________________________________________________//
const verifyMail = ()=> {
    if (mail.value.length < 5 || mail.value.length > 25 || mail.value.indexOf("@") == -1 || mail.value.indexOf(".") == -1) {
        return ("error");
    } else {
        return ("ok");
    }
}
const verifyPassword = ()=> {
    if (password.value.length < 6 || password.value.indexOf(Number)) {
        return ("error")
    } else {
        return ("ok");
    }
}
const verifyName = ()=> {
    if (nick === bansNames[nick]) {
        return ("error");
    } else {
        return ("ok");
    }
}
const verifyAge = ()=> {
    if (age < 18) {
        return ("error");
    } else {
        return ("ok");
    }
}


function login () {
    base.push()
}







