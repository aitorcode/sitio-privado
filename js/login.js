const usuarios = {
    "aitor": "123"
}

function verificacion(event) {

    const params = new URLSearchParams(location.search)
    const usuario = params.get('usuario')
    const pass = params.get('pass')

    if (usuarios[usuario] && usuarios[usuario] === pass) {
        alert("contraseña correcta")
        window.location.href = "../dashboard.html";
    } else {
        alert("contraseña incorrecta")
        window.location.href = "../login.html";
    }

}  

setTimeout(verificacion, 200);

/* verificacion()
 */




