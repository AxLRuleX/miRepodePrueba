$(document).ready(function()
    {
        bienvenida();
        
        function bienvenida()
            {
                $('#lbl_bienvenida').html("<h3>Hola mundo</h3>");
                color_del_labl();
            }

        function color_del_labl()
            {
                $('#lbl_bienvenida').css("background-color", "rgb(250, 250,250)");
            }
    });