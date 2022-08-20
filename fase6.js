let botaoFase6T1 = document.getElementById('fase6r1')
let botaoFase6I2 = document.getElementById('fase6r2')
let botaoFase6IResCerta = document.getElementById('fase6r3')
let botaoFase6I4 = document.getElementById('fase6r4')

let fase7 = document.getElementById('Fase7')

botaoFase6T1.addEventListener('click', ()=>{
    fase6.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})
botaoFase6I2.addEventListener('click', ()=>{
    fase6.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})
botaoFase6I4.addEventListener('click', ()=>{
    fase6.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})
botaoFase6IResCerta.addEventListener('click', ()=>{
    fase6.classList.add('hiden')    
    fase7.classList.toggle('hiden')
})