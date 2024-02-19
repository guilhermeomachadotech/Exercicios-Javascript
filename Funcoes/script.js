function dataAtual(nome){
    //Cria e instancia um objeto do tipo Date e mostra essa data atráves do método toLocaleString() do objeto DATE
    var nome=nome;
    var d=new Date();
    document.write("Olá, "+nome+"! A data atual é : "+d.toLocaleString());
}

dataAtual("Guilherme"); //execução da função;

//IF ELSE

function verificarHora(){
    var hora=10;
    if (hora<12){
        document.write("Vamos passear :)");
    }else{
        document.write("Vamos Almoçar");
    }
}

verificarHora();

/*Laços de repetições
Laços for*/
function lacoFor(){
    var soma=0;
    for(var i=0;i<3;i++){
        soma+=i;
        document.write("O valor do índice agora de "+i+"<br>");
    }
}

lacoFor();

//Laço FOR com Array

function lacoForArray(){
    var nomes=new Array("Manuel","Rita","Joana","Luís","Hugo","Henrique","João","Antônio","Maurício");
    for(var i=0;i<nomes.length;i++){
        var nome=nomes[i];
        if(nome.charAt(0)=="H"){
            alert("O nome "+nome+" começa com a letra H");
        }
    }
}

lacoForArray();

//Ciclo while
function lacoWhile(){
    var soma=0;
    var i=0;
    while(i<3){
        soma+=i;
        document.write("O valor do índice agora de "+i+"<br>");
        i++;
    }
}
