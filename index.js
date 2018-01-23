const fs = require('fs');

// Leitura de arquivos
fs.readFile('nomes.txt', (erro, dados) => {
    let nomes = dados.toString();
    console.log(nomes);
});


// Escrita de arquivos
let dadosEscrita = 'Roxo, Cinza';

fs.writeFile('cores.txt', dadosEscrita, (erro) => {
    if(erro){
        console.log(erro);
    }
    else{
        console.log('Dados criados com sucesso!'); 
    }
});
