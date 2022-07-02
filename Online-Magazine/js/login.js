const mail = document.getElementById(`mail`);
const password = document.getElementById(`password`);
const done = document.getElementById(`done`);

const base = [];

done.addEventListener("click", (e) => {
    e.preventDefault();
    let error = validar();
    let exito = login ();
    if (error === ("error")) {
        return ("error");
    } else if (error === ("ok")) {
        return exito;
    }
})

const validar = ()=>{
    if (mail.value.length < 5 || mail.value.length > 25 || mail.value.indexOf("@") == -1 || mail.value.indexOf(".") == -1) {
        return ("error");
    } else {
        return ("ok");
    }
}

const login = ()=> {
    if (mail === base[obj.mail] && password === base[obj.password]) {
        window.location = "../index.html";
    }
}
