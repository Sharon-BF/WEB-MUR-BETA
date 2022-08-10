$(document).ready(function () {
    $('#logoSlider').multislider({
        continuous: true,
        duration: 2000
    });

    $('#enviarConsulta').click(function (e) {
        //e.preventDefault();

        apellidosCli = $('#input_apellido').val();
        nombresCli = $('#input_nombre').val();
        dniCli = $('#input_dni').val();
        celularCli = $('#input_celular').val();
        emailCli = $('#input_email').val();
        consultaCli = $('#input_consulta').val();
        datosCli= 'Mensaje de:' +"\n"+ apellidosCli + "\n" + nombresCli +"\nEmail: "+emailCli +"\nCelular: "+celularCli;

        $.ajax({
            method: 'POST',
            url: 'https://formsubmit.co/ajax/sharon.camilabf@gmail.com',
            dataType: 'json',
            accepts: 'application/json',
            data: {
                _subject: "Consulta desde PAGINA WEB MUR TECNOLOGÍA",
                name: "MUR TECNOLOGÍA\n" + datosCli,
                message: consultaCli
            },
            success: (data) => console.log(data),
            error: (err) => console.log(err)
        });
    })
});
