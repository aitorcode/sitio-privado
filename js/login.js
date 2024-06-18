const usuarios = {
    "aitor": "123"
}

function verificacion(event) {

    event.preventDefault();

    const usuario = document.getElementById('usuario').value
    const pass = document.getElementById('pass').value


    if (usuarios[usuario] && usuarios[usuario] === pass) {
        alert("contraseña correcta")
        window.location.href = "../dashboard.html";
    } else {
        alert("contraseña incorrecta")
    }

}     


