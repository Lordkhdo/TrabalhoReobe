let botaoFase7T1 = document.getElementById('azul')
let botaoFase7I2 = document.getElementById('roxo')
let botaoFase7IResCerta = document.getElementById('rescerta')
let botaoFase7I4 = document.getElementById('cinza')

let fase8 = document.getElementById('Fase8')

botaoFase7T1.addEventListener('click', ()=>{
    fase7.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})
botaoFase7I2.addEventListener('click', ()=>{
    fase7.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})
botaoFase7I4.addEventListener('click', ()=>{
    fase7.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})
botaoFase7IResCerta.addEventListener('click', ()=>{
    fase7.classList.add('hiden')    
    fase8.classList.toggle('hiden')
})