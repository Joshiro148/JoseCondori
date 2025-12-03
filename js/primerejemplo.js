console.log("Hola Mundo");
alert("Hola Mundo, esto es un alert");
function triste(){
    document.getElementById('carita').src='images/noFilter (1).png';
}
function feliz(){
    document.getElementById('carita').scr='images/noFilter.png';
}
function cambiarColor(){
    document.getElementById('menu0').style.color="#634e4e";
    document.getElementById('menu1').style.color="#d92121ff";
    document.getElementById('menu2').style.color="#9ce19aff";
    document.getElementById('menu3').style.color="#2c37b1ff";
    document.getElementById('menu4').style.color="#ab1560ff";
    document.getElementById('menu5').style.color="#9bea13ff";
    document.getElementById('menu6').style.color="#4fe1fbff";
}
function cambiarLogo(){
    document.getElementById('logo').scr='images/logo antiguo.png';
}
function cambiarFondo(){
    document.getElementById('menu').style.background='#634e4e';
}
function cambiodeTexto(){
    document.getElementById('Minititulo').textContent="Esto es un texto EMERGENTE";
}
function fondoAside(){
    document.getElementById('aside').style.background='#34d129ff';
}