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
            // url: 'https://formsubmit.co/ajax/ventas@mur-tecno.com.pe',
            dataType: 'json',
            accepts: 'application/json',
            data: {
                _subject: "PAGINA WEB MUR TECNOLOGÍA - consulta cliente",
                name: "MUR TECNOLOGÍA\n" + datosCli,
                message: consultaCli
            },
            success: (data) => console.log(data),
            error: (err) => console.log(err)
        });
    })


    $('#btn_enviar_cotizacion').click(function (e) {
        e.preventDefault();

        clienteCoti = $('#alqinput_nombres').val();
        docCoti = $('#alqinput_dni').val();
        emailCoti = $('#alqinput_email').val();
        celCoti = $('#alqinput_celular').val();
        consulCoti = $('#alqinput_consulta').val();
        datosCoti= 'Cliente: ' + clienteCoti + "\nDNI / RUC: "+ docCoti  + "\nEmail: "+ emailCoti +"\nCelular: "+celCoti;

        if(clienteCoti == '' || docCoti == '' || emailCoti == '' || celCoti == ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Llenar todos los campos',
              })
        }
        else{
            $.ajax({
                method: 'POST',
                url: 'https://formsubmit.co/ajax/sharon.camilabf@gmail.com',
                // url: 'https://formsubmit.co/ajax/ventas@mur-tecno.com.pe',
                dataType: 'json',
                accepts: 'application/json',
                data: {
                    _subject: "PAGINA WEB MUR TECNOLOGÍA - COTIZACIÓN CLIENTE",
                    name: "MUR TECNOLOGÍA\n" + datosCoti,
                    message: consulCoti
                },
                success: (data) => {
                    Swal.fire(
                        'Gracias',
                        'Nos pondremos en contacto',
                        'success'
                      )
                    },
                error: (err) => console.log(err)
            });
        }
        
    })

});
