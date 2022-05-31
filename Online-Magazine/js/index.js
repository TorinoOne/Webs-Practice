//________________________________Header-Sections_________________________________________//
let listElements = document.querySelectorAll('.list_button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=> {
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0") {
            height = menu.scrollHeight;
        }

        menu.style.height = `${height}px`
    })
});
//___________________________________Date-Clock_________________________________________//
const $tiempo = document.querySelector (`.tiempo`),
$fecha = document.querySelector(`.fecha`);

function clock () {
    let f = new Date (),
    dia = f.getDate (),
    mes = f.getMonth () + 1,
    anio = f.getFullYear (),
    diaSemana = f.getDay ();

    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2);

    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;

    let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
    let showSemana = (semana[diaSemana])
    $fecha.innerHTML = `${anio}-${mes}-${dia} ${showSemana}`
}
setInterval(() => {
    clock();

}, 1000)
//_________________________________________________________________________//


//_________________________________________________________________________//


//_________________________________________________________________________//


//_________________________________________________________________________//


//_________________________________________________________________________//


//_________________________________________________________________________//


//_________________________________________________________________________//


//_________________________________________________________________________//