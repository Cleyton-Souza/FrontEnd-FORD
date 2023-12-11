





//array em js é heterogênio, ou seja, podemos colocar qualquer coisa, string, int, etc.
//ainda mais, não possui um tamanho fixo;
//arrays em js são indexados, ou seja, possuem um ind


//    índice  =   0    1    2    3 
const valores = [18.0, 80, 43, 1.88888]

//var(array) -> definido um índice 10 e atribuindo o valor de 967 para o array
valores[10] = 967 // --> incluindo o índice 10 no array

console.log(valores[0]);

// Interpolado
console.log(`
    ${valores[0]}
    ${valores[3].toFixed(2)}
    ${valores[10]}
    ${valores}
    ${valores.length}
`);

//*********************** IMPLEMENTAR MÉTODOS DE ARRAY ***********************//
// MÉTODOS DE ARRAY
//1 - push -> adiciona um ou mais valores no final do array
const pushArray = ["girafa", "hipopótamo", "camaleão", "tartaruga"]

console.log(pushArray);

//array.método()
pushArray.push("escorpião") //insere o animal escorpião no array

console.log(pushArray);

pushArray.unshift("cachorro") //insere o animal cachorro no início do array

console.log(pushArray);

//2 - pop -> remove o ultimo elemento do array

const popArray = ["andre", "luis", "fernanda", "mariana"]

console.log(popArray)

popArray.pop() // remove o último item do nosso array

popArray.shift() // remove o primeito item do nosso array


console.log(popArray)

//3 - delete

const frutas = ["banana", "maça", "atemóia", "tomate"]

delete frutas[1]

console.log(frutas)

//array add novos itens no array (índice, quantidade removida, novo item)
frutas.splice(1, 1, "teste")

console.log(frutas);

// 4 - filter

//                    0  1   2   3  4   5   
const filterNumber = [1, 50, 65, 2, 5, 100]
//map
//reduce
//sort
//forearch