//FAZ  REFERENCIA AOS ELEMENTOS DOM
const numero1 = document.querySelector('#numero1')
const numero2 = document.querySelector('#numero2')
const btnCalcular = document.querySelector('#btn-calcular')
const resultado = document.querySelector('.resultado')
const adicao = document.querySelector('.adicao')
const subtracao = document.querySelector('.subtracao')
const multiplicacao = document.querySelector('.multiplicacao')
const divisao = document.querySelector('.divisao')






alert()
//CRIA A FUNÇÃO CALCULAR
function calcular(){
    const n1 = Number(numero1.value)
    const n2 = Number(numero2.value)
    
    if(n1 && n2 ){
        if(typeof n1 === 'number' && typeof n2 === 'number'){
            const adc = n1 + n2
            alert('resultado: ' + adc)
        
        }
        else{
            alert('digite apenas numeros')
        }
        }
    else {
        alert('digite um numero!!')
    }
        

}

//ADICIONA ESCUTAR DE EVENTOS
btnCalcular.addEventListener('click', function(){
    calcular()
})