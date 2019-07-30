//método para import de função de um arquivo com várias funcoes passando um
//alias. Caso existe uma funcao default, elea é evocada fora das chaves {}

//import divide, { subtracao as sub } from './funcoes';

//caso queira importar todos os métodos de um arquivo é só usar * e passar um
//alias
import * as functions from './funcoes';

// método para import de função default de um arqvuivo passando um alias
import soma from './soma';

console.log(soma(9,2));
console.log(functions.subtracao(10,4));
console.log(functions.divide(25,2));

//------------------------| async await |---------------------------

const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {resolve('OK')}, 200);
});
//com o async await, os métodos dentro deste só são executados quando o anterior
//for executado.

/*
async function executaPromise() {
  console.log(await minhaPromise());
}
*/
const executaPromise = async () => {
  console.log(await minhaPromise());
}
executaPromise();

//-------| DESAFIO ASYNC AWAIT |-------------

//1. Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

const umPorSegundo = async () => {
  await delay();
  console.log('1s');

  await delay();
  console.log('2s');

  await delay();
  console.log('3s');
}
/*
function umPorSegundo() {
  delay().then(() => {
    console.log('1s');
    delay().then(() => {
      console.log('2s');
      delay().then(() => {
        console.log('3s');
      });
    })
  });
}
*/
umPorSegundo();

// 2. 

import axios from 'axios';

/*
function getUserFromGithub(user) {
 axios.get(`https://api.github.com/users/${user}`)
 .then(response => {
 console.log(response.data);
 })
 .catch(err => {
 console.log('Usuário não existe');
 })
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');
*/
class Api{
  static async getUserFromGithub(user){
    try{
      const retorno = await axios.get(`http://api.github.com/users/${user}`);
      console.log(retorno);
    }catch(err){
      console.warn('Erro da API');
    }
  }
}
Api.getUserFromGithub('louisGustavo');

// 3.
const buscaUsuario = async usuario => {
  try{
    const retorno = await axios.get(`http://api.github.com/users/${usuario}`);
    console.log(retorno);
  }catch(err){
    console.log('Usuario não encontrado');
  }
}
buscaUsuario('louisGustavo');