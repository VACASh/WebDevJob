var arrayEmpresas = new Array();

arrayEmpresas[0] = new empresa("Everis", "En Everis queremos impulsar tu carrera profesional como desarrollador Java, dándote la oportunidad de incorporarte en equipos dinámicos y multiculturales, trabajando en un proyecto para el cliente más importante del sector e-Commerce y Turismo, a nivel Europeo.",
    "A nivel tecnológico buscamos tanto perfiles Backend como Frontend <br> ¿Qué buscamos para cada uno de ellos?<br>  - Backend : conocimientos y experiencia de tres años en SQL y Java <br> - Frontend: valoraremos conocimientos en HTML5, CSS3, JavaScript, JQuery, BackBone / Angular JS",
    "QUÉ TE OFRECEMOS<br>Si te unes a nuestro equipo, tendrás la oportunidad de trabajar con profesionales expertos de la tecnología, durante toda tu trayectoria profesional en everis tendrás un tutor/ a, que se encargará de asesorarte para que tengas un gran desarrollo y contarás con feedback constante para que puedas tener un plan de carrera apasionante.",
    "Número de puestos a cubrir: <br> 4");
arrayEmpresas[1] = new empresa

function empresa(nombre_in, descripcion_in, busqueda_in, oferta_in,puestos_in) {
    this.nombre = nombre_in;
    this.descripcion = descripcion_in;
    this.busqueda = busqueda_in;
    this.oferta = oferta_in;
    this.puestos = puestos_in; 
}
function recorrerEmpresas() {
    for (var i = 0; i < arrayEmpresas.length; i++) {
        document.write(" <div class='consec'>" + "<h2>" + (arrayEmpresas[i].nombre) + "</h2 ><p>" + (arrayEmpresas[i].descripcion) + "</p ><p>" +
            (arrayEmpresas[i].busqueda) + "</p ><p>" + (arrayEmpresas[i].oferta) + "</p ><p>" + (arrayEmpresas[i].puestos) + "</p >"
            + "<button  onclick=\"alert('inscrito en la oferta')\" >inscribirse en oferta</button></div ><div class='vacio'><br> </div> ");
    }
}

recorrerEmpresas();