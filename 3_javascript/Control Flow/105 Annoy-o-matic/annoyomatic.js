//v1

//Coletar resposta do usuario
/* var answer = prompt('Are you there?');

//verificar se a resposta é yes ou yeah
//a aplicação fica em loop até a resposta estar correta
while(answer !== "yes" && answer !== "yeah") {
    var answer = prompt('Are you there?');
}

//alerta que a resposta é yes ou yeah
alert("Yaaaaaaass!!") */

//v2
//coletar resposta do usuário
var answer = prompt('Are you there?');

//verificar se a resposta CONTÉM yes ou yeah, com indexOf
//a aplicação fica em loop até a resposta estar correta
while(answer.indexOf("yes") < 0 && answer.indexOf("yeah") < 0 ) {
    var answer = prompt('Are you there?');
}

//alerta que a resposta contém yes ou yeah
alert("Yaaaaaaass!!")