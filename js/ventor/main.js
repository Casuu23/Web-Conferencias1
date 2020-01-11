(function () {
    "use stric";


    var regalo = document.getElementById('regalo')
    document.addEventListener('DOMContentLoaded', function () {



        // campos datos usuarios
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        //campos pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_completo = document.getElementById('pase_completo');
        var pase_2_dias = document.getElementById('pase_2_dias');

        // botones y divs 
        var calcular = document.getElementById('calcular');
        var error = document.getElementById('error');
        var registro = document.getElementById('btn-registro');
        var lista_productos = document.getElementById('lista_productos');
        var suma = document.getElementById('suma_total');

        // extras 

        var cant_etiquetas = document.getElementById('etiquetas');
        var camisas = document.getElementById('camisa_evento');

        // dias de talleres 



        // eventos 

        calcular.addEventListener('click', calcularMontos);
        pase_dia.addEventListener('blur', mostrarDias);
        pase_2_dias.addEventListener('blur', mostrarDias)
        pase_completo.addEventListener('blur', mostrarDias)


        nombre.addEventListener('blur', validarCampos)
        apellido.addEventListener('blur', validarCampos)
        email.addEventListener('blur', validarCampos)
        email.addEventListener('blur', validarMail)

        function validarCampos() {
            if (this.value == "") {
                error.style.display = 'block';
                error.innerHTML = " ERROR RELLENA TODOS LOS CAMPOS CON TUS DATOS";
                this.style.border = '1px solid red';
            }
            else {
                error.style.display = 'none';
                this.style = 'none';
                this.style.border = '1px solid #ccccc'
            }
        }

        function validarMail() {
            if (this.value.indexOf("@") > -1) {
                error.style.display = 'none'
                this.style.border = '1px solid #ccccc'
            } else {
                error.style.display = 'block';
                error.innerHTML = "EMAIL INVALIDO"
                this.style.border = " solid 1px red"
                this.focus
            }
        }


        // fin eventos 

        function calcularMontos(event) {
            event.preventDefault();
            if (regalo.value === '') {
                alert("elije un regalito");
                regalo.focus;
            }
            else {
                var boletosDia = parseInt(pase_dia.value, 10) || 0,
                    boletos2Dias = parseInt(pase_2_dias.value, 10) || 0,
                    boletosCompleto = parseInt(pase_completo.value, 10) || 0,
                    cantidadCamisas = parseInt(camisas.value, 10) || 0,
                    cant_etiquetas = parseInt(etiquetas.value, 10) || 0;

            }

            var totalPagar = (boletosDia * 30) + (boletos2Dias * 45) + (boletosCompleto * 50) + ((cantidadCamisas * 10) * .93) + (cant_etiquetas * 2);

            var listadoProducto = []
            if (boletosDia >= 1) {
                listadoProducto.push(boletosDia + ' pases por dia');
            }
            if (boletos2Dias >= 1) {
                listadoProducto.push(boletos2Dias + ' pases por 2 dia');
            }
            if (boletosCompleto >= 1) {
                listadoProducto.push(boletosCompleto + ' pases completos');
            }
            if (cantidadCamisas >= 1) {
                listadoProducto.push(cantidadCamisas + ' camisas');
            }
            if (cant_etiquetas >= 1) {
                listadoProducto.push(cant_etiquetas + ' paquete de etiquetas');
            }

            lista_productos.style.display = "block";
            suma_total.style.display = "block"


            lista_productos.innerHTML = '';
            for (var i = 0; i < listadoProducto.length; i++) {
                lista_productos.innerHTML += listadoProducto[i] + '<br/>';
            }

            suma.innerHTML = "$" + totalPagar.toFixed(2);

        }

        function mostrarDias() {

            var boletoDia = parseInt(pase_dia.value, 10) || 0,
                boleto2Dias = parseInt(pase_2_dias.value, 10) || 0,
                boletoCompleto = parseInt(pase_completo.value, 10) || 0;

            var diasElegidos = [];
            if (boletoDia > 0) {
                diasElegidos.push('viernes');
                pase_completo.desabled = true;


            } else if (boletoDia == 0) {
                viernes.style.display = 'none'
            }


            if (boleto2Dias > 0) {
                diasElegidos.push('viernes', 'sabado');
            } else if (boletoDia == 0) {
                viernes.style.display = 'none'
                sabado.style.display = 'none'
            }

            if (boletoCompleto > 0) {
                diasElegidos.push('viernes', 'sabado', 'domingo');
            } else if (boletoDia == 0) {
                viernes.style.display = 'none'
                sabado.style.display = 'none'
                domingo.style.display = 'none'
            }

            for (var i = 0;
                i < diasElegidos.length;
                i++) {
                document.getElementById(diasElegidos[i]).style.display = 'block';

            }

        }


    }); // DOMCONTENTLOADED
})();




$(function () {
    // lettering
$('.nombre-sitio').lettering();

    // programa de conferencias
    $('.contenedor-programa .info-curso:first').show();

    $('.menu-programa a').on('click', function () {
        $('.ocultar').hide();
        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);
        return false;
    });
});



// animaciones para Numeros
$('.resumen li:nth-child(1) p').animateNumber({ number: 6 }, 1200);
$('.resumen li:nth-child(2) p').animateNumber({ number: 15 }, 1200);
$('.resumen li:nth-child(3) p').animateNumber({ number: 3 }, 1500);
$('.resumen li:nth-child(4) p').animateNumber({ number: 4 }, 1200);

// cuenta regresiba

$('.cuenta-regresiva').countdown('2020/01/18 05:00:00', function (event) {
    $('#dias').html(event.strftime('%D'));
    $('#horas').html(event.strftime('%H'));
    $('#minutos').html(event.strftime('%M'));
    $('#segundos').html(event.strftime('%S'));
});