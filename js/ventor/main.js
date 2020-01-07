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
        var resultado = document.getElementById('lista_productos');

        calcular.addEventListener('click' , calcularMontos);




        function calcularMontos(event){
            event.preventDefault(){
                alert("debes elejir 1 regalo");
                regalo.focus();
            } 
            else{
                console.log("ya elejiste regalo");
            }
            
           
        }




}); // DOMCONTENTLOADED
})();

