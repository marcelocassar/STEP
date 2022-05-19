var indice = 1
    var depois = indice +1
    var listaImg = [];

    listaImg.push("src/images/0.png");
    listaImg.push("src/images/1.png");
    listaImg.push("src/images/2.png");
    listaImg.push("src/images/3.png");
    listaImg.push("src/images/4.png");
    listaImg.push("src/images/5.png");
    listaImg.push("src/images/6.png");
    listaImg.push("src/images/7.png");
    listaImg.push("src/images/8.png");
    listaImg.push("src/images/9.png");

    function carregar(){
        document.getElementById("um").value = indice -1;
        document.getElementById("dois").value = indice;
        document.getElementById("tres").value = indice +1;

        document.getElementById('0').src = listaImg[0]
        document.getElementById('1').src = listaImg[1]
        document.getElementById('2').src = listaImg[2]
    }

    function posterior(){
        indice = indice + 1;
        let antes, depois
                
        if (indice >= listaImg.length){
            indice = 0
        }

        depois = indice + 1;

        if (depois >= listaImg.length){
            depois = 0
        }
       
        antes = indice -1;

        if (antes == -1){
            antes = listaImg.length -1
        }

        document.getElementById("um").value = antes;
        document.getElementById("dois").value = indice;
        document.getElementById("tres").value = depois;

        document.getElementById('0').src = listaImg[antes]
        document.getElementById('1').src = listaImg[indice]
        document.getElementById('2').src = listaImg[depois]

    }

    function anterior(){
        indice = indice - 1;        
        let antes, depois
        antes = indice -1;
        depois = indice +1;

        if (indice == -1) {
            indice = listaImg.length -1
        } 

        if (antes == -1){
            antes = listaImg.length -1
        }

        if (antes == -2){
            antes = 8;
        }


        document.getElementById("um").value = antes;
        document.getElementById("dois").value = indice;
        document.getElementById("tres").value = depois;

        document.getElementById('0').src = listaImg[antes]
        document.getElementById('1').src = listaImg[indice]
        document.getElementById('2').src = listaImg[depois]
    }