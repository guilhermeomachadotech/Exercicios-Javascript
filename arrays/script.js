//Exemplo 1: 
var frutas_tropicais =new Array("Goiaba","Manga", "Maracujá"); //Declaração ao instanciar o objeto do tipo Array
var frutas_nacionais=new Array(3); //Declaração de quantos elementos vai ter no array
frutas_nacionais[0]="Maçã";
frutas_nacionais[1]="Cereja";
frutas_nacionais[2]="Laranja";
document.getElementById("frutas-tropicais").innerHTML=frutas_tropicais;
document.getElementById("frutas-nacionais").innerHTML=frutas_nacionais;

//Variáveis podem ter vários tipos de de dados em uma só variável:
var sortido=new Array(85902,"Livro", true, -25.9302,"Bolachas");
document.getElementById("array-multiplo").innerHTML=sortido;
sortido[0]=0.0004578;
sortido[2]=false;
sortido[6]="Caderno";
document.getElementById("array-multiplo-novo").innerHTML=sortido;