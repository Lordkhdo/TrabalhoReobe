let botao1Fase1 = document.getElementById('VoltarFase1')
let ProxPag01 = document.getElementById('ProxPag1')
let botao1ErroFase1 = document.getElementById('IrParaOerro1')
let botao2ErroFase1 = document.getElementById('IrParaOerro2')
let botao3ErroFase1 = document.getElementById('IrParaOerro3')

let pag2 = document.getElementById('Fase2')

ProxPag01.addEventListener('click', ()=>{
    BoxInicio.classList.add('hiden')
    pag2.classList.toggle('hiden')
    BoaQuestao()

})


let pagErr = document.getElementById('Pagerra')


botao1ErroFase1.addEventListener('click', ()=>{                     //Pagerro
    BoxInicio.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})
botao2ErroFase1.addEventListener('click', ()=>{                     //Pagerro
    BoxInicio.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})
botao3ErroFase1.addEventListener('click', ()=>{                     //Pagerro
    BoxInicio.classList.add('hiden')                                //Pagerro
    pagErr.classList.remove('hiden')                                //Pagerro
})


botao1Fase1.addEventListener('click', ()=>{                     //voltarFase
    Inicio.classList.toggle('hiden')                            //voltarFase
    BoxInicio.classList.add('hiden')                            //voltarFase
    pagErr.classList.add('hiden')                               //voltarFase
    
})

