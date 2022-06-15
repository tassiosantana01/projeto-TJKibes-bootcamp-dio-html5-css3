/* Você recebe um inteiro n, o número de equipes em um torneio que tem regras estranhas:
Se o número atual de equipes for par , cada equipe será emparelhada com outra equipe. 
Um total de n / 2 partidas são jogadas e n / 2 as equipes avançam para a próxima rodada.

Se o número atual de equipes for ímpar , uma equipe avança aleatoriamente no torneio e o restante é emparelhado. 
Um total de (n - 1) / 2 partidas são jogadas e (n - 1) / 2 + 1as equipes avançam para a próxima rodada.
Retorna o número de partidas jogadas no torneio até que um vencedor seja decidido.

Exemplo 1

Entrada
7

Saída
6

Explicação: 
- 1Round: Times=  7, Partidas = 3 e 4 times avançam.
- 2Round: Times = 4, Partidas = 2, e 2 times avançam.
- 3Round: Times = 2, Partidas = 1, e um time é campeão.
Total número de partidas = 3 + 2 + 1 = 6.

Exemplo 2

Entrada
14	

Saída
13

Explicação:
- 1Round: Times = 14, Partidas = 7, e 7 ttimes avançam.
- 2Round: Times = 7, Partidas = 3, e 4 times avançam.
- 3Round: Times = 4, Partidas = 2, e 2 times avançam.
- 4Round: Times = 2, Partidas=  1, e 1 é campeão.
Total número de partidas = 7 + 3 + 2 + 1 = 13.

*/

// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar


let lines = gets().split("\n");
 
var numberOfMatches = parseInt(lines.shift);
 
let n = parseInt(lines.shift());
let totalMatches = 0;
    while(n>1){
        if(n % 2 == 0){
             totalMatches += n/2;
             n = n /2;
        }else{
          totalMatches += (n-1)/2;
          n = ((n-1))/2 +1;
        }
    }
    console.log(totalMatches);