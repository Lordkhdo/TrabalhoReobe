let botaoFase5T1 = document.getElementById('77')
let botaoFase5I2 = document.getElementById('88')
let botaoFase5IResCerta = document.getElementById('respostaCert1300')
let botaoFase5I4 = document.getElementById('99')

let fase6 = document.getElementById('Fase6')

botaoFase5T1.addEventListener('click', ()=>{
    fase5.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})
botaoFase5I2.addEventListener('click', ()=>{
    fase5.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})
botaoFase5I4.addEventListener('click', ()=>{
    fase5.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})
botaoFase5IResCerta.addEventListener('click', ()=>{
    fase5.classList.add('hiden')    
    fase6.classList.toggle('hiden')
})