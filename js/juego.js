var canvas;
var ctx;
var FPS = 50;

var anchoCanvas = 400;
var altoCanvas = 640;

var anchoTablero = 10;
var altoTablero = 16;

var anchoF = 40;
var altoF = 40;

var pieza;

var tablero = [
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
];

function inicializaTeclado(){
    document.addEventListener('keydown', function(tecla){
        if(tecla.key === 'ArrowUp'){
            console.log('arriba');
        }
        if(tecla.key === 'ArrowDown'){
            console.log('abajo');
        }
        if(tecla.key === 'ArrowLeft'){
            console.log('izquierda');
        }
        if(tecla.key === 'ArrowRight'){
            console.log('derecha');
        }
    });
}

var objPieza = function(){
    this.x = 0;
    this.y = 0;
    console.log('pieza creada')
}

function inicializa(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.style.width = anchoCanvas;
    canvas.style.height = altoCanvas;

    pieza = new objPieza();

    inicializaTeclado();

    setInterval(function(){
        principal();
    },1000/FPS);
}

function borraCanvas(){
    canvas.width = anchoCanvas;
    canvas.height = altoCanvas;    
}

function principal(){
    borraCanvas();    
}