let botaoFase4T1 = document.getElementById('7')
let botaoFase4I2 = document.getElementById('8')
let botaoFase4IResCerta = document.getElementById('respostaCert130')
let botaoFase4I4 = document.getElementById('9')

let fase5 = document.getElementById('Fase5')
botaoFase4T1.addEventListener('click', ()=>{
    fase4.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})
botaoFase4I2.addEventListener('click', ()=>{
    fase4.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})
botaoFase4I4.addEventListener('click', ()=>{
    fase4.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})

botaoFase3IResCerta.addEventListener('click', ()=>{
    fase4.classList.add('hiden')    
    fase5.classList.toggle('hiden')
})