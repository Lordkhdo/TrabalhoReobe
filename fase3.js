let botaoFase3T1 = document.getElementById('E1')
let botaoFase3I2 = document.getElementById('E2')
let botaoFase3IResCerta = document.getElementById('respostaCerta300')
let botaoFase3I4 = document.getElementById('E3')

let fase4 = document.getElementById('Fase4')

botaoFase3T1.addEventListener('click', ()=>{
    fase3.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})
botaoFase3I2.addEventListener('click', ()=>{
    fase3.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})
botaoFase3I4.addEventListener('click', ()=>{
    fase3.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})
botaoFase3IResCerta.addEventListener('click', ()=>{
    fase3.classList.add('hiden')    
    fase4.classList.toggle('hiden')
})

let sapinho1_pai = document.getElementById('mopa3')
let p2 = 1
let imagem1 = document.createElement('img')
imagem1.src = 'Benzoato_de_metila.png'

let texto1 = document.getElementById('texto1')
let texto2=  document.getElementById('texto2')



function BoaQuestao2(){
setInterval(()=>{
p2++

if(p2 %2 ==0){
texto1.innerText = ''
texto2.innerText = ''
sapinho1_pai.appendChild(imagem1)
}

}, 3000)
}
