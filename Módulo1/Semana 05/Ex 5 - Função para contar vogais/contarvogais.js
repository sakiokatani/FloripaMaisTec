
let stringUsuario = "Eichhünchen"; 
let vowels = ['a', 'i', 'u', 'e', 'o', 'à', 'á', 'ä', 'í', 'ú', 'ü', 'ú', 'é', 'ê', 'ë', 'ó', 'ô','ö'];
let inputValid = false;



if( typeof stringUsuario !== 'string'){
    console.log("Favor inserir um dado válido")
}

if (typeof stringUsuario === 'string' && stringUsuario !== ''){
    inputValid = true;
    console.log(countVowels());
}

function countVowels(){
    vogais = [];
    for(i = 0; i < stringUsuario.length; i++){
        let letter = stringUsuario[i].toLowerCase();
    if(vowels.includes(letter)){      
    vogais.push(letter);  
    }
    
    }
    // console.log(vogais);
    // console.log(vogais.length);
    return vogais.length;
}