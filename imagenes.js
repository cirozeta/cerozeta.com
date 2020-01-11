/**
     * Array con las imagenes 
     */    
    var imagenes1=new Array(
        ['images/1_1.png'],
        ['images/1_2.png'],
        ['images/1_3.png'],
        ['images/1_4.png'],
        ['images/1_5.png']
    );
    var imagenes2=new Array(
        ['images/2_1.png'],
        ['images/2_2.png'],
        ['images/2_3.png'],
        ['images/2_4.png'],
        ['images/2_5.png']
    );
    var imagenes3=new Array(
        ['images/3_1.png'],
        ['images/3_2.png'],
        ['images/3_3.png']
    );
    var imagenes4=new Array(
        ['images/4_1.png'],
        ['images/4_2.png'],
        ['images/4_3.png'],
        ['images/4_4.png']
    );
    var imagenes5=new Array(
        ['images/5_1.png'],
        ['images/5_2.png']
    );
    var imagenes6=new Array(
        ['images/6_1.png'],
        ['images/6_2.png'],
        ['images/6_3.png'],
        ['images/6_4.png'],
        ['images/6_5.png'],
        ['images/6_6.png'],
        ['images/6_7.png']
    );
    var imagenes7=new Array(
        ['images/7_1.png'],
        ['images/7_2.png'],
        ['images/7_3.png'],
        ['images/7_4.png'],
        ['images/7_5.png']
    );
    var contador=0;
 
    /**
     * Funcion para cambiar la imagen 
     */
    function rotarImagenes()
    {
        // cambiamos la imagen 
        contador++        
        document.getElementById("imagen1").src=imagenes1[contador%imagenes1.length][0];
        document.getElementById("imagen2").src=imagenes2[contador%imagenes2.length][0];
        document.getElementById("imagen3").src=imagenes3[contador%imagenes3.length][0];
        document.getElementById("imagen4").src=imagenes4[contador%imagenes4.length][0];
        document.getElementById("imagen5").src=imagenes5[contador%imagenes5.length][0];
        document.getElementById("imagen6").src=imagenes6[contador%imagenes6.length][0];
        document.getElementById("imagen7").src=imagenes7[contador%imagenes7.length][0];
    }
 
    /**
     * Función que se ejecuta una vez cargada la página
     */
    onload=function()
    {
        // Cargamos una imagen aleatoria
        rotarImagenes();
 
        // Indicamos que cada 5 segundos cambie la imagen
        setInterval(rotarImagenes,5000);
    }