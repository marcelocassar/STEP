    let dianasc = Number(prompt("Que DIA você nasceu? - FORMATO - 01 , 12, 31"))
    let mesnasc = prompt("Que MÊS você nasceu? - FORMATO - 01 , 07, 12")
    let anonasc = Number(prompt("Que dia você nasceu? - FORMATO - 2022, 1984"))
    let diahj = Number(prompt("Que DIA é HOJE? - FORMATO 01,12,31"))
    let meshj = Number(prompt("Que MÊS É o atual? - FORMATO - 01,02,12"))
    let anohj = Number(prompt("Qual o ano atual?"))
  
    document.write(`<p>Você digitou que nasceu em: ${dianasc} / ${mesnasc} / ${anonasc}</p>`)
    document.write(`<p>Você digitou que hoje é dia: ${diahj} / ${meshj} / ${anohj}</p>`)

    switch (mesnasc) {

        case "1": mesnasc = 0 
        break
        case "2": mesnasc = 31 
        break
        case "3": mesnasc = 59 
        break
        case "4": mesnasc = 90 
        break
        case "5": mesnasc = 120 
        break
        case "6": mesnasc = 151 
        break
        case "7": mesnasc = 181 
        break
        case "8": mesnasc = 212 
        break
        case "9": mesnasc = 243 
        break
        case "10": mesnasc = 273 
        break
        case "11": mesnasc = 304 
        break
        case "12": mesnasc = 334 
        break
        /*
        default:
            mesnasc = "Erro"
            document.write(`Você digitou ${mesnasc} e está fora do formato.`)
          */          
    }

    /*
    if (mesnasc==1){mesnasc =0}
    if (mesnasc==2){mesnasc =31}
    if (mesnasc==3){mesnasc =59}
    if (mesnasc==4){mesnasc =90}
    if (mesnasc==5){mesnasc =120}
    if (mesnasc==6){mesnasc =151}
    if (mesnasc==7){mesnasc =181}
    if (mesnasc==8){mesnasc =212}
    if (mesnasc==9){mesnasc =243}
    if (mesnasc==10){mesnasc=273}
    if (mesnasc==11){mesnasc=304}
    if (mesnasc==12){mesnasc=334}
*/
    anonasc = anonasc * 365
    datanasc = anonasc + dianasc + mesnasc

    if (meshj==1){meshj =0}
    if (meshj==2){meshj =31}
    if (meshj==3){meshj =59}
    if (meshj==4){meshj =90}
    if (meshj==5){meshj =120}
    if (meshj==6){meshj =151}
    if (meshj==7){meshj =181}
    if (meshj==8){meshj =212}
    if (meshj==9){meshj =243}
    if (meshj==10){meshj=273}
    if (meshj==11){meshj=304}
    if (meshj==12){meshj=334}

    anohj = anohj * 365
    datahj = anohj + diahj + meshj
    dif = datahj - datanasc

    document.write(`${diahj} . ${meshj} . ${dianasc} . ${mesnasc} . `)    


    if (datahj<datanasc){

        document.write(`<p>Você digitou errado.</p>`)    

    } else {
    document.write(`<p>Você tem ${dif} dias de vida!</p>`)
}

