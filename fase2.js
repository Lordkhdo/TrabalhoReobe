let botaoFase2I1 = document.getElementById('1')
let botaoFase2I2 = document.getElementById('2')
let botaoFase2IResCerta = document.getElementById('respostaCerta')
let botaoFase2I4 = document.getElementById('4')



let fase2 = document.getElementById('Fase2')

let fase3 = document.getElementById('Fase3')
botaoFase2I1.addEventListener('click', ()=>{
    fase2.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})
botaoFase2I2.addEventListener('click', ()=>{
    fase2.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})
botaoFase2I4.addEventListener('click', ()=>{
    fase2.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})

botaoFase2IResCerta.addEventListener('click', ()=>{
    BoaQuestao2()
    fase2.classList.add('hiden')    
    fase3.classList.toggle('hiden')

})

function BoaQuestao(){
    setInterval(mopa, 3500)
    
}


let mopa2 = document.getElementById('mopa2')
let p99= 1
function mopa(){
p99++
let imagen = document.createElement('img')


if (p99 % 2 == 0){
    imagen.src = '120px-Etanoato_de_fenila.png'
    mopa2.innerText = ''
    mopa2.appendChild(imagen)
}

}