//divs
let Inicio = document.getElementById('display')                 //divs
let BoxTutorial = document.getElementById('TUTORIAL')           //divs
let BoxCreditos = document.getElementById('Creditos')           //divs
let BoxInicio= document.getElementById('INICIAR')               //divs
//divs

//botoes entrar
let inicio= document.getElementById('inicio')                   //botoes
let tutorial=document.getElementById('tutorial')                //botoes
let creditos=document.getElementById('creditos')                //botoes
//botoes entrar
//interaçao entrar
inicio.addEventListener('click',AbrirInicio)                   //entrar
tutorial.addEventListener('click',AbrirTutorial)               //entrar
creditos.addEventListener('click',AbrirCreditos)               //entrar
//interaçao entrar

function AbrirInicio(){
    console.log('dasdas')
    Inicio.classList.toggle('hiden')
    BoxInicio.classList.remove('hiden')
}
function AbrirTutorial(){
    console.log('dasdas')
    Inicio.classList.toggle('hiden')
    BoxTutorial.classList.remove('hiden')
}

function AbrirCreditos(){
    console.log('dasdas')
    Inicio.classList.toggle('hiden')
    BoxCreditos.classList.remove('hiden')
}
//voltar inicio

//botoes voltar

    let botao1, botao2, botao3
    //botao1 = document.getElementById('Voltar1')
    botao2 = document.getElementById('Voltar2')
    botao3 = document.getElementById('Voltar3')


//botoes voltar

//interaçao sair

//botao1.addEventListener('click', voltarInicio1)
botao2.addEventListener('click', voltarInicio2)
botao3.addEventListener('click', voltarInicio3)
//interaçao sair



//voltar inicio



        function voltarInicio1(){
            Inicio.classList.toggle('hiden')
            BoxInicio.classList.add('hiden')

        }
        function voltarInicio2(){
            Inicio.classList.toggle('hiden')
            BoxTutorial.classList.add('hiden')

        }
        function voltarInicio3(){
            console.log('sdasdas')
            Inicio.classList.toggle('hiden')
            BoxCreditos.classList.toggle('hiden')
        }
        
